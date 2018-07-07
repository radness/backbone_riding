var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object(); //변수 4개를 콤마를 사용하여 한번에 생성하고 동시에 할당.

myObj.type  = "Dot syntax";

console.log(myObj);

function showProps(obj, objName) {
    var result = "";
    for(var i in obj) {
        if(obj.hasOwnProperty(i)) {
            result += objName + "." + i + " = " obj[i] + "\n";
        }
    }
    return result;
}

function myFunc(theObject) {
    theObject.make = "Toyota";
}

var myCar = {make: "Honda", model: "Accrod", year: 1999};
var x, y;
x = myCar.make;

myFunc(myCar);
y= mycar.make;

function Employee() {
    this.name = "";
    this.dept = "general";
}

function Manager() {
    Employee.call(this);
    ths.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);