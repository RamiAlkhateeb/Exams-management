import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from './category-service.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService : CategoryServiceService) { }

  cc : Category
  cats : Category[]
  ngOnInit() {
    this.categoryService.getCategories().subscribe(a => this.cats = a)
  }

  addcategory(newCat : string ){
    debugger
    let cat : Category = { Id : this.cats.length+1 , Name : newCat}
    this.categoryService.postCategory(cat).subscribe(newc => this.cats.push(newc))
  }

  deletecategory(id : number){
    debugger
    this.categoryService.deleteCategory(id).subscribe()
    //this.categoryService.getCategories().subscribe(a => this.cats = a)
  }

}
