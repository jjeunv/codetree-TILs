#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    int num;
    cin >> str >> num;

    if(str.length() < num){
        for(int i=(int)str.length()-1; i>=0; i--){
            cout<< str[i];
        }
    }else{
    for(int i=str.length()-1; i>=(int)str.length()-num; i--){
        cout<< str[i];
    } }

    return 0;
}