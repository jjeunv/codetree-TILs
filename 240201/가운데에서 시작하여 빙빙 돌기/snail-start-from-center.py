n=int(input())

ans=[[0 for _ in range(n)] for _ in range(n)]

x,y=n-1,n-1
dx,dy=[0,-1,0,1],[-1,0,1,0]
cur_dir=0

def in_range(x,y):
    return 0<=x<n and 0<=y<n

for i in range(n*n,0,-1):
    nx,ny=x+dx[cur_dir],y+dy[cur_dir]
    if not in_range(nx,ny) or ans[nx][ny]!=0:
        cur_dir=(cur_dir+1)%4
    ans[x][y]=i 
    x+=dx[cur_dir]
    y+=dy[cur_dir]

for x in ans:
    for y in x:
        print(y,end=' ')
    print()