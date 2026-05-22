#include <iostream>
using namespace std;

int main() {
    int n;
    cin>>n;

    const int MAX_NUM = 1000*100*2+1;
    
    int black[MAX_NUM]={};
    int white[MAX_NUM]={};
    int grid[MAX_NUM]={};

    // 흰 검 회 = 1, 2, 3

    int cur = MAX_NUM/2;

    for(int i=0; i<n; i++){
        int x;
        char dir;
        cin>>x>>dir;

        if(dir=='L'){
            for(int j=0; j<x; j++){
                if(grid[cur]==3){
                    cur--;
                    continue;
                }

                white[cur] ++;

                if(black[cur]>=2 && white[cur]>=2){
                    grid[cur]=3;
                }else{
                    grid[cur]=1;
                }
                
                cur--;
            }
            cur++;
        }else{
            for(int j=0; j<x; j++){
                if(grid[cur]==3){
                    cur++;
                    continue;
                }

                black[cur] ++;

                if(black[cur]>=2 && white[cur]>=2){
                    grid[cur]=3;
                }else{
                    grid[cur]=2;
                }

                cur++;
            }
            cur--;}
    }

    int w=0,b=0,g=0;
    for(int c: grid){
        if(c==1){
            w+=1;
        }else if(c==2){
            b+=1;
        }else if(c==3){
            g+=1;
        }
    }

    
    cout<< w<<" "<<b<<" "<<g;
    return 0;
}