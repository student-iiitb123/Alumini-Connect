import java.util.*;
public class Multiplication {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int max = Integer.max(m, n);
        int i =1 ;
        while(i<=max){
            if(n%i == 0 && m%i ==0){
                System.out.print(i);
            }
            i++;

        }
    }
}
