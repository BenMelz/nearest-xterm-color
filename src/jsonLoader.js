
module.exports = {
  loadXTermColorJSON: loadXTermColorJSON
}

const resourcesPath = require('path').dirname(require.main.filename) + '/resources';;
const xtermColorJSONPath = resourcesPath + '/color-data.json';

const fs = require('fs');

function loadXTermColorJSON() {
  try {
    let jsonString = fs.readFileSync(xtermColorJSONPath, 'ascii');;
    return JSON.parse(jsonString);
  } catch(err) {
    return {};
  }
}
