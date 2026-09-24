#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[1001];

    for(int i=0; i<n; i++){
        cin >> arr[i];
    }

    int max = arr[n-1];
    int idx = n-1;


    while(true){
        for(int i=idx; i>=0; i--){
            if(max <= arr[i]){
                max = arr[i];
                idx = i;
            }
        }

        cout << idx + 1 << " ";

        if(idx ==0 ){
            break;
        }

        idx--;

        if(idx==0){
            cout << 1 <<endl;
            break;
        }

        max = arr[idx-1];
    }


    return 0;
}