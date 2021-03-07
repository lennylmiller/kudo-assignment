import {Injectable} from '@angular/core';
import {DefaultDataService, HttpUrlGenerator} from '@ngrx/data';
import {Question} from '../model/question';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable()
export class QuestionsDataService extends DefaultDataService<Question> {


    constructor(http:HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Question', http, httpUrlGenerator);

    }

    getAll(): Observable<Question[]> {
        return this.http.get('/api/questions')
            .pipe(
                map(res => res["payload"])
            );
    }

}
