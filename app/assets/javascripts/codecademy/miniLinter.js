function getOriginalStory(){
  let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

//count of each word in the story
  let storyWords = story.split(' ');
  document.getElementById('originalStoryResults').innerHTML = `Total word count: ${storyWords.length}`;

  return storyWords;
}

function removeUnnecessaryWords(){
  let storyWords = getOriginalStory();
  let unnecessaryWords = ['extremely', 'literally', 'actually' ];
  //betterWords strips the array of unnecessary words.
  let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

  return betterWords;
}

function reportingOverUsedWords(betterWords){
//words we will search
let overusedWords = ['really', 'very', 'basically'];
//this creates objects of overused words
let wordAndCountArray = [];

overusedWords.forEach(overWord => wordAndCountArray.push({'name': overWord, 'count': 0}));
//console.log(betterWords.length);
//given the better word array, this searches for overused words and adds a counter to the object for printing.
betterWords.forEach((word) => {
  if(overusedWords.includes(word)){
    wordAndCountArray.forEach((wordAndCount) => {
      if(wordAndCount.name === word){
        wordAndCount.count += 1;
      }
    });
  }
});
//printing overused words
let overUsedWordsResults = '<h4>Over used words:</h4>';
wordAndCountArray.forEach(wordAndCount =>  overUsedWordsResults += '<p>' + wordAndCount.name + ' - ' + wordAndCount.count + '</p>');
document.getElementById('reportOverUsed').innerHTML = overUsedWordsResults;
}

function sentenceCounter(betterWords){
	let sentenceCounter = 0;
	betterWords.forEach(betterWord => {
  let punctuationArray = ['!','.','?']
    if(punctuationArray.includes(betterWord[betterWord.length-1])){
      sentenceCounter += 1;
      //console.log(betterWord);
    }
  });
  document.getElementById('reportSentenceCount').innerHTML = `You're story has ${sentenceCounter} sentences.`;
}

function miniLinter(){
  let betterWords = removeUnnecessaryWords();
  reportingOverUsedWords(betterWords);
  sentenceCounter(betterWords);

  document.getElementById('betterStory').innerHTML = betterWords.join(' ');
}
