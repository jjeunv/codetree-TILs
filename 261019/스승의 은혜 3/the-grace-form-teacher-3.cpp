#include <iostream>
#include <utility>
#include <algorithm>

using namespace std;

#define MAX_N 1000

bool cmp(pair<int, int> a, pair<int, int> b){
    return a.first+a.second < b.first+b.second;
}

int main(){
    // 학생 수, 예산
    int n, b;
    cin >> n >> b;

    // <선물의 가격, 배송비>
    pair<int, int> presents[MAX_N]; 
    for(int i=0; i<n; i++){
        int p, s;
        cin >> p >> s;
        presents[i] = make_pair(p, s);
    }

    int ans = 0;

    for(int i=0; i<n; i++){
        pair<int, int> copy_arr[MAX_N];
        copy(presents, presents+n, copy_arr);

        copy_arr[i].first /= 2; // 쿠폰 반값 할인

        sort(copy_arr, copy_arr+n, cmp); // 오름차순

        int price = 0;
        int cnt = 0;

        for(int j=0; j<n; j++){
            price += (copy_arr[j].first + copy_arr[j].second);

            if(price > b){
                break;
            }else{
                cnt++;
            }
        }
        ans = max(ans, cnt);
    }

    cout << ans;

    return 0;
}