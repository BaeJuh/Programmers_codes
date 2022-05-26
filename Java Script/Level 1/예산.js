function solution(d, budget) {
    var answer = 0;
    
    // 최대한 많은 부서에 예산을 써야하기 때문에 오름차순으로 정렬해 예산은 낮은 부서가 앞으로 가게 함. 
    d.sort((a, b) => a - b);
    
    for (let i=0; i<d.length; i++) {
        if (budget < d[i])
        {
            break;
        }
        budget -= d[i];
        answer ++;
    }
    
    return answer;
}
