const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
  name: 'Apollo',
  age: 10,
  hobbies: ['Sports', 'Cooking']
}

storeBtn.addEventListener('click', () => {
  sessionStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user));
});

retrBtn.addEventListener('click', () => {
  const extractedId = sessionStorage.getItem('uid');
  const extractedUser = localStorage.getItem('user');
  console.log(JSON.parse(extractedUser));
  if (extractedId) {
    console.log(extractedId);
  } else {
    console.log('Could not find id');
  }
});
