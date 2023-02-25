type StringOrStringArray = string | string[];

type BranchProtectionRuleTypes = 'created' | 'edited' | 'deleted';
type BranchProtectionRuleTrigger = {
  name: 'branch_protection_rule';
  types?: BranchProtectionRuleTypes | BranchProtectionRuleTypes[];
};

type CheckRunTypes =
  | 'created'
  | 'rerequested'
  | 'completed'
  | 'requested_action';
type CheckRunTrigger = {
  name: 'check_run';
  types?: CheckRunTypes | CheckRunTypes[];
};

type CheckSuiteTypes = 'completed';
type CheckSuiteTrigger = {
  name: 'check_suite';
  types?: CheckSuiteTypes | CheckSuiteTypes[];
};

type CreateTypes = never;
type CreateTrigger = {
  name: 'create';
  types?: CreateTypes | CreateTypes[];
};

type DeleteTypes = never;
type DeleteTrigger = {
  name: 'delete';
  types?: DeleteTypes | DeleteTypes[];
};

type DeploymentTypes = never;
type DeploymentTrigger = {
  name: 'deployment';
  types?: DeploymentTypes | DeploymentTypes[];
};

type DeploymentStatusTypes = never;
type DeploymentStatusTrigger = {
  name: 'deployment_status';
  types?: DeploymentStatusTypes | DeploymentStatusTypes[];
};

type DiscussionTypes =
  | 'created'
  | 'edited'
  | 'deleted'
  | 'transferred'
  | 'pinned'
  | 'unpinned'
  | 'labeled'
  | 'unlabeled'
  | 'locked'
  | 'unlocked'
  | 'category_changed'
  | 'answered'
  | 'unanswered';
type DiscussionTrigger = {
  name: 'discussion';
  types?: DiscussionTypes | DiscussionTypes[];
};

type DiscussionCommentTypes = 'created' | 'edited' | 'deleted';
type DiscussionCommentTrigger = {
  name: 'discussion_comment';
  types?: DiscussionCommentTypes | DiscussionCommentTypes[];
};

type ForkTypes = never;
type ForkTrigger = {
  name: 'fork';
  types?: ForkTypes | ForkTypes[];
};

type GollumTypes = never;
type GollumTrigger = {
  name: 'gollum';
  types?: GollumTypes | GollumTypes[];
};

type IssueCommentTypes = 'created' | 'edited' | 'deleted';
type IssueCommentTrigger = {
  name: 'issue_comment';
  types?: IssueCommentTypes | IssueCommentTypes[];
};

type IssuesTypes =
  | 'opened'
  | 'edited'
  | 'deleted'
  | 'transferred'
  | 'pinned'
  | 'unpinned'
  | 'closed'
  | 'reopened'
  | 'assigned'
  | 'unassigned'
  | 'labeled'
  | 'unlabeled'
  | 'locked'
  | 'unlocked'
  | 'milestoned'
  | 'demilestoned';
type IssuesTrigger = {
  name: 'issues';
  types?: IssuesTypes | IssuesTypes[];
};

type LabelTypes = 'created' | 'edited' | 'deleted';
type LabelTrigger = {
  name: 'label';
  types?: LabelTypes | LabelTypes[];
};

type MergeGroupTypes = 'checks_requested';
type MergeGroupTrigger = {
  name: 'merge_group';
  types?: MergeGroupTypes | MergeGroupTypes[];
};

type MilestoneTypes = 'created' | 'closed' | 'opened' | 'edited' | 'deleted';
type MilestoneTrigger = {
  name: 'milestone';
  types?: MilestoneTypes | MilestoneTypes[];
};

type PageBuildTypes = never;
type PageBuildTrigger = {
  name: 'page_build';
  types?: PageBuildTypes | PageBuildTypes[];
};

type ProjectTypes = 'created' | 'closed' | 'reopened' | 'edited' | 'deleted';
type ProjectTrigger = {
  name: 'project';
  types?: ProjectTypes | ProjectTypes[];
};

type ProjectCardTypes =
  | 'created'
  | 'moved'
  | 'converted to an issue'
  | 'edited'
  | 'deleted';
type ProjectCardTrigger = {
  name: 'project_card';
  types?: ProjectCardTypes | ProjectCardTypes[];
};

type ProjectColumnTypes = 'created' | 'updated' | 'moved' | 'deleted';
type ProjectColumnTrigger = {
  name: 'project_column';
  types?: ProjectColumnTypes | ProjectColumnTypes[];
};

type PublicTypes = never;
type PublicTrigger = {
  name: 'public';
  types?: PublicTypes | PublicTypes[];
};

type PullRequestTypes =
  | 'assigned'
  | 'unassigned'
  | 'labeled'
  | 'unlabeled'
  | 'opened'
  | 'edited'
  | 'closed'
  | 'reopened'
  | 'synchronize'
  | 'converted_to_draft'
  | 'ready_for_review'
  | 'locked'
  | 'unlocked'
  | 'review_requested'
  | 'review_request_removed'
  | 'auto_merge_enabled'
  | 'auto_merge_disabled';
