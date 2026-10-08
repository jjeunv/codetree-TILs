#include <iostream>
#include <string>
using namespace std;

class Bomb{
    public:
    string code;
    char color;
    int second;

    Bomb(string code, char color, int second){
        this->code = code;
        this->color = color;
        this->second = second;
    }

    Bomb(){}
};

int main() {
    string code;
    char color;
    int second;

    cin >> code >> color >> second;

    Bomb b = Bomb(code, color, second);

    cout << "code : " << b.code << endl;
    cout << "color : " << b.color << endl;
    cout << "second : " << b.second;
    return 0;
}