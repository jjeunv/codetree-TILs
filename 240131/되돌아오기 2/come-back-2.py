dx,dy=[0,1,0,-1],[1,0,-1,0]
x,y=0,0

cmd=list(input())
t=0
cur_dir=3

for dire in cmd:
    if dire=='L':
        cur_dir=(cur_dir-1+4)%4
    elif dire=='R':
        cur_dir=(cur_dir+1)%4
    else:
        x,y=x+dx[cur_dir],y+dy[cur_dir]
    t+=1
    if x==y==0:
        print(t)
        exit()

print(-1)