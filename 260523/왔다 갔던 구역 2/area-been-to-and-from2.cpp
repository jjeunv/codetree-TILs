#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> grid(2001, 0);
    int pos = 1000;
    int ans = 0;

    for(int i = 0; i < n; i++){
        int x;
        char dir;
        cin >> x >> dir;

        if(dir == 'R'){
            for(int j = 0; j < x; j++){
                grid[pos]++;
                pos++;
            }
        }else{
            for(int j = 0; j < x; j++){
                pos--;
                grid[pos]++;
            }
        }
    }

    for(int i = 0; i <= 2000; i++){
        if(grid[i] >= 2){
            ans++;
        }
    }

    cout << ans;
    return 0;
}