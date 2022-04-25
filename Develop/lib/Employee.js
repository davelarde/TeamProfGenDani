// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name,id,email){
this.name =name;
this.id =id;
this.email= email;
    }
    getName(){
        return this.name
    }
getId(){
    return this.id
}
getEmail(){
    return this.email
}
getRole(){
    return 'Employee';
}
}
// const newName= new Employee("Daniela");
// newName.getName()
// const newId = new Employee(4444);
// newId.getId()
// const newEmail = new Employee("dani@dani");
// newEmail.getEmail()

module.exports = Employee