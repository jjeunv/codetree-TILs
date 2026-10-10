#include <iostream>
using namespace std;

int main() {
    int arr[201][201]{};

    int n;
    cin >> n;

    for(int i=0; i<n; i++){
        int x1,y1, x2,y2;
        cin >> x1>>y1>> x2>>y2;

        x1+=100;
        y1+=100;
        x2+=100;
        y2+=100;

        for(int j=x1; j<x2; j++){
            for(int k=y1; k<y2; k++){
                if(i%2==0){
                    arr[j][k]=1;
                }else{
                    arr[j][k]=2;
                }
            }
        }
    }

    int ans = 0;
    for(int i=0; i<201; i++){
        for(int j=0; j<201; j++){
            if(arr[i][j]==2){
                ans++;
            }
        }
    }

    cout << ans;

    return 0;
}