n=int(input())
num=list(map(int,input().split()))

ans=0
for i in range(n):
    for j in range(i,n):
        l=[]
        for k in range(i,j+1):
            l.append(num[k])
        if sum(l)/len(l) in l:
            ans+=1

print(ans)