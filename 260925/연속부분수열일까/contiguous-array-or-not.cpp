#include <iostream>
using namespace std;

int main() {
    int n1, n2;
    cin >> n1 >> n2;

    int num1[101];
    int num2[101];

    for(int i=0; i<n1; i++){
        cin>>num1[i];
    }

    for(int i=0; i<n2; i++){
        cin >> num2[i];
    }

    bool ismatched = false;

    if(n1<n2){
        cout <<"No";
    }else{
    for(int i=0; i<n1-n2+1; i++){
        if(num1[i]!=num2[0]){
            continue;
        }
        bool flag=false;
        for(int j=0; j<n2; j++){
            if(num1[j+i]!=num2[j]){
                flag=true;
                break;
            }
        }
        if(flag){
            continue;
        }
        ismatched = true;
        break;
    }
    if(ismatched){
        cout<<"Yes";
    }else{
        cout<<"No";
    }
    }


    return 0;
}