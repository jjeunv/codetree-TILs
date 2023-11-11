N=int(input())

cnt=0
maxnum=0

num=[]

for _ in range(N):
    num.append(int(input()))

for i in range(N):
    if i==0 or num[i]!=num[i-1]:
        cnt=1 
    else:
        cnt+=1
    maxnum=max(cnt,maxnum)

print(maxnum)