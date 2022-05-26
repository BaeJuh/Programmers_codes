function solution(numbers) {
    let chk = [];
    var answer = [];
    
    // 2개를 뽑아서 더하는 경우를 모두 계산
    for(let i=0; i<numbers.length; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            chk.push(numbers[i] + numbers[j]);
        }
    }
    
    // 중복제거
    answer = [...new Set(chk.sort((a, b) => a-b))];
    
    return answer;
}
