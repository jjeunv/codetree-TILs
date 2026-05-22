#include <iostream>
#include <string>
using namespace std;

int getDays(int m,int d){
    int days[13] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    int totalDay = 0;
    for(int i=1; i<m; i++){
        totalDay+=days[i];
    }
    totalDay+=d;

    return totalDay;
}
int main() {
    string days[7] = { "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"};


    int m1,d1,m2,d2;
    cin >>m1>>d1>>m2>>d2;

    int sub =getDays(m2,d2)- getDays(m1,d1) ;

    sub%=7;
    if(sub<0) sub+=7;
    cout<<days[sub];

    return 0;
}