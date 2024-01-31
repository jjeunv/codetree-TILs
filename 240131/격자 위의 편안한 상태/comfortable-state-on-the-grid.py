n,m=map(int,input().split())

dxs,dys=[0,1,0,-1],[1,0,-1,0]

grid=[[0] * n for _ in range(n)]

def in_range(x,y):
    return 0<=x<n and 0<=y<n

def check(x,y):
    cnt=0
    for dx,dy in zip(dxs,dys):
        nx,ny=x+dx,y+dy
        if in_range(nx,ny):
            if grid[x+dx][y+dy]!=0:
                cnt+=1
    return cnt==3

for i in range(m):
    x,y=map(int,input().split())
    x-=1
    y-=1
    grid[x][y]=1
    if check(x,y):
        print(1)
    else:
        print(0)