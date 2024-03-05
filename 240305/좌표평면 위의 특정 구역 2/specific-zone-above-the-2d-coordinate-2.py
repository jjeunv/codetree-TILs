import sys
n=int(input())

coord=[list(map(int,input().split())) for _ in range(n)]

area=sys.maxsize
for i in range(n):
    x,y=[],[]
    for j in range(n):
        if i==j:
            continue
        x.append(coord[j][0])
        y.append(coord[j][1])
    area=min(area,(max(x)-min(x))*(max(y)-min(y)))        

print(area)