#include <iostream>
#include <string>
using namespace std;

int main() {
    string arr[10];

    for(int i=0; i<10; i++){
        cin >> arr[i];
    }

    char c;
    cin >> c;

    int cnt = 0;

    for(int i=0; i<10; i++){
        if(arr[i][arr[i].length()-1]==c){
            cout<< arr[i] << '\n';
            cnt++;
        }
    }

    if(cnt==0){
        cout<<"None";
    }
    return 0;
}