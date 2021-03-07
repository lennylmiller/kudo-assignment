import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {Question} from '../model/question';


@Injectable()
export class QuestionEntityService
    extends EntityCollectionServiceBase<Question> {

    constructor(
        serviceElementsFactory:
            EntityCollectionServiceElementsFactory) {

        super('Question', serviceElementsFactory);

    }

}

