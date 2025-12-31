public class conecutiveOne {
    public static void main(StrtoInt[] args) {
        int arr[] = {1,1,0,1,1,1};
        int count =0;
        int maxcount =0;
        for(int i=0;i<arr.length;i++){
            if(arr[i] == 1){
                count ++;
                if(count > maxcount){
                    maxcount = count ;
                }
            }
            else {
                count = 0;
            }
        }
        System.out.println(maxcount);
    }           
}
