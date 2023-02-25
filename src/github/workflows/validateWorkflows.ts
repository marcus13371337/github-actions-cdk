import { job } from '../../components/job.js';
import { step } from '../../components/step.js';
import { triggers } from '../../components/triggers.js';
import { createWorkflow } from '../../index.js';

export default createWorkflow({
  name: 'Validate workflow',
  on: triggers({
    pull_request: {
      branches: ['main'],
    },
  }),
  jobs: () => ({
    validate: job({
      name: 'Validate workflow is in sync with code',
      runsOn: 'ubuntu-latest',
      steps: () => [
        step({
          name: 'Checkout repo',
          uses: `actions/checkout@master`,
        }),
        step({
          name: 'Setup Node.js version',
          uses: 'actions/setup-node@v3',
          with: {
            'node-version': 16,
          },
        }),
        step({
          name: 'Install dependencies',
          run: `npm ci`,
        }),
        step({
          name: 'Generate pipelines',
          run: `npm run compile:pipeline`,
        }),
        step({
          name: 'Validate pipelines',
          run: `git diff --exit-code`,
        }),
      ],
    }),
  }),
});
