import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  color = signal<string>('');
  private colorSubject = new BehaviorSubject<string>('');
  public $color = this.colorSubject.asObservable();

  constructor() { }

  switchColorByQuizz(quizz: string){
    switch (quizz) {
      case 'HTML':
        this.colorSubject.next('#FFF1E9')
        // color = '#FFF1E9'
        break;
      case 'CSS':
        this.colorSubject.next('#E0FDEF')
        // color = '#E0FDEF'
        break;
      case 'JavaScript':
        this.colorSubject.next('#EBF0FF')
        // color = '#EBF0FF'
        break;
      case 'Accessibility':
        this.colorSubject.next('#F6E7FF')
        // color = '#F6E7FF'
        break;
      default:
        break;
    }
    return this.$color;
  }
}
