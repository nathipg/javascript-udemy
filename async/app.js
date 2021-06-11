const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(posData => {
    setTimeout(() => {
      console.log(posData);
    }, 2000);
  }, error => {
    console.log(error)
  });

  setTimeout(() => {
    console.log('Timer done!');
  }, 0);

  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for(let i = 0; i < 99999999; i++) {
//   result++;
// }

// console.log(result);