#include <iostream>
#include <vector>
using namespace std;

void selection_sort(vector<int>& arr, int n){
    for(int i=0; i<n-1; i++){
        int minIdx = i;
        for(int j=i+1; j<n; j++){
            if(arr[j]<arr[minIdx]) minIdx = j;
        }
        int tmp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = tmp;
    }
}

int main() {
    int n; cin>>n;
    vector<int> arr(n);
    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    selection_sort(arr,n);

    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}