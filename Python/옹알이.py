def solution(babbling):
    answer = 0
    pronounce = ["aya", "ye", "woo", "ma"]
    
    for i in range(len(babbling)):
        for j in range(4):
            if pronounce[j] + pronounce[j] in babbling[i]:
                break
            if pronounce[j] in babbling[i]:
                babbling[i] = babbling[i].replace(pronounce[j], "*")
        babbling[i] = ''.join(set(babbling[i]))
        
        if (babbling[i] == "*"):
            answer += 1
                
    return answer
