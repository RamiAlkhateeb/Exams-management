import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path : 'admindashboard' , component : AdminDashBoardComponent 
,children : [
  { path : 'category' , component : CategoryComponent}
  
]
 },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
