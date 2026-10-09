#include <iostream>
using namespace std;

#define MAX_N 1000 * 100 * 2 + 1

int main() {
    int arr[MAX_N]{};
    int black[MAX_N] {};
    int white[MAX_N] {};

    int n;
    cin >> n;

    int cnt = 1000*100;

    while(n--){
        int x;
        char c;
        cin >> x >> c;

        while(x--){
            if(arr[cnt]!=1){
                if(c=='R'){
                    black[cnt]++;
                    arr[cnt]=2;
                }else{
                    white[cnt]++;
                    arr[cnt]=3;
                }

                if(black[cnt]>=2 && white[cnt]>=2){
                    arr[cnt]=1;
                }
            }
            if(x!=0){
                if(c=='R'){
                    cnt++;
                }else{
                    cnt--;
                }
            }
        }
    }

    int b = 0;
    int w = 0;
    int g = 0;

    for(int i=0; i<MAX_N; i++){
        if(arr[i]==1){
            g++;
        }else if(arr[i]==2){
            b++;
        }else if(arr[i]==3){
            w++;
        }
    }

    cout<<w<<" "<<b<<" "<<g;
    return 0;
}