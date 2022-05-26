function solution(a, b) {
    var answer = '';
    // 2016년의 1월 1일은 금요일이므로 금요일부터 시작
    let week = ['FRI', 'SAT', 'SUN' ,'MON', 'TUE', 'WED', 'THU'];
    let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let Daysum = b-1;
    let Chk = 0;
    
    // 지정된 날짜까지 모든 일수를 더한다.
    for (let i=0; i<a-1; i++) {
        Daysum += month[i];
    }
    
    Chk = Daysum%7;
    
    return week[Chk];
}
