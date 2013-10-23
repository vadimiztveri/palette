/**
 * конструктор цвета в RGBA
 *
 * @example
 * new ColorInGradient([0, 125, 255]);
 *
 * @param {Area} rgba, три числа от 0 до 255, градации цветов в RGB (например: [0, 125, 255])
 * @constructor
 */
function ColorInGradient(rgba){
  this.rgba = rgba;
};

/**
 * Возвращает цвет в 6 символах HEX
 *
 * @example
 * new ColorInGradient.get_hex(); // return "ff00cc"
 *
 * @this {ColorInGradient} 
 * @return {String} 6 символов HEX (Например: "ff00cc")
*/
ColorInGradient.prototype.get_hex = function () {
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
 *
 * @example
 * color.change([0, 22, 44]);
 *
 * @param {Array} три цвета (red, blue, green), градации от 0 до 255 ([0, 22, 44])
 * Не возвращает данные.
 */
ColorInGradient.prototype.change = function(new_color){
  if (new_color[0]) {this.rgba[0] = new_color[0];}
  if (new_color[1]) {this.rgba[1] = new_color[1];}
  if (new_color[2]) {this.rgba[2] = new_color[2];}
  var color_output = new ColorOutput(this.get_hex());
  color_output.redraw();
};