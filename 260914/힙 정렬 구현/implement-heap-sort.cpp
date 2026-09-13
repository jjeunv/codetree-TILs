#include <iostream>
#define MAX_N 100000

using namespace std;

void swap(int* arr, int a, int b){
    int temp=arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

void heapify(int* arr, int n, int idx){
    int largest = idx;
    int left = idx*2, right=idx*2+1;

    if(left<=n && arr[left]>arr[largest]){
        largest = left;
    }

    if(right<=n && arr[right]>arr[largest]){
        largest = right;
    }

    if(largest!=idx){
        swap(arr, largest, idx);
        heapify(arr, n, largest);
    }
}

void heapSort(int* arr, int n){
    for(int i=n/2; i>=0; i--){
        heapify(arr, n, i);
    }

    for(int i=n-1; i>0; i--){
        swap(arr, i, 0);
        heapify(arr, i-1, 0);
    }
}

int main() {
    int arr[MAX_N];
    int n;
    cin>>n;

    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    heapSort(arr, n);

    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}