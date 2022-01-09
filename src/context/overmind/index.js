import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
} from "overmind-react";
import { createOvermind } from "overmind";
import { state } from "./state";
import * as actions from "./actions";

export const config = {
  state,
  actions,
};

export const overmind = createOvermind(config);

export const useAppState = createStateHook();
export const useActions = createActionsHook();
export const useEffects = createEffectsHook();
export const useReaction = createReactionHook();
