function solution(n, m) {
    var answer = [];
    let stan = 0;
    let mul = 0;
    
    // 최대공약수
    let i = 1;
    while (i <= n && i <= m) {
        if (n%i==0 && m%i==0) {
            stan = i;
        }
        i++
    }
    answer.push(stan);
    
    // 최소공배수
    mul = (n/stan) * (m/stan) * stan;
    answer.push(mul);
    
    return answer;
}
