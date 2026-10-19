#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int a[11];
    int b[11];

    for(int i=0; i<n; i++){
        cin >>a[i] >>b[i];
    }

    int ans = 0;

    for(int i=0; i<n; i++){
        for(int j=i+1; j<n; j++){
            for(int k=j+1; k<n; k++){

                int cnt[101]{};
                bool flag = true;
                
                for(int l=0; l<n; l++){
                    if(l==i || l==j || l==k) continue;

                    for(int m=a[l]; m<=b[l]; m++){
                        if(cnt[m]==1){
                            flag = false;
                            break;
                        }
                        cnt[m]=1;
                    }

                    if(!flag) break;
                }
                if(flag){
                    ans++;
                }
            }
        }
    }

    cout << ans;

    return 0;
}