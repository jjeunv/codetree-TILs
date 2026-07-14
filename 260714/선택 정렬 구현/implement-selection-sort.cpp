#include <iostream>
#include <vector>
using namespace std;

void selectionSort(vector<int>& arr, int n){
    int minIdx;
    for(int i=0; i<n-1; i++){
        minIdx = i;
        for(int j=i+1; j<n; j++){
            if(arr[j]<arr[minIdx]){
                minIdx=j;
            }
        }
        if(minIdx!=i){
            int tmp=arr[i];
            arr[i]=arr[minIdx];
            arr[minIdx]=tmp;
        }
    }
}
int main(){
    int n; cin>>n;
    vector<int> arr(n);

    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    selectionSort(arr, n);

    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }
}