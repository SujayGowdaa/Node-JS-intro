const fs = require('fs');
const superAgent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  if (err) return console.error('No input file found.');

  superAgent
    .get(`https://dog.ceo/api/breed/${data}/images/random `)
    .end((err, res) => {
      if (err) console.error(err.message);

      fs.writeFile(`${__dirname}/dog-image.txt`, res.body.message, (err) => {
        if (err) console.error('No image file found.');
        console.log('Image written to file.');
      });
    });
});
