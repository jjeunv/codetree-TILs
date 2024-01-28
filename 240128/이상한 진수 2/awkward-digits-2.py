a=list(map(int,input()))

for i in range(len(a)):
    if a[i]==0:
        a[i]=1
        break

ans=0

for i in range(len(a)):
    ans+=a[i]* 2**(len(a)-1-i)

print(ans)