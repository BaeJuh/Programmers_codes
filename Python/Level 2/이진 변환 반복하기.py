def solution(s):
    answer = []
    s = list(s)
    cnt = 0
    zeros = 0
    
    while(len(s) > 1):
        num = s.count('1')
        zeros += len(s) - num
        s = bin(num)[2:]
        cnt += 1
    
    return [cnt, zeros]
