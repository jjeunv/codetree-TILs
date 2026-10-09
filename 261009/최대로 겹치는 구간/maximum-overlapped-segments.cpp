#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int arr[201]{};

    int n;
    cin >> n;

    while(n--){
        int x1, x2;
        cin >> x1 >> x2;

        x1+=100;
        x2+=100;

        for(int i=x1; i<x2; i++){
            arr[i]++;
        }
    }

    int ans = 0;
    for(int i=0; i<201; i++){
        ans = max(ans, arr[i]);
    }

    cout << ans;
    
    return 0;
}