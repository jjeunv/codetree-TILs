#include <iostream>
#include <string>
using namespace std;

bool IsInteresting(string num){
    char c1 = num[0];
    int cnt1 = 0;

    char c2 = ' ';
    int cnt2 = 0;
    
    for(int i=1; i<num.length(); i++){
        if(c1!=num[i]){
            c2 = num[i];
        }
    }

    for(int i=0; i<num.length(); i++){
        if(c1==num[i]){
            cnt1++;
        }else if(c2==num[i]){
            cnt2++;
        }
    }

    if((cnt1==1||cnt2==1) && cnt1+cnt2==num.length()){
        return true;
    }

    return false;
}

int main() {
    int x, y;
    cin >> x>> y;

    int ans = 0;

    for(int i=x; i<=y; i++){
        if(IsInteresting(to_string(i))){
            ans++;
        }
    }

    cout << ans;
    
    return 0;
}