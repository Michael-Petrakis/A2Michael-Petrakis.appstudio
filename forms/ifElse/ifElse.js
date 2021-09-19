let name = prompt("Enter your first name")

let state = prompt("Enter the state you live in. (Two capitalized letters)")

let temp = prompt("Enter the current outside temperature (In fahrenheit)")

let messages = ['wear a warm coat, hat, scarf, and gloves', 'wear a warm coat but you won\'t need a hat, scarf, or gloves', 'wear your warmest coat, a warm hat, a scarf, and warm gloves', 'wear a warm coat, hat and gloves. Maybe a scarf too']

if (temp < 32 && state == 'NE') {
  console.log(`${name}, you should ${messages[0]}`)
}
else if (temp >= 32 && temp < 50 && state == 'NE') {
  console.log(`${name}, you should ${messages[1]}`)
}
else if (temp >= 32 && temp > 50 && state == 'FL') {
  console.log(`${name}, you should ${messages[2]}`)
}
else if (temp >= 50 && temp < 70 && state == 'FL') {
  console.log(`${name}, you should ${messages[3]}`)
}