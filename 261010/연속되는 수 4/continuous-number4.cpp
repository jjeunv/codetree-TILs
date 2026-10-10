#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int arr[1001];
    
    int n;
    cin >> n;

    for(int i=0; i<n; i++){
        cin >> arr[i];
    }

    int ans = 1;
    int cnt = 1;

    for(int i=1; i<n; i++){
        if(arr[i]>arr[i-1]){
            cnt++;
        }else{
            cnt = 1;
        }

        ans = max(ans, cnt);
    }

    cout << ans;

    return 0;
}