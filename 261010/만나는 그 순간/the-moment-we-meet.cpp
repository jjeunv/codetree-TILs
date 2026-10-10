#include <iostream>
using namespace std;

#define MAX_N 1000*1000*2+1

int main() {
    int a[MAX_N];
    int b[MAX_N];

    fill(a, a+MAX_N, -1);
    fill(b, b+MAX_N, -1);

    int n,m;
    cin >> n >> m;

    int cur = 1000*1000;
    int sec = 0;

    while(n--){
        char d;
        int t;
        cin >> d >> t;

        if(d=='R'){
            while(t--){
                a[++sec]= ++cur;
            }
        }else{
            while(t--){
                a[++sec]= --cur;
            }
        }
    }

    cur = 1000*1000;
    sec = 0;

    while(m--){
        char d;
        int t;
        cin >> d>> t;

        if(d=='R'){
            while(t--){
                b[++sec] = ++cur;
            }
        }else{
            while(t--){
                b[++sec] = --cur;
            }
        }
    }

    int ans = -1;

    for(int i=0; i<MAX_N; i++){
        if(a[i]!=-1 && a[i]==b[i]){
            ans = i;
            break;
        }
    }

    cout << ans;
    return 0;
}