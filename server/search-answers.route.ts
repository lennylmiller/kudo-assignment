import { Request, Response } from 'express';
import { ANSWERS } from './db-data';
import { setTimeout } from 'timers';

export function searchAnswers(req: Request, res: Response) {
  console.log('Searching for answers ...');

  const queryParams = req.query;
  const questionId = queryParams.questionId,
    filter = queryParams.filter || '',
    sortOrder = queryParams.sortOrder || 'asc',
    pageNumber = parseInt(queryParams.pageNumber) || 0,
    pageSize = parseInt(queryParams.pageSize);

  console.log({
    answers: Object.values(ANSWERS), questionId, filter, sortOrder, pageNumber, pageSize
  });

  let answers = Object.values(ANSWERS)
    .filter(answer => answer.questionId === parseInt(questionId))
    .sort((l1, l2) => l1.id - l2.id);

  if (filter) {
    answers = answers.filter(
      (answer) =>
        answer.description.trim().toLowerCase().search(filter.toLowerCase()) >=
        0
    );
  }

  if (sortOrder === 'desc') {
    answers = answers.reverse();
  }

  const initialPos = pageNumber * pageSize;

  console.log(
    `Retrieving answers page starting at position ${initialPos}, page size ${pageSize} for question ${questionId}`
  );

  const answersPage = answers.slice(initialPos, initialPos + pageSize);

  res.status(200).json(answersPage);
}
