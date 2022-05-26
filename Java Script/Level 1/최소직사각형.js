function solution(sizes) {
    let hor = 0;
    let ver = 0;
    
    // 배열의 값을 [작은 값, 큰 값]으로 정렬한다.
    // 어떤 크기의 명함도 맞출 수 있도록 작은 값 중 가장 큰 값, 큰 값 중 가장 큰 값을 각각 가져온다.
    // 작은 값과 큰 값을 곱한 값이 모든 명함이 들어갈 지갑의 크기이다.
    sizes.forEach(s => {
        s.sort((a, b) => a-b);
        if (s[0] > hor) {
            hor = s[0];
        }
        if (s[1] > ver) {
            ver = s[1];
        }
    });
    
    return hor*ver;
}
