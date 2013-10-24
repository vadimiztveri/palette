/**
 * Конструктор данных для вывода цвета
 * @param {Area} rgba, три числа от 0 до 255, градации цветов в RGB (например: [0, 125, 255])
 * @constructor
 */
this.ColorOutput = function (hex_color) {
  this.hex_color = hex_color;
};

ColorOutput.prototype.redraw = function() {
  document.getElementById('rgb').value = this.hex_color;
  document.getElementById('color-ui').style.background = "#" + this.hex_color;
//  document.getElementById('rgb').selected = true;
};