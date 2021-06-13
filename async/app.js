const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {
        reject(error);
      },
      opts
    );
  });

  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });

  return promise;
};

// function trackUserHandler() {
//   let positionData = null;
//   getPosition()
//     .then(posData => {
//       positionData = posData;
//       return setTimer(2000);
//     })
//     .catch(error => {
//       console.log(error);
//       return 'here we go...';
//     })
//     .then(data => {
//       console.log(data, positionData);
//     });

//   setTimer(0)
//     .then(() => {
//       console.log('Timer done!');
//     });

//   console.log('Getting position...');
// }

async function trackUserHandler() {
  const posData = await getPosition();
  const timerData = await setTimer(2000);
  console.log(timerData, posData);
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for(let i = 0; i < 99999999; i++) {
//   result++;
// }

// console.log(result);