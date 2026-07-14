# RegExp Syntax Pitfall in CLI Tester `privateDefaultPatterns`

## Symptom
When running `project-test-gate run <issue-id>`, the process crashes with:
```text
SyntaxError: Invalid regular expression: /*.pem/i: Nothing to repeat
    at new RegExp (<anonymous>)
    at <HOME>/Code/cli-tester/bin/project-test-gate:279:64
```

## Root Cause
The shared `project-test-gate` CLI scanner compiles strings listed in `.project-gate.json`'s `"privateDefaultPatterns"` array directly into `RegExp` objects (e.g. `new RegExp(pattern, 'i')`). 
If glob-style patterns like `"*.pem"` or `"*.key"` are used, the leading asterisks (`*`) are parsed as regular expression quantifiers that have nothing to repeat, causing an unhandled JavaScript engine `SyntaxError`.

## Correction
Always write valid JSON-escaped regular expression patterns in the `privateDefaultPatterns` block, rather than shell glob patterns:

### Invalid (Glob Style)
```json
  "privateDefaultPatterns": [
    ".env",
    "*.pem",
    "*.key",
    "credentials.json"
  ]
```

### Valid (RegExp Style)
```json
  "privateDefaultPatterns": [
    "\\\\.env",
    "\\\\.pem$",
    "\\\\.key$",
    "credentials\\\\.json"
  ]
```
*(Note: Use double backslashes in JSON configuration strings to ensure correct escaping.)*
