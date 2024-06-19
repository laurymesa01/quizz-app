import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Colors, Quizz } from '../../models/quizz.model';
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

  getColor(i: number){
    const colors = ['#FFF1E9', '#E0FDEF', '#EBF0FF', '#F6E7FF'];
    return colors[i % colors.length];
  }
}
