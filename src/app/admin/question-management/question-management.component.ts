import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { Question } from './question';
import { QuestionVM } from './questionVM';
import { CategoryServiceService } from '../category/category-service.service';
import { Category } from '../category/category';
import { AnswerVM } from './answerVM';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

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
  category : Category
  answer : AnswerVM


  profileForm = this.fb.group({
    questionText: ['', Validators.required],
    category : [''],
    
    // aliases: this.fb.array([
    //   this.fb.control('')
    // ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }


  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    
    
    this.answers.push()
  }

  
  constructor(private fb: FormBuilder,private questionService : QuestionService , private categoryservice : CategoryServiceService ) { }

  //questions : Question
  questions : Question[]
  ngOnInit() {
    //debugger
    this.questionService.getquestions().subscribe(a => this.questions = a)
    this.categoryservice.getCategories().subscribe(cats => this.categories = cats)

    console.log("categories")
    console.log(this.categories)
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
