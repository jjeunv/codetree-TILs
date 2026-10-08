#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    int n, k;
    string t;
    cin >> n >> k >> t;

    string arr[101];
    string s;
    int cnt = 0;
    for(int i=0; i<n; i++){
        cin >> s;
        if(s.compare(0, t.length(), t)==0){
            arr[cnt++]=s;
        }
    }

    sort(arr, arr+cnt);
    cout << arr[k-1];
    return 0;
}