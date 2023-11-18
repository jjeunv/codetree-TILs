MAX_T=1000000

A,B=[0]*(MAX_T+1),[0]*(MAX_T+1)

n,m=map(int,input().split())

cur_A=1
for _ in range(n):
    t,d=input().split()
    t=int(t)
    for _ in range(t):
        if d=='R':
            A[cur_A]=A[cur_A-1]+1
        else:
            A[cur_A]=A[cur_A-1]-1
        cur_A+=1

cur_B=1
for _ in range(m):
    t,d=input().split()
    t=int(t)
    for _ in range(t):
        if d=='R':
            B[cur_B]=B[cur_B-1]+1
        else:
            B[cur_B]=B[cur_B-1]-1
        cur_B+=1

ans=0
for t in range(1,max(cur_A,cur_B)+1):

    if A[t]==B[t] and A[t-1]!=B[t-1]:
        ans+=1

print(ans)