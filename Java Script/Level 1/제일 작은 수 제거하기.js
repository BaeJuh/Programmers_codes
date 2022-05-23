function solution(arr) {
    var answer = [];
    let chk_arr = [...arr];
    
    // 배열을 정렬하여 배열 맨 앞의 값을 가장 작은 수로 가져옴
    arr.sort((a, b) => a-b);
    let min = arr[0];
    
    // 배열의 길이가 1이면 -1을 리턴
    // 배열의 길이가 1을 넘으면 가장 작은 수를 제외한 값을 리턴
    if (arr.length == 1) {
        answer.push(-1);
    }
    else {
        // 가장 작은 수와 배열의 값이 다를 경우에만 answer에 넣음
        for (let i=0; i<arr.length; i++) {
            if (chk_arr[i] != min) {
                answer.push(chk_arr[i]);
            }
        }
    }
    
    return answer;
}
