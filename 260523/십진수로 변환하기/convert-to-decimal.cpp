#include <iostream>
#include <string>
using namespace std;

int main() {
    string num;
    cin>>num;

    int ans = 0;
    for(int i=0; i<num.size(); i++){
        ans = ans*2 + ((int)num[i]-'0');
    }

    cout<<ans;
    return 0;
}