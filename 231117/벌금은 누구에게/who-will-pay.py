n,m,k=map(int,input().split())
student=[0]*(n+1)

flag=0
for _ in range(m):
    num=int(input())
    student[num]+=1
    if student[num]>=k:
        print(num)
        flag=1
        break

if flag==0:
    print(-1)