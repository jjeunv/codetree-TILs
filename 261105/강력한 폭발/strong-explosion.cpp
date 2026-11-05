#include <iostream>
#include <vector>
#include <tuple>
#include <algorithm>
using namespace std;

#define MAX_N 20

int n;
bool bombed[MAX_N][MAX_N];
int bomb_type[MAX_N][MAX_N];
vector<pair<int,int>> bomb_pos;
int ans;

bool inRange(int x, int y){
    return 0<=x && x<n && 0<=y && y<n;
}

void bomb(int x, int y, int b_type){
    pair<int, int> bomb_shapes[4][5] = {
        {},
        {{-1,0},{-2,0},{0,0},{1,0},{2,0}},
        {{-1,0},{0,0},{0,1},{0,-1},{1,0}},        
        {{0,0},{1,1},{1,-1},{-1,1},{-1,-1}},
    };

    for(int i=0; i<5; i++){
        int dx, dy;
        tie(dx, dy) = bomb_shapes[b_type][i];

        int nx = x+dx, ny = y+dy;
        if(inRange(nx,ny)){
            bombed[nx][ny] = true;
        }
    }
}

int calc(){
    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            bombed[i][j] = false;
        }
    }

    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            if(bomb_type[i][j]){
                bomb(i, j, bomb_type[i][j]);
            }
        }
    }

    int cnt = 0;
    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            if(bombed[i][j]) cnt++;
        }
    }

    return cnt;
}

void solve(int cnt){
    if(cnt==(int)bomb_pos.size()){
        ans = max(ans, calc());
        return;
    }

    for(int i=1; i<=3; i++){
        int x, y;
        tie(x, y) = bomb_pos[cnt];

        bomb_type[x][y] = i;
        solve(cnt+1);
        bomb_type[x][y] = 0;
    }
}

int main() {
    cin >> n;

    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            int bomb_place;
            cin >> bomb_place;
            if(bomb_place){
                bomb_pos.push_back(make_pair(i,j));
            }
        }
    }

    solve(0);

    cout << ans;

    return 0;
}