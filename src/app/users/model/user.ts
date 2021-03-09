export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  avatarURL: string;
  answers: {};
  questions: string[];
  active: boolean;
}

export function compareUsers(c1:User, c2: User) {
  const asked_c1 =  c1.questions.length;
  const answered_c1 = Object.keys(c1.answers).length;

  const asked_c2 =  c2.questions.length;
  const answered_c2 = Object.keys(c2.answers).length;


  const compare = (asked_c2 + answered_c2) - (asked_c1 + answered_c1);

  if (compare > 0) {
    return 1;
  }
  else if ( compare < 0) {
    return -1;
  }
  else return 0;

}
