#include <iostream>
using namespace std;

int main() {
    int arr[10][10] = {};

    int n, m;
    cin >> n >> m;

    for(int i=0; i<m; i++){
        int r,c;
        cin >> r>> c;
        arr[r-1][c-1] = r*c;
    }

    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            cout << arr[i][j] << ' ';
        }
        cout << '\n';
    }
    return 0;
}