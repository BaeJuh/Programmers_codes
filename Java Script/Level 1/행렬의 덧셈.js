function solution(arr1, arr2) {
    var answer = [];
    let chk = []
    
    for (let i=0; i<arr1.length; i++) {
        chk = [];
        for (let j=0; j<arr1[i].length; j++) {
            chk.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(chk);
    }
    
    return answer;
}
