#include <iostream>
#include <tuple>
#include <utility>
#include <algorithm>
using namespace std;

int main() {
    // 사람의 수, 치즈의 수, 치즈를 먹은 기록의 수, 아픈 기록의 수
    int n, m, d, s;
    cin >> n >> m >> d >> s;

    tuple<int, int, int> cheese[1001]; // 치즈를 먹은 기록
    for(int i=0; i<d; i++){
        int p, m, t; // 몇 번째 사람(p)이 몇 번째 치즈(m)를 언제 먹었는지(t초)
        cin >> p >> m >> t;
        cheese[i] = make_tuple(p, m, t);
    }

    pair<int, int> sick[51]; // 아픈 기록
    for(int i=0; i<s; i++){
        int p, t;
        cin >> p >> t;
        sick[i] = make_pair(p, t);
    }

    int ans = 0;

    for(int i=1; i<=m; i++){
        int cnt[n+1]{}; // i번째 치즈가 상했을 때 아픈 기록
        bool flag = true;
        
        for(int j=0; j<d; j++){
            int p, m, t;
            tie(p, m, t) = cheese[j];
            if(m!=i) continue;

            if(cnt[p]==0 || t+1<cnt[p]){
                cnt[p]=t+1;
            }
        }

        for(int k=0; k<s; k++){
            int p = sick[k].first;
            int t = sick[k].second;
            if(cnt[p]>t || cnt[p]==0){
                flag = false;
                break;
            }
        }

        if(flag){
            int count = 0;
            for(int i=1; i<=n; i++){
                if(cnt[i]!=0) count++;
            }
            ans = max(ans, count);
        }
    }

    cout << ans;

    return 0;
}