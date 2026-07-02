import java.util.Arrays;
class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, -1, 0, 2, 1};
        int target = 0;
        Arrays.sort(arr);
        boolean found = false;
        for (int i = 0; i < arr.length - 2; i++) {
            int left = i + 1;
            int right = arr.length - 1;
            while (left < right) {
                int sum = arr[i] + arr[left] + arr[right];
                if (sum == target) {
                    System.out.println("Triplet found: (" + arr[i] + ", " + arr[left] + ", " + arr[right] + ")");
                    found = true;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        if (!found) {
            System.out.println("No triplet found");
        }
    }
}