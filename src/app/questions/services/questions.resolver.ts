import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {QuestionEntityService} from './question-entity.service';
import {filter, first, map, tap} from 'rxjs/operators';


@Injectable()
export class QuestionsResolver implements Resolve<boolean> {

    constructor(private questionsService: QuestionEntityService) {

    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<boolean> {

        return this.questionsService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                       this.questionsService.getAll();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );

    }

}
