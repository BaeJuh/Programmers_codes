function solution(n, lost, reserve) {
    // 모든 학생은 체육복을 1개씩 가지고 있음
    var chk = new Array(n).fill(1);
    let result = 0;
    
    // 여분이 있는 학생은 +1
    for (let i=0;i<reserve.length; i++) {
        chk[reserve[i] - 1] += 1;
    }
    
   // 도난당한 학생은 -1
    for (let i=0; i<lost.length; i++) {
        chk[lost[i] - 1] -= 1;
    }
    // 도난당한 학생의 앞, 뒤 번호가 여분이 있는 경우 빌려줌
    for (let i=0; i<n; i++) {
        if (chk[i] == 0 && chk[i-1] == 2) {
            chk[i-1] -= 1;
            chk[i] += 1;
        }
        if (chk[i] == 0 && chk[i+1] == 2) {
            chk[i+1] -= 1;
            chk[i] += 1;
        }
    }
    
    // 체육복이 있거나 여분이 있는 학생은 수업 참여
    for (let i=0; i<n; i++) {
        if (chk[i] == 1 || chk[i] == 2) {
            result ++;
        }
    }
    
    return result;
}
