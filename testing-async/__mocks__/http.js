const fetchData = () => {
  console.log('MOCKS API');
  return Promise.resolve({
    title: 'delectus aut autem',
  });
};

exports.fetchData = fetchData;
