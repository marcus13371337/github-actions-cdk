import { z } from 'zod';

const PermissionNameSchema = z.enum(['read', 'write', 'none']);
const GlobalPermissionNameSchema = z.enum(['read-all', 'write-all']);

const PermissionValueSchema = z
  .union([PermissionNameSchema, PermissionNameSchema.array()])
  .optional();

const WorkflowPermissionsSchema = z.object({
  actions: PermissionValueSchema,
  checks: PermissionValueSchema,
  contents: PermissionValueSchema,
  deployments: PermissionValueSchema,
  idToken: PermissionValueSchema,
  issues: PermissionValueSchema,
  discussions: PermissionValueSchema,
  packages: PermissionValueSchema,
  pages: PermissionValueSchema,
  pullRequests: PermissionValueSchema,
  repositoryProjects: PermissionValueSchema,
  securityEvents: PermissionValueSchema,
  statuses: PermissionValueSchema,
});

export const PermissionOptionsSchema = z.union([
  WorkflowPermissionsSchema,
  GlobalPermissionNameSchema,
  GlobalPermissionNameSchema.array(),
]);

export const permissions = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  permissions: z.infer<typeof PermissionOptionsSchema>
) => {
  return {
    type: 'workflowPermissions',
  };
};

export type Permissions = ReturnType<typeof permissions>;
