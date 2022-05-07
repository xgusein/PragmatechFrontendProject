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
        public bool checkAnswer { get; set; }
    }



    class Program {

        static void Main(string[] args)
        {
            
           var q1 = new Question("Which is the best programming language?", new string[]{"Python","C#","Java","C++"},"C#");
           var q2 = new Question("Which is the popular programming language?", new string[]{"C#","Python","Java","C++"},"C#");
           var q3 = new Question("Which is the top earing programming language?", new string[]{"C#","Python","Java","C++"},"C#");

        }
    }
    
}