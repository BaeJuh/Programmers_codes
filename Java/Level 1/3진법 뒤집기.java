import java.util.LinkedList;

public class Digit3 {
    public int solution(int n) {
        int digitNum = 3;
        LinkedList<Integer> convertedNum = new LinkedList<>();

        while (n > 0) {
            convertedNum.addFirst(n % digitNum);
            n /= digitNum;
        }

        return convertedNum.stream().reduce(0, (acc, cur) -> acc + cur * (int)Math.pow(digitNum, convertedNum.indexOf(cur)));
    }
}
