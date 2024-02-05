n=int(input())

grid=[list(map(int,input().split())) for _ in range(n)]

ans=0
for i in range(n):
    for j in range(n-2):
        for k in range(n):
            for l in range(n-2):
                sum=0
                if i==k and (j==l or j+1==l or j+2==l) :
                    continue
                sum+=(grid[i][j]+grid[i][j+1]+grid[i][j+2]+\
                grid[k][l]+grid[k][l+1]+grid[k][l+2])
                ans=max(ans,sum)


print(ans)