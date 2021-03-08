import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
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

  loggedInUser$: Observable<User | User[]>;

  constructor(
    private dialog: MatDialog,
    private questionsService: QuestionEntityService
  ) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.beginnerQuestions$ = this.questionsService.entities$.pipe(
      map((questions) =>
        questions.filter((question) => question.category == 'BEGINNER')
      )
    );

    this.advancedQuestions$ = this.questionsService.entities$.pipe(
      map((questions) =>
        questions.filter((question) => question.category == 'ADVANCED')
      )
    );

    this.promoTotal$ = this.questionsService.entities$.pipe(
      map((questions) => questions.filter((question) => question.promo).length)
    );
  }

  onAddQuestion() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Create Question',
      mode: 'create',
    };

    this.dialog.open(EditQuestionDialogComponent, dialogConfig);
  }
}
