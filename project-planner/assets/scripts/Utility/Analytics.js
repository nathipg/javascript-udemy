const timerTime = 2000;

const intervalId = setInterval(() => {
  console.log('Sending analytics data');
}, timerTime);

document
  .getElementById('start-analytics-button')
  .addEventListener('click', () => {
    clearInterval(intervalId);
  });
