/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, function(err, content) {
    if (err) {
      callback(err);
    } else {
      // console.log(content.toString());
      content = content.toString().split('\n');
      callback(err, content[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  console.log('enter getStatusCode');
  request(url, function(err, response, body) {
    response && callback(null, response.statusCode);
    err && callback(err);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
