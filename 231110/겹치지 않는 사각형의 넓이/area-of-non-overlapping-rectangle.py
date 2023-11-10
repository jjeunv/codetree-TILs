rec=[[0 for j in range(2001)] for i in range(2001)]

for _ in range(2):
    x1,y1,x2,y2=map(int,input().split())
    for i in range(x1,x2):
        for j in range(y1,y2):
            rec[i][j]=1

x1,y1,x2,y2=map(int,input().split())

for i in range(x1,x2):
    for j in range(y1,y2):
        rec[i][j]=2

ans=0
for i in rec:
    for j in i:
        if j==1:
            ans+=1

print(ans)