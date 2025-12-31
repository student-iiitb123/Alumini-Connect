public class DuplicateRemove {
    public static void main(String[] args) {
        int arr[] = {1,2,2,5,7,3,3,8};
        for(int i=0;i<arr.length;i++){
            for(int j =i+1;j<arr.length;j++){
                if (arr[i] == arr[j]){
                  arr[j] = 0;
                }
            }
        }
       for(int i=0;i<arr.length;i++){
        if(arr[i] == 0){
            int mark =i;
            for(int j = mark; j<arr.length;j++){
                 int temp = arr[j];
                 arr[j] = arr[j+1];
                 arr[j+1] = temp;
            }

        }
       }
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
    }
}
