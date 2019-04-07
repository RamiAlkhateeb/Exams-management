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
import { Answer } from './answer';

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
  questions : Question[]
  QuestionId
  //answer : AnswerVM


  profileForm = this.fb.group({
    questionText: ['', Validators.required],
    category : [''],
    answers: this.fb.group({
      answer: [''],
      mark: ['']
    }),
    
    // aliases: this.fb.array([
    //   this.fb.control('')
    // ])
  });

  // get aliases() {
  //   return this.profileForm.get('aliases') as FormArray;
  // }


  updateProfile() {
    this.addquestion()
    
  }

  addanswer() {

    debugger

    if(this.questions)
    {
      this.QuestionId = this.questions[this.questions.length-1].Id+1
    }

    let ans = this.profileForm.get('answers').value
    let id

    // this.questionService.getanswers(this.QuestionId).subscribe(ans => {
    //   this.answers = ans
    //   console.log("ans")
    //   console.log(this.answers)
    // })

    if(this.answers){
     id=  this.answers.length + 1
     
  }
  else{
    id = 0
  }
    let answer : AnswerVM = {Id : id ,  AnswerText : ans.answer , 
      Mark : ans.mark , QuestionId : this.QuestionId }

    let newanswer : Answer = answer

    this.questionService.postAnswer(newanswer).subscribe(newa => this.answers.push(newa))

    // this.questionService.getanswers(this.QuestionId).subscribe(ans => {
    //   this.answers = ans
    //   console.log("ans")
    //   console.log(this.answers)
    // })
    
    
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    debugger
    console.warn(this.profileForm.value);
    // let vv= this.profileForm.get('category').value
    // this.categoryservice.getCategory(vv).subscribe(cat => this.category = cat)

    // this.quesVM.CategoryId = vv
    // this.quesVM.CategoryName = this.category.Name
    //this.answers.push()
  }

  
  constructor(private fb: FormBuilder,private questionService : QuestionService , private categoryservice : CategoryServiceService ) { }

  //questions : Question
  
  ngOnInit() {
    debugger
    this.questionService.getquestions().subscribe(a =>{
      this.questions = a
      console.log("questions")
      console.log(this.questions)
    } )
    
    this.categoryservice.getCategories().subscribe(cats => this.categories = cats)
    
  }

  addquestion(){
    debugger
    
    //this.categoryservice.getCategory(this.quesVM.CategoryId).subscribe(cat => this.categoryID = cat)
    this.quesVM  = { QuestionId : this.questions.length+1 ,QuestionText : this.question.QuestionText , CategoryId : this.quesVM.CategoryId , CategoryName : this.quesVM.CategoryName , IsHTML : false , QuestionTypeId : 1 , Answers : this.answers}
    this.questionService.postquestion(this.quesVM).subscribe(newq => this.questions.push(newq))
  }

  deletecategory(id : number){
    debugger
    this.questionService.deleteCategory(id).subscribe()
    //this.categoryService.getCategories().subscribe(a => this.cats = a)
  }

}
