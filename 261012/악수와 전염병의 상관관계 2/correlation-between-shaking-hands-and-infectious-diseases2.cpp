#include <iostream>
#include <tuple>
#include <algorithm>
using namespace std;

int main() {
    // 명의 개발자, 번의 악수, 번 개발자, 개의 악수 기록
    int n, k, p, T;
    cin >> n >> k >> p >> T;

    int contagious[101]{}; // 전염 여부 
    fill(contagious, contagious+101, -1);

    contagious[p] = k;

    // T번의 악수 기록
    tuple<int, int, int> handshake[250];

    for(int i=0; i<T; i++){
        // t초에 x번 개발자와 y번 개발자가 악수
        int t, x, y;
        cin >> t >> x >> y;
        
        handshake[i] = make_tuple(t, x, y);
    }

    sort(handshake, handshake+T);

    for(int i=0; i<T; i++){
        int t, x, y;
        tie(t, x, y) = handshake[i];

        bool xCan = contagious[x]>0;
        bool yCan = contagious[y]>0;
        bool xInf = contagious[x]>=0;
        bool yInf = contagious[y]>=0;

        if(xCan && !yInf){
            contagious[y]=k;
        }
        if(yCan && !xInf){
            contagious[x]=k;
        }

        if(xCan){
            contagious[x]-=1;
        }
        if(yCan){
            contagious[y]-=1;
        }
    }

    for(int i=1; i<=n; i++){
        cout << (contagious[i]>=0 ? 1 : 0);
    }


    return 0;
}