#include <iostream>
#include <vector>
using namespace std;

vector<int> arr;
int n;

void redix_sort(){
    for(int pos=0; pos<6; pos++){
        int pow_of_10 =1;
        for(int k=0; k<pos; k++) pow_of_10 *= 10;

        vector<vector<int>> arr_new(10);
        for(int i=0; i<n; i++){

            int digit = (arr[i]/pow_of_10)%10;
            arr_new[digit].push_back(arr[i]);
        }
        vector<int> store_arr;
        for(int i=0; i<10; i++){
            for(int j=0; j<arr_new[i].size(); j++){
                store_arr.push_back(arr_new[i][j]);
            }
        }
        arr=store_arr;
    }
}
int main(){
    cin>>n;
    for(int i=0; i<n; i++){
        int num; cin>>num;
        arr.push_back(num);
    }

    redix_sort();

    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }
}