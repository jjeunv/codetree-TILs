#include <iostream>
using namespace std;

int main() {
    int arr[2001]{};

    int n;
    cin >> n;

    int cnt = 1000;

    while(n--){
        int x;
        char c;
        cin >> x>> c;

        if(c=='R'){
            while(x--){
                arr[cnt++]++;
            }
        }else{
            while(x--){
                arr[--cnt]++;
            }
        }
    }

    int ans = 0;
    for(int i=0; i<2001; i++){
        if(arr[i]>=2) ans++;
    }

    cout << ans<<endl;

    return 0;
}