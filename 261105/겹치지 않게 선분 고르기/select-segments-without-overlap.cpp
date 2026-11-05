#include <iostream>
#include <utility>
#include <algorithm>
#include <vector>
using namespace std;

#define MAX_N 15

int n;
pair<int,int> lines[MAX_N];
vector<pair<int, int>> selected;
int ans;

bool isPossible(){
    int arr[1001] {};

    for(int i=0; i<(int)selected.size(); i++){
        int l, r;
        tie(l, r) = selected[i];

        for(int j=l; j<=r; j++){
            if(arr[j]!=0) return false;
            arr[j] = 1;
        }
    }

    return true;
}

void solve(int currIdx, int cnt){
    if(currIdx == n){
        if(isPossible()){
            ans = max(ans, cnt);
        }
        return;
    }

    selected.push_back(lines[currIdx]);
    solve(currIdx+1, cnt+1);
    selected.pop_back();

    solve(currIdx+1, cnt);
}

int main() {
    cin >> n;

    for(int i=0; i<n; i++){
        int l, r;
        cin >> l >> r;
        lines[i] = make_pair(l, r);
    }

    solve(0, 0);
    cout << ans;

    return 0;
}