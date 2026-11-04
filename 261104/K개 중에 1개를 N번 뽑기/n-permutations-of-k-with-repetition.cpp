#include <iostream>
#include <vector>
using namespace std;

int k, n;
vector<int> nums;

void choose(int cnt){
    if(cnt==n){
        for(int i=0; i<nums.size(); i++){
            cout << nums[i] <<" ";
        }
        cout <<'\n';

        return;
    }

    for(int i=1; i<=k; i++){
        nums.push_back(i);
        choose(cnt+1);
        nums.pop_back();
    }
}

int main() {
    cin >> k >>n;

    choose(0);

    return 0;
}