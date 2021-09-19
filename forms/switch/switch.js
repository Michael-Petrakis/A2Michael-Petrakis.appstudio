
//Retrieves the name of user and stores in variable
let name = prompt("Enter your first name")

//Retrieves the state of user and stores in variable
let state = prompt("Enter the state you live in. (Two capitalized letters)")

//Retrieves the temperature of user and stores in variable
let temp = prompt("Enter the current outside temperature (In fahrenheit)")

//Array that stores the messages displayed depending on what state and temperature is entered
let messages = ['wear a warm coat, hat, scarf, and gloves', 'wear a warm coat but you won\'t need a hat, scarf, or gloves', 'wear your warmest coat, a warm hat, a scarf, and warm gloves', 'wear a warm coat, hat and gloves. Maybe a scarf too']



switch (true) {
case temp < 32 && state == 'NE':
  console.log(`${name}, you should ${messages[0]}`)
    break
case temp >= 32 && temp < 50 && state == 'NE':
    console.log(`${name}, you should ${messages[1]}`)
    break
case temp >= 32 && temp < 50 && state == 'FL':
   console.log(`${name}, you should ${messages[2]}`)
    break
case temp >= 50 && temp < 70 && state == 'FL':
  console.log(`${name}, you should ${messages[3]}`)
  break
default: 
  console.log(`${name}, you didn't enter valid inputs`)
  break
}

