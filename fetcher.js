const fs = require('fs');
const request = require('request');


let content = '';

request('http://www.nadernasr.ca', (error, response, body) => {
  content += error; // Print the error if one occurred
  content += response && response.statusCode; // Print the response status code if a response was received
  content += body; // Print the HTML for the Google homepage.
  fs.writeFile('/Users/nadernasr/Desktop/LHL/w2/d3 - net/pageFetcher/file.log', content, err => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
    console.log('Please find - "file.log" in your directory');
  });
});








// fs.readFile('/Users/nadernasr/Desktop/LHL/w2/d3 - net/pageFetcher/file.log', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

