function solution(n, arr1, arr2) {
    var answer = new Array(n);
    let map1 = new Array(n);
    let map2 = new Array(n);
    let chk = new Array(n);
    // answer를 ""로 채움
    answer.fill("");
    
    for (let i=0; i<n; i++) {
        map1.fill(0);
        map2.fill(0);
        // 입력되는 arr안에 수를 2진법으로 만들어 각각 map1, map2에 넣음
        for (let j=0; j<n; j++) {
            map1[n-j-1] = arr1[i]%2;
            arr1[i] = Math.floor(arr1[i]/2);
            map2[n-j-1] = arr2[i]%2;
            arr2[i] = Math.floor(arr2[i]/2);
        }
        // 위에서 만든 map1, map2를 비교해 answer[i]에 #이나 공백을 
        for (let j=0; j<n; j++) {
            if(map1[j] == 1 || map2[j] == 1) {
                answer[i] += "#";
            }
            else if (map1[j] == 0 && map2[j] == 0) {
                answer[i] += " ";
            }
        }
    }
    
    return answer;
}
