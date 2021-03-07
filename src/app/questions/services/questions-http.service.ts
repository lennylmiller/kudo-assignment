import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../model/question';
import { map } from 'rxjs/operators';
import { Answer } from '../model/answer';

@Injectable()
export class QuestionsHttpService {
  constructor(private http: HttpClient) {}

  findAllQuestions(): Observable<Question[]> {
    return this.http.get('/api/Questions').pipe(map((res) => res['payload']));
  }

  findQuestionByUrl(QuestionUrl: string): Observable<Question> {
    return this.http.get<Question>(`/api/questions/${QuestionUrl}`);
  }

  findAnswers(
    QuestionId: number,
    pageNumber = 0,
    pageSize = 3
  ): Observable<Answer[]> {
    return this.http.get<Answer[]>('/api/answers', {
      params: new HttpParams()
        .set('QuestionId', QuestionId.toString())
        .set('sortOrder', 'asc')
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString()),
    });
  }

  saveQuestion(QuestionId: string | number, changes: Partial<Question>) {
    return this.http.put('/api/Question/' + QuestionId, changes);
  }
}
