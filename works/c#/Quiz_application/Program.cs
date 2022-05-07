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



    class Program {

        static void Main(string[] args)
        {
           var q1 = new Question("Which is the best programming language?", new string[]{"Python","C#","Java","C++"},"C#");
           var q2 = new Question("Which is the popular programming language?", new string[]{"C#","Python","Java","C++"},"C#");
           var q3 = new Question("Which is the top earing programming language?", new string[]{"C#","Python","Java","C++"},"C#");

           var questions = new Question[]{q1,q2,q3};

           foreach (var q in questions)
           {
               System.Console.WriteLine($"question {index}: {q.Text}");
               index++;

               foreach (var c in q.Choices)
               {
                   System.Console.WriteLine($"-c{}");
               }
               System.Console.WriteLine("Answer:");
               var answerr = Console.ReadLine();
               System.Console.WriteLine(q.checkAnswer(answerr));
           }

        }
    }
    
}