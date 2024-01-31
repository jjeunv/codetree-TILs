n=int(input())
grid=[list(input()) for _ in range(n)]
k=int(input())

dx,dy=[1,0,-1,0],[0,-1,0,1]
direction=[0]*(4*n+1)

num=1
for d in range(4):
    for i in range(n):
        direction[num]=d 
        num+=1

def next_direction(m,d):
    if m=='/':
        if d==0 or d==2:
            d+=1
        elif d==1 or d==3:
            d-=1
    else:
        d=3-d 
    return d 

def in_range(x,y):
    return 0<=x<n and 0<=y<n

x,y=0,0
cur_d=3
coordinate=[[0 for i in range(2)] for j in range(4*n+1)]
for i in range(1,4*n+1):
    coordinate[i][0],coordinate[i][1]=x,y
    nx,ny=x+dx[cur_d],y+dy[cur_d]
    if not in_range(nx,ny):
        cur_d=(cur_d+1)%4
        continue    
    x+=dx[cur_d]
    y+=dy[cur_d]


x,y=coordinate[k]
cur_d=direction[k]
ans=0
while in_range(x,y):
    cur_d=next_direction(grid[x][y],cur_d)
    nx,ny=x+dx[cur_d],y+dy[cur_d]
    x+=dx[cur_d]
    y+=dy[cur_d]
    ans+=1
print(ans)