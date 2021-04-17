const movies = [];

const backdrop = document.getElementById('backdrop');
const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const successAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const backdropClickHandler = () => {
  closeMovieModal();
  cancelMovieDeletionModal();
  clearMovieInputs();
};

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

const deleteMovie = movieId => {
  const movieIndex = movies.findIndex(e => e.id === movieId);
  const list = document.getElementById('movie-list');

  movies.splice(movieIndex, 1);
  list.children[movieIndex].remove();
  updateUI();
  closeMovieDeletionModal();
};

const cancelMovieDeletionModal = () => {
  closeMovieDeletionModal();
};

const deleteMovieHandler = movieId => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  const cancelDeletionBtn = deleteMovieModal.querySelector('.btn--passive');
  let confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');
  const newConfirmDeletionBtn = confirmDeletionBtn.cloneNode(true);

  cancelDeletionBtn.removeEventListener('click', cancelMovieDeletionModal);
  confirmDeletionBtn.replaceWith(newConfirmDeletionBtn);
  confirmDeletionBtn = newConfirmDeletionBtn;

  cancelDeletionBtn.addEventListener('click', cancelMovieDeletionModal);
  confirmDeletionBtn.addEventListener('click', deleteMovie.bind(null, movieId));
};

const renderNewMovieElement = ({ id, title, image, rating }) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.id = `movie${id}`;
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${image}" alt="${title}" />
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;

  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));

  const list = document.getElementById('movie-list');
  list.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
  toggleBackdrop();
  addMovieModal.classList.add('visible');
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  clearMovieInputs();
  backdropClickHandler();
};

const clearMovieInputs = () => {
  for (const input of userInputs) {
    input.value = null;
  }
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value.trim();
  const imgUrlValue = userInputs[1].value.trim();
  const ratingValue = userInputs[2].value.trim();

  if (
    titleValue === '' ||
    imgUrlValue === '' ||
    ratingValue === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5)');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imgUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleBackdrop();
  closeMovieModal();
  clearMovieInputs();
  renderNewMovieElement(newMovie);
  updateUI();
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
successAddMovieButton.addEventListener('click', addMovieHandler);
