
import java.util.Scanner;

public class linearSerch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int arr[] = new int[n];
        for(int i=0;i<n;i++){
            arr[i] = sc.nextInt();
        }
          int key =3;
        for(int i=0;i<n;i++){
   if(arr[i] == key){
    System.out.print("key is present in the given array");
   }
  
        }
    }
}
