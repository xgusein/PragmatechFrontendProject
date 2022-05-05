using System;
using System.Globalization;

namespace ConsoleApp 
{

    class Car
    {
        
        public string brand { get; set; }
        public string model { get; set; }
        public string color { get; set; }
        public bool automatic { get; set; }

        public void Start()
        {
            System.Console.WriteLine("$"{this.brand}" $"{this.model}" was started. ");
        }

        public void Stop()
        {
            System.Console.WriteLine("$"{this.brand}" $"{this.model}" was stoped");
        }

        public void Slowdown()
        {
            System.Console.WriteLine("$"{this.brand}" $"{this.model}" the car is slowing down");
        }

        public void Speedup()
        {
            System.Console.WriteLine("$"{this.brand}" $"{this.model}" is accelerating");
        }

        public void Menu()
        {
            string command = "";

            do
            {
                System.Console.WriteLine("1-Start 2-Speedup 3-Slowdown 4-Stop Exit: E");
                System.Console.WriteLine("Choice:");
                command = Console.Readline();
                
                switch (command)
                {
                    case "1":
                        this.Start();
                        break;
                    case "2":
                        this.Stop();
                        break;
                    case "3":
                        this.Slowdown();
                        break;
                    case "4":
                        Speedup();
                        break;
                    default:
                        System.Console.WriteLine("wrong choose");
                        break;
                }

            } while (command !="E");

        }


    }

    class Program {

        static void Main(string[] args)
        {
            var opel = new Car();
            opel.brand = "Opel";
            opel.model = "Astra";
            opel.color = "White";
            opel.automatic =true;


            // opel.Start();
            // opel.Stop();
            // opel.Slowdown();
            // opel.Speedup();

            opel.Menu();

        }
    }
    
}