#include <iostream>
#include <algorithm>
#include <string>
#include <tuple>
using namespace std;

bool cmp1(tuple<string, int,double> a, tuple<string,int,double> b){
    return get<0>(a) < get<0>(b);
}

bool cmp2(tuple<string, int,double> a, tuple<string,int,double> b){
    return get<1>(a) > get<1>(b);
}


int main() {
    tuple<string, int, double> t[5];

    for(int i=0; i<5; i++){
        string name;
        int height;
        double weight;
        cin >> name >> height >> weight;
        t[i] = make_tuple(name, height, weight);
    }

    sort(t, t+5, cmp1);

    cout<<fixed;
    cout.precision(1);

    cout << "name\n";

    for(int i=0; i<5; i++){
        string name;
        int height;
        double weight;
        tie(name, height, weight) = t[i];

        cout <<name << ' '<<height<<' '<<weight<<'\n';
    }

    sort(t, t+5, cmp2);
    
    cout <<"\nheight\n";

    for(int i=0; i<5; i++){
        string name;
        int height;
        double weight;
        tie(name, height, weight) = t[i];

        cout <<name << ' '<<height<<' '<<weight<<'\n';
    }
    return 0;
}