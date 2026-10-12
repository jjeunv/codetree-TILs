#include <iostream>
using namespace std;

bool isRange(int x, int y, int n){
    return 0<=x && x<n && 0<=y && y<n;
}

int main() {
    int arr[101][101]{};
    int dx[4] {0, 1, 0, -1};
    int dy[4] {1, 0, -1, 0};

    int n;
    cin >> n;

    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            cin >> arr[i][j];
        }
    }

    int ans = 0;

    for(int x=0; x<n; x++){
        for(int y=0; y<n; y++){
            int cnt = 0;

            for(int dir=0; dir<4; dir++){
                int nx = x+dx[dir];
                int ny = y+dy[dir];

                if(isRange(nx, ny, n) && arr[nx][ny]==1){
                    cnt++;
                }
            }

            if(cnt>=3){
                ans++;
            }
        }
    }

    cout << ans;


    return 0;
}