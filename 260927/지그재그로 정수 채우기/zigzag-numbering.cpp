#include <iostream>
using namespace std;

int main() {
    int arr[100][100];
    int n, m;
    cin >> n >> m;

    int num = 0;

    for(int i=0; i<m; i++){
        for(int j=0; j<n; j++){
            if(i%2==0){
                arr[j][i] = num++;
            }else{
                arr[n-j-1][i] = num++;
            }
        }
    }

    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            cout << arr[i][j] <<' ';
        }
        cout << '\n';
    }
    return 0;
}