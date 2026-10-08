#include <iostream>
#include <tuple>
#include <string>
#include <algorithm>
using namespace std;

class Student{
    public:
    string name;
    int kor;
    int eng;
    int math;

    Student(string name, int kor, int eng, int math){
        this->name = name;
        this->kor = kor;
        this->eng = eng;
        this->math = math;
    }

    Student(){}
};

bool cmp(Student a, Student b){
    return make_tuple(a.kor, a.eng, a.math) > make_tuple(b.kor, b.eng, b.math);
}

int main() {
    int n;
    cin >> n;

    Student students[11];

    for(int i=0; i<n; i++){
        string name;
        int kor, eng, math;
        cin >> name >> kor >> eng >> math;
        students[i] = Student(name, kor, eng, math);
    }

    sort(students, students+n, cmp);

    for(int i=0; i<n; i++){
        cout << students[i].name << ' ' <<students[i].kor<< ' '<<students[i].eng<<' '<<students[i].math<<'\n';
    }
    return 0;
}