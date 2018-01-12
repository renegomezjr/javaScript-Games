function raceDayRegistration(){
  let raceNumber = Math.floor(Math.random()*1000);
  let earlyRegistration;

  let registrationDay = (prompt('Welcome to Runner\'s Race Day!  Did you pre-register? Type Y or N.')).toUpperCase();
  (registrationDay === 'Y') ? earlyRegistration = true : earlyRegistration = false;

  let runnersAge = prompt('How old are you?');

  //determining early registration
  earlyRegistration ? raceNumber : (raceNumber += 1000);

  if(runnersAge >= 18 && earlyRegistration){
    document.getElementById('raceDayInfo').innerHTML = `Welcome ${raceNumber}, you're race time is 9:30am!`;
  } else if (runnersAge >= 18 || earlyRegistration){
    document.getElementById('raceDayInfo').innerHTML = `Welcome ${raceNumber}, you're race time is 11:00am!`;
  } else if (runnersAge < 18 && !earlyRegistration) {
    document.getElementById('raceDayInfo').innerHTML = `Welcome ${raceNumber}, you're race time is 12:30pm!`;
  } else {
    document.getElementById('raceDayInfo').innerHTML = `Welcome, please see the registration desk.`;
  }
}
