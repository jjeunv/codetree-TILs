#include <iostream>
#include <vector>
using namespace std;

int n;
int ans = 0;
vector<int> nums;

bool isBeautiful(){
    int cnt = 1;
    for(int i=1; i<(int)nums.size(); i++){
        if(nums[i]!= nums[i-1]){
            if(cnt % nums[i-1] != 0){
                return false;
            }
            cnt = 1;
        }else{
            cnt++;
        }
    }

    if(cnt % nums[(int)nums.size()-1] != 0){
        return false;
    }

    return true;
}

void choose(int cnt){
    if(cnt==n){
        if(isBeautiful()){
            ans++;
        }
        return;
    }

    for(int i=1; i<=4 ; i++){
        nums.push_back(i);
        choose(cnt+1);
        nums.pop_back();
    }
}

int main() {
    cin >> n;

    choose(0);
    cout << ans;

    return 0;
}