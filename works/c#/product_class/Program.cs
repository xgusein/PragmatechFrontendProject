using System;
using System.Globalization;

namespace ConsoleApp 
{

    class Product
    {
        public string Name { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
    }

    class Program {

        static void Main(string[] args)
        {
            //Product class => name, price, description
            //take an unlimited number of products and keep in an array
            //Let the user determine the number of products
            // to list added products

            System.Console.WriteLine("Piece: ");
            int piece = int.Parse(Console.ReadLine());

            Product[] products = new Product[piece];

            int i=0;
            Product prd;

            do
            {
                prd = new Product();

                System.Console.Write("Name of product: ");
                prd.Name = Console.ReadLine();

                System.Console.Write("Price of product: ");
                prd.Price = double.Parse(Console.ReadLine());

                System.Console.Write("Description: ");
                prd.Description = Console.ReadLine();

                products[i] = prd;
                i++;

            } while (piece>i);

            System.Console.WriteLine("*********************");

            // for (int a = 0; a < products.Length; a++)
            // {
            //     System.Console.WriteLine($"Name of product: {products[a].Name} product of price: {products[a].Price} product of description: {products[a].Description}");

            // }
            foreach (var urun in products)
            {
                 Console.WriteLine($"Name of product: {urun.Name} product of price: {urun.Price} product of description: {urun.Description}");
            }
        }
    }
    
}