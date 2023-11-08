w = [0] * 200000
b = [0] * 200000
last = [-1] * 200000 

n = int(input()) 

cur = 1000 

for _ in range(n): 

    num, direction = input().split()
    num = int(num)

    if direction == "R":
        for i in range(num):
            if b[cur] == -1:
                if i != num - 1:
                    cur += 1
                continue
            last[cur] = 1
            b[cur] += 1
            if w[cur] >= 2 and b[cur] >= 2:
                b[cur] = -1
                w[cur] = -1
                last[cur] = 2
            if i == num - 1:
                continue
            else:
                cur += 1

    else:
        for i in range(num):
            if w[cur] == -1:
                if i != num - 1:
                    cur -= 1
                continue
            last[cur] = 0
            w[cur] += 1
            if w[cur] >= 2 and b[cur] >= 2:
                b[cur] = -1
                w[cur] = -1
                last[cur] = 2
            if i == num - 1:
                continue
            else:
                cur -= 1

wcnt, bcnt, gcnt = 0, 0, 0
for color in last:
    if color == 0:
        wcnt += 1
    elif color == 1:
        bcnt += 1
    elif color == 2:
        gcnt += 1

print(wcnt, bcnt, gcnt)