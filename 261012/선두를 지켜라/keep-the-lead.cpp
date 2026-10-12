#include <iostream>
using namespace std;

#define MAX_N 1000*1000

int main() {
    int a[MAX_N]{};
    int b[MAX_N]{};

    int n, m;
    cin >> n >> m;

    int cur = 0;
    int sec = 0;

    while(n--){
        int v, t;
        cin >> v >> t;

        while(t--){
            a[++sec]=cur+v;
            cur+=v;
        }
    }

    cur = 0;
    sec = 0;

    while(m--){
        int v, t;
        cin >> v >> t;

        while(t--){
            b[++sec]=cur+v;
            cur+=v;
        }        
    }

    int who = 0;
    int ans = 0;

    for(int i=1; i<MAX_N; i++){
        if(a[i]==0) break;

        if(who==0 && a[i]!=b[i]){
            who = a[i]>b[i] ? 1 : 2;
            ans++;
        }

        if(who==1 && a[i]<b[i]){
            who=2;
            ans++;
        }else if(who==2 && a[i]>b[i]){
            who=1;
            ans++;
        }
    }

    cout << ans-1;

    return 0;
}