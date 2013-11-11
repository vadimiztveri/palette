/**
 * Цвета в RGBA
 * @param {Area} rgba, три числа от 0 до 255, градации цветов в RGB (например: [0, 125, 255])
 * @constructor
 */
var Color = function(rgba) {
  this.rgba = rgba;
};

/**
 * Возвращает цвет в 6 символах HEX
 * @return {String} (Например: "ff00cc")
*/
Color.prototype.get_hex = function () {
  var hex = "";
  for (i = 0; i < 3; i++) {
    var hex_color = Number(this.rgba[i]).toString(16);
    if (this.rgba[i] < 16){
      hex_color = "0" + hex_color;
    }
    hex += hex_color
  }
  return hex;
};

/**
 * Получает значения цвета и записывает их
 * @param {Array} три цвета (red, blue, green), градации от 0 до 255 ([0, 22, 44])
 */
Color.prototype.change = function(new_color){
  if (new_color[0]) {this.rgba[0] = new_color[0];}
  if (new_color[1]) {this.rgba[1] = new_color[1];}
  if (new_color[2]) {this.rgba[2] = new_color[2];}
  var color_output = new ColorOutput(this.get_hex());
  color_output.redraw();
};