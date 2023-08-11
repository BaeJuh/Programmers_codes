def solution(n):
    matrix = [[0] * i for i in range(1, n+1)]
    
    #matrix[n][n]
    # first row + 1
    # second col + 1
    # third row - 1, col - 1
    
    row = -1
    col = 0
    num = 1
    
    for i in range(n):
        for j in range(i, n):
            if i%3 == 0:
                row += 1
            elif i%3 == 1:
                col += 1
            elif i%3 == 2:
                row -= 1
                col -= 1
            matrix[row][col] = num
            num += 1
    
    return [i for j in matrix for i in j]
