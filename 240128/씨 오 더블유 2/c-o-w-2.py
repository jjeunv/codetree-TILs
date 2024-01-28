n=int(input())
a=list(input())

ans=0

for i in range(n-2):
    for j in range(i+1,n-1):
        for k in range(j+1,n):
            if a[i]=='C' and a[j]=='O' and a[k]=='W':
                ans+=1

print(ans)