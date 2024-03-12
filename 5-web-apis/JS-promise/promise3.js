const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
  })
  
  // Promise.all takes an array of promises 然后等所有的promise都完成后才会返回
  Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(messages => {
    console.log(messages)
  })

// output: [ 'Video 1 Recorded', 'Video 2 Recorded', 'Video 3 Recorded' ]




// Promise.race() takes an array of promises, 但只会返回 最先完成的 那一个promise
  Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(message => {
    console.log(message)
  })
  // output: Video 1 Recorded