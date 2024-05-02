dx,dy=[0,1,0,-1],[1,0,-1,0]

n,m=map(int,input().split())

ans=[[0]*m for _ in range(n)]

def in_range(x,y):
    return 0<=x<n and 0<=y<m 

x,y=0,0
ans[x][y]=1
cur_dir=0

for i in range(2,n*m+1):
    nx,ny=x+dx[cur_dir],y+dy[cur_dir]
    if not in_range(nx,ny) or ans[nx][ny]!=0:
        cur_dir=(cur_dir+1)%4
    x+=dx[cur_dir]
    y+=dy[cur_dir]
    ans[x][y]=i

for x in ans:
    for j in x:
        print(j,end=' ')
    print()