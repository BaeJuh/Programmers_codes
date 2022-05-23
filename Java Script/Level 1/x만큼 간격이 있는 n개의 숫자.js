function solution(x, n) {
    var answer = [];
    
    for (let i=1; i<=n; i++) {
        answer.push(x*i);
    }
    // for 문을 이용해서 1~n까지의 숫자들을 각각 x와 곱해 answer에 넣음
    return answer;
}
