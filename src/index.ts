import { BaseEnv, Env, EnvGetter } from './components/env.js';
import { Job } from './components/job.js';
import { Permissions } from './components/permissions.js';
import { dump } from 'js-yaml';
import { createVariableGetter } from './utils/createVariable.js';
import { convertToYamlConvention } from './utils/convertToYamlConvention.js';
import { Triggers } from './components/triggers.js';

export type Workflow<WorkflowEnv extends BaseEnv> = {
  name: string;
  runName?: string;
  on: Triggers;
  permissions?: Permissions;
  env?: Env<WorkflowEnv>;
  jobs: (params: {
    variables: {
      env: EnvGetter<WorkflowEnv>;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => { [key: string]: Job<any, WorkflowEnv> };
};

export const createWorkflow = <WorkflowEnv extends BaseEnv>(
  workflow: Workflow<WorkflowEnv>
) => ({
  config: workflow,
  export: () => {
    const envGetter = (
      workflow.env ? createVariableGetter('env') : null
    ) as EnvGetter<WorkflowEnv>;

    const jobs = workflow.jobs({
      variables: {
        env: envGetter,
      },
    });

    return dump(
      convertToYamlConvention({
        name: workflow.name,
        'run-name': workflow.runName,
        on: workflow.on.toConfig(),
        permissions: workflow.permissions?.toConfig(),
        env: workflow.env?.toConfig(),
        jobs: Object.entries(jobs).reduce<Record<string, unknown>>(
          (acc, [name, job]) => {
            acc[name] = job.toConfig();

            return acc;
          },
          {}
        ),
      })
    );
  },
});
