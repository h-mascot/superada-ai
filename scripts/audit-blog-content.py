#!/usr/bin/env python3
"""Deterministic editorial inventory for SuperAda blog content."""
from __future__ import annotations

import csv
import itertools
import math
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BLOG = ROOT / "src/content/blog"
OUT = ROOT / "artifacts/blog-audit"
STOP = set("the a an and or but if then of to in on for with is are was were be been being this that these those it its our your we you i my from as at by not just how why what when into about".split())


def parse(path: Path) -> dict:
    text = path.read_text(errors="ignore")
    fm, body = "", text
    if text.startswith("---"):
        parts = text.split("---", 2)
        if len(parts) == 3:
            fm, body = parts[1], parts[2]

    def field(name: str, default=""):
        m = re.search(rf"(?m)^{re.escape(name)}:\s*(.+?)\s*$", fm)
        return m.group(1).strip().strip("\"'") if m else default

    tags_match = re.search(r"(?m)^tags:\s*\[(.*?)\]\s*$", fm)
    tags = [x.strip().strip("\"'") for x in tags_match.group(1).split(",")] if tags_match else []
    plain = re.sub(r"```.*?```", " ", body, flags=re.S)
    plain = re.sub(r"<[^>]+>|!??\[[^]]*\]\([^)]*\)|[#>*_`|~-]", " ", plain)
    words = re.findall(r"[A-Za-z0-9][A-Za-z0-9'’-]*", plain)
    sentences = [s for s in re.split(r"[.!?]+", plain) if len(s.split()) >= 3]
    syllables = sum(max(1, len(re.findall(r"[aeiouy]+", w.lower()))) for w in words)
    flesch = 206.835 - 1.015 * (len(words) / max(1, len(sentences))) - 84.6 * (syllables / max(1, len(words)))
    headings = len(re.findall(r"(?m)^#{2,4}\s+", body))
    lists = len(re.findall(r"(?m)^\s*(?:[-*]|\d+\.)\s+", body))
    code_blocks = len(re.findall(r"```", body)) // 2
    links = len(re.findall(r"https?://", body))
    exact_numbers = len(re.findall(r"\b\d+(?:\.\d+)?(?:%|x|ms|s|h|GB|MB|B|M)?\b", body))
    stale_patterns = re.findall(r"\b(?:now has|currently|active crons?|agents?|stars?|forks?)\b.{0,45}\b\d+\b|\b(?:GPT|Claude|Gemini|OpenClaw|Hermes|LiteLLM)[- /]?[0-9][\w.-]*", body, flags=re.I)
    return {
        "path": path,
        "slug": path.stem,
        "title": field("title", path.stem),
        "description": field("description"),
        "pub_date": field("pubDate"),
        "author": field("author"),
        "tags": tags,
        "body": body,
        "words": len(words),
        "flesch": round(flesch, 1),
        "headings": headings,
        "lists": lists,
        "code_blocks": code_blocks,
        "links": links,
        "exact_numbers": exact_numbers,
        "stale_claim_signals": len(stale_patterns),
    }


def tokens(item: dict) -> Counter:
    raw = item["title"] + " " + item["body"]
    raw = re.sub(r"```.*?```|https?://\S+|[^a-zA-Z0-9 ]", " ", raw.lower(), flags=re.S)
    return Counter(w for w in raw.split() if len(w) > 2 and w not in STOP)


def audience(item: dict) -> str:
    text = (item["title"] + " " + item["description"] + " " + " ".join(item["tags"])).lower()
    if any(x in text for x in ["business", "insurance", "use case", "founder", "customer"]): return "Business leaders"
    if any(x in text for x in ["security", "rce", "malware", "governance", "audit"]): return "Security / platform teams"
    if any(x in text for x in ["guide", "setup", "install", "personal ai", "checklist"]): return "New operators"
    if any(x in text for x in ["engineering", "workflow", "cron", "agent", "openclaw", "hermes"]): return "Agent operators / engineers"
    return "General AI readers"


def article_type(item: dict) -> str:
    t = item["title"].lower()
    if t.startswith(("dfe #", "foc #", "dispatches from", "friends of")): return "digest"
    if any(x in t for x in ["how to", "guide", "checklist", "building", "setup", "install"]): return "guide"
    if any(x in t for x in ["vs ", "benchmark", "comparison"]): return "comparison"
    if any(x in t for x in ["why ", "the problem", "needs", "is the"]): return "argument"
    return "field note"


