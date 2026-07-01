#include <iostream>
using namespace std;

const int INT_MAX = 1000001;
int n; 
int arr[INT_MAX];

int position(int low, int high){
    int pivot = arr[high];
    int i = low-1; // blue
    
    for(int j=low; j<high; j++){
        if(arr[j]<pivot){
            i++;
            int tmp=arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }

    int tmp=arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = tmp;

    return i+1;
}

void quick_sort(int low, int high){
    if(low<high){
        int pos = position(low, high);

        quick_sort(low, pos-1);
        quick_sort(pos+1, high);
    }
}
int main() {
    cin>>n;
    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    quick_sort(0, n-1);

    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}