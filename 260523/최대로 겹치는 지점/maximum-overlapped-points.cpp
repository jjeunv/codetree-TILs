#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n; cin>>n;

    vector<int> lines(102, 0);

    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        lines[a]++;
        lines[b+1]--;
    }

    for(int i=1; i<=100; i++){
        lines[i] += lines[i-1];
    }

    cout<<*max_element(lines.begin(),lines.end());
    return 0;
}