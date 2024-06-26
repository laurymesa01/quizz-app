import { Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild, signal } from '@angular/core';
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
  @Output() onSendScore = new EventEmitter<number>;

  currentlyIndex: number = 0
  showComponent: boolean = true;
  selectedOption: string = '';
  score: number = 0;
  progress: number = 0;
  correct: boolean = false;
  isSelected: boolean = false;
  isSubmited: boolean = false;
  isError: boolean = false;
  isNextQuestionButtonVisible: boolean = false;
  isSubmitButtonVisible: boolean = true;
  isButtonDisabled = false;
  stringRef = String;


  ngOnInit(): void {
    this.getProgress();
  }

  @HostListener('keydown.arrowDown', ['$event'])
  onArrowDown(event: KeyboardEvent, index: number){
    event.preventDefault();
  }

  moveFocus(){}

  getProgress(){
    this.progress = (this.currentlyIndex + 1) * 10;
  }

  checkAnswer(option: string){
    this.isSelected = true;
    this.isError = false;
    this.selectedOption = option;
    if (this.selectedOption === this.questions[this.currentlyIndex].answer) {
      this.score ++;
    }
  }

  submitQuestion(){
    if (this.isSelected) {
      this.isNextQuestionButtonVisible = true;
      this.isSubmitButtonVisible = false;
      this.isButtonDisabled = true;
      this.isSubmited = true;
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
      this.isSelected = false;
      this.isError = false;
      this.isButtonDisabled = false;
      this.getProgress();
    }
    else{
      this.showComponent = false;
      this.onSendScore.emit(this.score);
    }
  }

}
