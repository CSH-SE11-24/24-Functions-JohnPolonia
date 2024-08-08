const prompt = require('prompt-sync')()
let tasks = []
// FUNCTION DEFINITIONS
// Write a function called addTask that takes in task as a parameter 
// The function should add the task to the end of the tasks array (push()) and console.log task + " added"
function addTask(task) {
  tasks.push(task)
  console.log(task + " added")
}


// Write a function called printTasks (no parameters) that console logs the tasks array
function printTasks(){
  console.log(tasks)
}


// Write a function called firstTask (no parameters) that returns the first element of the tasks array
function fistTask(){
  console.log(tasks[0])
}


// Write a function called completeFirst (no parameters) that removes the first element (shift()) of the tasks array
 function completeFirst(){
   tasks.shift(task)
 }


// FUNCTION CALLS
while (true) {
  console.log("Current tasks")
  // Call printTasks
printTasks()
  
  // Prompt the user on what they want to do
let user = prompt("What do you want to do:")
  // If the user says "add task", prompt the user on their task 
  // and call addTask with their task
if (user === "add task"){
  console.log(tasks)
  addTask(user);
}else if(user === "first task"){
  firstTask()
  console.log(firstTask)
}else if(user === "complete first"){
  completeFirst()
}else{
  console.log("I don't know how to do that! Try again my friend.")
}

  
  // Else if user says "first task", call firstTask 
  // and console log the return value



  // Else if user says "complete first", call completeFirst



  // Else, says "I don't know how to do that! Try again."



  
}