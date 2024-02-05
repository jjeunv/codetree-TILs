import sys
n,s=map(int,input().split())

num=list(map(int,input().split()))

ans=sys.maxsize

for i in range(n-1):
    for j in range(i+1,n):
        cur=abs(s-(sum(num)-num[i]-num[j]))
        ans=min(ans,cur)

print(ans)