const student1 = {
    name: "Simran",
    class_name: "D15A",
    roll_no: 05,
};

console.log("Student 1: ", student1);

class Student {
    constructor (name, class_name, roll_no) {
        this.name = name;
        this.class_name = class_name;
        this.roll_no = roll_no;
    }
}

const student2 = new Student("Ritika", "D15A", 50);
console.log("Student 2: ", student2);

// Prototype
Student.prototype.nationality = "Indian";
console.log("Student 2: ", student2);

// Generating Exception
function checkError() {
    const value = document.getElementById("error_check").value;
    console.log(value);
    
    if (isNaN(value) || value == 0) {
        throw new Error("Invalid Input");
    }
    else {
        console.log("Valid");
    }
}