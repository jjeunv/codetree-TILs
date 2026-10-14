#include <iostream>
using namespace std;

#define MAX_N 1001

bool isRange(int x, int y, int n){
    return 0<=x && x<n && 0<=y && y<n;
}

int main() {
    int dx[4] {0, 1, 0, -1};
    int dy[4] {1, 0, -1, 0};

    char arr[MAX_N][MAX_N];

    int n;
    cin >> n;

    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            cin >> arr[i][j];
        }
    }
    
    int k; // 레이저를 쏘는 위치
    cin >> k;
    
    int x = 0;
    int y = 0;
    int dir = 0;

    // 시작 위치 찾기
    for(int i=1; i<k; i++){
        int nx = x+dx[dir];
        int ny = y+dy[dir];
        if(!isRange(nx, ny, n)){
            dir = (dir+1)%4;
        }else{
            x += dx[dir];
            y += dy[dir];
        }
    }

    // 시작 방향 찾기
    dir = (dir+1)%4;

    int ans = 0;


    while(true){
        char c = arr[x][y];
        
        if(c=='/'){
            dir = 3-dir;
        }else{
            dir = dir^1;
        }
        ans++;

        int nx = x+dx[dir];
        int ny = y+dy[dir];

        if(!isRange(nx, ny, n)){
            cout << ans;
            return 0;
        }else{
            x = nx;
            y = ny;
        }
    }


    return 0;
}