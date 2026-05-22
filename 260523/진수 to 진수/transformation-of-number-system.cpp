#include <iostream>
#include <string>
using namespace std;

int toDecimal(string n, int b){
    int num=0;
    for(int i=0; i<n.size(); i++){
        num = num*b + ((int)n[i]-'0');
    }
    return num;
}

void answer(int n, int b){
    int digits[20]= {};
    int cnt=0;
    while(true){
        if(n<b){
            digits[cnt]=n;
            break;
        }
        digits[cnt]= n%b;
        cnt++;
        n/=b;
    }
    for(int i=cnt; i>=0; i--){
        cout<<digits[i];
    }
}

int main() {
    int a,b,n;
    cin>>a>>b>>n;

    answer(toDecimal(to_string(n), a),b);
    return 0;
}