import sys
input=sys.stdin.readline

n=int(input())
people=list(map(int,input().split()))

minValue=sys.maxsize

for i in range(n):
    sum=0
    for j in range(n):
        sum+=people[j]*abs(i-j)
    minValue=min(minValue,sum)

print(minValue)