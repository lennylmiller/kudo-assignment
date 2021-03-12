import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { QuestionState } from '../../store/questions/questions.reducer';
import { loggedInUser } from '../../store/auth/auth.selectors';
import { AuthState } from '../../auth/reducers';
import { Question } from '../model/question';
import { User } from '../../users/model/user';
import { imageMaps } from './../../../../server/db-data';

@Component({
  selector: 'question-dialog',
  templateUrl: './read-question-dialog.component.html',
  styleUrls: ['./read-question-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadQuestionDialogComponent implements OnInit {
  mode: 'create' | 'update';

  currentUser: User;

  dialogTitle: string;

  question: Question;

  loading$: Observable<boolean>;

  loggedInUser$: Observable<AuthState>;

  constructor(
    private dialogRef: MatDialogRef<ReadQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private store: Store<QuestionState>
  ) {
    this.dialogTitle = data.dialogTitle;
    this.question = data.question;
    this.mode = data.mode;
  }

  ngOnInit(): void {
    this.loggedInUser$ = this.store.pipe(select(loggedInUser));
    this.loggedInUser$.subscribe((res) => (this.currentUser = res.user));
  }

  onClose() {
    this.dialogRef.close();
  }

  getAvatarURL(author: string) {
    return `https://kudo-assignment.s3-us-west-2.amazonaws.com/${author}.jpg`;
  }

  getQuestionImageURL(id: string) {
    let imageURL = imageMaps[id];

    return !imageURL ? imageMaps['newUserOne'] : imageMaps[id];
  }

  isSelected(option: string) {
    return this.question[option].votes.includes(this.currentUser.id);
  }

  get stats() {
    const votesOne = this.question.optionOne.votes.length;
    const votesTwo = this.question.optionTwo.votes.length;
    const votesTotal = votesOne + votesTwo;
    const votesOnePercentage = (votesTotal / votesOne) * 100;
    const votesTwoPercentage = (votesTotal / votesTwo) * 100;
    return {
      optionOneStats: {
        total: votesOne,
        percentage: votesOnePercentage,
      },
      optionTwoStats: {
        total: votesTwo,
        percentage: votesTwoPercentage,
      },
    };
  }
}
