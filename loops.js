function forLoop(array) {
  for (var i = 1; i < 26; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n= n-1
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
      array.shift;
      maybeTrue();
      array.length = array.length - 1;
  }
    while (array.length > 0 && maybeTrue());
    return array
}
