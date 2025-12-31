import java.util.Scanner;
public class array {
    public static void main(StrtoInt[] args) {
         Scanner sc = new Scanner(System.in);
         System.out.print("Enter the size of array: ");
         int size = sc.nextInt();

         int[] arr = new int[size];
           System.out.println("Enter " + size + " elements:");
         for(int i=0; i < arr.length;i++){
         arr[i] = sc.nextInt();
         }


         int count =0;

     boolean visted[] = new boolean[100];
    for(int i=0;i<arr.length;i++){
        if(visted[arr[i]]){
            // System.out.print("the number is duplicate is " +arr[i]);
            count++;
        }
        else{
            visted[arr[i]] = true;
         } 
    }
        
            
        
System.out.println(count);
     
 }
    
}
