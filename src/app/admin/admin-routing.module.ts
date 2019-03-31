import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { Category } from './category/category';
import { CategoryComponent } from './category/category.component';
import { QuestionManagementComponent } from './question-management/question-management.component';

const routes: Routes = [
  {
    path: 'admindashboard', component: AdminDashBoardComponent,
    children: [
      { path: 'AddCategory', component: CategoryComponent },
      { path: 'AddUser', component: CategoryComponent },
      { path: 'AddQuastion', component: QuestionManagementComponent },
      { path: 'AddExam', component: CategoryComponent },
      { path: 'ManageExam', component: CategoryComponent }
    ]
  }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
