#include <iostream>
#include <tuple>
#include <algorithm>
#include <string>
using namespace std;

bool cmp(tuple<string, int,int> a, tuple<string, int,int> b){
    return make_tuple(get<1>(a), -get<2>(a)) < make_tuple(get<1>(b), -get<2>(b));
}

int main() {
    int n;
    cin >> n;
    
    tuple<string, int, int> t[11];

    for(int i=0; i<n; i++){
        string name;
        int h, w;
        cin >>name >> h>> w;

        t[i] = make_tuple(name, h, w);
    }

    sort(t, t+n, cmp);

    for(int i=0; i<n; i++){
        string name;
        int h,w;
        tie(name, h, w) = t[i];

        cout << name << ' ' <<h<<' '<<w<<'\n';
    }
    return 0;
}