import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css'
})
export class QuizPageComponent {

  questions: any[];
  currentQuestionIndex = 0;
  selectedAnswer = '';
  showResults = false;

  constructor(private quizService: QuizService) {
    this.questions = this.quizService.getQuestions();
  }

  // Function to submit answer
  submitAnswer() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    this.quizService.checkAnswer(this.selectedAnswer, currentQuestion.answer);

    // Move to the next question or show results
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedAnswer = '';
    } else {
      this.showResults = true;
    }
  }

  // Restart the quiz
  restartQuiz() {
    this.quizService.resetScore();
    this.currentQuestionIndex = 0;
    this.showResults = false;
    this.selectedAnswer = '';
  }

  // Function to get score
  getScore() {
    return this.quizService.getScore();
  }

  // Function to go to the next question
  nextQuestion() {
    if (this.selectedAnswer) {
      this.submitAnswer();
    }
  }
}
