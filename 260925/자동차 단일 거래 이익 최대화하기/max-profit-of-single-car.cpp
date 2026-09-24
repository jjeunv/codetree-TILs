#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[1001];

    for(int i=0; i<n; i++){
        cin >> arr[i];
    }

    int max = 0;

    for(int i=0; i<n; i++){
        for(int j=i+1; j<n; j++){
            int price = arr[j]-arr[i];
            if(price > max){
                max = price;
            }
        }
    }

    cout<<max;
    return 0;
}