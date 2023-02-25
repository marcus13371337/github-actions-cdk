import fs from 'fs';
import path from 'path';

console.log('Exporting workflows...');

const workflowFiles = fs.readdirSync(
  path.resolve(process.cwd(), './src/github')
);

for (const workflowFile of workflowFiles) {
  const [fileName] = workflowFile.split('.');

  const workflow = await import(`./github/${workflowFile}`);

  const workflowContent = workflow.default.export();

  fs.writeFileSync(
    path.resolve(process.cwd(), `./.github/${fileName}.yml`),
    workflowContent
  );
}
