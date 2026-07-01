#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n; cin>>n;

    vector<int> v;
    for(int i=0; i<n; i++){
        int num; cin>>num;
        v.push_back(num);
    }

    bool sorted = true;
    do{
        sorted = true;

        for(int i=0; i<v.size()-1; i++){
            if(v[i]>v[i+1]){
                int temp = v[i];
                v[i] = v[i+1];
                v[i+1] = temp;
                sorted = false;
            }
        }

    }while(!sorted);

    for(int i=0; i<n; i++){
        cout<<v[i]<<" ";
    }
    
    return 0;
}