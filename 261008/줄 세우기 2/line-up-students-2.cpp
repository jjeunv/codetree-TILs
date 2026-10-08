#include <iostream>
#include <algorithm>
#include <tuple>
using namespace std;

int main() {
    int n;
    cin >> n;

    tuple<int, int, int> t[1001];

    for(int i=0; i<n; i++){
        int h,w;
        cin >> h>> w;
        t[i] = make_tuple(h, -w, i+1);
    }

    sort(t, t+n);

    for(int i=0; i<n; i++){
        int h,w,num;
        tie(h,w,num) = t[i];
        cout << h<<' ' << -w<<' '<<num<<'\n';
    }
    return 0;
}