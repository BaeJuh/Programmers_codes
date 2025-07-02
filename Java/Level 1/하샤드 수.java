import java.util.Arrays;

class Solution {
    public boolean solution(int x) {
        return x % Arrays.stream(String.valueOf(x).split("")).mapToInt(Integer::parseInt).sum() == 0;
    }

    public boolean answer(int x) {
        int sum = 0;
        for (int n = x; n > 0; n /= 10) sum += n % 10;
        return x % sum == 0;
    }
}
