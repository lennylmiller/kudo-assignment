import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { Question } from '../model/question';
import { defaultDialogConfig } from '../shared/default-dialog-config';
import { QuestionEntityService } from '../services/question-entity.service';
import { EditQuestionDialogComponent } from '../edit-question-dialog/edit-question-dialog.component';
import { User } from '../../auth/model/user.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  promoTotal$: Observable<number>;

  beginnerQuestions$: Observable<Question[]>;

  advancedQuestions$: Observable<Question[]>;

  unAnsweredQuestions$: Observable<Question[]>;

  answeredQuestions$: Observable<Question[]>;


  loggedInUser$: Observable<User | User[]>;

  constructor(
    private dialog: MatDialog,
    private questionsService: QuestionEntityService
  ) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    const jsonUser = localStorage.getItem('user'); // Not clear on the best way to make this ngrx/'esque
    const user = JSON.parse(jsonUser);
    this.unAnsweredQuestions$ = this.questionsService.entities$.pipe(
      map((questions) =>
        questions.filter((question) => {
          return !question.optionOne.votes.includes(user.id) && !question.optionTwo.votes.includes(user.id);
        })
      )
    );

    this.answeredQuestions$ = this.questionsService.entities$.pipe(
      map((questions) =>
        questions.filter((question) => {
          return (question.optionOne.votes.includes(user.id) || question.optionTwo.votes.includes(user.id));
        })
      )
    );
  }

  onAddQuestion() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Would You Rather',
      mode: 'create',
    };

    this.dialog.open(EditQuestionDialogComponent, dialogConfig);
  }
}
