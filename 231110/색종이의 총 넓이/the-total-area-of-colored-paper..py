N=int(input())

rec=[[0 for j in range(201)] for i in range(201)]

for _ in range(N):
    x,y=map(int,input().split())
    for i in range(x,x+8):
        for j in range(y,y+8):
            rec[i][j]=1

ans=0

for i in rec:
    for j in i:
        if j==1:
            ans+=1

print(ans)