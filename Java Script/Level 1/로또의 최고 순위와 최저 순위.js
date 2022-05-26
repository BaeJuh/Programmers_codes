function solution(lottos, win_nums) {
    var answer = [];
    
    let Zero = 0;
    let Chk = 0;
    let Rank = 0;
    
    // 로또 번호와 당첨 번호를 비교해서 같은 수와 0의 개수 확인
    for (let i=0; i<lottos.length; i++) {
        if (lottos[i] == 0) {
            Zero += 1;
        }
        for (let j=0; j<win_nums.length; j++) {
            if (lottos[i] == win_nums[j]) {
                Chk += 1;
            }    
        }
    }
    
    // 순위 체크(최고 순위 기준)
    switch (Chk + Zero) {
        case 6 : Rank = 1; break;
        case 5 : Rank = 2; break;
        case 4 : Rank = 3; break;
        case 3 : Rank = 4; break;
        case 2 : Rank = 5; break;
        default : Rank = 6; break;
    }
    
    if ((Rank+Zero) > 6) {
        answer.push(Rank);
        answer.push(6)
    }
    else {
        answer.push(Rank);
        answer.push(Rank+Zero);
    }
    
    
    return answer;
}
