import { BaseComponent, createBaseComponent } from './baseComponent.js';

type PermissionName = 'read' | 'write' | 'none';

type PermissionValue = PermissionName | PermissionName[];

type DetailedPermissions = {
  actions?: PermissionValue;
  checks?: PermissionValue;
  contents?: PermissionValue;
  deployments?: PermissionValue;
  idToken?: PermissionValue;
  issues?: PermissionValue;
  discussions?: PermissionValue;
  packages?: PermissionValue;
  pages?: PermissionValue;
  pullRequests?: PermissionValue;
  repositoryProjects?: PermissionValue;
  securityEvents?: PermissionValue;
  statuses?: PermissionValue;
};

type GlobalPermission = 'read-all' | 'write-all';

type PermissionOptions = DetailedPermissions | GlobalPermission;

export const permissions = (permissions: PermissionOptions) =>
  createBaseComponent('permissions', () => permissions);

export type Permissions = BaseComponent<'permissions'>;
