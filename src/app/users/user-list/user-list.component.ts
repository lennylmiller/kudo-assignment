import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations'

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
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
export class UserListComponent implements OnInit {

  @Input()
  users: User[];

  displayedColumns: string[] = [
    'avatarURL',
    'name',
    'email',
    'answers',
    'questions',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
