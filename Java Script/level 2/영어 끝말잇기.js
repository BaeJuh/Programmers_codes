function solution(n, words) {
    var answer = [];
    let cycle = 0; // 차례
    let success = true; // 끝말 잇기 게임이 성공했느지 여부
    let prev = ""; // 이전 단어

    for (let i=0; i<words.length; i++) {
        // 턴 수 구하기
        cycle = 1+parseInt(i/n);
      
        // 0~i번 째 안에 words[i]가 있으면 실패 or 단어의 첫 글자가 이전 마지막 글자와 같으면 안됌 and i는 하나만 존재할 수 없음
        if (words.slice(0, i).includes(words[i]) || words[i][0] != prev[prev.length - 1] && i != 0) {
            answer = [(i%n)+1, cycle]; // i%n + 1 은 번호
            success = false;
            break;
        }
        prev = words[i];
    }

    if (success == true) {
        answer = [0, 0];
    }

    return answer;
}
