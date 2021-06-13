const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if(response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      return response.json().then(errorData => {
        console.log(errorData);
        throw new Error('Something went wrong')
      });
    }
  }).catch(error => {
    console.error(error);
    throw new Error('Failed to send request');
  });
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    );
  
    const listOfPosts = responseData;
  
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  } catch(error) {
    console.error(error);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

fetchButton.addEventListener('click', fetchPosts);

form.addEventListener('submit', event => {
  event.preventDefault();
  const title = event.currentTarget.querySelector('#title').value;
  const content = event.currentTarget.querySelector('#content').value;
  createPost(title, content);
});

postList.addEventListener('click', event => {
  if(event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});