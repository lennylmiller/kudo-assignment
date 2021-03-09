import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Question } from '../model/question';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { QuestionsHttpService } from '../services/questions-http.service';
import { QuestionEntityService } from '../services/question-entity.service';

@Component({
  selector: 'question-dialog',
  templateUrl: './edit-question-dialog.component.html',
  styleUrls: ['./edit-question-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditQuestionDialogComponent {
  form: FormGroup;

  dialogTitle: string;

  question: Question;

  mode: 'create' | 'update';

  loading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private questionsService: QuestionEntityService
  ) {
    this.dialogTitle = data.dialogTitle;
    this.question = data.question;
    this.mode = data.mode;

    const formControls = {
      description: ['', Validators.required],
      category: ['', Validators.required],
      longDescription: ['', Validators.required],
      promo: ['', []],
    };

    if (this.mode == 'update') {
      this.form = this.fb.group(formControls);
      this.form.patchValue({ ...data.question });
    } else if (this.mode == 'create') {
      this.form = this.fb.group({
        ...formControls,
        url: ['', Validators.required],
        iconUrl: ['', Validators.required],
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    const question: Question = {
      ...this.question,
      ...this.form.value,
    };

    if (this.mode == 'update') {
      this.questionsService.update(question);

      this.dialogRef.close();
    } else if (this.mode == 'create') {
      this.questionsService.add(question).subscribe((newQuestion) => {
        // console.log('New Question', newQuestion);

        this.dialogRef.close();
      });
    }
  }
}
