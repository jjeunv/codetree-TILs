n,b=map(int,input().split())
price=[int(input()) for _ in range(n)]

ans=0

for i in range(n):
    cnt_price=0
    num=0
    for j in range(n):
        if cnt_price+price[j]<=b:
            if i==j:
                cnt_price+=price[i]//2 
            else:
                cnt_price+=price[j]
            num+=1
        else:
            break
    
    ans=max(ans,num)

print(ans)