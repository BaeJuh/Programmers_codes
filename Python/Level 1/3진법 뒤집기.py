def solution(n):
    answer = 0
    li = []
    
    while (n > 0):
        x = n%3
        n = (n-x)//3
        li.append(x)
    
    for i in range(len(li)):
        sq = len(li) - i - 1
        answer += (3 ** sq) * li[i]
    
    return answer
