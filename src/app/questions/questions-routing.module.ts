import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsResolver } from './services/questions.resolver';
import { AuthGuard } from './../auth/auth.guard';

export const QuestionsRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent,
    resolve: {
      Questions: QuestionsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(QuestionsRoutes)],
  exports: [RouterModule],
})

export class QuestionsRoutingModule {}
