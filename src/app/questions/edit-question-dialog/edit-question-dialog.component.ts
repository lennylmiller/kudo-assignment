import { select, Store } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, queueScheduler } from 'rxjs';

import { QuestionEntityService } from '../services/question-entity.service';
import { UserEntityService } from './../../users/services/user-entity.service';
import { QuestionState } from '../../store/questions/questions.reducer';
import { loggedInUser } from '../../store/auth/auth.selectors';
import { AuthState } from '../../auth/reducers';
import { Question } from '../model/question';
import { User } from '../../users/model/user';

@Component({
  selector: 'question-dialog',
  templateUrl: './edit-question-dialog.component.html',
  styleUrls: ['./edit-question-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditQuestionDialogComponent implements OnInit {

  @Output()
  currentUser: User;

  form: FormGroup;

  dialogTitle: string;

  question: Question;

  mode: 'create' | 'update';

  loading$: Observable<boolean>;

  loggedInUser$: Observable<AuthState>;

  loggedInUser: User;

  option: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private questionsService: QuestionEntityService,
    private store: Store<QuestionState>,
    private usersService: UserEntityService
  ) {
    this.dialogTitle = data.dialogTitle;
    this.question = data.question;
    this.mode = data.mode;

    const formControls = {
      optionOne: ['', Validators.required],
      optionTwo: ['', Validators.required],
    };

    if (this.mode == 'update') {
      this.form = this.fb.group(formControls);
      this.form.patchValue({ ...data.question });
    } else if (this.mode == 'create') {
      this.form = this.fb.group({
        ...formControls,
      });
    }

    const userJSON = localStorage.getItem('user');
    this.loggedInUser = JSON.parse(userJSON);
  }

  ngOnInit(): void {
    const userProfile = localStorage.getItem('user');
    this.currentUser = JSON.parse(userProfile);

    this.loggedInUser$ = this.store.pipe(select(loggedInUser));
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    const question: Question = {
      ...this.question,
    };

    if (this.mode == 'update') {
      const selectedOption = this.question[this.option];

      let partialQuestion;

      if (this.option === 'optionOne') {
        partialQuestion = {
          id: question.id,
          optionOne: {
            text: this.question.optionOne.text,
            votes: [...selectedOption.votes, this.loggedInUser.id]
          }
        }
      } else { // optionTwo
        partialQuestion = {
          id: question.id,
          optionOne: {
            text: this.question.optionOne.text,
            votes: [...selectedOption.votes, this.loggedInUser.id]
          }
        }
      }

      console.log('this.loggedInUser');

      this.questionsService.update(partialQuestion);

      // MOVE THIS TO AN EFECT
      const key = this.question.id;
      const value = this.option;
      let answer = {};

      answer[key] = value;
      const partialUser = {
        id: 'rashmi',
        answers: Object.assign({}, this.loggedInUser.answers, answer)
      }
      // The backend server doesn't accept this???
      // this.usersService.update(partialUser);

      this.dialogRef.close();


    } else if (this.mode == 'create') {

      this.questionsService.add(question).subscribe((newQuestion) => {
        this.dialogRef.close();
      });
    }
  }

  getAvatarURL(author) {
    return `https://kudo-assignment.s3-us-west-2.amazonaws.com/${author}.jpg`;
  }

  radioChange(event, question) {
    this.option = event.value;
  }
}
