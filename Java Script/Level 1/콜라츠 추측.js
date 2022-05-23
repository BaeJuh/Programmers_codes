function solution(num) {
    var answer = 0;
    
    // 작업이 500번 반복되거나 num이 1이 될 때 까지 실행
    // num이 짝수면 2로 나눔, 홀수면 3을 곱하고 1을 더함
    while (answer < 500 && num != 1) {
        num%2==0 ? num = num/2 : num = num*3+1;
        answer += 1;
    }
    
    // 작업이 500번 반복 되었을 시 -1를 반환
    if (answer == 500) {
        answer = -1;
    }
    
    return answer;
}
