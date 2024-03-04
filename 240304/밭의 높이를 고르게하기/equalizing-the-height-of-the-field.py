import sys
n,h,t=map(int,input().split())
height=list(map(int,input().split()))

ans=sys.maxsize
for i in range(n):
    for j in range(i+1,n):
        if j-i+1==t:
            cnt=0
            for k in range(i,j+1):
                cnt+=abs(h-height[k])
            ans=min(ans,cnt)


print(ans)