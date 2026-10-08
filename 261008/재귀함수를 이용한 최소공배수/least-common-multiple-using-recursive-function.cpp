#include <iostream>
using namespace std;

int gcd(int a, int b){
    while(a!=0){
        int r = b % a;
        b = a;
        a = r;
    }
    return b;
}

int lcm(int a, int b){
    return a*b / gcd(a,b);
}

int PrintNumber(int n, int arr[]){
    if(n==0){
        return arr[0];
    }
    return lcm(PrintNumber(n-1, arr), arr[n]);
}

int main() {
    int n;
    cin >> n;

    int arr[11];

    for(int i=0; i<n; i++){
        cin >> arr[i];
    }

    cout << PrintNumber(n-1, arr);
    return 0;
}