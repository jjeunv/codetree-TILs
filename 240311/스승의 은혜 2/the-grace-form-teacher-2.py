n,b=map(int,input().split())
price=[int(input()) for _ in range(n)]

ans=0

for i in range(n):
    cnt_price=0
    num=0
    for j in range(n):
        if i==j:
            if cnt_price+price[j]//2<=b:
                cnt_price+=price[j]//2
                num+=1
            else:
                break
        else:
            if cnt_price+price[j]<=b:
                cnt_price+=price[j]
                num+=1
            else:
                continue

    ans=max(ans,num)

print(ans)