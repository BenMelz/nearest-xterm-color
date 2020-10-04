
module.exports = {
  getNearestXTermColor: getNearestXTermColor
}

const jsonLoader = require('./jsonLoader');
const xtermColorJSON = jsonLoader.loadXTermColorJSON();

const colorHexByName = buildMapping(xtermColorJSON, 'name', 'hexString');
const colorIdByName = buildMapping(xtermColorJSON, 'name', 'colorId');


const nearestColor = require('nearest-color').from(colorHexByName);

function getNearestXTermColor(hex) {
  let color = nearestColor(hex);
  return colorIdByName[color.name];
}

function buildMapping(objects, keyAttrName, valAttrName) {
  let map = {};
  objects.forEach((object) => { map[object[keyAttrName]] = object[valAttrName]; });
  return map;
}

