interface User{
    name: string;
    age : number;
    class : string;
    roll_no: number;
    subjects: string[];
}
interface Teacher extends User{
    subjects_teaches: string[];
    role: string;
}
 let teacher: Teacher = {
    name: "John Doe",
    age: 35,
    class: "10th Grade",
    roll_no: 0,
    subjects: ["Math", "Science"],
    subjects_teaches: ["Math", "Science", "English"],
    role: "Math Teacher"
 }
 console.log(teacher);

 let x:unknown = "1234";
 let y: string = x as string; // Type assertion

 let z:unknown=y ; // Type assertion
 let a= z as number; // Type assertion
 console.log(a);