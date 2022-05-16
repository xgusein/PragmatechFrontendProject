using System;
using System.Globalization;

namespace ConsoleApp 
{

    class User
    {
        public string Username { get; set; }
        public string Email { get; set; }
    }

    class Program {

        static void Main(string[] args)
        {

            var list = new List<string>()
            {
                "1","2","5a","10b","abc","10","50"
            };

            foreach (var item in list)
            {
                try
                {
                    int a = int.Parse(item);
                    System.Console.WriteLine(a);
                }
                catch (System.Exception)
                {
                    continue;
                }
            }

        }

        while (true)
        {
            System.Console.WriteLine("Number: ");
            string input = System.Console.ReadLine();

            if (input == "q")
            {
                break;
            }
            try
            {
                int number = int.Parse(input);
                System.Console.WriteLine(" Number: {0}",number);
            }
            catch (System.Exception)
            {
                System.Console.WriteLine("Incorrect number");
            }
        };

        System.Console.WriteLine("password:");
        string password = System.Console.ReadLine();
        try
        {
            CheckPassword(password);
        }
        catch (System.Exception ex)
        {
            
            System.Console.WriteLine(ex.Message);
        }
    }

    static void CheckPassword(string password)
    {
        string alfabe = "a,d,f,d,g,b,e";
        foreach (var alfa in alfabe)
        {
            if (alfabe.IndexOf(alfa)>-1)
            {
                throw new Exception("Do not use this character")
            }
        }
        System.Console.WriteLine("correcct password");
    }
    
}