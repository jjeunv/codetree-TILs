N,M=map(int,input().split())
A=[1000001]*1000001
B=[1000001]*1000001

At,Ad=1,0
for _ in range(N):
    direction,time=input().split()
    time=int(time)
    for t in range(At,At+time):
        if direction=='R':
            Ad+=1
            A[t]=Ad
        else:
            Ad-=1
            A[t]=Ad
    At+=time

Bt,Bd=1,0
for _ in range(M):
    direction,time=input().split()
    time=int(time)
    for t in range(Bt,Bt+time):
        if direction=='R':
            Bd+=1
            B[t]=Bd
        else:
            Bd-=1
            B[t]=Bd
    Bt+=time

flag=0
for i in range(1,1000001):
    if A[i]==1000001 or B[i]==1000001:
        break
    if A[i]==B[i]:
        flag=1
        print(i)
        break
    
    
if flag==0:
    print(-1)