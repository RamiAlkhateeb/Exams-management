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

  categories : Category[]
  ngOnInit() {
    this.categoryService.getCategories().subscribe(a => this.categories = a)
  }

}
