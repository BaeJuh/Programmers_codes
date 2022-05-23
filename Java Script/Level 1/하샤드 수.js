function solution(x) {
    let str = x + '';
    let chk = 0;
    
    // x값을 문자열로 만든 후 각 자리의 수를 더함
    for (let i=0; i<str.length; i++) {
        chk += Number(str[i]);
    }
    
    // 조건 확인
    return x%chk == 0;
}
