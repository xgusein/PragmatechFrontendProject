class Program {

    static void Main(string[] args)
    {
        
        //number estimation
        //Finding a number between 1-100
        //please rate

        int held = (new Random()).Next(1,100);
        int right = 5;
        int number;
        int raund = 0;
        while (right>0)
        {
            tur++;
            System.Console.WriteLine($"{raund}.number: ");
            number = int.Pars(System.Console.ReadLine());
            right--;

            if (number == held){
                System.Console.WriteLine("Congrulation {raund} .");
                break;
            }
            else
            {
                if (right == 0)
                    break;
                if(held>number){
                    System.Console.WriteLine("go up");
                }
                else
                {
                    System.Console.WriteLine("go down");
                }
            }
        }
        System.Console.WriteLine("Game is over");


    }
}