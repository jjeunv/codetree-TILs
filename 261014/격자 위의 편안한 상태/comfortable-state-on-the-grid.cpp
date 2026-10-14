#include <iostream>
using namespace std;

#define MAX_N 101

bool isRange(int x, int y, int n){
    return 0<=x && x<n && 0<=y && y<n;
}

int main() {
    int dx[4] {0, 1, 0, -1};
    int dy[4] {1, 0, -1, 0};
    bool arr[MAX_N][MAX_N] {};

    int n, m;
    cin >> n >> m;

    while(m--){
        int r, c;
        cin >> r >> c;

        int x = r-1;
        int y = c-1;

        arr[x][y] = true;

        int cnt = 0;

        for(int dir=0; dir<4; dir++){
            int nx = x+dx[dir];
            int ny = y+dy[dir];

            if(isRange(nx, ny, n) && arr[nx][ny]){
                cnt++;
            }
        }

        cout << (cnt==3 ? 1 : 0) << '\n';
    }

    return 0;
}