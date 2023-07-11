// Code your solutions in this file
function writeCards(arrName, evtName) {
  let newArray = [];
  for (let i = 0; i < arrName.length; i++) {
    //"Thank you, Charlie, for the wonderful birthday gift!"
    newArray.push(
      `Thank you, ${arrName[i]}, for the wonderful ${evtName} gift!`
    );
  }
  return newArray;
}

// console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(givenNum) {
  while (givenNum >= 0) {
    console.log(givenNum);
    givenNum--;
  }
}

// countDown(20);
