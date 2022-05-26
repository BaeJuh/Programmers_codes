function solution(nums) {
    var answer = 0;
    let kinds = 0;
    let arr = [];
    
    // nums의 중복 제거
    nums.sort();
    for (let i=0; i<nums.length; i++) {
        if (nums[i] != [nums[i+1]]) {
            arr.push(nums[i]);
        }
    }
    
    // nums의 길이의 절반이 arr의 길이보다 크면 arr의 길이가 가져갈 수 있는 포켓몬의 수
    // arr의 길이가 더 크면 nums 길이 절반이 가져갈 수 있는 포켓몬의 수
    nums.length/2 <= arr.length ? answer = nums.length/2 : answer = arr.length;
    
    return answer;
}
