n=int(input())

coord=[list(map(int,input().split())) for _ in range(n)]

ans=0

def check(i,j,k):
    p1,p2,p3=coord[i],coord[j],coord[k]
    if p1[0]!=p2[0] and p2[0]!=p3[0] and p3[0]!=p1[0]:
        return False
    if p1[1]!=p2[1] and p2[1]!=p3[1] and p3[1]!=p1[1]:
        return False
    return True

def get_area(i,j,k):
    p1,p2,p3=coord[i],coord[j],coord[k]
    if p1[0]==p2[0]:
        return abs(p1[1]-p2[1])*abs(p3[0]-p1[0])
    elif p1[0]==p3[0]:
        return abs(p1[1]-p3[1])*abs(p2[0]-p1[0])
    else:
        return abs(p2[1]-p3[1])*abs(p1[0]-p3[0])

flag=1

for i in range(n):
    for j in range(n):
        for k in range(n):
            if i==j or j==k or k==i:
                continue
            if check(i,j,k):
                flag=0
                ans=max(ans,get_area(i,j,k))

if flag==1:
    print(0)
else:
    print(ans)