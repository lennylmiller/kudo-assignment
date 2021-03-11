export const USERS = {
  'rashmi': {
    id: 'rashmi',
    email: 'admin@kudo-assignment.io',
    password: 'admin',
    name: 'Rashmi Manandhar',
    avatarURL: 'https://kudo-assignment.s3-us-west-2.amazonaws.com/rashmi.jpg',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      'am8ehyc8byjqgar0jgpub9': 'optionTwo',
      'loxhs1bqm25b708cmbf3g': 'optionTwo'
    },
    questions: [
      '8xf0y6ziyjabvozdd253nd',
      'am8ehyc8byjqgar0jgpub9'
    ],
    active: true
  },
  'julian': {
    id: 'julian',
    email: 'julian@kudo-assignment.io',
    password: 'admin',
    name: 'Julian Manandhar',
    avatarURL: 'https://kudo-assignment.s3-us-west-2.amazonaws.com/julian.jpg',
    answers: {
      'vthrdm985a262al8qx3do': 'optionOne',
      'xj352vofupe1dqz9emx13r': 'optionTwo'
    },
    questions: [
      'loxhs1bqm25b708cmbf3g',
      'vthrdm985a262al8qx3do'
    ],
    active: true
  },
  'johndoe': {
    id: 'johndoe',
    email: 'john-doe@kudo-assignment.io',
    password: 'admin',
    name: 'John Doe',
    avatarURL: 'https://kudo-assignment.s3-us-west-2.amazonaws.com/johndoe.jpg',
    answers: {
      'xj352vofupe1dqz9emx13r': 'optionOne',
      'vthrdm985a262al8qx3do': 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo'
    },
    questions: [
      '6ni6ok3ym7mf1p33lnez',
      'xj352vofupe1dqz9emx13r'
    ],
    active: true
  }
};

export const imageMaps = {
 '8xf0y6ziyjabvozdd253nd' : 'https://kudo-assignment.s3-us-west-2.amazonaws.com/memory-loss.jpg' ,
 '6ni6ok3ym7mf1p33lnez'   : 'https://kudo-assignment.s3-us-west-2.amazonaws.com/super-hero-or-super-villain.jpg' ,
 'am8ehyc8byjqgar0jgpub9' : 'https://kudo-assignment.s3-us-west-2.amazonaws.com/telekinetic-or-telepathic.jpg' ,
 'loxhs1bqm25b708cmbf3g'  : 'https://kudo-assignment.s3-us-west-2.amazonaws.com/backend-or-front-end-developer.jpg' ,
 'vthrdm985a262al8qx3do'  : 'https://kudo-assignment.s3-us-west-2.amazonaws.com/fifty-for-you-five-hundred-for-a-friend.jpg' ,
 'xj352vofupe1dqz9emx13r' : 'https://kudo-assignment.s3-us-west-2.amazonaws.com/javaScript-or-swift.jpg',
 'newUserOne'             : 'https://kudo-assignment.s3-us-west-2.amazonaws.com/survey-clipart.jpg',
 'newUserTwo'             : 'https://kudo-assignment.s3-us-west-2.amazonaws.com/index.jpg',
}

export const QUESTIONS: any = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'rashmi',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['rashmi'],
      text: 'have horrible short term memory'
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    },
  },

  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: ['rashmi'],
      text: 'become a superhero'
    },
    optionTwo: {
      votes: ['johndoe', 'rashme'],
      text: 'become a supervillain'
    },
  },

  'am8ehyc8byjqgar0jgpub9': {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'rashmi',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic'
    },
    optionTwo: {
      votes: ['rashmi'],
      text: 'be telepathic'
    },
  },

  'loxhs1bqm25b708cmbf3g': {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'julian',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer'
    },
    optionTwo: {
      votes: ['rashmi'],
      text: 'be a back-end developer'
    },
  },

  'vthrdm985a262al8qx3do': {
    id: 'vthrdm985a262al8qx3do',
    author: 'julian',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['julian'],
      text: 'find $50 yourself'
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    },
  },

  'xj352vofupe1dqz9emx13r': {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript'
    },
    optionTwo: {
      votes: ['julian'],
      text: 'write Swift'
    },
  },
};

export function findQuestionById(questionId: number) {
  return QUESTIONS[questionId];
}

export function authenticate(email: string, password: string) {
  const user: any = Object.values(USERS).find((user) => user.email === email);

  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }
}
