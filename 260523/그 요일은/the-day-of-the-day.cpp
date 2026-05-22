#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int getDays(int m, int d){
    int totalDays = d;
    int days[13] = {0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    for(int i=1; i<m; i++){
        totalDays+=days[i];
    }
    return totalDays;
}
int main() {

    int m1,d1,m2,d2;
    cin>>m1>>d1>>m2>>d2;
    string a;
    cin>>a;

    string days[7] = {"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"};
    int subDay = getDays(m2,d2)-getDays(m1,d1);

    int ans = subDay/7;
    subDay%=7;
    int idx = find(days, days+7, a) - days;
    if (idx<=subDay) ans+=1;

    cout<<ans;
    return 0;
}