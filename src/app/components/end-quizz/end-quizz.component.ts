import { Component, Input } from '@angular/core';
import { Quizz } from '../../models/quizz.model';

@Component({
  selector: 'app-end-quizz',
  standalone: true,
  imports: [],
  templateUrl: './end-quizz.component.html',
  styleUrl: './end-quizz.component.scss'
})
export class EndQuizzComponent {

  @Input() score: number = 0;
  @Input() quizz: Quizz = {
    title: '',
    icon: '',
    questions: []
  };


}
