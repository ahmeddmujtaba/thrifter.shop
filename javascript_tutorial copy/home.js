// Functions in javascript

function greeting(){
   var name = document.getElementById('text')
   var result = 'Hello, ' + name.innerHTML;
   alert(result)
}

//greeting();

//WHILE LOOPS AND FOR LOOPS

var num = 0;
while (num < 100){
   num+=1
   console.log(num)
}

for (let i = 0; i < 200; i++) {
   console.log(i)
}

//DATATYPES
let yourAge =18; //number
let yourName='Bob'; //string
let name = {first: 'Jane',last: 'Doe'} //object
let truth = false; //Boolean
let groceries = ['apple','banana','oranges']; //list
let random; //undefined
let nothing = null; //value null


//STRING IN JAVASCRIPT; COMMON METHODS
let fruit = 'banana';
let morefruit = 'banana\napple'; //newline
console.log(morefruit)
fruit.length // length from 1
fruit.indexOf('ba'); // ==0 finds the character
fruit.indexOf('q'); // ==-1 not found
fruit.slice(2,6); // == 'nana' (gives letter at 2,3,4,5 position)
fruit.replace('ban','123'); // == '123ana'
fruit.toLowerCase(); //=='banana'
fruit.toUpperCase(); //=='BANANA'
fruit.charAt(2);//=='n' gives character at position (same as fruit[2])
fruit.split('a')// ==[b,n,n]


//ARRAYS IN JAVASCRIPT
let fruits = ['banana','apple','orange']
let newfruits = new Array('banana','apple','orange')
fruits[1]// == 'apple'
fruits[0]='pear'//changes value of banana
fruits.length// == 3

//ARRAY COMMON METHODS
fruits.toString()
fruits.join('-')// ==banana-apple-orange
fruits.pop()//changes the list, pops off the last item and returns it
fruits.push('guava')//changes the list, similar to append in python
fruits[fruits.length] = 'kiwi'//another way to append
fruits.shift()//removes first element
fruits.unshift('berry')//adds element at 0
let veggies =['spinach','potato','tomato']
let food= fruits.concat(veggies)
console.log(food)
food.slice(1,4);//gives out at index 1,2,3
food.reverse();
food.sort();//sorts in alphabetically
let nums = [1,6,2,8,0,3];
nums.sort();//wont do shit
nums.sort(function (a,b) {return a-b});
//returns in ascending order, change is permanent
console.log(nums)

//OBJECTS IN ARRAY
//similar to dictionaries in python

let student={
   first:'Ahmed', last:'Mujtaba',
   age:18, height:180,
   studentInfo: function(){return this.first +' '+this.last},
   //this is like self in python
}
console.log(student.first)//Ahmed
console.log(student["first"])//Ahmed
//console.log(student[first]), will not work
student['age'] = 19//Can change like this
student.height++;

console.log(student.studentInfo())

//IF ELSE STATEMENTS
//Target Audience == 18-40
var age = prompt('What is your age?')
if ( (age >= 18) && (age <=40)){
   status = 'targetdemo'
   console.log(status)
}
else{
   status = 'nottargetdemo';
   console.log(status)
}

//SWITCH STATEMENTS
//differentiate between  weekend and weekday

switch (6) {
   case 0:
      text = 'weekend';
      break;
   case 5:
      text = 'weekend';
      break;
   case 6:
      text = 'weekend';
      console.log(text)
      break;

   default:
      text = 'weekday';
}
//need to use breaks, wont work with prompt, prolly bcuz of type
console.log(text);

//JSON