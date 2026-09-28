#include <iostream>
#include <string>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    string str="";

    for(int i=0; i<n;i++){
        string s;
        cin >> s;
        str += s;
    }

  
    for(int i=0; i<str.length(); i++){
        cout<<str[i];
        if((i+1)%5==0){
            cout<<endl;
        }
    }
    return 0;
}