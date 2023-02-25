import { fetchWorkflowTriggersPage } from './fetchers/fetchWorkflowTriggersPage.js';
import { parseWorkflowTriggers } from './parsers/parseWorkflowTriggers.js';
import { createWorkflowTriggerSchemas } from './schemaCreators/createWorkflowTriggerSchemas.js';
import fs from 'fs';
import path from 'path';

const workflowPage = await fetchWorkflowTriggersPage();

const triggerDefinitions = parseWorkflowTriggers(workflowPage);

const schemas = createWorkflowTriggerSchemas(triggerDefinitions);

fs.writeFileSync(path.resolve('./src/generated/workflowTriggers.ts'), schemas);
