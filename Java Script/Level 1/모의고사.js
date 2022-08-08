function solution(answers) {
    var answer = [];
    
    let fir = [1,2,3,4,5];
    let sec = [2,1,2,3,2,4,2,5];
    let thd = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let score = [0, 0, 0];
    
    for (let i=0; i<answers.length; i++) {
        if (fir[i%5] == answers[i]) {
            score[0] ++;
        }
        if (sec[i%8] == answers[i]) {
            score[1] ++;
        }
        if (thd[i%10] == answers[i]) {
            score[2] ++;
        }
    }
    
    let max = Math.max(...score);
    
    for (let i=0; i<score.length; i++) {
        if (score[i] == max) {
            answer.push(i+1);
        }
    }
    
    return answer;
}
