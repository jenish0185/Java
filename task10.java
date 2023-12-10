import java.util.Scanner;
public class task10 {
    public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in);   
             
        int age = myObj.nextInt();
        if (age>=18){
        System.out.println("Th eperson is eligible to vote.");
        }
        else{
        System.out.println("The person is not elligible to vote.");
        }
        myObj.close();       

    }

    
}
