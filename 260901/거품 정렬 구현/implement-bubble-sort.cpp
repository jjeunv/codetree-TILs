#include <iostream>
#define MAX_N 100

using namespace std;



void BubbleSort(int arr[],  int n){
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
}

int main(){
    int n;
    int arr[MAX_N];
    cin>>n;

    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    BubbleSort(arr, n);

    for(int i=0; i<n; i++){
        cout<<arr[i] <<" ";
    }

    return 0;
}