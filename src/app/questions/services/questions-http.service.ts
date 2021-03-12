import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../model/question';
import { map } from 'rxjs/operators';
@Injectable()
export class QuestionsHttpService {
  constructor(private http: HttpClient) {}

  findAllQuestions(): Observable<Question[]> {
    return this.http.get('/api/Questions').pipe(map((res) => res['payload']));
  }

  findQuestionByUrl(QuestionUrl: string): Observable<Question> {
    return this.http.get<Question>(`/api/questions/${QuestionUrl}`);
  }

  saveQuestion(QuestionId: string | number, changes: Partial<Question>) {
    return this.http.put('/api/Question/' + QuestionId, changes);
  }
}
