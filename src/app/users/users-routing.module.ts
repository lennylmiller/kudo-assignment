import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { AuthGuard } from './../auth/auth.guard';
import { UsersResolver } from './services/users.resolver';

export const UsersRoutes: Routes = [
  {
    path: 'users',
    canActivate: [AuthGuard],
    component: LeaderBoardComponent,
    resolve: {
      Users: UsersResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(UsersRoutes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
