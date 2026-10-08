#include <iostream>
#include <tuple>
#include <algorithm>
#include <string>
using namespace std;

bool cmp(tuple<string,int,int,int> a, tuple<string,int,int,int> b){
    string name1, name2;
    int a1,b1,c1;
    tie(name1, a1,b1,c1) = a;

    int a2,b2,c2;
    tie(name2, a2,b2,c2) = b;

    return a1+b1+c1 < a2+b2+c2;
}

int main() {
    int n;
    cin >> n;

    tuple<string, int, int, int> students[11];

    for(int i=0; i<n; i++){
        string name;
        int a, b, c;
        cin >> name >> a>> b>> c;
        
        students[i]=make_tuple(name, a, b, c);
    }

    sort(students, students+n, cmp);

    for(int i=0; i<n; i++){
        string name;
        int a, b, c;
        tie(name, a, b, c) = students[i];

        cout << name << ' '<<a << ' '<<b << ' '<<c << '\n';
    }
    return 0;
}