rec=[[0 for j in range(2001)] for i in range(2001)]

x1,y1,x2,y2=map(int,input().split())
for i in range(x1,x2):
    for j in range(y1,y2):
        rec[i][j]=1

x1,y1,x2,y2=map(int,input().split())
for i in range(x1,x2):
    for j in range(y1,y2):
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

ans=0
if exist:
    ans=(maxRow-minRow+1)*(maxCol-minCol+1)

print(ans)