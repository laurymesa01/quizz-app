export interface Quizz {
  title:     string;
  icon:      string;
  questions: Question[];
}

export interface Question {
  question: string;
  options:  string[];
  answer:   string;
}

export enum Colors{
  LightOrange = '#FFF1E9',
  LightGreen = '#E0FDEF',
  LightBlue = '#EBF0FF',
  LightViolet = '#F6E7FF'
}
