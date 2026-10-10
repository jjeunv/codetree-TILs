#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int arr[2001][2001] {};

    for(int i=1; i<=2; i++){
        int x1,y1,x2,y2;
        cin >> x1>>y1>>x2>>y2;

        x1+=1000;
        y1+=1000;
        x2+=1000;
        y2+=1000;

        for(int j=x1; j<x2; j++){
            for(int k=y1; k<y2; k++){
                arr[j][k]=i;
            }
        }
    }

    int x1=-1, y1=2001, x2=2001, y2=-1;
    for(int i=0; i<2001; i++){
        for(int j=0; j<2001; j++){
            if(arr[i][j]==1){
                x1=max(x1, i);
                y1=min(y1, j);
                x2=min(x2, i);
                y2=max(y2, j);
            }
        }
    }

    cout<< (x1==-1 ? 0 : (x1-x2+1)*(y2-y1+1));


    return 0;
}