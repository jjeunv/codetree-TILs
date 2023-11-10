n=int(input())

rec=[[0 for j in range(201)] for i in range(201)]

for i in range(1,n+1):
    x1,y1,x2,y2=map(int,input().split())
    for x in range(x1+100,x2+100):
            for y in range(y1+100,y2+100):
                if i%2!=0:
                    rec[x][y]=1
                else:
                    rec[x][y]=2


ans=0

for i in rec:
    for j in i:
        if j==2:
            ans+=1

print(ans)