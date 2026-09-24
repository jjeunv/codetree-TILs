#include <iostream>
using namespace std;

int main() {
    int num;
    cin >> num;

    int min = num;
    int max = num;

    while(num!=999 && num!=-999){
        if(min > num){
            min = num;
        }

        if(max < num){
            max = num;
        }

        cin >> num;
    }

    cout << max <<" "<<min;


    return 0;
}