const fs = require("fs");

function readFile(path) {
  return new Promise((resolve, reject) => {
    console.log(path);
    fs.readFile(path, "utf8", function(err, content) {
      if (err) {
        return reject(err);
      }
      resolve(content);
    });
  });
}

async function readFileAsync(path) {
  try {
    const value = await readFile(path);
    const values = value.match(/\-\s*.*?\n/gi).map(val => {
      return String(val.match(/[a-z].*/gi)[0]);
    });
    return values;
  } catch (err) {
    console.log(err);
  }
}

async function countShows(path) {
  const showsArr = await readFileAsync(path);
  const countObj = {};
  showsArr.forEach(show => {
    countObj[show] = countObj[show] + 1 || 1;
  });
  console.log(countObj);
  const keysSorted = Object.keys(showsArr).sort(function(a, b) {
    return showsArr[a] - showsArr[b];
  });
  console.log(keysSorted);
}

countShows("./shows.txt");
