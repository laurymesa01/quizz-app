import { Component, Input, OnInit, signal } from '@angular/core';
import { Question } from '../../models/quizz.model';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent implements OnInit{

  @Input() questions: Question[] = [];

  currentlyIndex: number = 0;
  selectedOption: string = '';
  score: number = 0;
  correct: boolean = false;
  isSelected: boolean = false;
  isSubmited: boolean = false;
  isError: boolean = false;
  isNextQuestionButtonVisible: boolean = false;
  isSubmitButtonVisible: boolean = true;


  ngOnInit(): void {
    // if (this.questions) {
    //   this.submitedQuestion().question = this.questions[this.currentlyIndex];
    // }
  }

  checkAnswer(option: string){
    this.isSelected = true;
    this.selectedOption = option;
    this.isError = false;
    if (this.selectedOption === this.questions[this.currentlyIndex].answer) {
      this.score ++;
    }
  }

  submitQuestion(){
    this.isSubmited = true;
    if (this.isSelected) {
      this.isNextQuestionButtonVisible = true;
      this.isSubmitButtonVisible = false;
    }
    else{
      this.isError = true;
    }
  }

  nextQuestion(){
    this.currentlyIndex ++;
    this.isNextQuestionButtonVisible = false;
    this.isSubmitButtonVisible = true;
    this.isSubmited = false;
    this.isError = false;
  }




}
