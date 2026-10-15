#include <iostream>
using namespace std;

#define MAX_N 101

int main() {
    int arr[MAX_N] {};

    int n;
    cin >> n;

    for(int i=1; i<=n; i++){
        cin >> arr[i];
    }

    int ans = 0;

    for(int i=1; i<=n; i++){
        for(int j=i; j<=n; j++){
            int sum = 0;
            for(int k=i; k<=j; k++){
                sum+=arr[k];
            }
            double avg = (double)sum/(j-i+1);

            bool same = false;

            for(int k=i; k<=j; k++){
                if(avg==arr[k]){
                    same = true;
                    break;
                }   
            }

            if(same){
                ans++;
            }
        }
    }

    cout << ans;

    return 0;
}