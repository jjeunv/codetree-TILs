a=list(str(input()))

ans=0

n=len(a)

for i in range(n-3):
    for j in range(i+2,n-1):
        if a[i]==a[i+1]=='(' and a[j]==a[j+1]==')':
            ans+=1
        

print(ans)