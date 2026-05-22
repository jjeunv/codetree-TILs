#include <iostream>
using namespace std;

const int INT_MAX = 100000;

int main() {
    int n; cin>>n;

    int grid[2*INT_MAX+1]{}; // 흰: 1, 검: 2
    int cur = INT_MAX; // 현재 위치

    while(n--){
        int x; char dir; cin>>x>>dir;

        if(dir=='L'){
            while(x--){
                grid[cur] = 1;
                cur--;
            }
            cur++;
        }else{
            while(x--){
                grid[cur] = 2;
                cur++;
            }
            cur--;            
        }
    }

    int w=0, b=0;
    for(int c: grid){
        if(c==1) w++;
        else if(c==2) b++;
    }

    cout<<w<<" "<<b;
    return 0;
}