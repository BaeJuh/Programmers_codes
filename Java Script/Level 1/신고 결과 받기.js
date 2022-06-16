function solution(id_list, report, k) {
    var answer = [];
    let Chk = []; // [신고자, 신고받은 사람]
    let reported_count = []; // [유저, 신고받은 수]
    let email_count = []; // [유저, 신고한 수]

    report = [...new Set(report)];

    for (let i=0; i<id_list.length; i++) {
        reported_count[i] = [id_list[i], 0];
        email_count[i] =  [id_list[i], 0];
    }

    for (let i=0; i<report.length; i++) {
        Chk[i] = report[i].split(' ');
    }

    for (let i=0; i<Chk.length; i++) {
        for (let j=0; j<id_list.length; j++) { // reported_count, email_count의 길이는 id_list의 길이와 같음
            if (Chk[i][1] == reported_count[j][0]) {
                reported_count[j][1] += 1;
            }
        }
    }
    
    for (let i=0; i<id_list.length; i++) { 
        if (reported_count[i][1] >= k) {
            for (let j=0; j<Chk.length; j++) {
                if (reported_count[i][0] == Chk[j][1]) {
                    for (let k=0; k<id_list.length; k++) {
                        if (Chk[j][0] == email_count[k][0]) {
                            email_count[k][1] += 1;
                        }
                    }
                }
            }
        }
    }

    
    for (let i=0; i<id_list.length; i++) {
        answer[i] = email_count[i][1];
    }
    
    return answer;
}
