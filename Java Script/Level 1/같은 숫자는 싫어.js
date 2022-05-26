function solution(arr)
{
    var answer = [];
    
    // 배열안에서 다른 값만 answer에 넣음
    for (let i=0; i<arr.length; i++) {
        if (arr[i] != arr[i+1]) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}
