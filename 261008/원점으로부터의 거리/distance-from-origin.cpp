#include <iostream>
#include <algorithm>
#include <cstdlib>
#include <utility>
using namespace std;

int main(){
    int n;
    cin >> n;

    pair<int, int> p[1001];

    for(int i=0; i<n; i++){
        int x,y;
        cin >> x>> y;
        p[i] = make_pair(abs(x)+abs(y) , i+1);
    }

    sort(p, p+n);

    for(int i=0; i<n; i++){
        cout << p[i].second<<endl;
    }
}