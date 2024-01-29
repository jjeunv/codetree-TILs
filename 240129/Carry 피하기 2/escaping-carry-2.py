n=int(input())

num=[int(input()) for _ in range(n)]

def carry(x,y):
    x=list(str(x))
    y=list(str(y))
    x=x[::-1]
    y=y[::-1]
    if len(x)<=len(y):
        for i in range(len(x)):
            if min(int(x[i]),int(y[i]))>(int(x[i])+int(y[i]))%10:
                return False
    else:
        for i in range(len(y)):
            if min(int(x[i]),int(y[i]))>(int(x[i])+int(y[i]))%10:
                return False
    return True

def add(x,y,z):
    if carry(x,y) and carry(x+y,z):
        return x+y+z
    else:
        return 0
ans=0
for i in range(n-2):
    for j in range(i+1,n-1):
        for k in range(j+1,n):
            ans=max(ans,add(num[i],num[j],num[k]))

if ans==0:
    print(-1)
else:
    print(ans)