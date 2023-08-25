def solution(new_id):
    answer = ''
    str = []
    
    #Step 1
    new_id = new_id.lower()
    
    #Step 2
    for c in new_id:
        if c.isalpha() or c.isdigit() or c in ['-', '_', '.']: str.append(c)
    
    new_id = ''.join(str)
    
    #Step 3
    while '..' in new_id: 
        new_id = new_id.replace('..', '.')
    
    #Step 4
    new_id = new_id.strip('.')
    
    #Step 5
    if (new_id == ''):
        new_id = 'a'
    
    #Step 6
    if (len(new_id) > 15):
        new_id = new_id[:15]
    new_id = new_id.strip('.')
    
    #Step 7
    while (len(new_id) < 3):
        new_id += new_id[-1]
    
    return new_id
