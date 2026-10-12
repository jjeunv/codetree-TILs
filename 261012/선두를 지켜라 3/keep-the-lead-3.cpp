#include <iostream>
using namespace std;

#define MAX_N 1000*1000+1

int main() {
    int n, m;
    cin >> n >> m;

    int a[MAX_N]{};
    int b[MAX_N]{};

    int cur_t = 1;
    // A 이동
    while(n--){
        int v, t;
        cin >> v >> t;

        while(t--){
            a[cur_t]=a[cur_t-1]+v;
            cur_t++;
        }
    }

    cur_t = 1;
    // B 이동
    while(m--){
        int v, t;
        cin >> v >> t;
        
        while(t--){
            b[cur_t]=b[cur_t-1]+v;
            cur_t++;
        }
    }

    int dis[MAX_N]{};
    for(int i=1; i<cur_t; i++){
        if(a[i]==b[i]){
            dis[i]=3;
        }else if(a[i]>b[i]){
            dis[i]=1;
        }else{
            dis[i]=2;
        }
    }

    int ans = 1;
    for(int i=2; i<cur_t; i++){
        if(dis[i]!=dis[i-1]){
            ans++;
        }
    }
    cout << ans;

    return 0;
}