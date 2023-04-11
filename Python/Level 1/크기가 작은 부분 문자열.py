def solution(t, p):
    answer = 0
    t_len, p_len = len(t), len(p) #t, p 길이 반환
    
    
    for i in range(0, t_len - p_len + 1): #t를 한칸 씩 확인하는데 p_len의 길이만큼 빼고 +1를 해줘야 indexerror가 나지 않음
        if int(t[i:i+p_len]) <= int(p): #t에서 i 번째부터 i+p_len까지 반환해 p와 비교
            answer += 1
        
    return answer
