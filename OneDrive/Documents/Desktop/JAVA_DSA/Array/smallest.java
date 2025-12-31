public class smallest {
    public static void main(String[] args) {
        int arr[] = {5,2,9,1,6,3};
        int min = Integer.MAX_VALUE;
        for(int i=0;i<arr.length;i++){
            if(arr[i]<min){
                min= arr[i];
            }
        }
        int secondsmallest =Integer.MAX_VALUE;
        for(int i=0;i<arr.length;i++){
            if(arr[i] != min){
                if(arr[i] < secondsmallest){
                    secondsmallest =arr[i];
                }
            }

        }
        System.out.println(secondsmallest);
    }
    
}
