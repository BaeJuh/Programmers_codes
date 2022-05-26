function solution(dartResult) {
    var answer = 0;
    let score = '';
    let score_arr = [];
    let x = 0;
    
    for (let i=0; i<dartResult.length; i++) {
        // 계산을 위해 score에 넣어둠
        if (!isNaN(dartResult[i])) {
            score += dartResult[i];
        }
        // s d t를 각각 확인해 맞는 계산을 해서 score_arr 배열에 넣음.
        if (dartResult[i] == 'S' || dartResult[i] == 'D' || dartResult[i] == 'T') {
            if (dartResult[i] == 'S') {
                x = parseInt(score);
            }
            else if (dartResult[i] == 'D') {
                x = parseInt(score)*parseInt(score);
            }
            else if (dartResult[i] == 'T') {
                x = parseInt(score)*parseInt(score)*parseInt(score);
            }
            score = '';
            score_arr.push(x);
        }
        // #은 단순 - 계산 이지만 *은 이전 스코어가 필요함(score_arr를 만든 이유)
        // score_arr의 현재값과 이전값을 계산
        if (dartResult[i] == '*' || dartResult[i] == '#') {
            if (dartResult[i] == '*') {
                score_arr[score_arr.length-1] = x*2;
                score_arr[score_arr.length-2] = score_arr[score_arr.length-2]*2;
            }
            else if(dartResult[i] == '#') {
                score_arr[score_arr.length-1] = x * (-1);
            }
        }
    }
    
    for(let i=0; i<score_arr.length; i++) {
        answer += score_arr[i];
    }
    
    return answer;
}
