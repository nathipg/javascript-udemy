const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById('movie-list');

  if(movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';

  movies.forEach(movie => {
    const movieEl = document.createElement('li');
    let text = movie.info.title + ' - ';
    
    for(key in movie.info) {
      if(key !== 'title') {
        text += `${key}: ${movie.info[key]}`;
      }
    }
    
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value.trim();
  const extraName = document.getElementById('extra-name').value.trim();
  const extraValue = document.getElementById('extra-value').value.trim();

  if (title === '' || extraName === '' || extraValue === '') {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random()
  };

  movies.push(newMovie);
  renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);
