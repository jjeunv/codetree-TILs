#include <iostream>
using namespace std;
int dx[4]{1,0,-1,0};
int dy[4]{0,1,0,-1};

int arr[101][101];
int main() {
    int n,m;
    cin >> n>>m;
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            arr[i][j]==0;
        }
    }
    int x=0;
    int y=0;
    int dis=0;
    arr[x][y]=1;

    for (int i=2; i<=m*n; i++){
       
        if(y+dx[dis]<0|| y+dx[dis]>m-1){
            dis=(dis+1)%4;
        }
        else if(x+dy[dis]<0 || x+dy[dis]> n-1){
            dis=(dis+1)%4;     
        }
        if(arr[x+dy[dis]][y+dx[dis]]>0){
            dis=(dis+1)%4;
        }
       
        x=x+dy[dis];
        y=y+dx[dis];
        arr[x][y]=i; 
        
    }
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            cout << arr[i][j] << ' ';
        }
        cout << '\n';
    }

   
    return 0;
}