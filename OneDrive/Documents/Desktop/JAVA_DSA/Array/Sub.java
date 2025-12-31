public class Sub {
    public static void main(String[] args) {
        int arr[] = {1,2,3};
        int k = 3;
        int sum = 0;
        int prefix[] = new int[arr.length];

       for(int i = 0; i < arr.length; i++){
        sum = sum + arr[i];  // update running sum
        prefix[i] = sum;     // store in prefix array
}

      
    }
}
