import { z } from 'zod';
import * as Schemas from '../generated/workflowTriggers.js';

const StringOrStringArraySchema = z.union([z.string(), z.string().array()]);

const ExtendedPullRequestSchema = Schemas.PullRequestSchema.extend({
  branches: StringOrStringArraySchema.optional(),
  branchesIgnore: StringOrStringArraySchema.optional(),
  paths: StringOrStringArraySchema.optional(),
  pathsIgnore: StringOrStringArraySchema.optional(),
});

const ExtendedPullRequestTargetSchema = Schemas.PullRequestTargetSchema.extend({
  branches: StringOrStringArraySchema.optional(),
  branchesIgnore: StringOrStringArraySchema.optional(),
  paths: StringOrStringArraySchema.optional(),
  pathsIgnore: StringOrStringArraySchema.optional(),
});

const ExtendedPushSchema = Schemas.PushSchema.extend({
  branches: StringOrStringArraySchema.optional(),
  branchesIgnore: StringOrStringArraySchema.optional(),
  paths: StringOrStringArraySchema.optional(),
  pathsIgnore: StringOrStringArraySchema.optional(),
  tags: StringOrStringArraySchema.optional(),
  tagsIgnore: StringOrStringArraySchema.optional(),
});

const ExtendedScheduleSchema = Schemas.ScheduleSchema.extend({
  cron: StringOrStringArraySchema,
});

const ExtendedWorkflowRunSchema = Schemas.WorkflowRunSchema.extend({
  branches: StringOrStringArraySchema.optional(),
  branchesIgnore: StringOrStringArraySchema.optional(),
});

export const WorkflowTriggerSchema = z.discriminatedUnion('name', [
  Schemas.BranchProtectionRuleSchema,
  Schemas.CheckRunSchema,
  Schemas.CheckSuiteSchema,
  Schemas.DiscussionSchema,
  Schemas.DiscussionCommentSchema,
  Schemas.ForkSchema,
  Schemas.GollumSchema,
  Schemas.IssueCommentSchema,
  Schemas.IssuesSchema,
  Schemas.LabelSchema,
  Schemas.MilestoneSchema,
  Schemas.PageBuildSchema,
  Schemas.ProjectCardSchema,
  Schemas.ProjectColumnSchema,
  Schemas.ProjectSchema,
  Schemas.PublicSchema,
  Schemas.PullRequestReviewCommentSchema,
  Schemas.PullRequestReviewSchema,
  ExtendedPullRequestSchema,
  ExtendedPullRequestTargetSchema,
  Schemas.ReleaseSchema,
  Schemas.RepositoryDispatchSchema,
  Schemas.StatusSchema,
  ExtendedPushSchema,
  ExtendedScheduleSchema,
  Schemas.WatchSchema,
  Schemas.WorkflowCallSchema,
  Schemas.WorkflowDispatchSchema,
  ExtendedWorkflowRunSchema,
]);

export const trigger = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  trigger:
    | z.infer<typeof WorkflowTriggerSchema>
    | z.infer<typeof Schemas.AllTriggerNamesSchema>
) => {
  return {
    type: 'trigger',
  };
};

export type Trigger = ReturnType<typeof trigger>;
