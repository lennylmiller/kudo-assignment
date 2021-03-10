import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';

import { AngularMaterialModule } from '../angular-material.module';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { UserListComponent } from './user-list/user-list.component';

import { UserEntityService } from './services/user-entity.service';
import { UsersResolver } from './services/users.resolver';
import { UsersDataService } from './services/users-data.service';
import { compareUsers } from './model/user';


import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './users.reducer';

import { UsersRoutingModule } from './users-routing.module';

const entityMetadata: EntityMetadataMap = {
  User: {
    sortComparer: compareUsers,
  }
}

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', usersReducer),
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LeaderBoardComponent,
    UserListComponent,
  ],
  exports: [
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
