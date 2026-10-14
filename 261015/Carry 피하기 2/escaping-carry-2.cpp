#include <iostream>
#include <algorithm>
using namespace std;

#define MAX_N 21

bool HasCarry(int a, int b, int c){
    for(int i=0; i<5; i++){
        int r_a = a%10;
        int r_b = b%10; 
        int r_c = c%10;

        if(r_a+r_b+r_c >= 10){
            return true;
        }

        a/=10;
        b/=10;
        c/=10;
    }
    return false;
}

int main() {
    int arr[MAX_N] {};

    int n;
    cin >> n;

    for(int i=0; i<n; i++){
        cin >> arr[i];
    }

    int ans = -1;

    for(int i=0; i<n; i++){
        for(int j=i+1; j<n; j++){
            for(int k=j+1; k<n; k++){
                if(!HasCarry(arr[i], arr[j], arr[k])){
                    ans = max(ans, arr[i]+arr[j]+arr[k]);
                }
            }
        }
    }

    cout << ans;
    return 0;
}