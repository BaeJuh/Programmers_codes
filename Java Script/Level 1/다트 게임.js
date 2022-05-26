function solution(dartResult) {
    var answer = 0;
    let score = '';
    let score_arr = [];
    let past = 0;
    let x = 0;
    
    for (let i=0; i<dartResult.length; i++) {
        if (!isNaN(dartResult[i])) {
            score += dartResult[i];
        }
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
        if (dartResult[i] == '*' || dartResult[i] == '#') {
            if (dartResult[i] == '*') {
                score_arr[score_arr.length-1] = x*2;
                score_arr[score_arr.length-2] = score_arr[score_arr.length-2]*2;
            }
            else if(dartResult[i] == '#') {
                score_arr[score_arr.length-1] = x * (-1);
            }
        }
        past = score_arr[score_arr.length-2];
    }
    console.log(score_arr);
    for(let i=0; i<score_arr.length; i++) {
        answer += score_arr[i];
    }
    
    return answer;
}
