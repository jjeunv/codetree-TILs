N=int(input())

graph=[list(map(int,input().split())) for _ in range(N)]

ans=0

for i in range(N):
    for j in range(N-2):
        ans=max(ans,graph[i][j]+graph[i][j+1]+graph[i][j+2])

print(ans)