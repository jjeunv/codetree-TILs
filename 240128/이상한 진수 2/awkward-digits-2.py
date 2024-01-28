a=list(map(int,input()))
n=len(a)

flag=0
for i in range(n):
    if a[i]==0:
        flag=1
        a[i]=1
        break
    
if flag==0:
    a[-1]=0

ans=0

for i in range(len(a)):
    ans+=a[i]* 2**(len(a)-1-i)

print(ans)