class Program {

    static void Main(string[] args)
    {
        
        //number estimation
        //Finding a number between 1-100
        //please rate
        // if you want to continue

        do
        {
            
    

            int held = (new Random()).Next(1,100);
            int right = 5;
            int number;
            int raund = 0;

            double questionpoint = 100/right;

            while (right>0)
            {
                raund++;
                System.Console.WriteLine($"{raund}.number: ");
                number = int.Parse(System.Console.ReadLine());
                right--;

                if (number == held){
                    double point = 100-(questionpoint*(raund-1));
                    System.Console.WriteLine("Congrulation {raund} .");
                    System.Console.WriteLine($"Toplam puan:{point}");
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
            System.Console.WriteLine("Do you want to continue? (Y/N): ");
            string result= System.Console.ReadLine();

            if (result=="N" || result =="No")
                break;


        } while (true);

    }
}