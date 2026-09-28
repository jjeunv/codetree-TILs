#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    cin >> str;

    string ans;
    int idx = 0; // 배열 저장 인덱스
    int cnt = 1; // 각 알파벳의 개수

    for(int i=1; i<str.length(); i++){
        if(str[i-1]!=str[i]){
            ans += str[i-1];
            ans += to_string(cnt);
            cnt = 1; // 초기화
        }else{
            cnt++; 
        }
    }

    ans += str[str.length()-1];
    ans += to_string(cnt);

    cout << ans.length() << endl;
    cout<< ans;
    return 0;
}