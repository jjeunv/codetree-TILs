tile = [-1] * 200000

n = int(input())
cur = 100000

for _ in range(n):
    num, color = input().split()
    num = int(num)

    if color == "R":
        for i in range(num):
            tile[cur] = 1
            if i != num - 1:
                cur += 1
    else:
        for i in range(num):
            tile[cur] = 0
            if i != num - 1:
                cur -= 1

w, b = 0, 0
for i in tile:
    if i == 0:
        w += 1
    elif i == 1:
        b += 1

print(w, b)