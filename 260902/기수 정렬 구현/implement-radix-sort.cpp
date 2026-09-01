#include <iostream>
#include <vector>
#include <algorithm>
#define MAX_N 100000
using namespace std;

void RadixSort(int arr[], int n){
    int p = 1;
    for(int k=5; k>=0; k--){
        vector<int> arr_new[10];
        for(int i=0; i<n; i++){
            int digit = arr[i]/p%10;
            arr_new[digit].push_back(arr[i]);
        }
        int index=0;
        for(int i=0; i<10; i++){
            for(int j=0; j<(int)arr_new[i].size(); j++){
                arr[index++]= arr_new[i][j];
            }
        }
        p*=10;
    }
}

int main(){
    int n; cin>>n;
    int arr[MAX_N];

    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    RadixSort(arr, n);

    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}