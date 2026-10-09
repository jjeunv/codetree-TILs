#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int months[13] = {0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
string days[7] = {"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"};

int GetDays(int m, int d){
    int total_days = d;
    
    for(int i=1; i<m; i++){
        total_days += months[i];
    }

    return total_days;
}

int main() {
    int m1, d1, m2, d2;
    string day;
    cin >> m1 >> d1 >> m2 >> d2 >> day;

    int d = GetDays(m2, d2) - GetDays(m1, d1);
    int ans = d/7 + (d%7>=(find(days, days+7, day)-days) ? 1 : 0);

    cout << ans;

    return 0;
}