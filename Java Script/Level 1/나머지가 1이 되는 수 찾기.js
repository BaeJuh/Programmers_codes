function solution(n) {
    
    // 숫자를 1씩 올려서 나눈 후 나머지가 1이 되는 숫자를 찾으면 바로 출력 후 종료
    for (let i = 2; i < n; i++) {
        if (n % i == 1) {
            return i;
            break;
        }
    }
}
