#include <iostream>
#include <algorithm>
using namespace std;

void solve(int a[], int b[], int n){
    for(int i=0; i<n; i++){
        if(a[i]!=b[i]){
            cout << "No";
            return;
        }
    }

    cout <<"Yes";
    return;
}

int main() {
    int n;
    cin >> n;

    int a[101];
    int b[101];

    for(int i=0; i<n; i++){
        cin >> a[i];
    }

    for(int i=0; i<n; i++){
        cin >> b[i];
    }

    sort(a, a+n);
    sort(b, b+n);

    solve(a, b, n);
    return 0;
}