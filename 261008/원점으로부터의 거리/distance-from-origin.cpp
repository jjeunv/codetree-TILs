#include <iostream>
#include <tuple>
#include <algorithm>
#include <cstdlib>

using namespace std;

bool cmp(tuple<int,int,int> a, tuple<int,int,int> b){
    return make_tuple(abs(get<0>(a))+abs(get<1>(a)), get<2>(a)) < make_tuple(abs(get<0>(b))+abs(get<1>(b)), get<2>(b));
}

int main() {
    int n;
    cin >>n;
    
    tuple<int, int, int> t[1001];

    for(int i=0; i<n; i++){
        int x, y;
        cin >> x>> y;
        t[i] = make_tuple(x, y, i+1);
    }

    sort(t, t+n, cmp);

    for(int i=0; i<n; i++){
        int num;
        tie(ignore, ignore, num) = t[i];
        cout << num <<'\n';
    }

    return 0;
}