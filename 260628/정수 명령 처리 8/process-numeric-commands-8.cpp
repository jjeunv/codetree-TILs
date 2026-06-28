#include <iostream>
#include <list>
using namespace std;

int main() {
    list<int> l;

    int n; cin>>n;
    while(n--){
        string str;
        cin>>str;

        int num;

        if(str=="push_front"){
            cin>>num;
            l.push_front(num);
        }else if(str=="push_back"){
            cin>>num;
            l.push_back(num);
        }else if(str=="pop_front"){
            cout<<l.front()<<endl;
            l.pop_front();
        }else if(str=="pop_back"){
            cout<<l.back()<<endl;
            l.pop_back();
        }else if(str=="size"){
            cout<<l.size()<<endl;
        }else if(str=="empty"){
            cout<<l.empty()<<endl;
        }else if(str=="front"){
            cout<<l.front()<<endl;
        }else if(str=="back"){
            cout<<l.back()<<endl;
        }
    }
    return 0;
}