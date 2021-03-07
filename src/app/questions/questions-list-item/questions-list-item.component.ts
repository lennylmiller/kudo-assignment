import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Question } from '../model/question';
import { QuestionEntityService } from '../services/question-entity.service';

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

  constructor(
    private dialog: MatDialog,
    private questionService: QuestionEntityService
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
