#include <iostream>
#include<algorithm>
#include <vector>
using namespace std;

int main() {
    int n;
    cin>>n;

    vector<int> lines(201,0);

    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        a+=100;
        b+=100;
        lines[a]++;
        lines[b]--;
    }

    for(int i=1; i<201; i++){
        lines[i]+=lines[i-1];
    }

    cout<< *max_element(lines.begin(),lines.end());
    
    return 0;
}