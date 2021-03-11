import { select, Store } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { QuestionEntityService } from '../services/question-entity.service';
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

  dialogTitle: string;

  currentUser: User;

  form: FormGroup;

  question: Question;

  mode: 'create' | 'update';

  loading$: Observable<boolean>;

  loggedInUser$: Observable<AuthState>;

  option: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private questionsService: QuestionEntityService,
    private store: Store<QuestionState>
  ) // private usersService: UserEntityService KEEP IN CODE - There is a bug in the backendfor updating partial user
  {
    this.dialogTitle = data.dialogTitle;
    this.question = data.question;
    this.mode = data.mode;
    this.form = this.fb.group({
      optionOne: [, { validators: [Validators.required], updatOn: 'change' }],
      optionTwo: [, { validators: [Validators.required], updatOn: 'change' }],
    })

    if (this.mode == 'update') {
      this.form.patchValue({ ...data.question });
    } else if (this.mode == 'create') {

    }
  }

  ngOnInit(): void {
    this.loggedInUser$ = this.store.pipe(select(loggedInUser));
    this.loggedInUser$.subscribe((res) => (this.currentUser = res.user));
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
            votes: [...selectedOption.votes, this.currentUser.id],
          },
        };
      } else {
        // optionTwo
        partialQuestion = {
          id: question.id,
          optionOne: {
            text: this.question.optionOne.text,
            votes: [...selectedOption.votes, this.currentUser.id],
          },
        };
      }

      this.questionsService.update(partialQuestion);

      // // MOVE THIS TO AN EFECT
      // const key = this.question.id;
      // const value = this.option;
      // let answer = {};
      // answer[key] = value;
      // const partialUser = {
      //   id: this.loggedInUser.id,
      //   answers: Object.assign({}, this.loggedInUser.answers, answer),
      // };
      // this.usersService.update(partialUser);  // KEEP IN CODE - There is a bug in the backendfor updating partial user

      this.dialogRef.close();
    } else if (this.mode == 'create') {

      const newQuestion = {
        id: this.getRandomString(20),
        author: this.currentUser.id,
        timestamp: Date.now(),
        optionOne: {
          votes: [],
          text: this.form.get('optionOne').value,
        },
        optionTwo: {
          votes: [],
          text: this.form.get('optionTwo').value,
        },
      };

      this.questionsService.add(newQuestion).subscribe((newQuestion) => {
        console.log('newQuestion', newQuestion);
        this.dialogRef.close();
      });
    }
  }

  getAvatarURL(author) {
    return `https://kudo-assignment.s3-us-west-2.amazonaws.com/${author}.jpg`;
  }

  radioChange(event) {
    this.option = event.value;
  }

  get isUpdate() {
    return this.mode === 'update';
  }

  getRandomString(length) {
    var randomChars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }
}
