#include <iostream>
#define MAX_N 100000

using namespace std;

void merge(int* arr, int low, int mid, int high, int* merge_arr){
    int i = low, j = mid + 1;

    int k = low;

    while(i<=mid && j<=high){
        if(arr[i]<arr[j]){
            merge_arr[k++]=arr[i++];
        }else{
            merge_arr[k++]=arr[j++];
        }
    }

    while(i<=mid){
        merge_arr[k++]=arr[i++];
    }

    while(j<=high){
        merge_arr[k++]=arr[j++];
    }

    for(int k=low; k<=high; k++){
        arr[k] = merge_arr[k];
    }
}

void mergeSort(int* arr, int low, int high, int* merge_arr){
    if(low<high){
        int mid = (low + high)/2;

        mergeSort(arr, low, mid, merge_arr);
        mergeSort(arr, mid+1, high, merge_arr);
        merge(arr, low, mid, high, merge_arr);
    }
}

int main(){
    int arr[MAX_N];
    int merge_arr[MAX_N];
    int n; 

    cin>>n;

    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    mergeSort(arr, 0, n-1, merge_arr);

    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}