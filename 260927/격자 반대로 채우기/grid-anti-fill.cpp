#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[10][10];

    int cnt = 1;
    for(int col=n-1; col>=0; col--){
        for(int row=0; row<n; row++){
            if((n-col)%2!=0){
                arr[n-row-1][col] = cnt++;
            }else{
                arr[row][col] = cnt++;
            }
        }
    }

    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            cout << arr[i][j] << ' '; 
        }
        cout<< '\n';
    }
    return 0;
}