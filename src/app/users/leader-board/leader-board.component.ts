import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { User } from './../model/user';
import { UserEntityService  } from './../services/user-entity.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  @Input()
  questions: User[];

  users$: Observable<User[]>;

  constructor(private userService: UserEntityService) { }

  ngOnInit(): void {
    this.users$ = this.userService.entities$.pipe(
      map((users) =>
        users.filter((user) => {
          return user.active
        })
      )
    );
  }
}
