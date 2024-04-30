x,y=0,0
dx,dy=[1,0,-1,0],[0,-1,0,1]

for _ in range(int(input())):
    direction,num=input().split()
    for _ in range(int(num)):
        if direction=='E':
            x+=dx[0]
        elif direction=='S':
            y+=dy[1]
        elif direction=='W':
            x+=dx[2]
        else:
            y+=dy[3]

print(x,y)