n,m=map(int,input().split())

grid=[list(input()) for _ in range(n)]

dxs,dys=[0,1,1,1,0,-1,-1,-1],[1,1,0,-1,-1,-1,0,1]

def in_range(x,y):
    return 0<=x<n and 0<=y<m 


def count_LEE(x,y):
    cnt=0
    for dx,dy in zip(dxs,dys):
        nx,ny=x+dx,y+dy 
        if in_range(nx,ny) and grid[nx][ny]=='E':
            if in_range(nx+dx,ny+dy) and grid[nx+dx][ny+dy]=='E':
                cnt+=1
    return cnt 

ans=0
for i in range(n):
    for j in range(m):
        if grid[i][j]=='L':
            ans+=count_LEE(i,j)

print(ans)