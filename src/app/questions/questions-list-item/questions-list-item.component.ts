import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditQuestionDialogComponent } from '../edit-question-dialog/edit-question-dialog.component';

import { Question } from '../model/question';
import { QuestionEntityService } from '../services/question-entity.service';
import { defaultDialogConfig } from '../shared/default-dialog-config';

@Component({
  selector: 'questions-list-item',
  templateUrl: './questions-list-item.component.html',
  styleUrls: ['./questions-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsListItemComponent implements OnInit {
  @Input()
  questions: Question[];

  @Output()
  question = new EventEmitter();
  questionChanged: any;

  constructor(
    private dialog: MatDialog,
    private questionService: QuestionEntityService
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
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
