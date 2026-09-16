import { RecognitionJobService } from '@/server/recognition/service';

export async function runRecognitionWorkflow(jobId: string) {
  'use workflow';

  return executeRecognitionStep(jobId);
}

async function executeRecognitionStep(jobId: string) {
  'use step';

  return RecognitionJobService.executeRecognition(jobId, 'workflow');
}
