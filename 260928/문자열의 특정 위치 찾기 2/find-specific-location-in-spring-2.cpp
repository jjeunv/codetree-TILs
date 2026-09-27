#include <iostream>
#include <string>
using namespace std;

int main() {
    string arr[5] = {"apple", "banana", "grape", "blueberry", "orange"};
    char c;
    cin>>c;

    int cnt = 0;
    for(int i=0; i<5; i++){
        if(c == arr[i][2] || c==arr[i][3]){
            cout<<arr[i]<<'\n';
            cnt++;
        }
    }

    cout<<cnt;

    return 0;
}