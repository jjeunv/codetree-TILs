#include <iostream>
#include <algorithm>
#include <string>

using namespace std;

class Person{
    public:
    string name;
    int height;
    int weight;

    Person(string name, int height, int weight){
        this->name = name;
        this->height = height;
        this->weight = weight;
    }

    Person(){}
};

bool cmp(Person a, Person b){
    return a.height < b.height;
}

int main() {
    int n;
    cin >> n;

    Person p[11];

    for(int i=0; i<n; i++){
        string name;
        int height, weight;
        cin >> name >> height >> weight;

        p[i] = Person(name, height, weight);
    }

    sort(p, p+n, cmp);

    for(int i=0; i<n; i++){
        cout << p[i].name << ' ' << p[i].height << ' '<<p[i].weight << '\n';
    }


    return 0;
}