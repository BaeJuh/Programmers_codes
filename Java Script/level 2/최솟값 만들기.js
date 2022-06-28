function solution(A,B){
    var answer = 0;
    // 배열에서 서로 가장 작은 수 * 가장 큰 수를 곱하고 더해야 제일 작은 수가 나옴
    A.sort((a, b) => a-b);
    B.sort((a, b) => b-a);
    
    for (let i=0; i<A.length; i++) {
        answer += A[i] * B[i]
    }
    
    return answer;
}
