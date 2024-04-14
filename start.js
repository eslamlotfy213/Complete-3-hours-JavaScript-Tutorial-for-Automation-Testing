//use  node start.js
console.log("Hello")

// these are comments 
/*
ewew
wewe
wewe
*/

//variables 
// no need to declare int or string 
//var 
// let 
// const 
var a =4

//use typeof() 
console.log(typeof(a))


//create a string 
let c = "Rahkkk";
console.log(typeof(c))

//create a boolen
let requird = true;
console.log(typeof(requird))


// let c = a+b (it did not work  //we cannot redeclare varible with let keyword but possible with var )
// let y1 ="EEERE";
// let y1= 5;
// console.log(y1)


// var c = a+b this is allowed
// var y ="EEERE";
// var y= 5;
// console.log(y)

// const c = can't be changed or can't be reassigned 


let n=0;
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
for (let k=1;k<=100;k++)
{
    if(k%2==0 && k%5==0){
        n++;
        console.log(k);
        if(n==3){
            break;
        }
    }
}

//--------------Array-----------------
var marks = Array(6)
var marks = new Array(10,30,34,12,37,100)


var marks=[20,39,24,12,100]

console.log(marks[3])

console.log(marks.length)


marks.push(56) // [20,39,24,12,100,56] add the last index 
console.log("push "+marks) 

marks.pop()  // [20,39,24,12,100] delete the last index 
console.log("pop "+marks) 

marks.unshift(12) //  add element at the begining 
console.log("unshift "+marks) 


// 120 in the array 
marks.includes(120)


marks.slice(2,5); // to cut from index 2 to index 5 

//sum 
var Allmarks = new Array(10,20,30,40,50)

let sum=0

for (let i = 0;i<Allmarks.length;i++)
{
    sum=sum+Allmarks[i];
  
}

console.log("sum : "+ sum);



// reduce filter map 



// ------------------------------function ---------------------------------// 

function add(a,b)
{
    return a+b
}


let Addsum = add(2,3)
console.log(Addsum)



// dont have name => anaynoums function -- function experssions 
let sumOfIntegers = function(c,d)
{
    return c+d
}


let sumOfNumbers = (c,d)=> c+d
console.log(sumOfNumbers(3,3))
//-----------------------

let day = "tuesday";

console.log(day.length)
let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[1]) //u 


let splitDay = day.split("s");
console.log(splitDay[0])
console.log(splitDay[1])


let date = '23'
let nextData = '25'

let diff = parseInt(nextData) - parseInt(date)

console.log(diff)

diff.toString()  //numeric values to strings

//-------------------object 


let person = {

   firstname :'time',
   lastname : "joe",
   age : 24,
   fullname : function()
{
    console.log(this.firstname + this.lastname);
}
}


console.log(person.fullname())
console.log(person.firstname)
console.log(person['lastname'])


//--------------class-----------------
module.exports =class Person1 {
age = 25;



// getter 
get location()
{
    return "canada";
}


// constractor 
// method executes by default when create object of class
constructor(firstname,lastname) 
{
    this.firstname = firstname;
    this.lastname= lastname;
}

// methods
            fullname1()
            {
            
            console.log(this.firstname+this.lastname)
            }



}


// let  Per1 = new Person1("tom1","heo1")
// //dh propert 
// console.log(Per1.age)
// //dh property getter not methods 
// console.log(Per1.location) 
// // dh methods 
// console.log(Per1.fullname1()) 


//-------- exporting class ---------//


// module.exports = class Person1 {)
// const Person1 = requie('./start.js')