// log all pairs of array
const boxes = [1, 2, 3, 4, 5]

function logAllPairsOfArray (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; i < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)

// this is generallly an interview question that asks you to solve and make it better algorithmically than the example above.
