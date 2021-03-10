import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { QuestionsCardListComponent } from './questions-card-list/questions-card-list.component';
import { EditQuestionDialogComponent } from './edit-question-dialog/edit-question-dialog.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsListItemComponent } from './questions-list-item/questions-list-item.component';
import { QuestionListComponent } from './question-list/question-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionsHttpService } from './services/questions-http.service';
import { RouterModule, Routes } from '@angular/router';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';

import { compareQuestions, Question } from './model/question';
import { compareAnswers, Answer } from './model/answer';

import { QuestionEntityService } from './services/question-entity.service';
import { QuestionsResolver } from './services/questions.resolver';
import { QuestionsDataService } from './services/questions-data.service';

import { AnswerEntityService } from './services/answer-entity.service';

export const QuestionsRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      Questions: QuestionsResolver,
    },
  },
  {
    path: ':questionUrl',
    component: QuestionComponent,
    resolve: {
      Questions: QuestionsResolver,
    },
  },
];

const entityMetadata: EntityMetadataMap = {
  Question: {
    sortComparer: compareQuestions,
    entityDispatcherOptions: {
      optimisticUpdate: true,
    }
  },
  Answer: {
    sortComparer: compareAnswers,
  },
};

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(QuestionsRoutes)
  ],
  declarations: [
    HomeComponent,
    QuestionsCardListComponent,
    QuestionsListItemComponent,
    EditQuestionDialogComponent,
    QuestionComponent,
    QuestionListComponent
  ],
  exports: [
    HomeComponent,
    QuestionsCardListComponent,
    QuestionsListItemComponent,
    EditQuestionDialogComponent,
    QuestionComponent
  ],
  entryComponents: [EditQuestionDialogComponent],
  providers: [
    QuestionsHttpService,
    QuestionEntityService,
    AnswerEntityService,
    QuestionsResolver,
    QuestionsDataService,
  ],
})
export class QuestionsModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private questionsDataService: QuestionsDataService,
  ) {
    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('Question', questionsDataService);
  }
}
