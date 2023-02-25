import { env } from '../components/env.js';
import { job } from '../components/job.js';
import { permissions } from '../components/permissions.js';
import { step } from '../components/step.js';
import { trigger } from '../components/trigger.js';
import { createWorkflow } from '../index.js';

export default createWorkflow({
  name: 'tests',
  runName: 'Marcus testing',
  on: [
    trigger({
      name: 'pull_request',
      types: ['opened'],
    }),
    trigger('push'),
  ],
  env: env({
    SERVER: 'production',
  }),
  permissions: permissions({
    contents: ['read', 'write'],
  }),
  jobs: ({ variables }) => [
    job('bla', {
      steps: () => [
        step('boobo', {
          name: variables.env('SERVER'),
        }),
      ],
    }),
    job('bla2', {
      steps: ({ variables }) => [
        step('yoo', {
          name: variables.env('SERVER'),
        }),
      ],
    }),
  ],
});
