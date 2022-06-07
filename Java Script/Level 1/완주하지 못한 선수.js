function solution(part, com) {
    var answer = '';
    
    part.sort();
    com.sort();
    // 두 배열의 차이는 하나 밖에 없음
    // 두 배열을 정렬해 동시에 비교할 때 다른 부분이 답
    for (let i=0; i<part.length; i++) {
        if (part[i] != com[i]) {
            answer = part[i];
            break;
        }
    }

    return answer;
}
