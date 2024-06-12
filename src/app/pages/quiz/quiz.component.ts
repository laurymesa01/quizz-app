import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { QuizzService } from '../../services/quizz.service';
import { Question, Quizz } from '../../models/quizz.model';
import { QuestionComponent } from "../../components/question/question.component";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit{

  @Input() title: string = '';

  quizz = signal<Quizz>({
    title: '',
    icon: '',
    questions: []
  });

  questions = signal<Question[]>([]);

  private quizz_service = inject(QuizzService);

  ngOnInit(){
    if (this.title) {
      this.quizz_service.getQuizzByTitle(this.title).subscribe({
        next: (quizz: Quizz[]) => {
          this.quizz.set(quizz[0]);
          this.questions.set(this.quizz().questions);
        }
      })
    }

  }
}
