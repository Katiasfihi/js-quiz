const monthlyRent=500

let yearlyRent= monthlyRent * 12

console.log(monthlyRent, yearlyRent);

yearlyRent =1;
console.log(monthlyRent, yearlyRent)

const firstName ="Katia";
const myAge ="30"
const lastName ="Sfihi"
const sentence = `Hello ${firstName} ${lastName}! How are you. I am ${myAge}`

console.log(sentence)

const isTheSkyBlue = false

let greeting;

if(isTheSkyBlue) {
    greeting="good weather";
} else {
    greeting="bad weather";
}


console.log(greeting)




if (2 + 2 === 4) {
console.log("Hooray! Math still works")
} else {
    console.log("panic?")
}

const friendsAtYourParty=10 

if (friendsAtYourParty === 0) {
    console.log("x");
} else if (friendsAtYourParty <=4) {
    console.log("y");
} else {
    console.log("z");
}

let friendsAtYourParties = 0;

while (friendsAtYourParties < 10) {
    //friendsAtYourParties = friendsAtYourParties +1;
    friendsAtYourParties+= 2;
    console.log(friendsAtYourParties)
}

const character = 'f';
const timesToRepeat = 5;
let myString = '';

for (let i= 0; i < 5; i++) {
  myString++;
}
console.log(myString)


function addTwo(number){
    return number + 2
}
const finalAnswer = addTwo(5)
console.log(finalAnswer);

function (addOne, addTwo) {
    return 10
}

console.log('hello world');

// Context //

const me = {
    name: {
      first: "Brian",
      last: "Holt"
    },
    location: {
      streetNumber: 500,
      street: "Fakestreet",
      city: "Seattle",
      state: "WA",
      zipCode: 55555,
      country: "USA"
    },
    getAddress() {
      return `${this.name.first} ${this.name.last}
  ${this.location.streetNumber} ${this.location.street}
  ${this.location.city}, ${this.location.state} ${this.location.zipCode}
  ${this.location.country}`;
    }
  };
  
  console.log(me.getAddress());

  // Array //

const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  console.log(daysOfTheWeek);
  console.log(daysOfTheWeek[0]);
  console.log(daysOfTheWeek[1]);
  console.log(daysOfTheWeek[6]);
  