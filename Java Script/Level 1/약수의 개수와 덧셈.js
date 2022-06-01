function solution(left, right) {
    var answer = 0;
    let sqrt = 0;
    
    // 약수의 개수는 소수점을 땐 제곱근의 곱하기 2
    for (let i = left; i <= right; i++) {
        sqrt = Math.sqrt(i);
        // 제곱근이 정수면 약수의 개수는 홀수 임
        if ((parseInt(sqrt)**2) == i) {
            answer -= i;
        }
        else {
            answer += i;
        }
    }
    
    return answer;
}

