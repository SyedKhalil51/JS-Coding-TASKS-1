function changeColor()  // Function For Q1
 {
    
    document.querySelector("#para").style.backgroundColor="red";
  }

  
  function changeFirstColor()   //// Function Q2
   {
    var color = document.querySelector("div > h2");
    color.style.backgroundColor = "red";
  }

  // Task 3 

  /* 
  function sum()   //// Function Q3
   {
    var f_Num = 5;
    var s_Num = 10;
    var sum = f_Num + s_Num;
    document.write(sum);

  }  */   // function for printing  two variables 

  // Task 4 

  var num = 24; // i have assigned an Integer value to the variable
  var num2 = 24.5; // i have assigned an Float value to the variable
  var my_Name = "Syed Khalil"; // i have assignes a String Value to the Variable
  var value = true; // i have assigned a boolean value to the variable.
  var address = null; // i have assigned a Null Value to The Variable 

  // now  i am printing it in console.

  console.log(num);
  console.log(typeof num);
// expected output: "number"

console.log(num2);
console.log(typeof num2);
// expected output: "number"

console.log(my_Name);
console.log(typeof my_Name);
// expected output: "String"

console.log(value);
console.log(typeof value);
// expected output: "boolean"

console.log(address);
console.log(typeof address);
// expected output: "object"




