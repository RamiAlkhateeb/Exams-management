import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { Question } from './question';
import { QuestionVM } from './questionVM';
import { CategoryServiceService } from '../category/category-service.service';
import { Category } from '../category/category';
import { AnswerVM } from './answerVM';

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.scss']
})
export class QuestionManagementComponent implements OnInit {

  categoryID 
  question : Question
  quesVM : QuestionVM
  answers : AnswerVM[]
  categories : Category[]

  constructor(private questionService : QuestionService , private categoryservice : CategoryServiceService ) { }

  //questions : Question
  questions : Question[]
  ngOnInit() {
    this.questionService.getquestions().subscribe(a => this.questions = a)
    this.categoryservice.getCategories().subscribe(a => this.categories = a)
  }

  addquestion(){
    debugger
    
    this.categoryservice.getCategory(this.quesVM.CategoryId).subscribe(cat => this.categoryID = cat)
    this.quesVM  = { QuestionId : this.questions.length+1 ,QuestionText : this.question.QuestionText , CategoryId : this.quesVM.CategoryId , CategoryName : this.quesVM.CategoryName , IsHTML : false , QuestionTypeId : 1 , Answers : this.answers}
    this.questionService.postquestion(this.quesVM).subscribe(newq => this.questions.push(newq))
  }

  deletecategory(id : number){
    debugger
    this.questionService.deleteCategory(id).subscribe()
    //this.categoryService.getCategories().subscribe(a => this.cats = a)
  }

}
