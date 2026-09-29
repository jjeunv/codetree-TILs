#include <iostream>
#include <vector>
#include<algorithm>
using namespace std;

bool isRange(int x, int y, int n){
    return 0<=x && x<n && 0<=y && y<n;
}

bool canGo(int x, int y, vector<vector<int>>& graph, int n){
    if(!isRange(x,y, n) || graph[x][y] ==0 ){
        return false;
    }
    return true;
}

int dfs(vector<vector<int>>& graph, vector<vector<bool>>& visited, int x, int y, int n, int& num){
    int dx[4] = {1 , 0, -1, 0};
    int dy[4] = {0, 1, 0, -1};

    for(int i=0; i<4; i++){
        int newX = x + dx[i];
        int newY = y + dy[i];
        if(canGo(newX, newY, graph, n) && !visited[newX][newY]){
            visited[newX][newY] = true; 
            num++;
            dfs(graph, visited, newX, newY, n, num);
        }
    }
    return num;
}

int main() {
    int n;
    cin >> n;

    vector<vector<int>> graph(n, vector<int>(n));
    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            cin >> graph[i][j];
        }
    }

    vector<vector<bool>> visited(n, vector<bool>(n, false));
    
    vector<int> ans;

    int cnt = 0;
    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            if(graph[i][j] == 1 && !visited[i][j]){
                visited[i][j] = true;
                cnt++;
                int num = 1;
                dfs(graph, visited, i, j, n, num);
                ans.push_back(num);
            }
        }
    }

    cout << cnt << endl;;
    sort(ans.begin(), ans.end());

    for(int i=0; i<ans.size(); i++){
        cout << ans[i]<<endl;
    }
    return 0;
}