import type { SceneFactory } from './types';
import title from './title';
import mirror from './mirror';
import candle from './candle';
import curve from './curve';
import bars from './bars';
import helix from './helix';
import network from './network';
import swarm from './swarm';
import globe from './globe';
import orrery from './orrery';
import lightlag from './lightlag';
import tree from './tree';
import interstellar from './interstellar';
import embers from './embers';
import dawn from './dawn';

export const scenes: Record<string, SceneFactory> = {
  title,
  mirror,
  candle,
  curve,
  bars,
  helix,
  network,
  swarm,
  globe,
  orrery,
  lightlag,
  tree,
  interstellar,
  embers,
  dawn,
};
