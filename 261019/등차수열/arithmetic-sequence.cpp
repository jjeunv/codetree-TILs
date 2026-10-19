#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[100]{};

    for(int i=0; i<n; i++){
        cin >> arr[i];
    }
    
    int ans = 0;

    for(int k=1; k<=1000; k++){
        int cnt = 0;
        for(int i=0; i<n; i++){
            for(int j=i+1; j<n; j++){
                if(arr[j]-k==k-arr[i]){
                    cnt++;
                }
            }
        }
        ans = max(ans, cnt);
    }

    cout << ans;

    return 0;
}