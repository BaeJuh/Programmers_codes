function solution(s) {
    var answer = '';
    let arr = s.toLowerCase().split(' ');
    let chk = 0;
    
    // 문자를 짝수 번째는 대문자로 홀수 번째는 소문자로 바꿈(첫 자리가 0일 때 기준)
    // 위 기준을 단어마다 적용해야 하므로 공백이 나올 경우 몇 번째 자리인지 확인하는 변수를 0으로 
    for (let i=0; i<s.length; i++) {
        
        if (chk%2 == 0) {
            answer += s[i].toUpperCase();
        } else {
            answer += s[i].toLowerCase();
        }
        chk++;
        if (s[i] == " ") {
            chk = 0;
        }
    }
    
    return answer;
}
