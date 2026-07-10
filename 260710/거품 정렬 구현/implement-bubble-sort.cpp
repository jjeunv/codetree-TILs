#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& arr){
    bool sorted;
    int end = arr.size()-1;

    do{
        sorted = true;
        for(int i=0; i<end; i++){
            if(arr[i]>arr[i+1]){
                int tmp=arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
                sorted = false;
            }
        }
        end--;
    }while(!sorted);
}

int main() {
    int n; cin>>n;
    vector<int> nums(n);

    for(int i=0; i<n; i++){
        cin>>nums[i];
    }

    bubbleSort(nums);

    for(int i=0; i<n; i++){
        cout<<nums[i]<<" ";
    }
    return 0;
}