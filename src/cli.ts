import fs from 'fs';
import path from 'path';

console.log('Exporting workflows...');

const workflowFiles = fs.readdirSync(
  path.resolve(process.cwd(), './src/github/workflows')
);

for (const workflowFile of workflowFiles) {
  const [fileName] = workflowFile.split('.');

  const workflow = await import(`./github/workflows/${workflowFile}`);

  const workflowContent = workflow.default.export();

  fs.writeFileSync(
    path.resolve(process.cwd(), `./.github/workflows/${fileName}.yml`),
    workflowContent
  );
}

console.log("Done! Don't forget to commit the changes");
