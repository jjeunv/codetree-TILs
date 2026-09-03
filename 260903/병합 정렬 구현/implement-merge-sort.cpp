#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& arr,int low,int mid,int high){
    vector<int> merged_arr(high-low+1);
    int i=low, j=mid+1, k=0;

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

    for(int i=low; i<=high; i++){
        arr[i]=merged_arr[i-low];
    }
}

void merge_sort(vector<int>& arr,int low,int high){
    if(low<high){
        int mid = (low+high)/2;
        merge_sort(arr, low, mid);
        merge_sort(arr, mid+1, high);
        merge(arr, low, mid, high);
    }
}

int main(){
    int n;
    cin>>n;

    vector<int> arr;

    for(int i=0; i<n; i++){
        int num; cin>>num;
        arr.push_back(num);
    }

    merge_sort(arr,0,n-1);

    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}