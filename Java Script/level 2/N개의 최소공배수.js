function solution(arr) {
    let notDiv = true;
    let x=1;
    var answer = 0;
    let mul=0;
    
    while(notDiv) {
        let chk = 0;
        // 최소공배수는 가장 큰수 * n으로 나옴
        mul = arr[arr.length-1] * x;
        // 가장큰수의 n을 모든 수로 나눠봤을 때 그 나머지의 합이 0이면 최소공배수
        arr.forEach((x) => {
            chk += mul%x;
        });
        if (chk == 0) {
            answer = mul;
            break;
        }
        x++;
    }
    
    return answer;
}
