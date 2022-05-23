function solution(n) {
    let chk = (n**0.5);
    
    // 정수는 1로 나누면 나머지가 0것을 이용해 정수인지 아닌지 판별
    return chk%1 == 0 ? (chk+1)**2 : -1;
}
