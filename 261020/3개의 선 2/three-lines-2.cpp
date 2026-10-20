#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int x[20];
    int y[20];

    for(int i=0; i<n; i++){
        cin >> x[i] >> y[i];
    }

    int cnt;

    for(int i=0; i<=10; i++){
        for(int j=i+1; j<=10; j++){
            for(int k=j+1; k<=10; k++){
                cnt = 0;
                for(int l=0; l<n; l++){
                    if(x[l]==i || x[l]==j || x[l]==k){
                        cnt++;
                    }
                }
                if(cnt==n){
                    cout << 1;
                    return 0;
                }
            }
        }
    }

    for(int i=0; i<=10; i++){
        for(int j=i+1; j<=10; j++){
            for(int k=0; k<=10; k++){
                cnt = 0;
                for(int l=0; l<n; l++){
                    if(x[l]==i || x[l]==j || y[l]==k){
                        cnt++;
                    }
                }
                if(cnt==n){
                    cout << 1;
                    return 0;
                }
            }
        }
    }

    for(int i=0; i<=10; i++){
        for(int j=0; j<=10; j++){
            for(int k=j+1; k<=10; k++){
                cnt = 0;
                for(int l=0; l<n; l++){
                    if(x[l]==i || y[l]==j || y[l]==k){
                        cnt++;
                    }
                }
                if(cnt==n){
                    cout << 1;
                    return 0;
                }
            }
        }
    }

    for(int i=0; i<=10; i++){
        for(int j=i+1; j<=10; j++){
            for(int k=j+1; k<=10; k++){
                cnt = 0;
                for(int l=0; l<n; l++){
                    if(y[l]==i || y[l]==j || y[l]==k){
                        cnt++;
                    }
                }
                if(cnt==n){
                    cout << 1;
                    return 0;
                }
            }
        }
    }

    cout << 0;

    return 0;
}