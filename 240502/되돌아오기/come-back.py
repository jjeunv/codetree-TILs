dx,dy=[0,1,0,-1],[1,0,-1,0]
mapping={
    'E':0,
    'S':1,
    'W':2,
    'N':3
}
x,y=0,0

N=int(input())
t=1
for i in range(N):
    d,dist=input().split()
    cur_dir=mapping[d]
    dist=int(dist)
    for _ in range(dist):
        x,y=x+dx[cur_dir],y+dy[cur_dir]
        if x==y==0:
            print(t)
            exit()
        t+=1

print(-1)