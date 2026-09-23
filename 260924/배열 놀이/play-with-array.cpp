#include <iostream>
using namespace std;

int main() {
    int n;
    int q;

    cin>> n >> q;

    int arr[101];

    for(int i=1; i<=n; i++){
        cin>>arr[i];
    }

    for(int i=0; i<q; i++){
        int a;
        int b;
        cin >> a>> b;
        
        if(a==1){
            cout<<arr[b];
        }else if(a==2){
            int idx = 0;
            for(int j=1; j<=n; j++){
                if(arr[j]==b){
                    idx = j;
                    break;
                }
            }
            cout<< idx;
        }else{
            int e;
            cin >> e;
            for(int j=b; j<=e; j++){
                cout<<arr[j]<<" ";
            }
        }
        cout<<"\n";
    }
    return 0;
}