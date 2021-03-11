import * as express from 'express';
import { Application } from 'express';

import { getAllQuestions, getQuestionByUrl } from './get-questions.route';
import { loginUser } from './auth.route';
import { saveQuestion } from './save-question.route';
import { createQuestion } from './create-question.route';
import { deleteQuestion } from './delete-question.route';

import { getAllUsers, getUserByUrl } from './get-users.routes';
import { saveUser } from './save-user.route';
import { createUser } from './create-user.route';



const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/login').post(loginUser);

app.route('/api/questions').get(getAllQuestions);

app.route('/api/question').post(createQuestion);

app.route('/api/question/:id').put(saveQuestion);

app.route('/api/question/:id').delete(deleteQuestion);

app.route('/api/questions/:questionUrl').get(getQuestionByUrl);

app.route('/api/users').get(getAllUsers);

app.route('/api/users').post(createUser);

app.route('/api/users/:id').put(saveUser);

app.route('/api/users/:userUrl').get(getUserByUrl);

const httpServer: any = app.listen(9000, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
