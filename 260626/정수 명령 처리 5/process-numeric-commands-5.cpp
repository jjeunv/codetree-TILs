#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    vector<int> v;

    int n; cin>>n;

    while(n--){
        string str;
        cin>> str;

if (str == "push_back") {
    int num; cin >> num;
    v.push_back(num);
} else if (str == "get") {
    int idx; cin >> idx;
    cout << v[idx-1] << "\n";
} else if (str == "size") {
    cout << v.size() << "\n";
} else if (str == "pop_back") {
    v.pop_back();
}
    }
    return 0;
}