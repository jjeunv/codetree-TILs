n=int(input())

answer=[list(map(int,input().split())) for _ in range(n)]

#print(answer)

ans=0

for i in range(1,10):
    for j in range(1,10):
        for k in range(1,10):
            if i==j or j==k or i==k:
                continue
            cnt=0
            for x in answer:
                s,b=0,0
                num=str(x[0])
                if str(i) in num:
                    if num[0]==str(i):
                        s+=1
                    else:
                        b+=1
                if str(j) in num:
                    if num[1] ==str(j):
                        s+=1
                    else:
                        b+=1
                if str(k) in num:
                    if num[2] ==str(k):
                        s+=1
                    else:
                        b+=1
                if s==x[1] and b==x[2]:
                    cnt+=1
                #print(i,j,k,num,s,b)
            if cnt==n:
                ans+=1


print(ans)