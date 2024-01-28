n=int(input())
num=list(map(int,input().split()))

ans=0

for i in range(n-2):
    for j in range(i+1,n):
        ans=max(ans,num[i]+num[j])
print(ans)