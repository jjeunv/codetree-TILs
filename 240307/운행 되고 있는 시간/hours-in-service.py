n=int(input())

work_t=[list(map(int,input().split())) for _ in range(n)]

time=[0]*10

for t in work_t:
    s,e=t[0],t[1]
    for i in range(s,e):
        time[i]+=1
working=0

for i in time:
    if i!=0:
        working+=1

def get_time(i):
    cur=working
    for j in range(work_t[i][0],work_t[i][1]):
        if time[j]-1==0:
            cur-=1
    return cur 

ans=0
for i in range(n):
    t=get_time(i) 
    ans=max(ans,t)

print(ans)