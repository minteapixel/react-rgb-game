//===== variables
export const mode = {
  'easy' : 3,
  'hard' : 6,
  'expert' : 12,
  'infernal' : 9
};

//===== FUNCTION generate a random color
export const randomColor = () => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g +", " + b +")";
};

//===== FUNCTION randomly picks a winning color from array
export const winColor = (arr) => {
  let selectedColor = Math.floor(Math.random() * arr.length);
  return arr[selectedColor];
}

//===== FUNCTION - generate color array for infernal mode
export const infernalColor = () => {
  let color1 = randomColor();
  let colorArrayInfernal = [];
  colorArrayInfernal.push(color1);
  for (let i = -0.6; i <= 0.8; i+=0.2) {
    colorArrayInfernal.push(shadeRGBColor(color1, i));
  };
  return shuffle(colorArrayInfernal);
}

//===== FUNCTION - generate similar shades close to randomColor result
function shadeRGBColor(color, percent) {
  let f = color.split(",");
  let t = percent < 0 ? 0 : 255;
  let p = percent < 0 ? percent *-1 : percent;
  let R=parseInt(f[0].slice(4));
  let G=parseInt(f[1]);
  let B=parseInt(f[2]);
  return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
}

//===== FUNCTION - shuffles the order of elements in array
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}