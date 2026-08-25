#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& arr, int n){
    bool sorted = true;

    do{
        sorted = true;
        for(int i=0; i<n-1; i++){
            if(arr[i]>arr[i+1]){
                int tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
                sorted = false;
            }
        }
    }while(!sorted);

    return;
}

int main() {
    
    int n; cin>>n;

    vector<int> arr(n); 

    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    bubbleSort(arr, n);

    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}