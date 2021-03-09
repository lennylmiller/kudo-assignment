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

    description: 'Memory Loss',
    longDescription: 'Memory Loss',
    iconUrl: 'https://kudo-assignment.s3-us-west-2.amazonaws.com/memory-loss.jpg',
    category: 'BEGINNER',
    answersCount: 10,
    seqNo: 0,
    url: 'memory-loss',
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

    description: 'Super hero or super villain',
    longDescription: 'Super hero or super villain',
    iconUrl: 'https://kudo-assignment.s3-us-west-2.amazonaws.com/super-hero-or-super-villain.jpg',
    answersCount: 10,
    category: 'BEGINNER',
    seqNo: 1,
    url: 'super-hero-or-super-villain',
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

    description: 'Telekinetic or Telepathic',
    longDescription:
      'Telekinetic or Telepathic',
    iconUrl: 'https://kudo-assignment.s3-us-west-2.amazonaws.com/telekinetic-or-telepathic.jpg',
    category: 'BEGINNER',
    answersCount: 10,
    seqNo: 2,
    url: 'telekinetic-or-telepathic',
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

    description: 'Backend or frontend developer',
    longDescription: 'Backend or frontend developer',
    iconUrl: 'https://kudo-assignment.s3-us-west-2.amazonaws.com/backend-or-front-end-developer.jpg',
    answersCount: 10,
    category: 'BEGINNER',
    seqNo: 4,
    url: 'backend-or-front-end-developer',
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

    description: 'Fifty for you five hundred for a friend',
    longDescription: 'Fifty for you five hundred for a friend',
    iconUrl: 'https://kudo-assignment.s3-us-west-2.amazonaws.com/fifty-for-you-five-hundred-for-a-friend.jpg',
    category: 'BEGINNER',
    answersCount: 10,
    seqNo: 5,
    url: 'fifty-for-you-five-hundred-for-a-friend'
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

    description: 'JavaScript or Swift',
    longDescription: 'JavaScript or Swift',
    iconUrl: 'https://kudo-assignment.s3-us-west-2.amazonaws.com/javaScript-or-swift.jpg',
    category: 'ADVANCED',
    answersCount: 11,
    seqNo: 7,
    url: 'javaScript-or-swift',
  },
};

