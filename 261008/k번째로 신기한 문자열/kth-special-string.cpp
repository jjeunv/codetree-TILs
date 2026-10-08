#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    int n, k;
    string t;
    cin >> n >> k >> t;

    string arr[101];
    for(int i=0; i<n; i++){
        cin >> arr[i];
    }

    sort(arr, arr+n);

    for(int i=0; i<n; i++){
        if(arr[i].compare(0, t.length(), t) == 0){
            cout << arr[i+k-1];
            break;
        }
    }
    return 0;
}