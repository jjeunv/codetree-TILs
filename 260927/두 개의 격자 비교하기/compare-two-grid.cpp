#include <iostream>
using namespace std;

int main() {
    int arr[10][10];

    int n, m;
    cin >> n >> m;

    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            cin >> arr[i][j];
        }
    }

    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            int num;
            cin >> num;
            if(num == arr[i][j]){
                arr[i][j] = 0;
            }else{
                arr[i][j] = 1;
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