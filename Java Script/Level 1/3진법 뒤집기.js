function solution(n) {
    var answer = 0;
    let arr = [];
    let quot = n;
    let rmd = 0;
    
    while(quot > 0) {
        rmd = quot%3;
        quot = (quot-rmd)/3;
        arr.unshift(rmd);
    } // 3진수 만들기
    
    for (let i=0; i<arr.length; i++) {
        answer += arr[i] * (3**i); 
    } // 10진수 만들기
    
    return answer;
}
