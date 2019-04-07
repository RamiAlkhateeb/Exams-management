import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { CategoryComponent } from './category/category.component';
import { QuestionManagementComponent } from './question-management/question-management.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  declarations: [AdminDashBoardComponent,CategoryComponent, QuestionManagementComponent],
  exports:[
    AdminDashBoardComponent,CategoryComponent
  ]
})
export class AdminModule { }
