public class second{
    public static void main(StrtoInt[] args) {
        int arr[] = {5,6,3,4,8};
        int max = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++){
            if(arr[i] > max){
                secondLargest = max;
                max = arr[i];
             }
             else if( arr[i] > secondLargest && arr[i]!= max){
                secondLargest = arr[i];
             }
             
     } 

     
     System.out.println(max);
       System.out.println(secondLargest);



    }
}