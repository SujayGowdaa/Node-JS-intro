const fs = require('fs');
const superAgent = require('superagent');

// function readFile(breed) {
//   return new Promise((resolve, reject) => {
//     try {
//       superAgent
//         .get(`https://dog.ceo/api/breed/${breed}/images/random `)
//         .end((err, res) => {
//           if (err) throw new Error(err.message);

//           fs.writeFile(
//             `${__dirname}/dog-image.txt`,
//             res.body.message,
//             (err) => {
//               if (err) throw new Error('No image file found.');
//               console.log('Image written to file.');
//             }
//           );
//         });

//       resolve();
//     } catch (err) {
//       console.log(err);
//       reject();
//     }
//   });
// }

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   if (err) throw new Error('No input file found.');
//   readFile(data);
// });

async function getDogPicture(breed) {
  try {
    if (!breed) {
      throw new Error('No input');
    }

    const res = await superAgent.get(
      `https://dog.ceo/api/breed/${breed}/images/random `
    );

    if (!res.ok) {
      throw new Error('No Image Found');
    }

    fs.writeFile(`${__dirname}/dog-image.txt`, res.body.message, (err) => {
      if (err) {
        throw new Error(err.message);
      }
    });
    console.log('Success');
  } catch (err) {
    console.log(err?.message || err);
  }
}

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  if (err) return console.log('No text file found.');
  getDogPicture(data);
});
