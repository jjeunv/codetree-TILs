import sys
num=list(map(int,input().split()))

# 7 3 10 8 2 6

def get_diff(i,j,k,l):
    sum1=num[i]+num[j]
    sum2=num[k]+num[l]
    sum3=sum(num)-sum1-sum2 
    return max([sum1,sum2,sum3])-min([sum1,sum2,sum3])

ans=sys.maxsize
for i in range(6):
    for j in range(i+1,6):
        for k in range(6):
            for l in range(k+1,6):
                if i==k or j==k or i==l or j==l:
                    continue 
                ans=min(ans,get_diff(i,j,k,l))
                

print(ans)