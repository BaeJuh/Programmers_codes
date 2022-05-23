function solution(n) {
    // n을 각각 잘라 배열에 넣은 후 정렬하여 다시 붙임
    let chk = (n+'').split('').sort((a, b) => b-a).join('');
    
    return Number(chk);
}
