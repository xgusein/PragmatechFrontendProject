using System;
using System.Globalization;

namespace ConsoleApp 
{

    class student
    {
        public int studentno { get; set; }
        public string name { get; set; }
        public string branch { get; set; }
    }

    class Program {

        static void Main(string[] args)
        {
            int[] studentNo = {100,200,300};
            string[] Name = {"Jhony","Tom","Bob"};
            string[] Branch = {"10A","10B","11A"};
            
            System.Console.WriteLine($"no: {studentNo[0]} Name: {Name[0]} Branch: {Branch[0]}");
            System.Console.WriteLine($"no: {studentNo[1]} Name: {Name[1]} Branch: {Branch[1]}");
            System.Console.WriteLine($"no: {studentNo[2]} Name: {Name[2]} Branch: {Branch[2]}");



            student std1 = new student();
            std1.studentno = 100;
            std1.name = "Jhony";
            std1.branch = "10A";

            System.Console.WriteLine($"no: {std1.studentno} ad: {std1.name} branch: {std1.branch}");
        
            student std2 = new student();
            std2.studentno = 200;
            std2.name = "Tom";
            std2.branch = "10B";

            System.Console.WriteLine($"no: {std2.studentno} ad: {std2.name} branch: {std2.branch}");

            System.Console.WriteLine("****************************");

            student[] students = new student[2];
            students[0] =std1;
            students[1] =std2;

            for (int i = 0; i < students.Length; i++)
            {   

                System.Console.WriteLine($"no: {students[i].studentno} ad: {students[i].name} branch: {students[i].branch}");
                
            }



        }
    }
    
}