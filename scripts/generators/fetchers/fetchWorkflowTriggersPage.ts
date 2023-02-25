import axios from 'axios';

const WORKFLOW_TRIGGER_DOCUMENTATION_PAGE =
  'https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows';

export const fetchWorkflowTriggersPage = async () => {
  const documentationResponse = await axios.get<string>(
    WORKFLOW_TRIGGER_DOCUMENTATION_PAGE
  );

  return documentationResponse.data;
};
