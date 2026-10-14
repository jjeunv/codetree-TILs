#include <iostream>
using namespace std;

#define MAX_N 16

int main() {
    char arr[MAX_N][MAX_N] {};

    int r, c;
    cin >> r >> c;

    for(int i=0; i<r; i++){
        for(int j=0; j<c; j++){
            cin >> arr[i][j];
        }
    }

    int ans = 0;

    for(int i=1; i<r-2; i++){
        for(int j=1; j<c-2; j++){
            for(int k=i+1; k<r-1; k++){
                for(int l=j+1; l<c-1; l++){
                    if(arr[0][0]!=arr[i][j] && arr[i][j]!=arr[k][l] && arr[k][l]!=arr[r-1][c-1]){
                        ans++;
                    }
                }
            }
        }
    }

    cout << ans;

    return 0;
}