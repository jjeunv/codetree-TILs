from itertools import permutations

n,m=map(int,input().split())

numN=input().split()
numM=input().split()
pretty=[]

pretty=[''.join(i) for i in permutations(numM,m)]

ans=0
for i in range(n-m+1):
    num=[]
    for j in range(i,i+m):
        num.append(numN[j])
    if ''.join(num) in pretty:
        ans+=1

print(ans)