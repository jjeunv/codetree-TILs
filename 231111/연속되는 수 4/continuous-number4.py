N=int(input())

num=[int(input()) for _ in range(N)]

cnt,maxnum=0,0

for i in range(N):
    if i==0 or num[i]<=num[i-1]:
        cnt=1
    else:
        cnt+=1
    maxnum=max(maxnum,cnt)

print(maxnum)