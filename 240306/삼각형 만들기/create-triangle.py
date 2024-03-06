n=int(input())

location=[list(map(int,input().split())) for _ in range(n)]

ans=0

def area(p1,p2,p3):
    return abs(p1[0]-p2[0])*p3[1]

def check_x(i,j,k):
    p1,p2,p3=location[i],location[j],location[k]
    if p1[1]==p2[1] or p2[1]==p3[1] or p3[1]==p1[1]:
        return True     
    return 0

def check_y(i,j,k):
    p1,p2,p3=location[i],location[j],location[k]
    if p1[0]==p2[0] or p2[0]==p3[0] or p3[0]==p1[0]:
        return True     
    return False

for i in range(n):
    for j in range(n):
        for k in range(n):
            if i==j or j==k or i==k:
                continue
            if check_x(i,j,k) and check_y(i,j,k):
                ans=max(ans,area(location[i],location[j],location[k]))

if ans==0:
    print(0)
else:
    print(ans)