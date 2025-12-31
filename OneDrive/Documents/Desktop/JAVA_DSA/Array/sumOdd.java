
import java.util.Scanner;

public class sumOdd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        //we need to find lcm of both number 
        int i=1;
        int temp =0;
        while(i<=m*n){
       temp = n*i;
       if(temp%m==0){
        System.out.println(temp);
       }
       i++;
        }
       
    }
}
