class Employee{
constructor(name){
    this.name=name;
}

sayHello(n){
    console.log(`Salut${n}`);
}

}
class Manager extends Employee{
constructor(name,lname){
    super(name);
    this.lname=lname;
}
sayHello(){
    console.log(`Salut ${this.fname} $this.lname }`);
}
}
const ang=new Employee("Popescu");
ang.sayHello("Ionescu");
const man=new Manager("Dan","Dumitrescu");
man.sayHello("Ionescu")


