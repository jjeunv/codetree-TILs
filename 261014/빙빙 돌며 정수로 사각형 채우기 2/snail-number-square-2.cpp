#include <iostream>
using namespace std;

#define MAX_N 101

bool isRange(int x, int y, int n, int m){
    return 0<=x && x<n && 0<=y && y<m;
}

int main() {
    int dx[4] {1, 0, -1, 0};
    int dy[4] {0, 1, 0, -1};

    int arr[MAX_N][MAX_N] {};

    int n, m;
    cin >> n >> m;

    int x = 0;
    int y = 0;
    arr[x][y]=1;
    
    int dir = 0;

    for(int i=2; i<=n*m; i++){
        int nx = x+dx[dir];
        int ny = y+dy[dir];

        if(!isRange(nx, ny, n, m) || arr[nx][ny]!=0){
            dir = (dir+1)%4;
        }

        x += dx[dir];
        y += dy[dir];

        arr[x][y] = i;
    }

    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            cout << arr[i][j] << ' ';
        }
        cout << '\n';
    }
    
    return 0;
}