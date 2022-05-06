using System;
using System.Globalization;

namespace ConsoleApp 
{
    class Comment
    {
        public int CommentId { get; set; }
        public string Text { get; set; }
    }

    class Product
    {
        public Product()
        {
            
            this.ProductId = (new Random()).Next(11111,99999);

        }

        public Product(int productId)
        {
            this.ProductId = productId;
        }

        public Product(int productId, string name, double price, bool isApproved )
        {
            this.ProductId = productId;
            this.Name = Name;
            this.Price = price;
            this.IsApproved = isApproved;
        }


        public int ProductId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public bool IsApproved { get; set; }
        public Comment[] Comments { get; set; }

        
    }



    class Program {

        static void Main(string[] args)
        {
            
            var c1 = new Comment {CommentId=1,Text="Nice phone"};

            var p1 = new Product();

            p1.Comments = new Comment[3];

            p1.Comments[0] = c1;

            System.Console.WriteLine(p.ProductId);
            System.Console.WriteLine(p.Name);
            System.Console.WriteLine(p.Price);
            System.Console.WriteLine(p.IsApproved);

            System.Console.WriteLine("*******************");

            var p2 = new Product(1213);

            System.Console.WriteLine(p2.ProductId);
            System.Console.WriteLine(p2.Name);
            System.Console.WriteLine(p2.Price);
            System.Console.WriteLine(p2.IsApproved);

            System.Console.WriteLine("*******************");


            var p3 = new Product(1231,"Samsung S7",3000,true);

            System.Console.WriteLine(p3.ProductId);
            System.Console.WriteLine(p3.Name);
            System.Console.WriteLine(p3.Price);
            System.Console.WriteLine(p3.IsApproved);
            

        }
    }
    
}