#include <iostream>
using namespace std;

int main() {
    int arr[100][100] = {};

    int n, m;
    cin >> n >> m;

    int cnt = 1;

    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            if(arr[i][j]!=0) continue;

            int row=i, col=j;
            while(row>=0 && col>=0 && row < n){
                arr[row][col] = cnt++;
                row+=1;
                col-=1;
            }
        }
    }

    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            cout << arr[i][j] << ' ';
        }
        cout << '\n';
    }
    return 0;
}