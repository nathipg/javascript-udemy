const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    if ('info' in movie) {
      console.log('Has info');
    }

    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie;
    let text = movie.getFormattedTitle() + ' - ';

    for (key in info) {
      if (key !== 'title') {
        text += `${key}: ${info[key]}`;
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
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle: function () {
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
