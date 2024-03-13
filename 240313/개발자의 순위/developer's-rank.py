from collections import Counter

k,n=map(int,input().split())

people=[i for i in range(1,n+1)]

result=[list(map(int,input().split())) for _ in range(k)]

ans=0

for i in people:
    winner=[]
    for j in result:
        for l in range(n):
            if i==j[l]:
                break
            winner.append(j[l])
    w=Counter(winner)
    for j in set(winner):
        if w[j]==k:
            ans+=1
    
print(ans)