function kelvinGame(){
  //this is a constant
  const kelvin = prompt('What is the Kelvin temperature today?');
  //Celsius is kelvin - 273
  const celsius = kelvin - 273;
  //Fahrenheit is Celsius * (9/5) + 32
  const fahrenheit = Math.floor(celsius * (9/5) + 32);

  //From the calcs above, this is our answer.
  document.getElementById('kelvin').innerHTML = `The temperature is ${fahrenheit} degrees fahrenheit.`;
}

function dogYearsGame(){
  //My age
  let myAge = 38;
  //First two human years
  let earlyYears = 2;
  //Multiply the early human years to the dogs years.
  earlyYears *= 10.5;
  //First two years accounted for
  laterYears = myAge - 2;
  //My age in dog years
  myAgeInDogYears = (4 * laterYears) + earlyYears;
  //My name
  myName = 'Rene'.toLowerCase();

  document.getElementById('dogYears').innerHTML = `My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`;
}

function magicEightBallGame(){
  let userName = prompt('What is your name?');
  //userName = prompt('Would you like to tell me your name?');
  userName ? (document.getElementById('magicEightBall').innerHTML = `Hello, ${userName}!`) : (document.getElementById('magicEightBall').innerHTML = 'Hello!');

  let userQuestion = prompt('What would you like to ask the Magic Eight Ball?');
  //Random number between 0 and 7
  let randomNumber = Math.floor(Math.random() * Math.floor(8));

  let eightBall = '';

  switch (randomNumber){
    case 0 :
      eightBall = 'It is certain';
      break;
    case 1 :
      eightBall = 'It is decidedly so';
      break;
    case 2 :
      eightBall = 'Reply hazy try again';
      break;
    case 3 :
      eightBall = 'Cannot predict now';
      break;
    case 4 :
      eightBall = 'Don\'t count on it';
      break;
    case 5 :
      eightBall = 'My sources say no';
      break;
    case 6 :
      eightBall = 'Outlook not so good';
      break;
    default :
      eightBall = 'Signs point to yes';
      break;
                      }
  document.getElementById('answer').innerHTML = `Well, ${userName}, you asked, "${userQuestion}".  The Magic Eight Ball answers, "${eightBall}".`;
}
