#include <iostream>
using namespace std;

bool isRange(int x, int y){
    return 1<=x && x<=19 && 1<=y && y<=19;
}

int main() {
    int dx[4] {0, 1, 1, 1};
    int dy[4] {1, 1, 0, -1};

    int arr[20][20]{};

    for(int i=1; i<=19; i++){
        for(int j=1; j<=19; j++){
            cin >> arr[i][j];
        }
    }

    for(int x=1; x<=19; x++){
        for(int y=1; y<=19; y++){
            if(arr[x][y]==0) continue;

            for(int dir=0; dir<4; dir++){
                int cx = x;
                int cy = y;
                int cnt = 1;
                int num = 4;

                while(num--){
                    int nx = cx+dx[dir];
                    int ny = cy+dy[dir];

                    if(isRange(nx, ny) && arr[nx][ny]==arr[cx][cy]){
                        cnt++;
                        cx = nx;
                        cy = ny;
                    }
                }
                if(cnt==5){
                    cout << arr[x][y]<<endl;
                    cout << x+dx[dir]*2 <<" "<<y+dy[dir]*2;
                    return 0;
                }

            }
        }
    }

    cout << 0;

    return 0;
}