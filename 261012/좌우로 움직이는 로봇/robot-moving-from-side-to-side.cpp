#include <iostream>
using namespace std;

#define MAX_T 2000000

int main() {
    int n, m;
    cin >> n >> m;

    int a[MAX_T]{};
    int b[MAX_T]{};

    fill(a, a+MAX_T, MAX_T);
    fill(b, b+MAX_T, MAX_T);

    int cur_a = 0;
    int cur_b = 0;
    a[0] = b[0] = 0;

    // 로봇 A
    while(n--){
        int t;
        char d;
        cin >> t >> d;

        if(d=='R'){
            for(int i=0; i<t; i++){
                a[++cur_a]=a[cur_a]+1;
            }
        }else{
            for(int i=0; i<t; i++){
                a[++cur_a]=a[cur_a]-1;
            }
        }
    }

    // 로봇 B
    while(m--){
        int t;
        char d;
        cin >> t >> d;

        if(d=='R'){
            for(int i=0; i<t; i++){
                b[++cur_b]=b[cur_b]+1;
            }
        }else{
            for(int i=0; i<t; i++){
                b[++cur_b]=b[cur_b]-1;
            }
        }
    }

    // 위치 비교
    int dis_a = a[1];
    int dis_b = b[1];
    int ans = 0;

    for(int i=2; i<MAX_T; i++){
        if(a[i]==MAX_T && b[i]==MAX_T){
            break;
        }else if(a[i]==MAX_T){
            if(dis_a!=dis_b && dis_a==b[i]){
                ans++;
            }
        }else if(b[i]==MAX_T){
            if(dis_a!=dis_b && dis_b==a[i]){
                ans++;
            }
        }else if(dis_a!=dis_b && a[i]==b[i]){
            ans++;
        }

        if(a[i]!=MAX_T){
            dis_a = a[i];
        }
        if(b[i]!=MAX_T){
            dis_b = b[i];
        }
    }

    cout << ans;
    return 0;
}