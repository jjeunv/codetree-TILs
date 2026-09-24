#include <iostream>
using namespace std;

int main() {
    int min = 1001;
    int max = 0;

    for(int i=0; i<10; i++){
        int num; 
        cin >> num;
        if(num<500 && max <num){
            max = num;
        }else if(num>500 && num <min){
            min = num;
        }
    }

    cout<<  max <<" "<<min;
    return 0;
}