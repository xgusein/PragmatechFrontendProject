using System.Globalization;
class Program {

    static void Main(string[] args) {
        //Application cash_dispenser
        //menu: balance
        // deposit 
        //withdraw
        //exit
        string vote = "";
        double balance =0;
        double account = 1000;
        double limittedaccount = 1000;
        do {

            System.Console.Write("1-View Balance\n2- Deposit Money\n3-Withdraw Money\n4-Exit\nyourchoice");
            vote = System.Console.ReadLine();

            switch (vote) {
                case "1":
                    System.Console.Write("balance {0} TL",balance);
                    Console.WriteLine("account balance {0} TL", account);
                    break;
                case "2":
                    System.Console.Write("deposit:");
                    double deposite = double.Parse(System.Console.ReadLine());
                    balance+=deposite;
                    break;
                case "3":
                    System.Console.Write("withdraw:");
                    double withdraww = double.Parse(System.Console.ReadLine());
                    if (withdraww>balance)
                    {
                        double total = balance + account;
                        if (total>withdraww)
                        {
                            Console.Write("use additional account? (Y/N)");
                            string accountdesire = Console.ReadLine();
                            if (accountdesire=="Y")
                            {
                                Console.Write("You can take your money");
                                account -= (withdraww-balance);
                                balance = 0;
                            }
                            else
                            {
                                Console.WriteLine("you have insufficient balance");
                            }    
                        }
                        else
                        {
                            Console.Write("You can take your money");
                            balance-=withdraww;
                        }
                        break;
                    }
                case "4":
                    System.Console.WriteLine("exit");
                    break;

                default:
                    System.Console.WriteLine("wrong choice");
                    break;
            }
        } while (vote!="4");
        
        System.Console.WriteLine("Exited the application");
    }   
}