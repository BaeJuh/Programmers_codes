function solution(numbers, target) {
    var answer = 0;
    
    // 깊이 우선 탐색
    function dfs(idx, sum) {
        if (idx < numbers.length) {
            dfs(idx+1, sum+numbers[idx]);
            dfs(idx+1, sum-numbers[idx]);
            return;
        } else if (idx == numbers.length) {
            if (sum == target) {
                answer ++;
            }
        }
    }
    
    dfs(0,0);
    
    return answer;
}
