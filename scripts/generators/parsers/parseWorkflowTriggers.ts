import { load } from 'cheerio';
import { isDefined } from '../utils/isDefined.js';

const BANNED_TYPES = ['n/a', ''];

const isBannedType = (type: string) => BANNED_TYPES.includes(type);

const parseType = (type: string) => {
  const isAnyType = type === 'Custom';

  return isAnyType ? '*' : type.trim();
};

const parseTypeColumns = (typesColumn: string) =>
  typesColumn
    .split('- ')
    .filter((type) => !isBannedType(type))
    .map(parseType);

export const parseWorkflowTriggers = (page: string) => {
  const $ = load(page);

  const triggerElements = $('h3').filter((_, el) => Boolean(el.attribs.id));

  return triggerElements
    .get()
    .map((el) => {
      const element = $(el);

      const table = element.next();

      const descriptionRow = table.find('tr').last();

      const [, types, sha, ref] = descriptionRow.find('td');

      return {
        name: el.attribs.id,
        types: parseTypeColumns($(types).text()),
        githubSha: $(sha).text(),
        githubRef: $(ref).text(),
      };
    })
    .filter(isDefined);
};

export type WorkflowTriggerDefinition = ReturnType<
  typeof parseWorkflowTriggers
>[number];
