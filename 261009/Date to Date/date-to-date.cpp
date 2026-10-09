#include <iostream>
using namespace std;

int days[13] = {0,31,28,31,30,31,30,31,31,30,31,30,31};

int GetDays(int m, int d){
    int day = d;
    for(int i=1; i<m; i++){
        day+=days[i];
    }
    return day;
}

int main() {
    // Please write your code here.
    int m1,d1,m2,d2;
    cin >> m1>>d1>>m2>>d2;

    cout << GetDays(m2,d2) - GetDays(m1,d1) + 1;
    return 0;
}