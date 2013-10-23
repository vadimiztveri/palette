/**
 * Конструктор данных для вывода
 *
 * @example
 * new ColorOutput([0, 125, 255]);
 *
 * @param {Area} rgba, три числа от 0 до 255, градации цветов в RGB (например: [0, 125, 255])
 * @constructor
 */
var ColorOutput = function (hex_color) {
  this.hex_color = hex_color;
}

/**
 * Выводит данные
 */
ColorOutput.prototype.redraw = function() {
  document.getElementById('rgb').value = this.hex_color;
  document.getElementById('color').style.background = "#" + this.hex_color;
}
