#include <iostream>
#include <string>
using namespace std;

int months[13] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

int GetDays(int m, int d){
    int total_days=d;

    for(int i=1; i<m; i++){
        total_days+=months[i];
    }

    return total_days;
}

int main() {
    int m1,d1,m2,d2;
    cin >>m1>>d1>>m2>>d2;

    string days[7] = {"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"};


    int d = (GetDays(m2,d2)-GetDays(m1,d1))%7;

    if(d<0){
        cout << days[d+7];
    }else{
        cout << days[d];
    }
    
    return 0;
}