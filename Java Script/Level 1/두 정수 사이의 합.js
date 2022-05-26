function solution(a, b) {
    var answer = 0;
    let larger, smaller = 0;
    if (a > b) {
        larger = a;
        smaller = b;
    }
    else {
        larger = b;
        smaller = a;
    }
    
    for (let i=smaller; i<=larger; i++) {
        answer += i;
    }
    
    return answer;
}
