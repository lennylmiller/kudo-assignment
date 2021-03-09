export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  avatarURL: string;
  answers: {};
  users: string[];
  active: boolean;
}

// export function compareUsers(c1:User, c2: User) {

//   const compare = c2.timestamp - c1.timestamp;

//   if (compare > 0) {
//     return 1;
//   }
//   else if ( compare < 0) {
//     return -1;
//   }
//   else return 0;

// }
