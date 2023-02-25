import fs from 'fs';
import path from 'path';
import { parseWorkflowTriggers } from './parseWorkflowTriggers.js';

describe('parseWorkflowTriggers', () => {
  const documentationPageContent = fs
    .readFileSync(
      path.resolve(__dirname, '../fixtures/workflowTriggerPage.html')
    )
    .toString();

  it('should parse the workflow trigger correctly', () => {
    expect(parseWorkflowTriggers(documentationPageContent)).toMatchSnapshot();
  });
});
