#include <iostream>
#include <string>
using namespace std;

int main() {
    // 북 동 남 서
    int dx[4] {0, 1, 0, -1};
    int dy[4] {1, 0, -1, 0};

    int dir = 0;

    string s;
    cin >> s;

    int x = 0;
    int y = 0;

    for(int i=0; i<s.length(); i++){
        if(s[i]=='R'){
            dir = (dir+1)%4;
        }else if(s[i]=='L'){
            dir = (dir-1+4)%4;
        }else{
            x+=dx[dir];
            y+=dy[dir];
        }
    }

    cout << x << ' ' << y;

    return 0;
}