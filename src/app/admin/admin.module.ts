import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { CategoryComponent } from './category/category.component';
import { QuestionManagementComponent } from './question-management/question-management.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [AdminDashBoardComponent,CategoryComponent, QuestionManagementComponent],
  exports:[
    AdminDashBoardComponent,CategoryComponent
  ]
})
export class AdminModule { }
