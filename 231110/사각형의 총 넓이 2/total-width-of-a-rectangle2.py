N=int(input())

graph=[[0 for j in range(200)] for i in range(200)]

def rectangle(x1,y1,x2,y2):
    for i in range(x1,x2): 
        for j in range(y1,y2):
            graph[i][j]=1

for _ in range(N):
    x1,y1,x2,y2=map(int,input().split()) 
    rectangle(x1+100,y1+100,x2+100,y2+100)

ans=0

for i in graph:
    for j in i:
        if j==1:
            ans+=1

print(ans)