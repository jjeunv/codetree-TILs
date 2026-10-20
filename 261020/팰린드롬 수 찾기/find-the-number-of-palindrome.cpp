#include <iostream>
#include <string>
using namespace std;

bool IsPalindrome(string num){
    int length = (int)num.length();

    for(int i=0; i<length/2; i++){
        if(num[i]!=num[length-i-1]) return false;
    }

    return true;
}

int main() {
    int x, y;
    cin >> x >> y;

    int ans = 0;

    for(int i=x; i<=y; i++){
        if(IsPalindrome(to_string(i))) ans++;
    }

    cout << ans;

    return 0;
}