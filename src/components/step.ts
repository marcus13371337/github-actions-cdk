import { BaseComponent, createBaseComponent } from './baseComponent.js';

export type StepParams = {
  id?: string;
  name?: string;
  uses?: string;
  run?: string;
  with?: Record<string, string | number | boolean>;
};

export const step = (params?: StepParams) =>
  createBaseComponent('step', () => params);

export type Step = BaseComponent<'step'>;
