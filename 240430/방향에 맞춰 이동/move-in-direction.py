x,y=0,0
dx,dy=[1,0,-1,0],[0,-1,0,1]

for _ in range(int(input())):
    direction,num=input().split()
    for _ in range(int(num)):
        if direction=='E':
            x,y=x+dx[0],y+dy[0]
        elif direction=='S':
            x,y=x+dx[1],y+dy[1]
        elif direction=='W':
            x,y=x+dx[2],y+dy[2]
        else:
            x,y=x+dx[3],y+dy[3]

print(x,y)