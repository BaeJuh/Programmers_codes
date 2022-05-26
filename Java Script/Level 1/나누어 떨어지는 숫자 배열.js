function solution(arr, divisor) {
    var answer = [];
    
    for (let i=0; i<arr.length; i++) {
        if (arr[i] % divisor == 0) {
            answer.push(arr[i])
        }
    }
    
    return answer.length > 0 ? answer.sort((a, b) => a-b) : [-1];
}

function solution(arr, divisor) {
    var answer = [];
    
    arr.forEach((a) => {if (a%divisor == 0) answer.push(a)}); // forEach 사용
    
    return answer.length > 0 ? answer.sort((a, b) => a-b) : [-1];
}
