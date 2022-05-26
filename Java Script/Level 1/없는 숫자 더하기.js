function solution(numbers) {
    var answer = 0;
    
    // 0부터 9까지 모든 수의 합은 45
    // 45에 numbers안에 모든 값을 더한 값을 
    for (var i = 0; i < numbers.length; i++) {
        answer = answer + numbers[i];
    }
    
    answer = 45 - answer;
    
    return answer;
}
