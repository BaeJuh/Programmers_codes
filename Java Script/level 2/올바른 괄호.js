function solution(s){
    var answer = true;
    let op = 0; // 열림
    let cl = 0; // 닫힘
    let open = true; // ( 일때 turn, ) 일때 false
    
    // 괄호가 올바르려면 시작과 끝은 각각 (, )
    if (s[0] != "(") {
        return false;
    }
    if (s[s.length-1] != ")") {
        return false;
    }
    
    for (let i=0; i<s.length; i++) {
        if (s[i] == "(") {
            op ++;
            open = true;
        }
        if (s[i] == ")") {
            cl ++;
            open = false;
        }
        if (op == cl && open == true) { // 열린 괄호와 닫힌 괄호의 수가 같아 질 때 괄호가 ) 이어야 올바른 괄호 (open이 false일 때 닫힌 것)
            return false;
        }
    }
    
    return op == cl; // 열린 괄호 닫힌 괄호 개수가 같음
}


function solution(s){
    var answer = true;
    let op = 0; // 열림
    let cl = 0; // 닫힘
    let open = true;
    
    // 위와 같은데 위 if 문 2개가 필요 없음
    
    for (let i=0; i<s.length; i++) {
        if (s[i] == "(") {
            op ++;
            open = true;
        }
        if (s[i] == ")") {
            cl ++;
            open = false;
        }
        if (op == cl && open == true) {
            return false;
        }
    }
    
    return op == cl;
}
