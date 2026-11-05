#include <iostream>
#include <string>
#include <climits>
using namespace std;

string s;
int nums[6];
int ans = INT_MIN;

int calc(){
    int num = nums[s[0]-'a'];

    for(int i=2; i<(int)s.length(); i+=2){
        char op = s[i-1];
        int next_number = nums[s[i]-'a'];

        if(op=='+'){
            num += next_number;
        }else if(op=='-'){
            num -= next_number;
        }else{
            num *= next_number;
        }
    }

    return num;
}

void choose(int currIdx){
    if(currIdx == 6){
        ans = max(ans, calc());
        return;
    }

    for(int i=1; i<=4; i++){
        nums[currIdx] = i;
        choose(currIdx+1);
    }


}

int main() {
    cin >> s;

    choose(0);

    cout << ans;

    return 0;
}