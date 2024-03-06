n=int(input())

location=[list(map(int,input().split())) for _ in range(n)]

ans=0

def area_x(p1,p2,p3):
    return abs(p1[0]-p2[0])*p3[1]

def area_y(p1,p2,p3):
    return abs(p1[1]-p2[1])*p3[0]
def check_x(i,j,k):
    p1,p2,p3=location[i],location[j],location[k]
    if p1[1]==p2[1] :
        return area_x(p1,p2,p3)
    if p2[1]==p3[1]:
        return area_x(p2,p3,p1)
    if p3[1]==p1[1]:
        return area_x(p3,p1,p2)      
    return 0

def check_y(i,j,k):
    p1,p2,p3=location[i],location[j],location[k]
    if p1[0]==p2[0] :
        return area_y(p1,p2,p3)
    if p2[0]==p3[0]:
        return area_y(p2,p3,p1)
    if p3[0]==p1[0]:
        return area_y(p3,p1,p2)      
    return 0

for i in range(n):
    for j in range(n):
        for k in range(n):
            if i==j or j==k or i==k:
                continue
            area1=check_x(i,j,k)
            area2=check_y(i,j,k)
            ans=max(ans,max(area1,area2))

if ans==0:
    print(0)
else:
    print(ans)