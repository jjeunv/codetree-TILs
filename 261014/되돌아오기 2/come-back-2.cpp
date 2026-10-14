#include <iostream>
#include <string>
using namespace std;

int main() {
    int dx[4] {1, 0, -1, 0};
    int dy[4] {0, 1, 0, -1};

    int dir = 1;
    int x = 0;
    int y = 0;

    string str;
    cin >> str;

    int ans = 0;

    for(int i=0; i<str.length(); i++){
        ans++;
        if(str[i]=='L'){
            dir = (dir-1+4) % 4;
        }else if(str[i]=='R'){
            dir = (dir+1) % 4;
        }else{
            x+=dx[dir];
            y+=dy[dir];

            if(x==0 && y==0){
                cout << ans;
                return 0;
            }
        }
    }

    cout << -1;
    
    return 0;
}