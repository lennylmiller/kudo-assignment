import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../model/question';
import { Observable, of } from 'rxjs';
import { Answer } from '../model/answer';
import {
  concatMap,
  delay,
  filter,
  first,
  map,
  shareReplay,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { QuestionsHttpService } from '../services/questions-http.service';
import { QuestionEntityService } from '../services/question-entity.service';
import { AnswerEntityService } from '../services/answer-entity.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent implements OnInit {
  question$: Observable<Question>;

  loading$: Observable<boolean>;

  answers$: Observable<Answer[]>;

  displayedColumns = ['seqNo', 'description', 'duration'];

  nextPage = 0;

  constructor(
    private questionsService: QuestionEntityService,
    private answersService: AnswerEntityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const questionUrl = this.route.snapshot.paramMap.get('questionUrl');

    this.question$ = this.questionsService.entities$.pipe(
      map((questions) =>
        questions.find((question) => question.url === questionUrl)
      )
    );

    this.answers$ = this.answersService.entities$.pipe(
      withLatestFrom(this.question$),
      tap(([answers, question]) => {
        if (this.nextPage === 0) {
          this.loadAnswersPage(question);
        }
      }),
      map(([answers, question]) =>
        answers.filter((answer) => answer.questionId === question.id)
      )
    );

    this.loading$ = this.answersService.loading$.pipe(delay(0));
  }

  loadAnswersPage(question: Question) {
    this.answersService.getWithQuery({
      questionId: question.id.toString(),
      pageNumber: this.nextPage.toString(),
      pageSize: '3',
    });

    this.nextPage += 1;
  }
}
