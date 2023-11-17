MAX_T=1000000

A,B=[0]*(MAX_T+1),[0]*(MAX_T+1)

N,M=map(int,input().split())

curA=1
for _ in range(N):
    v,t=map(int,input().split())
    for _ in range(t):
        A[curA]=A[curA-1]+v
        curA+=1

curB=1
for _ in range(M):
    v,t=map(int,input().split())
    for _ in range(t):
        B[curB]=B[curB-1]+v
        curB+=1

head=0
ans=0
for i in range(1,MAX_T):
    if A[i]>B[i]:
        if head==2:
            ans+=1
        head=1
    elif A[i]<B[i]:
        if head==1:
            ans+=1
        head=2

print(ans)