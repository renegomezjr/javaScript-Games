function whaleTranslator(){
let inputMain = 'A Turpentine and turtles';
let input = inputMain.toLowerCase();
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

//console.log(input);
for(let inputIndex = 0; inputIndex < input.length; inputIndex++){
  //inner loop
  for(let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
    //adding letters to resultArray
    if(input[inputIndex] === vowels[vowelsIndex]){
      resultArray.push(input[inputIndex]);
    }
  }
  //doubling e and u
  if(input[inputIndex] === 'e' || input[inputIndex] === 'u'){
      resultArray.push(input[inputIndex]);
    }
}
document.getElementById('whaleSpeak').innerHTML = resultArray.join('').toUpperCase();
}
