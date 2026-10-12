#include <iostream>
#include <string>
using namespace std;

int main() {
    // 북 동 남 서
    int dx[4] {0, 1, 0, -1};
    int dy[4] {1, 0, -1, 0};
    string direction = "NESW";

    int x = 0;
    int y = 0;

    int n;
    cin >> n;

    while(n--){
        char dir;
        int dis;
        cin >> dir >> dis;

        int idx = direction.find(dir);

        x += dx[idx]*dis;
        y += dy[idx]*dis;
    }

    cout << x << ' ' << y;
    
    return 0;
}