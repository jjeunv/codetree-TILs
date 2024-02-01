n,t=map(int,input().split())
dire=list(input())
grid=[list(map(int,input().split())) for _ in range(n)]

def search(n):
    x=y=(1+n)//2-1
    return x,y

def in_range(x,y):
    return 0<=x<n and 0<=y<n

dx,dy=[-1,0,1,0],[0,1,0,-1]
x,y=search(n)

ans=[grid[x][y]]
cur_dir=0
for cmd in dire:
    if cmd=='R':
        cur_dir=(cur_dir+1)%4
    elif cmd=='L':
        cur_dir=(cur_dir-1+4)%4
    else:
        nx,ny=x+dx[cur_dir],y+dy[cur_dir]
        if not in_range(nx,ny):
            continue
        x+=dx[cur_dir]
        y+=dy[cur_dir]
        ans.append(grid[x][y])


print(sum(ans))