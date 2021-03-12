import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { loggedInUser } from '../../store/auth/auth.selectors';
import { AppState } from '../../reducers';
import { Question } from '../model/question';
import { defaultDialogConfig } from '../shared/default-dialog-config';
import { MatDialog } from '@angular/material/dialog';
import { EditQuestionDialogComponent } from '../edit-question-dialog/edit-question-dialog.component';
import { ReadQuestionDialogComponent } from '../read-question-dialog/read-question-dialog.component';
import { User } from '../../users/model/user';
import { Observable } from 'rxjs';
import { AuthState } from '../../auth/reducers';

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class QuestionListComponent implements OnInit {
  @Input()
  questions: Question[];

  @Output()
  question = new EventEmitter();

  @Output()
  questionChanged = new EventEmitter();

  displayedColumns: string[] = [
    'author',
    'firstOption',
    'or',
    'secondOption',
    'timestamp',
  ];

  loggedInUser$: Observable<AuthState>;

  @Output()
  currentUser: User;

  constructor(private dialog: MatDialog, private store: Store<AppState>) {}

  getAvatarURL(author) {
    return `https://kudo-assignment.s3-us-west-2.amazonaws.com/${author}.jpg`;
  }

  ngOnInit(): void {
    this.loggedInUser$ = this.store.pipe(select(loggedInUser));
    this.loggedInUser$.subscribe((res) => (this.currentUser = res.user));
  }

  editQuestion(question: Question) {
    const isAnswered = this.isAnswered(question);

    const dialogConfig = defaultDialogConfig();
    console.log({ question, isAnswered });
    dialogConfig.data = {
      question,
      mode: 'update',
    };

    const Component = isAnswered
      ? ReadQuestionDialogComponent
      : EditQuestionDialogComponent;

    this.dialog
      .open(<any>Component, dialogConfig)
      .afterClosed()
      .subscribe(() => this.questionChanged.emit());
  }

  isAnswered(question: Question): boolean {
    let answered: boolean;
    answered = question.optionOne.votes.includes(this.currentUser.id);
    answered ||= question.optionTwo.votes.includes(this.currentUser.id);

    return answered;
  }
}
