function solution(n) {
    var answer = 1;
    // 연속된 수가 더해져서 n을 만드는 연속된 수의 가장 큰 값은 n/2+1임
    let x = parseInt(n/2) + 1;
    
    for (let i=1; i<x; i++) {
        let sum = 0;
        for (let j=i; j<=x; j++) {
            if (sum < n) {
                sum += j;
            }
            else {
                break;
            }
        }
        if (sum == n) {
            answer ++;
        }
    }
    
    return answer;
}
