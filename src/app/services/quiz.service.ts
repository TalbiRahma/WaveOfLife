import { Injectable } from '@angular/core';
import { OCEAN_QUIZ_DATA } from '../pages/quiz-page/quiz-data';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private questions = OCEAN_QUIZ_DATA;
  private score = 0;

  getQuestions() {
    return this.questions;
  }

  checkAnswer(selected: string, correct: string) {
    if (selected === correct) {
      this.score++;
    }
  }

  getScore() {
    return this.score;
  }

  resetScore() {
    this.score = 0;
  }
}
