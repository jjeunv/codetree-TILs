n=int(input())

coord=[list(map(int,input().split())) for _ in range(n)]

ans=0

for i in range(n):
    flag=1
    for j in range(n):
        if i==j:
            continue
        if (coord[i][0]<=coord[j][0] and coord[i][1]>=coord[j][1]) or (coord[i][0]>=coord[j][0] and coord[i][1]<= coord[j][1]):
            flag=0
            break
    if flag==1:
        ans+=1

print(ans)