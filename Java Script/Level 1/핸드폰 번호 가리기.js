function solution(phone_number) {
    var answer = '';
    // 휴대폰 번호 길이 - 4의 길이를 가진 *로 이루어진 문자열 생성
    for (let i=0; i<phone_number.length-4; i++) {
        answer += '*';
    }
    
    // 앞에서 만든 문자열 + 휴대폰 번호 뒤 4자리
    answer += phone_number.slice(-4);
    
    return answer;
}
