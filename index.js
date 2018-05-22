function theBeatlesPlay(musician, instrument) {
  var emptyArray = [];
  for (var i=0; i < musician.length; i++) {
    emptyArray.push(musician[i] + ' plays ' + instrument[i]);
  }
  return emptyArray;
}
function johnLennonFacts(facts) {
  var emptyFacts = [];
  var i = 0;
  while (i < facts.length ) {
    emptyFacts.push(facts[i] + '!!!');
    i++;
  }
  return emptyFacts;
}
function iLoveTheBeatles(n) {
  var emptyN = [];
<<<<<<< HEAD
  do {
    n++;
    emptyN.push("I love the Beatles!");
  } while (n < 15);
=======
  var i = 0;
  do {
    emptyN.push("I love the Beatles!");
  } while (i < 15);
>>>>>>> b1c7b0c458a1bbd42eb851dc95c6ae07ee6a859c
  return emptyN;
}