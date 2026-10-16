#include <iostream>
#include <algorithm>
#include <climits>
using namespace std;

int main() {
    int arr[6] {};

    int total = 0;

    for(int i=0; i<6; i++){
        cin >> arr[i];
        total += arr[i];
    }

    int max_num = 0;
    int min_num = INT_MAX;

    int ans = INT_MAX;

    for(int i=0; i<6; i++){
        for(int j=0; j<6; j++){
            for(int k=0; k<6; k++){
                for(int l=0; l<6; l++){

                    if(i==j || i==j || i==k || i==l || j==k || j==l || k==l) continue;

                    // cout << i <<" "<<j <<" "<<k <<" "<<l<< endl;
                    int sum1 = arr[i]+arr[j];
                    int sum2 = arr[k]+arr[l];
                    int sum3 = total - sum1 - sum2;

                    int max_num = max({sum1, sum2, sum3});
                    int min_num = min({sum1, sum2, sum3});

                    ans = min(ans, max_num-min_num);
                }   
            }
        }
    }

    cout << ans;

    return 0;
}