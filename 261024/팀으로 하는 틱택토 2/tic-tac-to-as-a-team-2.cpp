#include <iostream>
#include <string>
using namespace std;

int main() {
    int arr[3][3];
    string inp[3];

    for(int i=0; i<3; i++){
        cin>>inp[i];
    }

    int ans = 0;


    for(int i=0; i<3; i++){
        for(int j=0; j<3; j++){
            arr[i][j] = inp[i][j]-'0';
        }
    }

    // for(int i=0; i<3; i++){
    //     for(int j=0; j<3; j++){
    //        cout<<arr[i][j]<<" ";
    //     }
    //     cout<<endl;
    // }

    for(int i=1; i<=9; i++){
        for(int j=i+1; j<=9; j++){

            bool win = false;

            // 가로
            for(int k=0; k<3; k++){
                int cnt1=0;
                int cnt2=0;
                for(int l=0; l<3; l++){
                    if(arr[k][l]==i){
                        cnt1++;
                    }else if(arr[k][l]==j){
                        cnt2++;
                    }
                    if(cnt1!=0 && cnt2!=0 && cnt1+cnt2==3){
                        // cout <<"here1: "<<i<<" "<<j<<endl;
                        win = true;
                    }
                }
            }

            // 세로
            for(int k=0; k<3; k++){
                int cnt1=0;
                int cnt2=0;
                for(int l=0; l<3; l++){
                    if(arr[l][k]==i){
                        cnt1++;
                    }else if(arr[l][k]==j){
                        cnt2++;
                    }
                }
                if(cnt1!=0 && cnt2!=0 && cnt1+cnt2==3){
                    // cout <<"here2: "<<i<<" "<<j<<endl;
                    win = true;
                    break;
                }
            }

            // 대각선
            int cnt1=0;
            int cnt2=0;
            for(int k=0; k<3; k++){
                if(arr[k][k]==i){
                    cnt1++;
                }else if(arr[k][k]==j){
                    cnt2++;
                }
            }
            if(cnt1!=0 && cnt2!=0 && cnt1+cnt2==3){
                // cout <<"here3: "<<i<<" "<<j<<endl;
                win = true;
            }

            cnt1=0;
            cnt2=0;
            for(int k=0; k<3; k++){
                if(arr[2-k][k]==i){
                    cnt1++;
                }else if(arr[2-k][k]==j){
                    cnt2++;
                }
            }
            if(cnt1!=0 && cnt2!=0 && cnt1+cnt2==3){
                // cout <<"here4: "<<i<<" "<<j<<endl;
                win =true;
            }

            if(win){
                ans++;
            }
        }
    }

    cout << ans;

    return 0;
}