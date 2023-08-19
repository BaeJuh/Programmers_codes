def solution(s, n):
    answer = ''
    
    s = list(s)
    
    for i in range(len(s)):
        if s[i] == ' ': continue
        corr = ord('a') if s[i].islower() else ord('A')
        s[i] = chr((ord(s[i]) - corr + n) % 26 + corr)
    
    return answer.join(s)
