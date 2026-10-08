#include <iostream>
using namespace std;

class Spy{
    public:
    char code_name;
    int score;

    Spy(char code_name=' ', int score=0){
        this->code_name = code_name;
        this->score = score;
    }
};

int main(){
    Spy spys[5];

    for(int i=0; i<5; i++){
        char code_name;
        int score;
        cin >> code_name >> score;
        spys[i] = Spy(code_name, score);
    }

    int min_idx = 0;
    for(int i=1; i<5; i++){
        if(spys[i].score<spys[min_idx].score){
            min_idx = i;
        }
    }

    cout << spys[min_idx].code_name << ' ' << spys[min_idx].score;
    return 0;
}