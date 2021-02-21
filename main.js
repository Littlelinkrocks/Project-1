function firstLetterName(name) {    
  alert("The name "+name+ " starts with the letter "+name[0]);
}

firstLetterName("Justin")


function divisibleByTwo(value) {
if (value%2 == 0)
  return true;
else
  return false;
}


function  largestNum(arr) {

  var arrMax = [];

  for (var i = 0; i < arr.length; i++) {

    var max = 0;

    for (var x = 0; x < arr[i].length; x++) {
      if (arr[i][x] > max) {
        max = arr[i][x];
      }
    }

    arrMax.push(max);
  }

  return arrMax;

}

largestNum([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

