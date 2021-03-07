export interface Answer {
  id: number;
  description: string;
  duration: string;
  seqNo: number;
  questionId: number;
}

export function compareAnswers(l1: Answer, l2: Answer) {
  const compareQuestions = l1.questionId - l2.questionId;

  if (compareQuestions > 0) {
    return 1;
  } else if (compareQuestions < 0) {
    return -1;
  } else {
    return l1.seqNo - l2.seqNo;
  }
}
