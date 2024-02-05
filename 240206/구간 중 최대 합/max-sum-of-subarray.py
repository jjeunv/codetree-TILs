n,k=map(int,input().split())
num=list(map(int,input().split()))

ans=0
for i in range(n-k+1):
    val=0
    for j in range(i,i+k):
        val+=num[j]
    ans=max(ans,val)
print(ans)