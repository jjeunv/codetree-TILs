#include <iostream>
using namespace std;

const int INT_MAX=100001;
int n;
int arr[INT_MAX];


void merge(int low, int mid, int high){
    int i=low;
    int j=mid+1;
    int k=low;

    int merged_arr[INT_MAX];
    while(i<=mid && j<=high){
        if(arr[i]<arr[j]){
            merged_arr[k] = arr[i];
            i++;
            k++;
        }else{
            merged_arr[k] = arr[j];
            j++;
            k++;
        }
    }

    while(i<=mid){
        merged_arr[k]= arr[i];
        k++;
        i++;
    }
    while(j<=high){
        merged_arr[k] = arr[j];
        k++;
        j++;
    }
    
    for(int l=low; l<=high; l++){
        arr[l]= merged_arr[l];
    }
}

void merge_sort(int low, int high){
    if(low<high){
        int mid = (low+high)/2;
        merge_sort(low,mid);
        merge_sort(mid+1, high);
        merge(low, mid, high);
    }
}

int main() {
    cin >> n;

    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    merge_sort(0, n-1);

    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}