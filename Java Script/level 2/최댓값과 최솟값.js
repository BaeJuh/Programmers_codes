function solution(s) {
    var answer = '';
    let nums = s.split(" ");
    
    // 오름차순 정렬 후 맨 앞이 최솟값 맨 뒤가 최댓값
    nums.sort((a, b) => a-b);
    
    return (nums[0]) + " " + (nums[nums.length-1]);
}
