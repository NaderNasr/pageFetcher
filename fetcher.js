const fs = require('fs');
const request = require('request');
const readline = require('readline');
const rl = readline.createInterface({input:process.stdin, output: process.stdout });

let content = '';
const fileName = 'file.log';
const path = `/Users/nadernasr/Desktop/LHL/w2/d3 - net/pageFetcher/${fileName}`;


request('http://www.nadernasr.ca', (error, response, body) => {
  content += error; // Print the error if one occurred
  content += response && response.statusCode; // Print the response status code if a response was received
  content += body; // Print the HTML for the Google homepage.
  fs.writeFile(path, content, err => {
    
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
    rl.write(`Please find - ${fileName} in your directory \n`);
    rl.close();
  });
});


// fs.access('/Users/nadernasr/Desktop/LHL/w2/d3 - net/pageFetcher/file.log'), fs.R_OK, (err) => {
//   if (!err) { console.log("File exists");
// };





// fs.readFile('/Users/nadernasr/Desktop/LHL/w2/d3 - net/pageFetcher/file.log', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

