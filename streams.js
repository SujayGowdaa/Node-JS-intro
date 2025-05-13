const fs = require('fs');
const server = require('http').createServer();

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening...');
});

server.on('request', (req, res) => {
  // Solution 1 read all the data and send to client | Using this method causes performance issues.
  // When writing data to res.end() within a callback function of fs.readFile, the primary downside is related to performance and scalability, especially in high-concurrency environments such as web servers. Here are some key drawbacks
  // fs.readFile('./test-file.txt', 'utf-8', (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  //
  //
  // Solution 2 read chunks of data and send to client using streams | Using this method causes back pressure!
  // Fixing back pressure in a Node.js ReadableStream involves ensuring that the producer and consumer are balanced in terms of data flow. This typically involves optimizing either the producer's data emission rate, the consumer's processing speed, or both. Here are some strategies to address back pressure:
  // const readable = fs.createReadStream('./test-file.txt');
  // readable.on('data', (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on('end', () => {
  //   res.end();
  // });
  // readable.on('error', (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end('Error occured');
  // });
  //
  //
  // Solution 3
  // Using the pipe() method in Node.js streams is an effective way to handle back pressure automatically. It manages the flow of data from a readable stream to a writable stream, handling buffering and pausing/resuming automatically based on the data processing speed of the consumer.
  const readable = fs.createReadStream('./test-file.txt');
  readable.pipe(res); // readableSource.pipe(writeableDestination);
  readable.on('end', () => {
    res.end();
  });
});
