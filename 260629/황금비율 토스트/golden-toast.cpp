#include <iostream>
#include <list>
using namespace std;

int main() {
    list<char> l;
    list<char>::iterator it;

    int n,m; cin>>n>>m;
    string str;
    cin>>str;
    for(int i=0; i<n; i++){
        l.push_back(str[i]);
    }


    it = l.end();
  
    for(int i=0; i<m; i++){
        char c; cin>>c;
        if(c=='L'){
            if(it==l.begin())continue;
            it--;
        }else if(c=='R'){
            if(it==l.end()) continue;
            it++;
        }else if(c=='D'){
            if(it==l.end()) continue;
            it=l.erase(it);
            
        }else{
            char a; cin>>a;
            l.insert(it, a);
        }

    }
    for(it = l.begin(); it!=l.end(); it++){
        cout<< *it;
    }

    return 0;
}