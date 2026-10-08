#include <iostream>
#include <algorithm>
#include <tuple>
using namespace std;

int main() {
    int n;
    cin >>n;

    tuple<int, int, int> students[1001];

    for(int i=0; i<n; i++){
        int height, weight;
        cin >> height >> weight;
        
        students[i] = make_tuple(-height, -weight, i+1);
    }

    sort(students, students+n);

    for(int i=0; i<n; i++){
        int height, weight, number;
        tie(height, weight, number) = students[i];
        cout << -height<<" "<<-weight << " "<<number<<endl;
    }
    return 0;
}