R,C=map(int,input().split())
graph=[list(map(str,input().split())) for _ in range(R)]

ans=0

for i in range(1,R-2):
    for j in range(1,C-2):
        for k in range(i+1,R-1):
            for l in range(j+1,C-1):
                if graph[0][0]!=graph[i][j] and \
                   graph[i][j]!=graph[k][l] and \
                   graph[k][l]!=graph[R-1][C-1]:
                        ans+=1

print(ans)