import sys
n=int(input())

coord=[list(map(int,input().split())) for _ in range(n)]
ans=sys.maxsize
for i in range(1,n-1):
    dist=0
    for j in range(n-1):
        if j+1==i:
            dist+=abs(coord[j][0]-coord[j+2][0])+abs(coord[j][1]-coord[j+2][1])
        elif j==i:
            continue 
        else:
            dist+=abs(coord[j][0]-coord[j+1][0])+abs(coord[j][1]-coord[j+1][1])
        #print(i,dist)
    ans=min(ans,dist)
    #print(ans)

print(ans)