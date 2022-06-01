function solution(N, stages) {
    var answer = new Array(N);
    let fail_user = 0;
    let fail_rate = new Array(N);
    let chk = 0;
    
    stages.sort((a, b) => a-b);
    
    for (let i=1; i<=N; i++) {
        chk = stages.length;
        fail_user = 0;
        // 실패율 계산
        while (stages[0] == i) {
            fail_user ++;
            stages.shift();
        }
        // fail_rate 배열 안에 [스테이지, 실패율]이 들어있음
        fail_rate[i-1] = [i, fail_user/chk];
    }
    
    // fail_rate 배열을 실패율의 내림차순으로 정렬
    fail_rate.sort((a, b) => b[1] - a[1]);
    
    // fail_rate 안에서 스테이지만 answer에 넣음
    for (let i=0; i<N; i++) {
        answer[i] = fail_rate[i][0];
    }
    
    return answer;
}
