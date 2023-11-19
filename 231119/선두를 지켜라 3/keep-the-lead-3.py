MAX_t=1000000

N,M=map(int,input().split())

pos_A,pos_B=[0]*(MAX_t+1),[0]*(MAX_t+1)


cur_A=1
for _ in range(N):
    v,t=map(int,input().split())
    for _ in range(t):
        pos_A[cur_A]=pos_A[cur_A-1]+v
        cur_A+=1

cur_B=1
for _ in range(M):
    v,t=map(int,input().split())
    for _ in range(t):
        pos_B[cur_B]=pos_B[cur_B-1]+v
        cur_B+=1

ans=0
leader=-1
for t in range(1,cur_A):
    if pos_A[t]>pos_B[t]:
        ans+=(1 if leader!=1 else 0)
        leader=1
    elif pos_A[t]<pos_B[t]:
        ans+=(1 if leader!=2 else 0)
        leader=2
    else:
        ans+=(1 if leader!=0 else 0)
        leader=0

print(ans)