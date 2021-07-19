const fs = require('fs');

fs.readFile('user-data.txt', (error, data) => {
  if(error) {
    console.log(error);
    return;
  }

  console.log(data.toString());
});

fs.writeFile('user-data.txt', 'username=Pissuti', error => {
  if(error) {
    console.log(error);
  } else {
    console.log('Wrote the file!');
  }
});