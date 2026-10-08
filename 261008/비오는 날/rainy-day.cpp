#include <iostream>
#include <string>
using namespace std;

class Forecast{
    public:
    string date;
    string day;
    string weather;

    Forecast(string date, string day, string weather){
        this->date = date;
        this->day = day;
        this->weather = weather;
    }

    Forecast(){}
};

int main() {
    int n;
    cin >> n;

    Forecast f[101];

    for(int i=0; i<n; i++){
        string date, day, weather;
        cin >> date >> day >> weather;

        f[i] = Forecast(date, day, weather);
    }

    int idx = -1;
    for(int i=0; i<n; i++){
        if(f[i].weather == "Rain"){
            if(idx == -1){
                idx = i;
            }else if(f[i].date.compare(f[idx].date)<0){
            idx = i;
            }
        }
    }

    cout << f[idx].date << " " <<  f[idx].day << " " << f[idx].weather;

    return 0;
}