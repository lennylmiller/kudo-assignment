export interface Option {
  votes: string[],
  text: string
}
export interface Question {
  id: number;
  author: string,
  timestamp: number;
  optionOne: Option,
  optionTwo: Option,


  description: string;
  longDescription?: string;
  iconUrl: string;
  category: string;
  answersCount: number;
  seqNo:number;
  url:string;

  questionListIcon: string;
  promo: boolean;
}


export function compareQuestions(c1:Question, c2: Question) {

  const compare = c2.timestamp - c1.timestamp;

  if (compare > 0) {
    return 1;
  }
  else if ( compare < 0) {
    return -1;
  }
  else return 0;

}
