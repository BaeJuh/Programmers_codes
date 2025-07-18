public class Three {
    private int count = 0;

    public int solution(int[] number) {
        this.find(number, 0, 0, 0);
        return this.count;
    }

    private void find(int[] number, int index, int sum, int count) {
        if (count == 3) {
            if (sum == 0) {
                this.count++;
                return;
            }
        }

        if (index < number.length) {
            find(number, index + 1, sum + number[index], count + 1);
        }
    }
}
