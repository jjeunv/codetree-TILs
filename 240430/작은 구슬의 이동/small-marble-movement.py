dx,dy=[0,1,-1,0],[1,0,0,-1]

mapper={
    'R':0,
    'D':1,
    'U':2,
    'L':3
}

def in_range(x,y):
    return 0<x<=n and 0<y<=n

n,t=map(int,input().split())
x,y,d=input().split()
x,y=int(x),int(y)
cur_d=mapper[d]

for _ in range(t):
    nx,ny=x+dx[cur_d],y+dy[cur_d]
    if not in_range(nx,ny):
        cur_d=3-cur_d
        continue
    x,y=nx,ny 

print(x,y)