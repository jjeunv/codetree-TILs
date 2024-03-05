import sys

num=list(map(int,input().split()))

def get_diff(i,j,k,l):
    sum1=num[i]+num[j]
    sum2=num[k]+num[l]
    sum3=sum(num)-sum1-sum2
    if sum1==sum2==sum3:
        return sys.maxsize
    return max([sum1,sum2,sum3])-min([sum1,sum2,sum3])

ans=sys.maxsize
flag=0
for i in range(5):
    for j in range(i+1,5):
        for k in range(5):
            for l in range(k+1,5):
                if i==j or i==k or j==k or j==l:
                    continue
                if num[i]==num[j] or num[k]==num[l]:

                    continue
                ans=min(ans,get_diff(i,j,k,l))
                #print(i,j,k,l,get_diff(i,j,k,l))
                flag=1
if flag==0:
    print(-1) 
else: 
    print(ans)