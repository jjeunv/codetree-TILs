#include <iostream>
#define MAX_N 100000
using namespace std;

void Merge(int arr[],int low,int mid,int high){
    int merged_arr[MAX_N];
    int i=low, j=mid+1, k=low;

    while(i<=mid && j<=high){
        if(arr[i]<=arr[j]){
            merged_arr[k]=arr[i];
            k++;
            i++;

        }else{
            merged_arr[k]=arr[j];
            k++;
            j++;
        }
    }

    while(i<=mid){
        merged_arr[k]=arr[i];
        k++;
        i++;
    }

    while(j<=high){
        merged_arr[k]=arr[j];
        k++;
        j++;
    }

    for(int k=low; k<=high; k++){
        arr[k]=merged_arr[k];
    }
}

void MergeSort(int arr[],int low,int high){
    if(low<high){
        int mid = (low+high)/2;
        MergeSort(arr, low, mid);
        MergeSort(arr, mid+1, high);
        Merge(arr, low, mid, high);
    }
}

int main(){
    int n;
    cin>>n;

    int arr[MAX_N];

    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    MergeSort(arr,0,n-1);

    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}