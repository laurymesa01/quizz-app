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

export interface SubmitedQuestion{
  question: Question;
  isCorrect: boolean;
  isIncorrect: boolean;
}
