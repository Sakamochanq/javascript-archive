let person = {
    name:"",
    age:0,

    information:function(){
        return "<br>名前: " + this.name + "<br>年齢: " + this.age
    }
}

person.name = "佐藤";
person.age = 40;

let info = person.information();
document.write(info);

let calc = {
    a:0,
    b:0,

    add:function(){
        let ans = this.a + this.b;
        document.write(ans);
        return ans;
    },

    sub:function(){
        let ans = this.a - this.b;
        document.write(ans);
        return;
    }
}

document.write("<br>")

calc.a = 10;
calc.b = 5;

calc.add();
document.write("<br>")
calc.sub();

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    information(){
        return "名前: " + this.name + "<br>年齢: " + this.age;
    }
}

document.write("<br>")

PERSON_CLASS = new Person("斎藤", "30");
let info1 = PERSON_CLASS.information();
document.write(info1);

class Calc{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    add(){
        let ans = this.a+this.b;
        document.write(ans + "<br>");
        return ans;
    }
    sub(){
        let ans = this.a-this.b;
        document.write(ans + "<br>");
        return ans;
    }
    mul(){
        let ans = this.a * this.b;
        document.write(ans + "<br>");
        return ans;
    }
    div(){
        let ans = this.a / this.b;
        document.write(ans + "<br>");
        return ans;
    }
}
document.write("<br>");

calc = new Calc(10,20);
calc.add(); //加算
calc.sub(); //減算
calc.mul(); //乗算
calc.div(); //除算

class Car {
    static number = 0;

    constructor(){
        Car.number++;
        this.serial = Car.number;
    }
    getserial(){
        return this.serial;
    }
}

document.write(Car.number)
car1 = new Car();
document.write(car1.getserial());

let country = {
    name_jp: "",
    name_en: "",
    num: 0,
    
    information:function(){
        return this.name_jp + "<br>" + this.name_en + "<br>" + this.num;
    }
}

document.write("<br>");

country.name_jp = "日本";
country.name_en = "Japan";
country.num = 1;

let info2 = country.information();
document.write(info2);

class Company{
    constructor(name, address, busiess){
        this.name = name;
        this.address = address;
        this.busiess = busiess;
    }
    information(){
        return this.name + "<br>" + this.address + "<br>" + this.busiess;
    }
}

document.write("<br>");

company1 = new Company("日本工業", "東京都", "製造業");
let info3 = company1.information();

document.write(info3);