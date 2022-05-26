function solution(d, budget) {
    var answer = 0;
    
    // 최대한 많은 부서에 예산을 써야하기 때문에 오름차순으로 정렬해 예산은 낮은 부서가 앞으로 가게 함. 
    d.sort((a, b) => a - b);
    
    // 부서를 지날 때 마다 부서의 예산 만큼 전체 예산에서 뺌
    // 만약 부서의 예산이 남은 예산 보다 크면 종료
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
