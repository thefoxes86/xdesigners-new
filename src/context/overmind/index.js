import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
} from "overmind-react";
import { createOvermind } from "overmind";
import { state } from "./state";
import * as actions from "./actions";
import * as effects from "./effects";

export const config = {
  state,
  actions,
  effects,
};

export const overmind = createOvermind(config);

export const useAppState = createStateHook();
export const useActions = createActionsHook();
export const useEffects = createEffectsHook();
export const useReaction = createReactionHook();
