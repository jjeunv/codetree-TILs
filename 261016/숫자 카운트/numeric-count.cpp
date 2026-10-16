#include <iostream>
#include <string>
#include <tuple>
using namespace std;

bool IsMatch(string num1, int s1, int b1, string num2){
    int s2 = 0;
    int b2 = 0;

    for(int i=0; i<3; i++){
        for(int j=0; j<3; j++){
            if(num1[i]==num2[j]){
                if(i==j){
                    s2++;
                }else{
                    b2++;
                }
            }
        }
    }

    if(s1==s2 && b1==b2){
        return true;
    }

    return false;
}

int main() {
    tuple <int, int, int> arr[10];

    int n;
    cin >> n;

    for(int i=0; i<n; i++){
        int num, s, b;
        cin >> num >> s >> b;

        arr[i] = make_tuple(num, s, b);
    }

    int ans = 0;

    for(int i=1; i<=9; i++){
        for(int j=1; j<=9; j++){
            for(int k=1; k<=9; k++){
                if(i==j || j==k || k==i) continue;
                
                bool is_match = true;

                for(int l=0; l<n; l++){
                    int num, s, b;
                    tie(num, s, b) = arr[l];

                    if(!IsMatch(to_string(num), s, b, to_string(i*100+j*10+k))){
                        is_match = false;
                        break;
                    }
                }

                if(is_match){
                    ans++;
                }
            }
        }
    }

    cout << ans;

    return 0;
}