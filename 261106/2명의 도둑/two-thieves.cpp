#include <iostream>
#include <vector>
using namespace std;

#define MAX_N 10
#define MAX_M 5

int n, m, c;
int grid[MAX_N][MAX_N];
int products[MAX_M];

vector<int> selected;
int w;

int ans;

void choose(int currIdx, int sum, int value){
    if(currIdx == m){
        if(sum <= c){
            w = max(w, value);
        }
        return;
    }

    selected.push_back(products[currIdx]);
    choose(currIdx+1, sum+products[currIdx], value+products[currIdx]*products[currIdx]);
    selected.pop_back();

    choose(currIdx+1, sum, value);
}

int findMax(int x1, int y1, int x2, int y2){
    int weight = 0;
    for(int i=0; i<m; i++){
        products[i] = grid[x1][y1+i];
    }

    w = 0;
    choose(0, 0, 0);
    weight+=w;

    for(int i=0; i<m; i++){
        products[i] = grid[x2][y2+i];
    }

    w = 0;
    choose(0, 0, 0);
    weight+=w;

    return weight;
}

int main() {
    cin >> n >> m >> c;

    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            cin >> grid[i][j];
        }
    }

    for(int i=0; i<n; i++){
        for(int j=0; j<=n-m; j++){
            for(int k=0; k<n; k++){
                for(int l=0; l<=n-m; l++){
                    if(i==k && j+m-1>= l) continue;

                    ans = max(ans, findMax(i,j,k,l));
                }
            }
        }
    }

    cout << ans;
    return 0;
}