public class Largest {
    public static void main(String[] args) {
        int arr[] = {5,2,9,1,6,3};
        int max =0;
        for(int i=0;i<arr.length;i++){
            if(arr[i]>max){
                max = arr[i];
            }
        }
        int secondlargest=0;
      for(int i=0;i<arr.length;i++){
        if(arr[i] != max){
            if(arr[i] > secondlargest){
                secondlargest = arr[i];
            }
        }
       
      }
       System.out.println(secondlargest);
    }
}
