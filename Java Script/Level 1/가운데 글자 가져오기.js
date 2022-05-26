function solution(s) {
    // 문자열 중앙(길이의 반)을 찾음
    let half = s.length/2;
    
    return s.length%2 == 0 ? s[parseInt(half)-1] + s[parseInt(half)] : s[parseInt(half)];
}
