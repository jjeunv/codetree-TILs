#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int GetBinary(string str){
    int num = 0;
    for(int i=0; i<(int)str.length(); i++){
        num = num*2 + (str[i]-'0');
    }

    return num;
}

int main() {
    string str;
    cin >> str;

    int ans = 0;

    for(int i=0; i<(int)str.length(); i++){
        str[i]=(str[i]=='0'?'1':'0');

        ans = max(ans, GetBinary(str));

        str[i]=(str[i]=='0'?'1':'0');
    }

    cout << ans;

    return 0;
}