const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

async function fetchPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const listOfPosts = response.data;
  
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

  const fd = new FormData(form);
  // fd.append('title', title);
  // fd.append('body', content);
  fd.append('userId', userId);
  // fd.append('someFile', FILE_HERE, 'filename.png');

  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', fd);
  console.log(response);
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
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});