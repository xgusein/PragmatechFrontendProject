using System;
using System.Globalization;

namespace ConsoleApp 
{
    
    class Question
    {
        public Question(string text,string[] choices,string answer)
        {
            this.Text = text;
            this.Choices = choices;
            this.Answer = answer;
        }
        public string Text { get; set; }
        public string[] Choices { get; set; }
        public string Answer { get; set; }
        public bool checkAnswer  (string answer) 
        { 
            return this.Answer.ToLower() == answer.ToLower();
        }
    }

    class Quiz
    {
        public Quiz(Question[] questions)
        {
            this.Questions = questions;
            this.QuestionIndex = 0;
            this.Score = 0;
        }
        private Question[] Questions { get; set; }
        private int QuestionIndex { get; set; }
        private int Score { get; set; }

        private Question GetQuestion() 
        {
            return this.Questions[this.QuestionIndex];
        }

        public void DisplayQuestion()
        {
            var question = this.GetQuestion();
            this.DisplayProgress();
            System.Console.WriteLine($"questıon{this.QuestionIndex+1}:{question.Text}");
            foreach (var c in question.Choices)
            {
               System.Console.WriteLine($"-c{}");
            }
            System.Console.WriteLine("answerr:");
            var answerr = Console.ReadLine();
            this.Guess(answerr);
        }

        private void Guess(string answer)
        {
            var question = this.GetQuestion();
            if (question.checkAnswer(answer))
            {
                this.Score++;
            } 
            this.QuestionIndex++;
            if (this.Questions.Length == this.QuestionIndex)
            {
                this.DisplayScore()
            }
            else
            {
                this.DisplayProgress();
                this.DisplayQuestion();
            }
            
        }

        private void DisplayScore() 
        {
            System.Console.WriteLine($"Score: {this.Score}");
        }
        private void DisplayProgress()
        {
            int totalQuestion = this.Questions.Length;
            int questionNumber = this.QuestionIndex+1;

            if (totalQuestion>=question)
            {
                System.Console.WriteLine($"Question {questionNumber} of {questionNumber}");
            }
        }
    }

    class Program {

        static void Main(string[] args)
        {
           var q1 = new Question("Which is the best programming language?", new string[]{"Python","C#","Java","C++"},"C#");
           var q2 = new Question("Which is the popular programming language?", new string[]{"C#","Python","Java","C++"},"C#");
           var q3 = new Question("Which is the top earing programming language?", new string[]{"C#","Python","Java","C++"},"C#");

           var questions = new Question[]{q1,q2,q3};
           var quiz = new Quiz(questions);
           quiz.DisplayQuestion();
            


        //    System.Console.WriteLine(quiz.GetQuestion().Text);
        //    quiz.QuestionIndex++;

        //    foreach (var q in questions)
        //    {
        //        System.Console.WriteLine($"question {index}: {q.Text}");
        //        index++;

        //        foreach (var c in q.Choices)
        //        {
        //            System.Console.WriteLine($"-c{}");
        //        }
        //        System.Console.WriteLine("Answer:");
        //        var answerr = Console.ReadLine();
        //        System.Console.WriteLine(q.checkAnswer(answerr));
        //    }

        }
    }
    
}