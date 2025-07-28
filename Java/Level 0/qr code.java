public class QrCode {
    public String solution(int q, int r, String code) {
        String answer = "";

        for (int i = r; i < code.length(); i += q) {
            answer += code.substring(i, i+1);
        }

        return answer;
    }
}