export const ANSWERS = {
  1: {
    id: 1,
    description:
      'Angular Tutorial For Beginners - Build Your First App - Hello World Step By Step',
    duration: '4:17',
    seqNo: 1,
    questionId: 5,
  },
  2: {
    id: 2,
    description: 'Building Your First  Component - Component Composition',
    duration: '2:07',
    seqNo: 2,
    questionId: 5,
  },
  3: {
    id: 3,
    description: 'Component @Input - How To Pass Input Data To an  Component',
    duration: '2:33',
    seqNo: 3,
    questionId: 5,
  },
  4: {
    id: 4,
    description: ' Component Events - Using @Output to create custom events',
    duration: '4:44',
    seqNo: 4,
    questionId: 5,
  },
  5: {
    id: 5,
    description: ' Component Templates - Inline Vs External',
    duration: '2:55',
    seqNo: 5,
    questionId: 5,
  },
  6: {
    id: 6,
    description: 'Styling  Components - Learn About Component Style Isolation',
    duration: '3:27',
    seqNo: 6,
    questionId: 5,
  },
  7: {
    id: 7,
    description: ' Component Interaction - Extended Components Example',
    duration: '9:22',
    seqNo: 7,
    questionId: 5,
  },
  8: {
    id: 8,
    description: ' Components Tutorial For Beginners - Components Exercise !',
    duration: '1:26',
    seqNo: 8,
    questionId: 5,
  },
  9: {
    id: 9,
    description:
      ' Components Tutorial For Beginners - Components Exercise Solution Inside',
    duration: '2:08',
    seqNo: 9,
    questionId: 5,
  },
  10: {
    id: 10,
    description:
      ' Directives - Inputs, Output Event Emitters and How To Export Template References',
    duration: '4:01',
    seqNo: 10,
    questionId: 5,
  },

  // Security Question
  11: {
    id: 11,
    description: 'Question Helicopter View',
    duration: '08:19',
    seqNo: 1,
    questionId: 6,
  },

  12: {
    id: 12,
    description: 'Installing Git, Node, NPM and Choosing an IDE',
    duration: '04:17',
    seqNo: 2,
    questionId: 6,
  },

  13: {
    id: 13,
    description:
      'Installing The Answers Code - Learn Why Its Essential To Use NPM 5',
    duration: '06:05',
    seqNo: 3,
    questionId: 6,
  },

  14: {
    id: 14,
    description: 'How To Run Node In TypeScript With Hot Reloading',
    duration: '03:57',
    seqNo: 4,
    questionId: 6,
  },

  15: {
    id: 15,
    description: 'Guided Tour Of The Sample Application',
    duration: '06:00',
    seqNo: 5,
    questionId: 6,
  },
  16: {
    id: 16,
    description: 'Client Side Authentication Service - API Design',
    duration: '04:53',
    seqNo: 6,
    questionId: 6,
  },
  17: {
    id: 17,
    description: 'Client Authentication Service - Design and Implementation',
    duration: '09:14',
    seqNo: 7,
    questionId: 6,
  },
  18: {
    id: 18,
    description:
      'The New Angular HTTP Client - Doing a POST Call To The Server',
    duration: '06:08',
    seqNo: 8,
    questionId: 6,
  },
  19: {
    id: 19,
    description: 'User Sign Up Server-Side Implementation in Express',
    duration: '08:50',
    seqNo: 9,
    questionId: 6,
  },
  20: {
    id: 20,
    description: 'Introduction To Cryptographic Hashes - A Running Demo',
    duration: '05:46',
    seqNo: 10,
    questionId: 6,
  },
  21: {
    id: 21,
    description:
      'Some Interesting Properties Of Hashing Functions - Validating Passwords',
    duration: '06:31',
    seqNo: 11,
    questionId: 6,
  },

  // PWA question

  22: {
    id: 22,
    description:
      'Question Kick-Off - Install Node, NPM, IDE And Service Workers Section Code',
    duration: '07:19',
    seqNo: 1,
    questionId: 7,
  },
  23: {
    id: 23,
    description: 'Service Workers In a Nutshell - Service Worker Registration',
    duration: '6:59',
    seqNo: 2,
    questionId: 7,
  },
  24: {
    id: 24,
    description:
      'Service Workers Hello World - Lifecycle Part 1 and PWA Chrome Dev Tools',
    duration: '7:28',
    seqNo: 3,
    questionId: 7,
  },
  25: {
    id: 25,
    description:
      'Service Workers and Application Versioning - Install & Activate Lifecycle Phases',
    duration: '10:17',
    seqNo: 4,
    questionId: 7,
  },

  26: {
    id: 26,
    description:
      'Downloading The Offline Page - The Service Worker Installation Phase',
    duration: '09:50',
    seqNo: 5,
    questionId: 7,
  },
  27: {
    id: 27,
    description: 'Introduction to the Cache Storage PWA API',
    duration: '04:44',
    seqNo: 6,
    questionId: 7,
  },
  28: {
    id: 28,
    description: 'View Service Workers HTTP Interception Features In Action',
    duration: '06:07',
    seqNo: 7,
    questionId: 7,
  },
  29: {
    id: 29,
    description: 'Service Workers Error Handling - Serving The Offline Page',
    duration: '5:38',
    seqNo: 8,
    questionId: 7,
  },

  // Serverless Angular with Firebase Question

  30: {
    id: 30,
    description: 'Development Environment Setup',
    duration: '5:38',
    seqNo: 1,
    questionId: 1,
  },

  31: {
    id: 31,
    description: 'Introduction to the Firebase Ecosystem',
    duration: '5:12',
    seqNo: 2,
    questionId: 1,
  },

  32: {
    id: 32,
    description: 'Importing Data into Firestore',
    duration: '4:07',
    seqNo: 3,
    questionId: 1,
  },

  33: {
    id: 33,
    description: 'Firestore Documents in Detail',
    duration: '7:32',
    seqNo: 4,
    questionId: 1,
  },

  34: {
    id: 34,
    description: 'Firestore Collections in Detail',
    duration: '6:28',
    seqNo: 5,
    questionId: 1,
  },

  35: {
    id: 35,
    description: 'Firestore Unique Identifiers',
    duration: '4:38',
    seqNo: 6,
    questionId: 1,
  },

  36: {
    id: 36,
    description: 'Querying Firestore Collections',
    duration: '7:54',
    seqNo: 7,
    questionId: 1,
  },

  37: {
    id: 37,
    description: 'Firebase Security Rules In Detail',
    duration: '5:31',
    seqNo: 8,
    questionId: 1,
  },

  38: {
    id: 38,
    description: 'Firebase Cloud Functions In Detail',
    duration: '8:19',
    seqNo: 9,
    questionId: 1,
  },

  39: {
    id: 39,
    description: 'Firebase Storage In Detail',
    duration: '7:05',
    seqNo: 10,
    questionId: 1,
  },

  // Angular Testing Question

  40: {
    id: 40,
    description: 'Angular Testing Question - Helicopter View',
    duration: '5:38',
    seqNo: 1,
    questionId: 12,
  },

  41: {
    id: 41,
    description: 'Setting Up the Development Environment',
    duration: '5:12',
    seqNo: 2,
    questionId: 12,
  },

  42: {
    id: 42,
    description: 'Introduction to Jasmine, Spies and specs',
    duration: '4:07',
    seqNo: 3,
    questionId: 12,
  },

  43: {
    id: 43,
    description: 'Introduction to Service Testing',
    duration: '7:32',
    seqNo: 4,
    questionId: 12,
  },

  44: {
    id: 44,
    description: 'Settting up the Angular TestBed',
    duration: '6:28',
    seqNo: 5,
    questionId: 12,
  },

  45: {
    id: 45,
    description: 'Mocking Angular HTTP requests',
    duration: '4:38',
    seqNo: 6,
    questionId: 12,
  },

  46: {
    id: 46,
    description: 'Simulating Failing HTTP Requests',
    duration: '7:54',
    seqNo: 7,
    questionId: 12,
  },

  47: {
    id: 47,
    description: 'Introduction to Angular Component Testing',
    duration: '5:31',
    seqNo: 8,
    questionId: 12,
  },

  48: {
    id: 48,
    description: 'Testing Angular Components without the DOM',
    duration: '8:19',
    seqNo: 9,
    questionId: 12,
  },

  49: {
    id: 49,
    description: 'Testing Angular Components with the DOM',
    duration: '7:05',
    seqNo: 10,
    questionId: 12,
  },

  // Ngrx Question
  50: {
    id: 50,
    description: 'Welcome to the Angular Ngrx Question',
    duration: '6:53',
    seqNo: 1,
    questionId: 4,
  },
  51: {
    id: 51,
    description: 'The Angular Ngrx Architecture Question - Helicopter View',
    duration: '5:52',
    seqNo: 2,
    questionId: 4,
  },
  52: {
    id: 52,
    description:
      'The Origins of Flux - Understanding the Famous Facebook Bug Problem',
    duration: '8:17',
    seqNo: 3,
    questionId: 4,
  },
  53: {
    id: 53,
    description: 'Custom Global Events - Why Don\'t They Scale In Complexity?',
    duration: '7:47',
    seqNo: 4,
    questionId: 4,
  },
  54: {
    id: 54,
    description:
      'The Flux Architecture - How Does it Solve Facebook Counter Problem?',
    duration: '9:22',
    seqNo: 5,
    questionId: 4,
  },
  55: {
    id: 55,
    description: 'Unidirectional Data Flow And The Angular Development Mode',
    duration: '7:07',
    seqNo: 6,
    questionId: 4,
  },

  56: {
    id: 56,
    description: 'Dispatching an Action - Implementing the Login Component',
    duration: '4:39',
    seqNo: 7,
    questionId: 4,
  },
  57: {
    id: 57,
    description: 'Setting Up the Ngrx DevTools - Demo',
    duration: '4:44',
    seqNo: 8,
    questionId: 4,
  },
  58: {
    id: 58,
    description: 'Understanding Reducers - Writing Our First Reducer',
    duration: '9:10',
    seqNo: 9,
    questionId: 4,
  },
  59: {
    id: 59,
    description: 'How To Define the Store Initial AppState',
    duration: '9:10',
    seqNo: 10,
    questionId: 4,
  },
};

export function findQuestionById(questionId: number) {
  return QUESTIONS[questionId];
}

export function findAnswersForQuestion(questionId: number) {
  return Object.values(ANSWERS).filter(
    (answer) => answer.questionId == questionId
  );
}

export function authenticate(email: string, password: string) {
  const user: any = Object.values(USERS).find((user) => user.email === email);

  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }
}
