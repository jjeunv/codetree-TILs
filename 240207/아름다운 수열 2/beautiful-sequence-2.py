from itertools import permutations

n,m=map(int,input().split())

numN=input().split()
numM=input().split()

def check(a,b):
    for i in b:
        if a.count(i) != b.count(i):
            return False
    for i in a:
        if a.count(i) != b.count(i):
            return False
    return True

ans=0
for i in range(n-m+1):
    num=[]
    for j in range(i,i+m):
        num.append(numN[j])
    if check(num,numM):
        ans+=1

print(ans)