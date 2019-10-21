function myFunction(text) {
    console.log(text)
}
myFunction('hi how are you')

setTimeout(function() {
    myFunction('I feel fine')
}, 2000);

function done() { //log 'job's done!'
    console.log('Job\'s done!')
}

function countdown(num, callback) {

    if (num > 1) {
        setTimeout(function () {
            console.log(num)
            num--
            return countdown(num, callback)
        }, 1000)
    } else {
        callback();
    }
}

countdown(3, done)

let lunchTime = false;

const orderMeSomeFood = () => {
    let notLunch = new Error ('It\s not lunch time yet!')
    return new Promise((resolve, reject) => {
      if(lunchTime === true) {
          resolve(
            {lunch:"burrito",
            drink:"margarita"})
      } else {
        reject(notLunch);
      }
    });
  };

  orderMeSomeFood()
  .then(function(result) {console.log(result)})
  .catch(function(result) {console.log(result)});