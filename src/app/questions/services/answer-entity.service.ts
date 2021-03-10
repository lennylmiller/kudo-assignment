import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Answer } from '../model/answer';

@Injectable()
export class AnswerEntityService extends EntityCollectionServiceBase<Answer> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Answer', serviceElementsFactory);
  }
}
