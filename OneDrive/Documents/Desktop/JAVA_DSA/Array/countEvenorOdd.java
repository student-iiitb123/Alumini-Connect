public class countEvenorOdd {
    public static void main(String[] args) {
        int arr[] = {5,2,9,1,6,3};
        int even =0;
        int odd =0;
        for(int i=0;i<arr.length;i++){
            if(arr[i] %2 ==0){
                even++;
            }
            else{
                odd++;
            }
        }
        System.out.println(even);
        System.out.print(odd);
    }
}
