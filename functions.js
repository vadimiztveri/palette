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
 * Получает значения blue и green из палитры, записывает в текущий цвет, вызывает функцию отображения
 *
 * @example
 * color.get_gradient_blue_green(22, 44);
 *
 * @param {String} blue, green градации каждого цвета от 0 до 255 в HEX (22, 44)
 * Не возвращает данные.
 */
ColorInGradient.prototype.get_gradient_blue_green = function(blue, green){
  color.rgba[1] = green;
  color.rgba[2] = blue;
  this.display_color();
};

/**
 * Получает значения red, записывает в текущий цвет, вызывает функции отображения
 *
 * @example
 * get_gradient_red(125);
 *
 * @param {Number} red градацию цвета от 0 до 255 (например: 125)
 */
ColorInGradient.prototype.get_gradient_red = function(red) {
  color.rgba[0] = red;
  color.change_green_blue_field_on_red(red);
  this.display_color();
};

/**
 * Глобальная переменная, хранит данные о цвете
 * Получает данные из конструктора ColorInGradient
 */
var color = new ColorInGradient([0, 0, 0]);

/**
 * Получает цвет в HEX (RGB), вызывает функции отображения цвета
 *
 * @example
 * get_new_color_hex("002244");
 *
 * @param {String} color_hex цвет в RGB (например, "002244")
 */
var get_new_color_hex = function(color_hex){
  if (color.verification(color_hex)[0]) {
    if (color_hex.length === 6) {
      color.rgba[0] = parseInt(color_hex.substring(0, 2), 16);
      color.rgba[1] = parseInt(color_hex.substring(2, 4), 16);
      color.rgba[2] = parseInt(color_hex.substring(4), 16);
    } else {
      color.rgba[0] = parseInt((color_hex[0] + color_hex[0]), 16);
      color.rgba[1] = parseInt((color_hex[1] + color_hex[1]), 16);
      color.rgba[2] = parseInt((color_hex[2] + color_hex[2]), 16);
    }
    color.display_color();
    color.chance_pointer_position();
    color.change_green_blue_field_on_red();
    color.display_error_massage("");
  }
  color.display_error_massage(color.verification(color_hex)[1]);
};

/**
 * Обращение к JQ, указание на DIV с id="draggable" как на объект, который будет перетаскиваться.
 * При перемещении объекта вызывает функцию get_value_square_field() и передает ей данные о координатах слева и сверху относительно родителя
 */
$(function(){
  $("#draggable").draggable({
    cursor: "pointer",
    containment: "parent",
    opacity: 0.6,
    refreshPosition: true,
    drag: function(event, ui) {
      color.get_gradient_blue_green(ui.position.left, ui.position.top)
    }
  });
});

/**
 * Обращение к JQ, указание на DIV id="fider" как на объект, который будет перетаскиваться.
 * При перемещении объекта вызывает функцию get_value_rectangular_field() и передает ей данные о координатах слева от родителского блока
 */
$(function(){
  $("#fider").draggable({
    cursor: "pointer",
    containment: "parent",
    opacity: 0.6,
    refreshPosition: true,
    axis: "x",
    drag: function(event, ui) {
      color.get_gradient_red(ui.position.left);
    }
  });
});