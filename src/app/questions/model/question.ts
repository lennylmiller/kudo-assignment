
export interface Question {
  id: number;
  seqNo:number;
  url:string;
  iconUrl: string;
  questionListIcon: string;
  description: string;
  longDescription?: string;
  category: string;
  answersCount: number;
  promo: boolean;
}


export function compareQuestions(c1:Question, c2: Question) {

  const compare = c1.seqNo - c2.seqNo;

  if (compare > 0) {
    return 1;
  }
  else if ( compare < 0) {
    return -1;
  }
  else return 0;

}
