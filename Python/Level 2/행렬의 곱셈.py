def solution(arr1, arr2):
    answer = [[0 for _ in range(len(arr2[0]))] for _ in range(len(arr1))]
    
    for i in range(len(arr1)): #행렬곱 행의 길이는 arr1의 행
        for j in range(len(arr2[0])): #행렬곱 열의 길이는 arr2의 열
            for k in range(len(arr1[0])):
                answer[i][j] += arr1[i][k] * arr2[k][j]
    
    return answer
