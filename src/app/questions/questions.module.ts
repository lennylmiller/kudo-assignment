import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';

import { AngularMaterialModule } from '../angular-material.module';
import { EditQuestionDialogComponent } from './edit-question-dialog/edit-question-dialog.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionsHttpService } from './services/questions-http.service';
import { compareQuestions } from './model/question';
import { QuestionEntityService } from './services/question-entity.service';
import { QuestionsResolver } from './services/questions.resolver';
import { QuestionsDataService } from './services/questions-data.service';
import { QuestionsRoutingModule } from './questions-routing.module';
import { ReadQuestionDialogComponent } from './read-question-dialog/read-question-dialog.component';

const entityMetadata: EntityMetadataMap = {
  Question: {
    sortComparer: compareQuestions,
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
};

@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent,
    EditQuestionDialogComponent,
    QuestionListComponent,
    ReadQuestionDialogComponent,
  ],
  exports: [
    HomeComponent,
    EditQuestionDialogComponent,
    QuestionListComponent,
    ReadQuestionDialogComponent,
  ],
  entryComponents: [EditQuestionDialogComponent],
  providers: [
    QuestionsHttpService,
    QuestionEntityService,
    QuestionsResolver,
    QuestionsDataService,
  ],
})
export class QuestionsModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private questionsDataService: QuestionsDataService
  ) {
    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('Question', questionsDataService);
  }
}
