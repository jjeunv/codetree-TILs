#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    cin >> str;

    int ans =0;

    for(int i=0; i<(int)str.length(); i++){
        for(int j=i+1; j<(int)str.length(); j++){
            if(str[i]=='(' && str[j]==')'){
                ans++;
            }
        }
    }

    cout << ans;
    
    return 0;
}