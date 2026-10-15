#include <iostream>
#include <algorithm>
using namespace std;

#define MAX_N 101

int main() {
    char arr[MAX_N]{};
    int n;
    cin >> n;

    for(int i=0; i<n; i++){
        int x;
        char c;
        cin >> x >> c;
        arr[x] = c;
    }

    int ans = 0;

    for(int i=0; i<MAX_N; i++){
        for(int j=i; j<MAX_N; j++){
            if(arr[i]==0 || arr[j]==0) continue;
            int g = 0;
            int h = 0;

            for(int k=i; k<=j; k++){
                if(arr[k]=='G'){
                    g++;
                }else if(arr[k]=='H'){
                    h++;
                }
            }

            if((g==0 && h!=0) || (g!=0 && h==0) || (g==h)){
                ans = max(ans, j-i);
            }
        }
    } 

    cout << ans;

    return 0;
}