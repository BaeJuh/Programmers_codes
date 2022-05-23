function solution(x) {
    let str = x + '';
    let chk = 0;
    
    for (let i=0; i<str.length; i++) {
        chk += Number(str[i]);
    }
    
    return x%chk == 0;
}
