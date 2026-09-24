#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int cnt[1001] = {};

    for(int i=0; i<n; i++){
        int num;
        cin >> num;
        cnt[num]++;
    }

    for(int i=1000; i>=1; i--){
        if(cnt[i]==1){
            cout << i;
            return 0;
        }
    }

    cout << -1;

    return 0;
}