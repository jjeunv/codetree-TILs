import sys
n=int(input())

num=[int(input()) for i in range(n)]

ans=sys.maxsize
for i in range(n):
    dist=0
    for j in range(i+1,i+n):
        dist+=num[j%n]*(j-i)
    ans=min(ans,dist)
print(ans)