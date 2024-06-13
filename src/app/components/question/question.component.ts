import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { Question } from '../../models/quizz.model';
import { CommonModule } from "@angular/common";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent implements OnInit{

  @Input() questions: Question[] = [];
  @Output() onSendScore = new EventEmitter<number>;

  currentlyIndex: number = 0
  showComponent: boolean = true;
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
    //   this.question.set(this.questions[this.currentlyIndex]);
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
    if (this.currentlyIndex !== this.questions.length - 1) {
      this.currentlyIndex ++;
      this.isNextQuestionButtonVisible = false;
      this.isSubmitButtonVisible = true;
      this.isSubmited = false;
      this.isError = false;
      console.log('CURRENTLY INDEX',this.currentlyIndex);
    }
    else{
      this.showComponent = false;
      this.onSendScore.emit(this.score);
    }
  }





}
