#include <iostream>
using namespace std;

#define MAX_N 101

bool isRange(int x, int y, int n){
    return 0<=x && x<n && 0<=y && y<n;
}

int main() {
    int dx[4] {0, -1, 0, 1};
    int dy[4] {-1, 0, 1, 0};

    int arr[MAX_N][MAX_N] {};

    int n;
    cin >> n;

    int x = n-1;
    int y = n-1;
    arr[x][y] = n*n;

    int dir = 0;

    for(int i=n*n-1; i>=1; i--){
        int nx = x+dx[dir];
        int ny = y+dy[dir];

        if(!isRange(nx, ny, n) || arr[nx][ny]!=0){
            dir = (dir+1)%4;
        }

        x+=dx[dir];
        y+=dy[dir];
        arr[x][y]= i;
    }

    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            cout << arr[i][j] <<' ';
        }
        cout << '\n';
    }

    return 0;
}