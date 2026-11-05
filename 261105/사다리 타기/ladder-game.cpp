#include <iostream>
#include <climits>
#include <utility>
#include <algorithm>
#include <vector>
using namespace std;

#define MAX_M 16
#define MAX_N 12

int n, m;
pair<int, int> lines[MAX_M];

int ans = INT_MAX;
vector<pair<int, int>> selected;

bool possible(){
    sort(selected.begin(), selected.end());

    int arr1[MAX_N]{};
    int arr2[MAX_N]{};

    for(int i=1; i<n+1; i++){
        arr1[i] = i;
        arr2[i] = i;
    }

    for(int i=0; i<(int)selected.size(); i++){
        int b, a;
        tie(b, a) = selected[i];

        swap(arr1[a], arr1[a+1]);
    }

    for(int i=0; i<m; i++){
        int b, a;
        tie(b, a) = lines[i];

        swap(arr2[a], arr2[a+1]);
    }

    for(int i=1; i<=n; i++){
        if(arr1[i]!=arr2[i]){
            return false;
        }
    }

    return true;
}


void solve(int currIdx){
    if(currIdx == m){
        if(possible()){
            ans = min(ans, (int)selected.size());
        }
        return;
    }

    selected.push_back(lines[currIdx]);
    solve(currIdx+1);
    selected.pop_back();

    solve(currIdx+1);
}

int main() {
    cin >> n >> m;

    for(int i=0; i<m; i++){
        int a,b;
        cin >> a>>b;
        
        lines[i] = make_pair(b, a);
    }

    sort(lines, lines+m);

    solve(0);

    cout << ans;
    return 0;
}