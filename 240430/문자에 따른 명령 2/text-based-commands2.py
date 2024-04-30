dx,dy=[1,0,-1,0],[0,-1,0,1]
x,y=0,0

cmd=input()
cur_dir=3

for d in cmd:
    if d=='L':
        cur_dir=(cur_dir-1)%4
    elif d=='R':
        cur_dir=(cur_dir+1)%4
    else:
        x+=dx[cur_dir]
        y+=dy[cur_dir]

print(x,y)