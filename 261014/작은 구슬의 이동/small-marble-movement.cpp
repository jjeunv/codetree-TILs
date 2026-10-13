#include <iostream>
#include <string>

using namespace std;

#define MAX_N 51

bool isRange(int x, int y, int n){
    return 0<=x && x<n && 0<=y && y<n;
}

int main() {
    int dx[4] {0, -1, 1, 0};
    int dy[4] {1, 0, 0, -1};
    string mapping = "RUDL";

    int n, t; // n행 n열 t초
    cin >> n >> t;

    int arr[MAX_N][MAX_N];
    int r, c; // r행 c열
    char d; // d방향

    cin >> r >> c >> d;

    int dir = mapping.find(d);
    int x = r-1;
    int y = c-1;

    while(t--){
        int nx = x+dx[dir];
        int ny = y+dy[dir];

        if(isRange(nx, ny, n)){
            x = nx;
            y = ny;
        }else{
            dir = 3 - dir;
        }
    }
    
    cout << x+1 << ' ' << y+1;

    return 0;
}