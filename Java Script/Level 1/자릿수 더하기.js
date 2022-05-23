function solution(n)
{
    var answer = 0;
    n = n+ '';
    // 각 자릿수를 배열에 보관
    let nums = n.split('');
    
    // 배열의 값을 전부 더함
    for (let i=0; i<nums.length; i++) {
        answer += Number(nums[i]);
    }

    return answer;
}
