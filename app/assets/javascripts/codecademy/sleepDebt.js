function getSleepHours(day){
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    default :
      return 9;
      break;
             }
}

let getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

function getIdealSleepHours(){
  let idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt(){
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours){
    document.getElementById('sleepDebtResults').innerHTML = `You got ${actualSleepHours} hours of sleep this week, the perfect number of sleep hours this week.`;
  } else if (actualSleepHours > idealSleepHours) {
    document.getElementById('sleepDebtResults').innerHTML = `You got ${actualSleepHours} hours of sleep this week, which is ${actualSleepHours-idealSleepHours} hours over, that is too much sleep.`;
  } else {
    document.getElementById('sleepDebtResults').innerHTML = `You got ${actualSleepHours} hours of sleep this week, which is ${idealSleepHours-actualSleepHours} hours under, you should get some rest.`;
  }
}
