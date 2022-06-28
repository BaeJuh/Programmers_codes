function solution(n) {
    var answer = 0;
    // toString(2)로 n의 이진수를 문자열 형태로 저장
    let sml = n.toString(2);
    let lrg = ''
    let sml_count = 0;
    let lrg_count = 0;
    
    // n의 이진수에서 1의 개수 구함
    for (let i=0; i<sml.length; i++) {
        if (sml[i] == '1') {
            sml_count ++;
        }
    }
  
    // 이진수에서 1의 개수가 같아지는 수가 나올 때까지 n을 1씩 올리면서 이진수로 바꿔서 1의 개수를 구함
    while(lrg_count != sml_count) {
        lrg_count = 0;
        n++;
        lrg = n.toString(2);
        for (let i=0; i<lrg.length; i++) {
            if (lrg[i] == '1') {
                lrg_count ++;
            }
        }
        
        answer = n;
    }
    
    return answer;
}
