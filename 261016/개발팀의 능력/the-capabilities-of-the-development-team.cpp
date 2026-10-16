#include <iostream>
#include <algorithm>
#include <climits>
using namespace std;

int main() {
    int arr[5] {};
    int total = 0;

    for(int i=0; i<5; i++){
        cin >> arr[i];
        total += arr[i];
    }

    int ans = INT_MAX;

    for(int i=0; i<5; i++){
        for(int j=i+1; j<5; j++){
            for(int k=0; k<5; k++){
                if(i==k || j==k) continue;

                int sum1 = arr[i]+arr[j];
                int sum2 = arr[k];
                int sum3 = total - sum1 - sum2;

                if(sum1==sum2 || sum2==sum3 || sum3==sum1) continue;

                int max_num = max({sum1, sum2, sum3});
                int min_num = min({sum1, sum2, sum3});

                ans = min(ans, max_num-min_num);
            }
        }
    }

    cout << (ans==INT_MAX ? -1 : ans);

    return 0;
}