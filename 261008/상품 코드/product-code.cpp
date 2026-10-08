#include <iostream>
#include <string>
using namespace std;

class Product{
    public:
    string name;
    int code;

    Product(string name, int code){
        this->name = name;
        this->code = code;
    }

    Product(){}
};

int main() {
    string name;
    int code;

    cin >> name >> code;

    Product p = Product("codetree", 50);

    cout << "product " << p.code << " is " << p.name << endl;

    p = Product(name, code);

    cout << "product " << p.code << " is " << p.name << endl;
    
    return 0;
}