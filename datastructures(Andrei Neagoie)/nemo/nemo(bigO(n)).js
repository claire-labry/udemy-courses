const nemo = ['nemo']

const large = new Array(10).fill('nemo')
function findNemo (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!')
    }
  }
}

findNemo(large) // O(n) --> Linear Time

