import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { EditQuestionDialogComponent } from '../edit-question-dialog/edit-question-dialog.component';
import { defaultDialogConfig } from '../shared/default-dialog-config';
import { QuestionEntityService } from '../services/question-entity.service';
import { Question } from '../model/question';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'questions-card-list',
  templateUrl: './questions-card-list.component.html',
  styleUrls: ['./questions-card-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsCardListComponent implements OnInit {
  @Input()
  questions: Question[];

  @Output()
  questionChanged = new EventEmitter();

  constructor(
    private dialog: MatDialog,
    private questionService: QuestionEntityService
  ) {}

  ngOnInit() {}

  editQuestion(question: Question) {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Edit Question',
      question,
      mode: 'update',
    };

    this.dialog
      .open(EditQuestionDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.questionChanged.emit());
  }

  onDeleteQuestion(question: Question) {
    this.questionService.delete(question).subscribe(
      () => console.log('Delete completed'),
      (err) => console.log('Deleted failed', err)
    );
  }
}
