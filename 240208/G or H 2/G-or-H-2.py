n=int(input())

arr=[-1]*101
cnt=[0,0]

for _ in range(n):
    x,a=input().split()
    if a=='G':
        arr[int(x)]=0
    else:
        arr[int(x)]=1

ans=0
print(arr)
for i in range(101):
    for j in range(i,101):
        if arr[i]==-1 or arr[j]==-1:
            continue      
        cnt=0
        cur_cnt=[0,0]
        for k in range(i,j+1):
            if arr[k]!=-1:
                cur_cnt[arr[k]]+=1
        if (cur_cnt[0]==cur_cnt[1]) or not (cur_cnt[0]!=0 and cur_cnt[1]!=0):
            cnt=j-i 
        ans=max(ans,cnt)

print(ans)