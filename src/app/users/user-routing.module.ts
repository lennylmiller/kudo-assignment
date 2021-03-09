import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component'
import { UsersResolver } from './services/users.resolver';

const routes: Routes = [
  {
    path: '',
    component: LeaderBoardComponent,
    resolve: {
      Users: UsersResolver,
    },
  },
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class UserRoutingModule { }
