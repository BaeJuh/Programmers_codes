def solution(line):
    answer = []
    cross = []
    x_min = y_min = int(1e15)
    x_max = y_max = -int(1e15)
    
    for i in range(len(line)):
        a, b, e = line[i]
        for j in range(i+1, len(line)):
            c, d, f = line[j]
            if ((a*d - b*c) == 0): continue
            x = (b*f - e*d) / (a*d - b*c)
            y = (e*c - a*f) / (a*d - b*c)
            if (x == int(x) and y == int(y)):
                x = int(x)
                y = int(y)
                cross.append([x, y])
                if (x > x_max): x_max = x
                if (x < x_min): x_min = x
                if (y > y_max): y_max = y
                if (y < y_min): y_min = y
    
    x_len = x_max - x_min + 1
    y_len = y_max - y_min + 1
    
    field = [['.'] * x_len for _ in range(y_len)]
    
    for x, y in cross:
        field[y_max - y][x - x_min] = '*'
    
    for i in field:
        answer.append(''.join(i))
    
    return answer
