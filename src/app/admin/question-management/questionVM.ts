import { AnswerVM } from "./answerVM";

export class QuestionVM {
    QuestionId : number
    CategoryId : number
    CategoryName : string
    QuestionText : string
    IsHTML : boolean
    QuestionTypeId : number
    Answers : AnswerVM[] 
    
}