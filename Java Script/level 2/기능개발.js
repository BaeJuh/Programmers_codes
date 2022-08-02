function solution(progresses, speeds) {
    var answer = [];
    let days = new Array(progresses.length);
    
    progresses.forEach((x, i)=> { // 배포까지 며칠 남았는지 구함
        days[i] = Math.ceil((100-x)/speeds[i]);
    });
    
    // 앞에 프로젝트 배포일 > 뒤에 프로젝트 배포일 이면
    // 앞에 프로젝트가 배포될 때 뒤에 프로젝트도 같이 배포됨 (x++)
    for (let i=0; i<days.length; i++) {
        let idx = 0;
        let x = 1;
        for (let j=i+1; j<days.length; j++) {
            if (days[i] >= days[j]) {
                x++;
                idx++;
            } else {
                break;
            }
        }
        answer.push(x);
        i += idx;
    }

    return answer;
}
