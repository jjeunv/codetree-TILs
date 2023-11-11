n,t=map(int,input().split())

num=list(map(int,input().split()))

cnt,maxnum=0,0

for i in range(n):
    if i==0 or num[i]<=t:
        cnt=0
    else:
        cnt+=1
    maxnum=max(maxnum,cnt)

if maxnum<1:
    print(0)
else:
    print(maxnum)