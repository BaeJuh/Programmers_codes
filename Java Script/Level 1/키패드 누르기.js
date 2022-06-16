function solution(numbers, hand) {
    var answer = '';
    let center_dial = [2, 5, 8, 0]; // 다이얼의 가운데 버튼의 열은 고정, 배열의 위치 = 행의 위치
    let key;
    let left_floor = [3, 0]; // "*"의 위치
    let right_floor = [3, 0]; // "#"의 위치, 거리는 절댓값으로 구하기 때문에 열의 위치는 보기 쉽게 0으로 지정
    let center_loc = [0, 0]; // 가운데 버튼을 누르면 값이 들어감
    let l_distance = 0;
    let r_distance = 0;
    
    for (let i=0; i<numbers.length; i++) {
        key = numbers[i];
        console.log(key);
        distance = 0; //---------------------------------------------------
        // 왼손 버튼
        if (key == 1 || key == 4 || key == 7) {
            answer += "L";
            if (key == 1) {left_floor = [0, 0];}
            else if (key == 4) {left_floor = [1, 0];}
            else if (key == 7) {left_floor = [2, 0];}
        }
        // 오른손 버튼
        else if (key == 3 || key == 6 || key == 9) {
            answer += "R";
            if (key == 3) {right_floor = [0, 0];}
            else if (key == 6) {right_floor = [1, 0];}
            else if (key == 9) {right_floor = [2, 0];}
        }
        // 가운데 버튼이 눌릴 경우
        else {
            for (let j=0; j<4; j++) {
                if (center_dial[j] == key) {
                    center_loc = [j, 1];
                    break;
                }
            }
            
            l_distance = Math.abs(left_floor[0] - center_loc[0]) + Math.abs(left_floor[1] - center_loc[1]);
            r_distance = Math.abs(right_floor[0] - center_loc[0]) + Math.abs(right_floor[1] - center_loc[1]);
            
            if (l_distance > r_distance) { // 오른손이 더 가까움
                answer += "R";
                right_floor = center_loc;
            }
            else if (l_distance < r_distance) { // 왼손이 더 가까움
                answer += "L";
                left_floor = center_loc;
            }
            else {
                if (hand == "right") {
                    answer += "R";
                    right_floor = center_loc;
                }
                else if (hand == "left") {
                    answer += "L";
                    left_floor = center_loc;
                }
            }
        }
    }
    
    return answer;
}
