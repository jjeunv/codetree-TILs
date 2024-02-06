n,k=map(int,input().split())
arr=[0]*101

for _ in range(n):
    a,b=map(int,input().split())
    arr[b]=a

ans=0
for c in range(k,100-k):
    cnt=0
    for i in range(c-k,c+k+1):
        cnt+=arr[i]
    ans=max(ans,cnt)

print(ans)