#include <iostream>
#include <string>
using namespace std;

#define MAX_N 100

bool isRange(int x, int y, int n){
    return 0<=x && x<n && 0<=y && y<n;
}

int main() {
    int dx[4] {-1, 0, 1, 0};
    int dy[4] {0, 1, 0, -1};

    int arr[MAX_N][MAX_N] {};

    int n, t;
    string str;
    cin >> n >> t >>str;

    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            cin >> arr[i][j];
        }
    }

    int x = n/2;
    int y = n/2;
    int dir = 0;

    int ans = arr[x][y];

    for(int i=0; i<t; i++){
        char c = str[i];

        if(c=='L'){
            dir = (dir-1+4)%4;
        }else if(c=='R'){
            dir= (dir+1)%4;
        }else{
            int nx = x+dx[dir];
            int ny = y+dy[dir];

            if(isRange(nx, ny, n)){
                x = nx;
                y = ny;
                ans += arr[x][y];
            }
        }
    }

    cout << ans;

    return 0;
}