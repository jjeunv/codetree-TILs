MAX_NUM=100

n,k=map(int,input().split())
arr=[0]*(MAX_NUM+1)

for _ in range(n):
    a,x=map(int,input().split())
    arr[x]+=a

max_sum=0

for i in range(MAX_NUM):
    cur_sum=0
    for j in range(i-k,i+k+1):
        if 0<=j<=MAX_NUM:
            cur_sum+=arr[j]
    max_sum=max(max_sum,cur_sum)

print(max_sum)