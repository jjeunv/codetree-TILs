#include <iostream>
using namespace std;

int main() {
    int students[101]{};

    int n,m,k;
    cin >> n >> m >> k;

    int ans = -1;

    while(m--){
        int a; 
        cin >> a;

        students[a]++;

        if(students[a]==k){
            ans = a;
            break;
        }
    }

    cout << ans;
    return 0;
}