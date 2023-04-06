def solution(n, m, section):
    answer = 0
    paint = section[0] - 1 #섹션 시작 지점부터 칠할 것
    
    for i in section:
        if paint < i: #현재 칠한 페인트 위치가 칠해야할 section이면
            paint = i - 1 + m #칠함 섹션 시작 위치(i-1) + 롤러 길이
            answer += 1 #칠하는게 돌아갈 때마다 + 1
        
    return answer