type PullRequestTrigger = {
  name: 'pull_request';
  types?: PullRequestTypes | PullRequestTypes[];
  branches?: StringOrStringArray;
  branchesIgnore?: StringOrStringArray;
  paths?: StringOrStringArray;
  pathsIgnore?: StringOrStringArray;
};

type PullRequestReviewTypes = 'submitted' | 'edited' | 'dismissed';
type PullRequestReviewTrigger = {
  name: 'pull_request_review';
  types?: PullRequestReviewTypes | PullRequestReviewTypes[];
};

type PullRequestReviewCommentTypes = 'created' | 'edited' | 'deleted';
type PullRequestReviewCommentTrigger = {
  name: 'pull_request_review_comment';
  types?: PullRequestReviewCommentTypes | PullRequestReviewCommentTypes[];
};

type PullRequestTargetTypes =
  | 'assigned'
  | 'unassigned'
  | 'labeled'
  | 'unlabeled'
  | 'opened'
  | 'edited'
  | 'closed'
  | 'reopened'
  | 'synchronize'
  | 'converted_to_draft'
  | 'ready_for_review'
  | 'locked'
  | 'unlocked'
  | 'review_requested'
  | 'review_request_removed'
  | 'auto_merge_enabled'
  | 'auto_merge_disabled';
type PullRequestTargetTrigger = {
  name: 'pull_request_target';
  types?: PullRequestTargetTypes | PullRequestTargetTypes[];
  branches?: StringOrStringArray;
  branchesIgnore?: StringOrStringArray;
  paths?: StringOrStringArray;
  pathsIgnore?: StringOrStringArray;
};

type PushTypes = never;
type PushTrigger = {
  name: 'push';
  types?: PushTypes | PushTypes[];
  branches?: StringOrStringArray;
  branchesIgnore?: StringOrStringArray;
  paths?: StringOrStringArray;
  pathsIgnore?: StringOrStringArray;
  tags?: StringOrStringArray;
  tagsIgnore?: StringOrStringArray;
};

type RegistryPackageTypes = 'published' | 'updated';
type RegistryPackageTrigger = {
  name: 'registry_package';
  types?: RegistryPackageTypes | RegistryPackageTypes[];
};

type ReleaseTypes =
  | 'published'
  | 'unpublished'
  | 'created'
  | 'edited'
  | 'deleted'
  | 'prereleased'
  | 'released';
type ReleaseTrigger = {
  name: 'release';
  types?: ReleaseTypes | ReleaseTypes[];
};

type RepositoryDispatchTypes = '' | string;
type RepositoryDispatchTrigger = {
  name: 'repository_dispatch';
  types?: RepositoryDispatchTypes | RepositoryDispatchTypes[];
};

type ScheduleTypes = never;
type ScheduleTrigger = {
  name: 'schedule';
  types?: ScheduleTypes | ScheduleTypes[];
  cron?: StringOrStringArray;
};

type StatusTypes = never;
type StatusTrigger = {
  name: 'status';
  types?: StatusTypes | StatusTypes[];
};

type WatchTypes = 'started';
type WatchTrigger = {
  name: 'watch';
  types?: WatchTypes | WatchTypes[];
};

type WorkflowCallTypes = never;
type WorkflowCallTrigger = {
  name: 'workflow_call';
  types?: WorkflowCallTypes | WorkflowCallTypes[];
};

type WorkflowDispatchTypes = never;
type WorkflowDispatchTrigger = {
  name: 'workflow_dispatch';
  types?: WorkflowDispatchTypes | WorkflowDispatchTypes[];
};

type WorkflowRunTypes = 'completed' | 'requested' | 'in_progress';
type WorkflowRunTrigger = {
  name: 'workflow_run';
  types?: WorkflowRunTypes | WorkflowRunTypes[];
  branches?: StringOrStringArray;
  branchesIgnore?: StringOrStringArray;
};

type TriggerSetting =
  | BranchProtectionRuleTrigger
  | CheckRunTrigger
  | CheckSuiteTrigger
  | CreateTrigger
  | DeleteTrigger
  | DeploymentTrigger
  | DeploymentStatusTrigger
  | DiscussionTrigger
  | DiscussionCommentTrigger
  | ForkTrigger
  | GollumTrigger
  | IssueCommentTrigger
  | IssuesTrigger
  | LabelTrigger
  | MergeGroupTrigger
  | MilestoneTrigger
  | PageBuildTrigger
  | ProjectTrigger
  | ProjectCardTrigger
  | ProjectColumnTrigger
  | PublicTrigger
  | PullRequestTrigger
  | PullRequestReviewTrigger
  | PullRequestReviewCommentTrigger
  | PullRequestTargetTrigger
  | PushTrigger
  | RegistryPackageTrigger
  | ReleaseTrigger
  | RepositoryDispatchTrigger
  | ScheduleTrigger
  | StatusTrigger
  | WatchTrigger
  | WorkflowCallTrigger
  | WorkflowDispatchTrigger
  | WorkflowRunTrigger;

export type TriggerOptionsMap = Partial<{
  [K in TriggerSetting['name']]: Omit<
    Extract<TriggerSetting, { name: K }>,
    'name'
  >;
}>;
