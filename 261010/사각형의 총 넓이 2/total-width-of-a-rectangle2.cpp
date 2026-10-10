#include <iostream>
using namespace std;

#define MAX_N 201

int main() {
    int n;
    cin >> n;

    int arr[MAX_N][MAX_N] {};

    while(n--){
        int x1,y1, x2,y2;

        cin >> x1>>y1>>x2>>y2;

        x1+=100;
        x2+=100;
        y1+=100;
        y2+=100;

        for(int i=x1; i<x2; i++){
            for(int j=y1; j<y2; j++){
                arr[i][j] = 1;
            }
        }
    }

    int ans = 0;

    for(int i=0; i<MAX_N; i++){
        for(int j=0; j<MAX_N; j++){
            if(arr[i][j]==1){
                ans++;
            }
        }
    }
    
    cout << ans;

    return 0;
}