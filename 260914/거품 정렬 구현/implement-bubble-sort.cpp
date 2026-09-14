#include <iostream>
using namespace std;

void bubbleSort(int* arr, int n){
    bool sorted = true;

    do{
        sorted = true;
        for(int i=0; i<n-1; i++){
            if(arr[i]>arr[i+1]){
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1]= temp;
                sorted = false;
            }
        }
    }while(!sorted);
}

int main(){
    int arr[100];
    int n; 

    cin>>n;

    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    bubbleSort(arr, n);

    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}