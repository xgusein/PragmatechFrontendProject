class Program {

    static void Main(string[] args)
    {
    //Aplication: Prime number
    // Check if a number entered is prime.
        bool isprime = true;

        System.Console.WriteLine("number: ");
        int number = int.Parse(System.Console.ReadLine());

        if (number==1)
            System.Console.WriteLine("1 is not prime number");
        
        for (int i =2; i<number;i++) {
            if(number%i==0) {
                isprime = false;
                break;
            }
        }

        if (isprime)
            System.Console.WriteLine("Number is prime");
        else
            System.Console.WriteLine("Number is not prime");


    }
}