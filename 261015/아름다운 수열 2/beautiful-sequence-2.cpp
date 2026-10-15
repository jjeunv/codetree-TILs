#include <iostream>
#include <algorithm>
using namespace std;

#define MAX_N 101

int main() {
    int a[MAX_N] {};
    string b;

    int n, m;
    cin >> n >> m;

    for(int i=1; i<=n; i++){
        cin >> a[i];
    }

    for(int i=1; i<=m; i++){
        string c;
        cin >> c;
        b+=c;
    }   

    sort(b.begin(), b.end());

    int ans = 0;
    for(int i=1; i<=n-m+1; i++){
        string s;

        for(int j=0; j<m; j++){
            s+=to_string(a[i+j]);
        }

        sort(s.begin(), s.end());

        if(s==b){
            ans++;
        }
    }

    cout << ans;

    return 0;
}