import { Component, Input } from '@angular/core';
import { Quizz } from '../../models/quizz.model';
import { RouterLinkWithHref} from '@angular/router';


@Component({
  selector: 'app-end-quizz',
  standalone: true,
  imports: [RouterLinkWithHref],
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
