#include <iostream>
using namespace std;

int SumOfDigits(int num){
    int sum = 0;

    while(num!=0){
        sum += num%10;
        num /= 10;
    }

    return sum;
}

int main() {
    int x, y;
    cin >> x >> y;

    int ans = 0;

    for(int i=x; i<=y; i++){
        ans = max(ans, SumOfDigits(i));
    }

    cout << ans;

    return 0;
}