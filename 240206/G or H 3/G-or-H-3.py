n,k=map(int,input().split())

placed=[0]*10001

for _ in range(n):
    num,sign=input().split()
    if sign=='G':
        placed[int(num)]=1
    else:
        placed[int(num)]=2


ans=0
for i in range(1,10000-k+1):
    val=0
    for j in range(i,i+k+1):
        val+=placed[j]
    ans=max(val,ans)

print(ans)