def value_score(i: dict) -> int:
    score = 3
    score += min(2, i["headings"] // 3)
    score += min(2, i["lists"] // 5)
    score += 1 if i["links"] else 0
    score += 1 if i["exact_numbers"] >= 4 else 0
    score += 1 if i["code_blocks"] else 0
    score += 1 if 650 <= i["words"] <= 2600 else 0
    if article_type(i) == "digest": score -= 2
    if i["words"] < 450: score -= 2
    return max(1, min(10, score))


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    items = [parse(p) for p in sorted([*BLOG.glob("*.md"), *BLOG.glob("*.mdx")])]
    counters = {i["slug"]: tokens(i) for i in items}
    df = Counter()
    for c in counters.values(): df.update(c.keys())
    vectors = {}
    for i in items:
        c = counters[i["slug"]]
        v = {w: n * (math.log((len(items)+1)/(df[w]+1))+1) for w,n in c.items()}
        norm = math.sqrt(sum(x*x for x in v.values())) or 1
        vectors[i["slug"]] = {w:x/norm for w,x in v.items()}
    duplicate_map = {i["slug"]: [] for i in items}
    pairs = []
    for a,b in itertools.combinations(items,2):
        av,bv = vectors[a["slug"]],vectors[b["slug"]]
        small,large = (av,bv) if len(av)<len(bv) else (bv,av)
        sim = sum(x*large.get(w,0) for w,x in small.items())
        same_title = a["title"].casefold() == b["title"].casefold()
        if sim >= .50 or same_title:
            label = "confirmed" if sim >= .80 else "review"
            pairs.append((sim,label,a["slug"],b["slug"],a["title"],b["title"]))
            duplicate_map[a["slug"]].append(f"{label}:{b['slug']}:{sim:.2f}")
            duplicate_map[b["slug"]].append(f"{label}:{a['slug']}:{sim:.2f}")

    rows=[]
    for i in items:
        readability = "human-readable" if i["flesch"] >= 50 else "dense but readable" if i["flesch"] >= 30 else "difficult"
        score=value_score(i)
        dup=duplicate_map[i["slug"]]
        if any(x.startswith("confirmed:") for x in dup): action="merge/remove duplicate"
        elif score >= 8 and readability != "difficult": action="keep / cornerstone"
        elif score >= 6: action="keep with light edit"
        elif article_type(i)=="digest": action="archive from main guide index"
        elif score >= 4: action="substantial rewrite"
        else: action="archive"
        concerns=[]
        if i["stale_claim_signals"]: concerns.append(f"verify {i['stale_claim_signals']} time-sensitive claims")
        if i["words"]>2600: concerns.append("long; add summary/navigation or split")
        if readability=="difficult": concerns.append("simplify sentence structure")
        if not i["links"] and i["exact_numbers"]>=4: concerns.append("numeric claims lack inline links")
        rows.append({
            "title":i["title"],"slug":i["slug"],"path":str(i["path"].relative_to(ROOT)),"pub_date":i["pub_date"],"author":i["author"],
            "type":article_type(i),"audience":audience(i),"tags":"|".join(i["tags"]),"words":i["words"],"flesch":i["flesch"],
            "readability":readability,"value_score_10":score,"stale_claim_signals":i["stale_claim_signals"],"duplicate_candidates":"|".join(dup),
            "recommended_action":action,"concerns":"; ".join(concerns),"canonical_url":f"https://superada.ai/blog/{i['slug']}/"
        })
    fields=list(rows[0])
    with (OUT/"article-inventory.csv").open("w",newline="") as f:
        w=csv.DictWriter(f,fieldnames=fields,lineterminator="\n"); w.writeheader(); w.writerows(rows)
    with (OUT/"duplicate-candidates.csv").open("w",newline="") as f:
        w=csv.writer(f,lineterminator="\n"); w.writerow(["similarity","status","slug_a","slug_b","title_a","title_b"]); w.writerows(sorted(pairs,reverse=True))

    counts=Counter(r["recommended_action"] for r in rows)
    top=sorted(rows,key=lambda r:(int(r["value_score_10"]),r["flesch"]),reverse=True)[:20]
    difficult=[r for r in rows if r["readability"]=="difficult"]
    report=["# SuperAda blog editorial audit","",f"Audited **{len(rows)}** source articles. This inventory is deterministic triage; time-sensitive claims are flagged for evidence checking rather than guessed true or false.","","## Action rollup",""]
    report += [f"- **{k}:** {v}" for k,v in counts.most_common()]
    report += ["","## Highest-value / most usable",""] + [f"- [{r['title']}]({r['canonical_url']}) — {r['value_score_10']}/10, {r['readability']}, {r['type']}" for r in top]
    report += ["","## Duplicate families",""] + [f"- **{label} {sim:.2f}:** `{a}` ↔ `{b}`" for sim,label,a,b,_,_ in sorted(pairs,reverse=True)]
    report += ["","## Valuable but difficult",""] + [f"- [{r['title']}]({r['canonical_url']}) — value {r['value_score_10']}/10; {r['concerns']}" for r in difficult if int(r["value_score_10"])>=6]
    report += ["","## Missing cornerstone guides", "", "1. Install and configure Hermes from zero, with live verification.", "2. Migrate an existing OpenClaw agent to Hermes: files, memory, skills, crons, tools, and rollback.", "3. What skills are, how to install them, and which writing/operations/security skills to choose.", "4. What crons are, safe scheduling patterns, Henry's current useful cron families, and failure handling.", "5. Ten agent use cases for a small business, ranked by effort, risk, and measurable value.", "6. Personal agent stack: value, privacy boundaries, costs, and first-week setup.", "7. Business agent stack: control plane, approvals, audit trail, and ROI measurement.", "8. Conveyor-belt workflows: intake → research → execution → verification → delivery.", "", "## Information architecture recommendation", "", "Use six stable reader-facing collections instead of exposing every raw tag: **Start here**, **Business value**, **Build & operate**, **Skills & crons**, **Security**, and **Field notes**. Keep digests available, but remove them from primary guide discovery.", "", "## Files", "", "- `article-inventory.csv`: one row per article, with readability, value, staleness signals, duplication, audience, and action.", "- `duplicate-candidates.csv`: confirmed and review-required similarity families."]
    (OUT/"editorial-report.md").write_text("\n".join(report)+"\n")
    print(f"audited={len(rows)} inventory={OUT/'article-inventory.csv'} report={OUT/'editorial-report.md'} duplicate_pairs={len(pairs)}")

if __name__ == "__main__": main()
