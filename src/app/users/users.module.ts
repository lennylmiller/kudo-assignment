import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';

import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';


import { UserEntityService } from './services/user-entity.service';
import { UsersResolver } from './services/users.resolver';
import { UsersDataService } from './services/users-data.service';

export const UsersRoutes: Routes = [
  {
    path: '',
    component: LeaderBoardComponent,
    resolve: {
      Users: UsersResolver,
    },
  },
  {
    path: ':userUrl',
    component: UserComponent,
    resolve: {
      Users: UsersResolver,
    },
  },
]

const entityMetadata: EntityMetadataMap = {
  User: {

  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UsersRoutes),
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LeaderBoardComponent,
    UserComponent,
    UserListComponent,
  ],
  exports: [
    UserComponent,
    LeaderBoardComponent,
  ],
  providers: [
    UserEntityService,
    UsersResolver,
    UsersDataService,
  ],
})
export class UsersModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private usersDataService: UsersDataService
  ) {
    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('User', usersDataService);
  }
}
