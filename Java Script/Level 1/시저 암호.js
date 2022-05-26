function solution(s, n) {
    // 아스키코드 이용
    var answer = '';
    let Ascii = 0;
    let Code = 0;
    
    for (let i=0; i<s.length; i++) {
        Ascii = s.charCodeAt(i);
        // 알파벳만 변형할 수 있도록 아스키코드 범위 지정
        if ((Ascii <= 90 && Ascii >= 65) || (Ascii >= 97 && Ascii <= 122)) {
            Code = Ascii + n;
            // n이 너무 커서 n칸씩 미뤘을 때 소문자가 대문자로 넘어가는 것 방지
            if (Ascii <= 90 && Code > 90) {
                Code = 65 + (Code - 91);
            }
        }
        else {
            Code = Ascii;
        }
        
        if ((Code > 90 && Code < 97) || Code > 122) {
            Code -= 26; 
        }
        
        answer += String.fromCharCode(Code);
    }
    
    return answer;
}
