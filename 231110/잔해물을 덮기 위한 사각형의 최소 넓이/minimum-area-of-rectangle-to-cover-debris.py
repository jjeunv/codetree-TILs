rec=[[0 for j in range(2001)] for i in range(2001)]

x1,y1,x2,y2=map(int,input().split())
for i in range(x1+1000,x2+1000):
    for j in range(y1+1000,y2+1000):
        rec[i][j]=1

x1,y1,x2,y2=map(int,input().split())
for i in range(x1+1000,x2+1000):
    for j in range(y1+1000,y2+1000):
        rec[i][j]=2

minRow,maxRow,minCol,maxCol=2001,0,2001,0

exist=False
for i in range(2001):
    for j in range(2001):
        if rec[i][j]==1:
            exist=True
            minRow=min(i,minRow)
            maxRow=max(i,maxRow)
            minCol=min(j,minCol)
            maxCol=max(j,maxCol)


if exist:
    ans=(maxRow-minRow+1)*(maxCol-minCol+1)
else:
    ans=0

print(ans)