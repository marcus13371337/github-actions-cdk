import { createWorkflowTriggerSchemas } from './createWorkflowTriggerSchemas.js';

describe('createWorkflowTriggerSchemas', () => {
  test('should create the workflow trigger schemas correctly', () => {
    expect(
      createWorkflowTriggerSchemas([
        {
          name: 'push',
          types: ['created', 'deleted', 'edited', 'synchronize'],
          githubRef: 'Ref text',
          githubSha: 'Sha text',
        },
      ])
    ).toEqual(`export const PUSH_TRIGGER = {
  name: 'push',
  types: ['created', 'deleted', 'edited', 'synchronize'],
} as const;

export const ALL_TRIGGERS = [PUSH_TRIGGER] as const;`);
  });
});
