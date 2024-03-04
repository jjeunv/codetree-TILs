import sys
number=list(map(int,input().split()))

def get_diff(i,j,k):
    sum1=number[i]+number[j]+number[k]
    sum2=sum(number)-sum1 
    return(abs(sum1-sum2))

ans=sys.maxsize
for i in range(6):
    for j in range(i+1,6):
        for k in range(j+1,6):
            ans=min(ans,get_diff(i,j,k))


print(ans)