n=19
grid=[list(map(int,input().split())) for _ in range(n)]

for i in range(n):
    for j in range(n-4):
        cnt=1
        for k in range(j,j+4):
            if grid[i][k]!=0 and grid[i][k]==grid[i][k+1]:
                cnt+=1
        if cnt==5:
            if grid[i][j]==1:
                print(1)
                print(i+1,j+3)
                exit()
            if grid[i][j]==2:
                print(2)
                print(i+1,j+3)
                exit()        

for j in range(n):
    for i in range(n-4):
        cnt=1
        for k in range(i,i+4):
            if grid[k][j]!=0 and grid[k][j]==grid[k+1][j]:
                cnt+=1
        if cnt==5:
            if grid[i][j]==1:
                print(1)
                print(i+3,j+1)
                exit()
            if grid[i][j]==2:
                print(2)
                print(i+3,j+1)
                exit()

print(0)