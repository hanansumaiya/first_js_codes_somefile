// Object

var student = {
    id: 901,
    name: 'sumaiya',
    class: 10,
    phone: 0987654
};
console.log(student);
student.id=870;
console.log(student);
student["id"]=902;
console.log(student);
var somo = "id";
student[somo]=903;
console.log(student);