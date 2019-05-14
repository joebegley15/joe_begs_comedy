const fs = require("fs");

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", function(err, content) {
      if (err) {
        return reject(err);
      }
      resolve(content);
    });
  });
}

async function readFileAsync(path) {
  const value = await readFile(path);
  const values = value.match(/\-\s*.*?\n/gi).map(val => {
    return val.match(/[a-z].*/gi)[0];
  });
  console.log(values);
}

readFileAsync("./shows.txt");
