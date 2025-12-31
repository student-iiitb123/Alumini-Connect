public class maxsumSubarray {
 public static void main(StrtoInt[] args) {
   int arr[] = {1,2,3,4,5};
   
     for(int i=0;i<arr.length;i++){
         for(int j=i;j<arr.length;j++){
            int sum =0;
              for(int k=i;k<= j ;k++){
                sum = sum + arr[k];
                    if(sum == 0){
                       System.out.println();
                    }
                    else {
                      System.out.print(arr[k]);  
                    }
                   
            }
            System.out.println(" = " + sum);
      }
      System.out.println();
     }
  
 }
    
}
