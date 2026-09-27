#include <iostream>
#include <string>
using namespace std;

int main() {
    int n;
    cin >> n;

    int len = 0;
    int cnt = 0;

    string str;

    for(int i=0; i<n; i++){
        cin >> str;
        len+=str.length();
        if(str[0]=='a') cnt++;
    }

    cout<< len << ' '<< cnt;
    return 0;
}