function solution(board, moves) {
    var answer = 0;
  
    // 크기는 size * size
    let size = board.length;
    let basket = [];
    let loc = 0;
    
    for (let i=0; i<moves.length; i++) {
        loc = moves[i] - 1;
        for (let j=0; j<size; j++) {
            // 2차원 배열을 열 단위로 내렸을 때 가장 먼저 0이 아닌수가 뽑힘.
            if (board[j][loc] != 0) {
                basket.push(board[j][loc]);
                // 뽑은 숫자는 0으로 바꿔줌.
                board[j][loc] = 0;
                // 뽑은 숫자를 basket 맨 뒤에 넣어줬기 때문에
                // 가장 뒤 숫자 2개를 비교하여 같으면 둘 다 삭제하고 answer에 +2.
                if (basket[basket.length - 1] == basket[basket.length - 2]) {
                    answer += 2;
                    basket.splice(basket.length-2, 2);
                }
                break;
            }
        }
        
    }
    
    return answer;
}
