def solution(s):
    answer = ''
    s = list(s)
    chk = 0
    
    for i in range(len(s)):
        if s[i] == ' ':
            chk = 0
            continue
        s[i] = s[i].upper() if chk%2==0 else s[i].lower()
        chk+=1
    
    return answer.join(s)
