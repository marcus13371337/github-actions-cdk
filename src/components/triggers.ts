import { BaseComponent, createBaseComponent } from './baseComponent.js';
import { TriggerOptionsMap } from './types/triggers.js';

export const triggers = (options: TriggerOptionsMap): Triggers =>
  createBaseComponent('triggers', () => options);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Triggers = BaseComponent<'triggers'>;
