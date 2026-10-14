#include <iostream>
#include <string>
using namespace std;

int main() {
    string mapping = "WSNE";
    int dx[4] {-1, 0, 0, 1};
    int dy[4] {0, -1, 1, 0};

    int n;
    cin >> n;

    int x = 0;
    int y = 0;

    int cnt = 0;

    while(n--){
        char d;
        int l;
        cin >> d >> l;

        int dir = mapping.find(d); 

        while(l--){
            x+=dx[dir];
            y+=dy[dir];

            cnt++;

            if(x==0 && y==0){
                cout << cnt;
                return 0;
            }
        }
    }

    cout << -1;
    
    return 0;
}