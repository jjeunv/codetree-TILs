#include <iostream>
#include <vector>
using namespace std;

int main() {
    int k, n;
    cin >> k >> n;

    int arr[11][21];

    for(int i=0; i<k; i++){
        for(int j=0; j<n; j++){
            cin >>arr[i][j];
        }
    }

    int ans = 0;

    for(int i=1; i<=n; i++){
        for(int j=1; j<=n; j++){
            if(i==j) continue;
            bool flag = true;

            for(int l=0; l<k; l++){
                int idx_a;
                int idx_b;

                for(int m=0; m<n; m++){
                    if(arr[l][m]==i){
                        idx_a = m;
                    }else if(arr[l][m]==j){
                        idx_b = m;
                    }
                }
                if(idx_a>=idx_b){
                    flag = false;
                    break;
                }
            }
            if(flag){
                ans++;
            }
        }
    }

    cout << ans;
    
    return 0;
}