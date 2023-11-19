N,K,P,T=map(int,input().split())

MAX_T=250*250
people=[[0 for j in range(2)] for i in range(N+1)]
time=[(0,0)]*(MAX_T+1)
people[P][0]=1

maxt=0
for _ in range(T):
    t,x,y=map(int,input().split())
    time[t]=(x,y)
    maxt=max(t,maxt)

for t in range(1,maxt+1):
    x,y=time[t]

    if people[x][0]==1 and people[x][1]<K:
        people[y][0]=1
        people[x][1]+=1
    elif people[y][0]==1 and people[y][1]<K:
        people[x][0]=1
        people[y][1]+=1


for t in range(1,N+1):
    print(people[t][0],end='')