N,K,P,T=map(int,input().split())

MAX_T=250*250
people=[0]*(N+1)
time=[(0,0)]*(MAX_T+1)

people[P]=1

maxt=0
for _ in range(T):
    t,x,y=map(int,input().split())
    time[t]=(x,y)
    maxt=max(t,maxt)

for t in range(1,maxt):
    x,y=time[t]
    if people[x]==1:
        people[y]=1
    elif people[y]==1:
        people[x]=1

for t in range(1,N+1):
    print(people[t],end='')