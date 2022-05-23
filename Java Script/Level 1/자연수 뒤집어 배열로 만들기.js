function solution(n) {
    var answer = [];
    // n의 길이 파악을 위해 n을 문자열로 바꿈
    let arr = (n+'');
    
    // n의 숫자를 unshift를 이용하여 뒤로 갈 수록 맨 앞에 삽입
    for (let i=0; i<arr.length; i++) {
        answer.unshift(Number(arr[i]));
    }
    
    return answer;
}
