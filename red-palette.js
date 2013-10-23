/**
 * Конструктор квадрата (ползунка) с градациями красного цвета
 *
 * @example
 * new RedSquare([0, 125, 255]);
 *
 * @param {Area} rgba, три числа от 0 до 255, градации цветов в RGB (например: [0, 125, 255])
 * @constructor
 */
var RedPalette = function (color) {
  this.red_color = color[0];
  this.red_cursor_position = color[0];
}

/**
 * Меняет значения
 */
RedPalette.prototype.change = function(color) {
  if (color[0]) {this.red_color = color[0]};
  if (color[0]) {this.red_cursor_position = color[0]};
  document.getElementById('fider').style.left = this.red_cursor_position + "px";
  document.getElementById('square-red').style.opacity = this.effect_of_red / 255;
}
