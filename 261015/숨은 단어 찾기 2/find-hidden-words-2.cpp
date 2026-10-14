#include <iostream>
using namespace std;

#define MAX_N 51

bool isRange(int x, int y, int n, int m){
    return 0<=x && x<n && 0<=y && y<m;
}

int main() {
    int dx[8] {0, 1, 1, 1, 0, -1, -1, -1};
    int dy[8] {1, 1, 0, -1, -1, -1, 0, 1};

    char arr[MAX_N][MAX_N] {};

    int n, m;
    cin >> n >> m;

    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            cin >> arr[i][j];
        }
    }

    int ans = 0;

    for(int x=0; x<n; x++){
        for(int y=0; y<m; y++){
            if(arr[x][y]!='L') continue;

            for(int dir=0; dir<8; dir++){
                int nx = x+dx[dir];
                int ny = y+dy[dir];
                int nnx = nx+dx[dir];
                int nny = ny+dy[dir];

                if(!isRange(nx, ny, n, m) || !isRange(nnx, nny, n, m)) continue;

                if(arr[nx][ny] == 'E' && arr[nnx][nny]=='E'){
                    ans++;
                }
            }
        }
    }

    cout << ans;

    return 0;
}