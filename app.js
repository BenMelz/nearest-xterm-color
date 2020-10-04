
const colorMapper = require('./src/colorMapper.js');

let vaporwaveColors = [
  {name: 'red',    hex: '#FFAACC'},
  {name: 'orange', hex: '#FFDDCC'},
  {name: 'yellow', hex: '#FFFFCC'},
  {name: 'green',  hex: '#CCEEDD'},
  {name: 'blue',   hex: '#CCCCFF'},
  {name: 'purple', hex: '#CCAAEE'},
  {name: 'pink',   hex: '#FFAAFF'},
  {name: 'white',  hex: '#B2B2B2'},
  {name: 'grey',   hex: '#6C6C6C'},
  {name: 'black',  hex: '#262626'}
];

vaporwaveColors.forEach((color) => {
  color.xtermid = colorMapper.getNearestXTermColor(color.hex);
});

console.log(vaporwaveColors);

