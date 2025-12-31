import java.util.*;
public class multiplicaation {
    public static void multiply(int a){
        int i=1;
        while(i<=10){
            System.out.println(i*a);
            i++;
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        multiply(a);
    }
}
