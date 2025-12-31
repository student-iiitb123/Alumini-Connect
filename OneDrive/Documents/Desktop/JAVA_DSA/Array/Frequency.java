public class Frequency {
    public static void main(String[] args) {
        int count =0;
        int arr[] = {1,2,2,5,7,3,3,8};
       for(int i=0;i<arr.length;i++){
          for(int j=0;j<arr.length;j++){
            if(arr[i] == arr[j]){
                count ++;
            }
            
          }
          
          System.out.println("the frequency of" + arr[i] + " " + count);
          count =0;
         
       }
    }
    
}
