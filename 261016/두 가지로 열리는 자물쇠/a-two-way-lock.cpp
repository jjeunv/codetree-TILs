#include <iostream>
#include <cstdlib>
using namespace std;

bool IsMatch(int a, int b, int n){
    if(a==1 && (b==n-1 || b==n || b==2 || b==3)){
        return true;
    }

    if(a==2 && (b==n || b==1 || b==3 || b==4)){
        return true;
    }

    if(a==n && (b==n-1 || b==n-2 || b==1 || b==2)){
        return true;
    }

    if(a==n-1 && (b==n-3 || b==n-2 || b==n || b==1)){
        return true;
    }

    if(abs(a-b)<=2){
        return true;
    }

    return false;
}

bool CanOpen(int a1, int b1, int c1, int a2, int b2, int c2, int n){
    if(IsMatch(a1, a2, n) && IsMatch(b1, b2, n) && IsMatch(c1, c2, n)){
        return true;
    }
    return false;
}

int main() {
    int n;
    cin >> n;

    int a1, b1, c1;
    int a2, b2, c2;
    
    cin >> a1 >> b1 >> c1 >> a2 >> b2 >> c2;

    int ans = 0;

    for(int i=1; i<=n; i++){
        for(int j=1; j<=n; j++){
            for(int k=1; k<=n; k++){
                if(CanOpen(a1,b1,c1, i,j,k, n) || CanOpen(a2,b2,c2, i,j,k, n)){
                    ans++;
                }
            }
        }
    }

    cout << ans;

    return 0;
}