#include <iostream>
using namespace std;

#define MAX_N 1000*100*2+1

int main() {
    int arr[MAX_N]{};
    int n;
    cin >> n;

    int idx = 1000*100;

    while(n--){
        int x;
        char c;
        cin >> x >> c;

        if(c=='R'){
            while(x--){
                arr[idx]=1;

                if(x) idx++;
            }
        }else{
            while(x--){
                arr[idx]=2;

                if(x) idx--;
            }
        }
    }

    int w=0;
    int b=0;

    for(int i=0; i<MAX_N; i++){
        if(arr[i]==1){
            b++;
        }else if(arr[i]==2){
            w++;
        }
    }
    cout<< w<<" "<<b;
    return 0;
}