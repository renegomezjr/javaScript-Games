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
