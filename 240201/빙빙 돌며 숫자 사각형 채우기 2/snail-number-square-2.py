n,m=map(int,input().split())
ans=[[0 for _ in range(m)] for _ in range(n)]

dx,dy=[1,0,-1,0],[0,1,0,-1]

x,y=0,0
cur_dir=0

def in_range(x,y):
    return 0<=x<n and 0<=y<m

for i in range(1,n*m+1):
    ans[x][y]=i
    nx,ny=x+dx[cur_dir],y+dy[cur_dir]
    if not in_range(nx,ny) or ans[nx][ny]!=0:
        cur_dir=(cur_dir+1)%4 
    
    x+=dx[cur_dir]
    y+=dy[cur_dir]
    
for x in ans:
    for y in x:
        print(y,end=' ')
    print()