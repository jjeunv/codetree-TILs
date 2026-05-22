#include <iostream>
#include <string>
using namespace std;

int toDecimal(string n){
    int num=0;
    for(int i=0; i<n.size(); i++){
        num = num*2 + ((int)n[i]-'0');
    }
    return num;
}

void toBinary(int n){
    int digits[20]= {};
    int cnt=0;
    while(true){
        if(n<2){
            digits[cnt]=n;
            break;
        }
        digits[cnt]= n%2;
        cnt++;
        n/=2;
    }
    for(int i=cnt; i>=0; i--){
        cout<<digits[i];
    }
}

int main() {
    int n;
    cin>>n;

    toBinary(17 * toDecimal(to_string(n)));
    return 0;
}