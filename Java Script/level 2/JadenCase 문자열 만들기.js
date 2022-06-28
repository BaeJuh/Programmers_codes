function solution(s) {
    var answer = '';
    let arr = s.split(" ");
    let chk = 0; // 단어의 첫 문자면 0
    
    for (let i=0; i<s.length; i++) {
        if (chk == 0) {
            answer += s[i].toUpperCase();
        }
        else {
            answer += s[i].toLowerCase();
        }
        chk ++;
        // 띄어쓰기가 있다는 것은 다음 문자가 단어의 첫 문자이기 때문에 chk를 0으로 초기화
        if (s[i] == " ") {
            chk = 0;
        }
    }
    
    return answer;
}
