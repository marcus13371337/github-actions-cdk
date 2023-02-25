import { z } from 'zod';

export const BranchProtectionRuleSchema = z.object({
  name: z.literal('branch_protection_rule'),
  types: z.enum(['created', 'edited', 'deleted']).array().optional(),
});

export const CheckRunSchema = z.object({
  name: z.literal('check_run'),
  types: z
    .enum(['created', 'rerequested', 'completed', 'requested_action'])
    .array()
    .optional(),
});

export const CheckSuiteSchema = z.object({
  name: z.literal('check_suite'),
  types: z.enum(['completed']).array().optional(),
});

export const CreateSchema = z.object({
  name: z.literal('create'),
});

export const DeleteSchema = z.object({
  name: z.literal('delete'),
});

export const DeploymentSchema = z.object({
  name: z.literal('deployment'),
});

export const DeploymentStatusSchema = z.object({
  name: z.literal('deployment_status'),
});

export const DiscussionSchema = z.object({
  name: z.literal('discussion'),
  types: z
    .enum([
      'created',
      'edited',
      'deleted',
      'transferred',
      'pinned',
      'unpinned',
      'labeled',
      'unlabeled',
      'locked',
      'unlocked',
      'category_changed',
      'answered',
      'unanswered',
    ])
    .array()
    .optional(),
});

export const DiscussionCommentSchema = z.object({
  name: z.literal('discussion_comment'),
  types: z.enum(['created', 'edited', 'deleted']).array().optional(),
});

export const ForkSchema = z.object({
  name: z.literal('fork'),
});

export const GollumSchema = z.object({
  name: z.literal('gollum'),
});

export const IssueCommentSchema = z.object({
  name: z.literal('issue_comment'),
  types: z.enum(['created', 'edited', 'deleted']).array().optional(),
});

export const IssuesSchema = z.object({
  name: z.literal('issues'),
  types: z
    .enum([
      'opened',
      'edited',
      'deleted',
      'transferred',
      'pinned',
      'unpinned',
      'closed',
      'reopened',
      'assigned',
      'unassigned',
      'labeled',
      'unlabeled',
      'locked',
      'unlocked',
      'milestoned',
      'demilestoned',
    ])
    .array()
    .optional(),
});

export const LabelSchema = z.object({
  name: z.literal('label'),
  types: z.enum(['created', 'edited', 'deleted']).array().optional(),
});

export const MergeGroupSchema = z.object({
  name: z.literal('merge_group'),
  types: z.enum(['checks_requested']).array().optional(),
});

export const MilestoneSchema = z.object({
  name: z.literal('milestone'),
  types: z
    .enum(['created', 'closed', 'opened', 'edited', 'deleted'])
    .array()
    .optional(),
});

export const PageBuildSchema = z.object({
  name: z.literal('page_build'),
});

export const ProjectSchema = z.object({
  name: z.literal('project'),
  types: z
    .enum(['created', 'closed', 'reopened', 'edited', 'deleted'])
    .array()
    .optional(),
});

export const ProjectCardSchema = z.object({
  name: z.literal('project_card'),
  types: z
    .enum(['created', 'moved', 'converted to an issue', 'edited', 'deleted'])
    .array()
    .optional(),
});

export const ProjectColumnSchema = z.object({
  name: z.literal('project_column'),
  types: z.enum(['created', 'updated', 'moved', 'deleted']).array().optional(),
});

export const PublicSchema = z.object({
  name: z.literal('public'),
});

export const PullRequestSchema = z.object({
  name: z.literal('pull_request'),
  types: z
    .enum([
      'assigned',
      'unassigned',
      'labeled',
      'unlabeled',
      'opened',
      'edited',
      'closed',
      'reopened',
      'synchronize',
      'converted_to_draft',
      'ready_for_review',
      'locked',
      'unlocked',
      'review_requested',
      'review_request_removed',
      'auto_merge_enabled',
      'auto_merge_disabled',
    ])
    .array()
    .optional(),
});

export const PullRequestCommentUseIssueCommentSchema = z.object({
  name: z.literal('pull_request_comment-use-issue_comment'),
});

export const PullRequestReviewSchema = z.object({
  name: z.literal('pull_request_review'),
  types: z.enum(['submitted', 'edited', 'dismissed']).array().optional(),
});

export const PullRequestReviewCommentSchema = z.object({
  name: z.literal('pull_request_review_comment'),
  types: z.enum(['created', 'edited', 'deleted']).array().optional(),
});

export const PullRequestTargetSchema = z.object({
  name: z.literal('pull_request_target'),
  types: z
    .enum([
      'assigned',
      'unassigned',
      'labeled',
      'unlabeled',
      'opened',
      'edited',
      'closed',
      'reopened',
      'synchronize',
      'converted_to_draft',
      'ready_for_review',
      'locked',
      'unlocked',
      'review_requested',
      'review_request_removed',
      'auto_merge_enabled',
      'auto_merge_disabled',
    ])
    .array()
    .optional(),
});

export const PushSchema = z.object({
  name: z.literal('push'),
});

export const RegistryPackageSchema = z.object({
  name: z.literal('registry_package'),
  types: z.enum(['published', 'updated']).array().optional(),
});

export const ReleaseSchema = z.object({
  name: z.literal('release'),
  types: z
    .enum([
      'published',
      'unpublished',
      'created',
      'edited',
      'deleted',
      'prereleased',
      'released',
    ])
    .array()
    .optional(),
});

export const RepositoryDispatchSchema = z.object({
  name: z.literal('repository_dispatch'),
  types: z
    .union([z.string(), z.enum([''])])
    .array()
    .optional(),
});

export const ScheduleSchema = z.object({
  name: z.literal('schedule'),
});

export const StatusSchema = z.object({
  name: z.literal('status'),
});

export const WatchSchema = z.object({
  name: z.literal('watch'),
  types: z.enum(['started']).array().optional(),
});

export const WorkflowCallSchema = z.object({
  name: z.literal('workflow_call'),
});

export const WorkflowDispatchSchema = z.object({
  name: z.literal('workflow_dispatch'),
});

export const WorkflowRunSchema = z.object({
  name: z.literal('workflow_run'),
  types: z.enum(['completed', 'requested', 'in_progress']).array().optional(),
});

export const AllTriggerNamesSchema = z.enum([
  'branch_protection_rule',
  'check_run',
  'check_suite',
  'create',
  'delete',
  'deployment',
  'deployment_status',
  'discussion',
  'discussion_comment',
  'fork',
  'gollum',
  'issue_comment',
  'issues',
  'label',
  'merge_group',
  'milestone',
  'page_build',
  'project',
  'project_card',
  'project_column',
  'public',
  'pull_request',
  'pull_request_comment-use-issue_comment',
  'pull_request_review',
  'pull_request_review_comment',
  'pull_request_target',
  'push',
  'registry_package',
  'release',
  'repository_dispatch',
  'schedule',
  'status',
  'watch',
  'workflow_call',
  'workflow_dispatch',
  'workflow_run',
]);
