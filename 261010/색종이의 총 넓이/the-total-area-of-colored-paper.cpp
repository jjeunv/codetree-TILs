#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[201][201] {};

    while(n--){
        int x,y;
        cin >> x>>y;

        x+=100;
        y+=100;

        for(int i=x; i<x+8; i++){
            for(int j=y; j<y+8; j++){
                arr[i][j]=1;
            }
        }
    }

    int ans = 0;
    
    for(int i=0; i<201; i++){
        for(int j=0; j<201; j++){
            if(arr[i][j]==1){
                ans++;
            }
        }
    }

    cout << ans;

    return 0;
}