import { Component, Input, inject } from '@angular/core';
import { Quizz } from '../../models/quizz.model';
import { RouterLinkWithHref} from '@angular/router';
import { ColorsService } from '../../services/colors.service';


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

  private colors_service = inject(ColorsService);
  color: string = '';

  getColor(quizz: string){
    this.colors_service.switchColorByQuizz(quizz).subscribe({
      next: (c) => {
        this.color = c
      }
    })
    return this.color;
  }


}
