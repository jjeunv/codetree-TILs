#include <iostream>
#define MAX_N 100000

using namespace std;

void swap(int* arr, int a, int b){
    int temp = arr[a];
    arr[a]= arr[b];
    arr[b]= temp;
}


int partition(int* arr, int low, int high){
    int pivot = arr[high];
    int i = low -1;

    for(int j=low; j<high; j++){
        if(arr[j]<pivot){
            swap(arr, ++i, j);
        }
    }
    swap(arr, ++i , high);

    return i;
}

void quickSort(int* arr, int low, int high){
    if(low<high){
        int pos = partition(arr, low, high);

        quickSort(arr, low, pos-1);
        quickSort(arr, pos+1, high);
    }

}

int main(){
    int arr[MAX_N];
    int n;
    
    cin>>n;

    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    quickSort(arr, 0, n-1);

    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}