function solution(array, commands) {
    var answer = [];
    
    // array를 조건에 맞게 commands의 수로 자름
    // 정렬후 command[i][2] 번째 수를 answer에 
    for(let i = 0; i < commands.length; i++) {
        answer.push(array.slice(commands[i][0]-1, commands[i][1]).sort((a,b) => a-b)[commands[i][2]-1]);
    }
    
    return answer;
}
