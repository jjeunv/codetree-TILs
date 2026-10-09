#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[101]{};

    while(n--){
        int x1, x2;
        cin >> x1 >> x2;

        for(int i=x1; i<=x2; i++){
            arr[i]++;
        }
    }

    int ans = 0;
    for(int i=1; i<101; i++){
        ans = max(ans, arr[i]);
    }

    cout << ans;

    return 0;
}