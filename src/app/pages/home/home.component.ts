import { Component, OnInit, inject, signal } from '@angular/core';
import { Quizz } from '../../models/quizz.model';
import { QuizzService } from '../../services/quizz.service';
import { RouterLinkWithHref} from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  quizzes = signal<Quizz[]>([]);
  private quizz_service = inject(QuizzService);

  ngOnInit(){
    this.quizz_service.getQuizzes().subscribe({
      next: (quizzes: Quizz[]) => {
        this.quizzes.set(quizzes)
      }
    })
  }
}
