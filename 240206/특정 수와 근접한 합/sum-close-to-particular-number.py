import sys
n,s=map(int,input().split())

num=list(map(int,input().split()))

ans=sys.maxsize

for i in range(n-4):
    for j in range(i+1,n-3):
        for k in range(j+1,n-2):
            for l in range(k+1,n):
                cur=abs(s-(num[i]+num[j]+num[k]+num[l]))
                ans=min(ans,cur)

print(ans)