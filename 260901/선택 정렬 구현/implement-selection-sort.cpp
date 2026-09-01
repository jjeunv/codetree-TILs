#include <iostream>
#define MAX_N 100

using namespace std;

void SelectionSort(int arr[], int n){
    for(int i=0; i<n-1; i++){
        int min = i;
        for(int k=i+1; k<n; k++){
            if(arr[k]<arr[min]) min=k;
        }
        int tmp = arr[i];
        arr[i]=arr[min];
        arr[min]=tmp;
    }
}

int main(){
    int n; cin>>n;
    int arr[MAX_N];

    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    SelectionSort(arr, n);

    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }
}