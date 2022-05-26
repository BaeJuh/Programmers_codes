function solution(n) {
    var answer = '';
    
    // 홀수 번째 자리에는 수, 짝수 번째 자리에 박
    for (let i=1; i<=n; i++) {
        i%2 == 1 ? answer += '수' : answer += '박';
    }
    
    return answer;
}
