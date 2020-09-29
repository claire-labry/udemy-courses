const nemo = ['nemo']

function findNemo (array) {
  const t0 = performance.now()
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!')
    }
  }
  const t1 = performance.now()
  console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds')
}

findNemo(nemo)

// this is just a practice code for this course.
// my understanding of this code is basically calling nemo in a variable.
// then creating a function to find nemo + with calling an array as an arguement
// then running a for loop where the iteration is less than the array.length
// if the array iteration truebiz is true equals 'nemo' the console.log will throw 'Found Nemo!'
// last but not least the findNemo function is being called with nemo as it's arugement

// the difference between the two nemo files is this one just goes over the scablility of the findNemo function and simplifying the big-O notation.
