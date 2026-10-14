#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    cin >> str;

    int ans = 0;

    int n = (int)str.length();

    for(int i=0; i<n; i++){
        for(int j=i+2; j<n; j++){
            if(str[i]=='(' && str[i+1]=='(' && str[j]==')' && str[j+1]==')'){
                ans++;
            }
        }
    }

    cout << ans;

    return 0;
}