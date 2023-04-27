class Student{
    //initialise object/parameter
    constructor(name){
        this.name = name;
    }
    
    capitalisedName(){
        let name = this.name.toLowerCase()
        return ((name[0].toUpperCase()) + name.slice(1))

    }
}

let student = new Student("asia")
student.capitalisedName() // "Asia"
console.log(student.capitalisedName())