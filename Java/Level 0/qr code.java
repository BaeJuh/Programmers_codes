import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class QrCode {
    public String solution(int q, int r, String code) {
        String answer = "";

        for (int i = r; i < code.length(); i += q) {
            answer += code.substring(i, i+1);
        }

        return answer;
    }

    public String Answer(int q, int r, String code) {
        return IntStream.range(0, code.length())
                .filter(i -> i % q == r)
                .mapToObj(i -> String.valueOf(code.charAt(i)))
                .collect(Collectors.joining());
    }
}
