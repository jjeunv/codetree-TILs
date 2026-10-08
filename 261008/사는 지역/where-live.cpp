#include <iostream>
#include <string>
using namespace std;

class Person{
    public:
    string name;
    string addr;
    string city;

    Person(string name, string addr, string city){
        this->name = name;
        this->addr = addr;
        this->city = city;
    }

    Person(){}
};

int main() {
    int n;
    cin >> n;
    Person p[11];

    for(int i=0; i<n; i++){
        string name, addr, city;
        cin >> name >> addr >> city;
        p[i] = Person(name, addr, city);
    }

    int idx = 0;
    for(int i=1; i<n; i++){
        if(p[i].name.compare(p[idx].name) > 0){
            idx = i;
        }
    }

    cout << "name " << p[idx].name << endl;
    cout << "addr " << p[idx].addr << endl;
    cout << "city " << p[idx].city << endl;

    return 0;
}