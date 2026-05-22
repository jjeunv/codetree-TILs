#include <iostream>
using namespace std;

int getDays(int m, int d){
    int arr[13] = {0,31,28,31,30,31,30,31,31,30,31,30,31};
    int days=d;
    for(int i=1; i<m; i++){
        days+=arr[i];
    }
    return days;
}

int main() {


    int m1,d1,m2,d2;
    cin>>m1>>d1>>m2>>d2;

    cout<< getDays(m2,d2) - getDays(m1,d1) + 1;
    return 0;
}