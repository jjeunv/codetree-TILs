import sys

num=list(map(int,input().split()))

def get_diff(i,j,k,l):
    sum1=num[i]+num[j]
    sum2=num[k]+num[l]
    sum3=sum(num)-sum1-sum2
    return (sum1,sum2,sum3)

ans=sys.maxsize
flag=0
for i in range(5):
    for j in range(i+1,5):
        for k in range(5):
            for l in range(k+1,5):
                if i==l or i==k or j==k or j==l:
                    continue
                sum1,sum2,sum3=get_diff(i,j,k,l)
                if sum1==sum2==sum3:
                    continue
                flag=1
                ans=min(ans,max([sum1,sum2,sum3])-min([sum1,sum2,sum3]))


if flag==1:
    print(ans)
else:
    print(-1)