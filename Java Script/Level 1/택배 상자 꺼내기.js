function solution(n, w, num) {
    // num이 몇층인지
    let floor = Math.ceil(num / w);

    // 왼쪽으로부터 몇 칸 떨어져 있는지
    const offset = floor % 2 === 0 ? w * floor - num : w - (w * floor - num) - 1;
    
    let temp = num;
    let answer = 0;

    while (true) {
        if (floor % 2 === 0) {
            temp = floor * w - offset;
        } else {
            temp = (floor - 1) * w + 1 + offset;
        }
        if (temp > n) {
            break;
        }
        floor++;
        answer++;
    }

    return answer;
}
