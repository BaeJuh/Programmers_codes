def solution(name, yearning, photo):
    answer = []
    for i in range(len(photo)):
        x=0 #추억 점수
        for j in range(len(name)): 
            if name[j] in photo[i]: #사진 안에 사람이 있으면
                x += yearning[j] #알맞는 추억 점수를 더함
        answer.append(x)
    return answer
