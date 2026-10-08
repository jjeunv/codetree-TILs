#include <iostream>
using namespace std;

int PrintCount(int n, int count){
    if(n==1){
        return count;
    }

    if(n%2 == 0){
        return PrintCount(n/2, count+1);
    }else{
        return PrintCount(n/3, count+1);
    }
}

int main() {
    int n;
    cin >> n;

    cout << PrintCount(n, 0);

    return 0;
}