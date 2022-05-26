function solution(s) {
    var answer = '';
    var Eng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var Num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var Chk = '';
    
    // 문자열의 내용을 chk에 한 글자씩 더해 eng 배열의 내용과 일치할 때 마다 즉시 그에 맞는 숫자로 바꿔줌
    for (let i=0; i<s.length; i++) {
        Chk = Chk + s[i];
        for (let j=0; j<Eng.length; j++) {
            if (Chk == Eng[j] || Chk == Num[j]) {
                answer = answer + Num[j];
                Chk = '';
                break;
            }
        }
    }

    return Number(answer);
}
