import { WorkflowTriggerDefinition } from '../parsers/parseWorkflowTriggers.js';
import { pascalCase } from 'change-case';
import { createImports } from './createImports.js';
import { isDefined } from '../utils/isDefined.js';

export const createWorkflowTriggerSchemas = (
  triggers: WorkflowTriggerDefinition[]
) => {
  const allTriggers: string[] = [];
  const allTriggerNames: string[] = [];

  const createTypesRow = (trigger: WorkflowTriggerDefinition) => {
    if (trigger.types.length === 0) {
      return null;
    }

    const hasAnyWildcard = trigger.types.some((type) => type === '*');

    const typesWithoutWildcard = trigger.types.filter((type) => type !== '*');

    if (hasAnyWildcard) {
      return ` types: z.union([z.string(), z.enum(['${typesWithoutWildcard.join(
        "', '"
      )}'])]).array().optional(),`;
    }

    return ` types: z.enum(['${trigger.types.join(
      "', '"
    )}']).array().optional()`;
  };

  return [
    ...createImports(),
    ...triggers.map((trigger) => {
      const schemaName = `${pascalCase(trigger.name)}Schema`;

      allTriggers.push(schemaName);
      allTriggerNames.push(trigger.name);

      return [
        `export const ${schemaName} = z.object({`,
        ` name: z.literal('${trigger.name}'),`,
        createTypesRow(trigger),
        `});`,
      ]
        .filter(isDefined)
        .join('\n');
    }),
    `export const AllTriggerNamesSchema = z.enum([${allTriggerNames
      .map((name) => `'${name}'`)
      .join(', ')}]);`,
  ].join('\n\n');
};
