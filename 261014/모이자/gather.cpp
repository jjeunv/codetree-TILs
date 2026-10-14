#include <iostream>
#include <climits>
#include <algorithm>
#include <cstdlib>
using namespace std;

#define MAX_N 101

int main() {
    int min_val = INT_MAX;
    int arr[MAX_N] {};

    int n;
    cin >> n;

    for(int i=0; i<n; i++){
        cin >> arr[i];
    }

    for(int i=0; i<n; i++){
        int cnt = 0;

        for(int j=0; j<n; j++){
            cnt += abs(i-j)*arr[j];
        }

        min_val = min(min_val, cnt);
    }

    cout << min_val;
    
    return 0;
}