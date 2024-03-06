import sys

n=int(input())
location=[list(map(int,input().split())) for _ in range(n)]

ans=sys.maxsize 

def get_distance(i,j):
    point1,point2=location[i],location[j]
    x=(point1[0]-point2[0])**2
    y=(point1[1]-point2[1])**2
    return x+y

for i in range(n):
    for j in range(n):
        if i==j:
            continue
        ans=min(ans,get_distance(i,j))

print(ans)