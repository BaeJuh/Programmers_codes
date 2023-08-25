def solution(s):
    data = s[2:-2].split("},{")
    data = sorted(data, key=len)
    answer = {}
    
    for i in data:
        i = list(map(int,i.split(',')))
        
        for j in i:
            if j not in answer:
                answer[j] = 1
                
    return list(answer)

#answer이 dictionary인 이유는 단순히 list보다 dictionary가 O(1)로 조회속도가 빠르기 때문
#list로 풀어도 무방하나 dictionary가 속도는 더 빠름
#하지만 dictionary에서 value는 선언해주고 사용하지 않음
