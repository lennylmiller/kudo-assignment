import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { Question } from '../model/question';
import { defaultDialogConfig } from '../shared/default-dialog-config';
import { MatDialog } from '@angular/material/dialog';
import { EditQuestionDialogComponent } from '../edit-question-dialog/edit-question-dialog.component';

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

  constructor(private dialog: MatDialog) {}

  getAvatarURL(author) {
    return `https://kudo-assignment.s3-us-west-2.amazonaws.com/${author}.jpg`
  }

  ngOnInit(): void {}

  editQuestion(question: Question) {
    const dialogConfig = defaultDialogConfig();
    // console.log({ question });
    dialogConfig.data = {
      question,
      mode: 'update',
    };

    this.dialog
      .open(EditQuestionDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.questionChanged.emit());
  }
}
