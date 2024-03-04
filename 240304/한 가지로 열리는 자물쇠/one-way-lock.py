n=int(input())
a,b,c=map(int,input().split())

ans=0
for i in range(1,10):
    for j in range(0,10):
        for k in range(0,10):
            if abs(a-i)<=2 or abs(b-i)<=2 or abs(c-i)<=2:
                ans+=1
print(ans)