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



/**
 * Конструктор квадрата с градациями зеленого и синего цветов
 *
 * @example
 * new GreenBleuSquare([0, 125, 255]);
 *
 * @param {Area} rgba, три числа от 0 до 255, градации цветов в RGB (например: [0, 125, 255])
 * @constructor
 */
var GreenBluePalette = function (color) {
  this.green_color = color[1];
  this.green_cursor_position = color[1];
  this.blue_color = color[2];
  this.blue_cursor_position = color[2];
  this.effect_of_red = color[0];
}

/**
 * Меняет значения
 */
GreenBluePalette.prototype.change = function(color) {
  if (color[1]) {this.green_color = color[1]};
  if (color[1]) {this.green_cursor_position = color[1]};
  if (color[2]) {this.blue_color = color[2]};
  if (color[2]) {this.blue_cursor_position = color[2]};
  if (color[0]) {this.effect_of_red = color[0]};
  document.getElementById('draggable').style.top = this.green_cursor_position + "px";
  document.getElementById('draggable').style.left = this.blue_cursor_position + "px";
  document.getElementById('square-red').style.opacity = this.effect_of_red / 255;
}

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

ColorOutput.prototype.redraw = function() {
  document.getElementById('rgb').value = this.hex_color;
  document.getElementById('color').style.background = "#" + this.hex_color;
}

/**
 * Конструктор для получения цвета из поля
 *
 * @example
 * new ColorOutput([0, 125, 255]);
 *
 * @param {Area} rgba, три числа от 0 до 255, градации цветов в RGB (например: [0, 125, 255])
 * @constructor
 */
var ColorInput = function (color_hex) {
  this.color_hex = color_hex;
}



var color = new ColorInGradient([0, 0, 0]);
var green_blue_palette = new GreenBluePalette([0, 0, 0]);
var red_palette = new RedPalette([0, 0, 0]);




/**
 * Получает цвет в HEX (RGB), вызывает функции отображения цвета
 *
 * @example
 * get_new_color_hex("002244");
 *
 * @param {String} color_hex цвет в RGB (например, "002244")
 */
var get_new_color_hex = function(color_hex){
  color_input = new ColorInput(color_hex);
  text_error = color_input.errors();
  if (text_error === undefined) {
    color_input.give_new_color();
    green_blue_palette.change(color.rgba);
    red_palette.change(color.rgba);
    text_error = "";
  }
  color_input.display_error_message(text_error);
};

/**
 * Присваевает новые цвета
 *
 * @example
 * give_new_colors("002244");
 *
 * @param {String} color_hex цвет в RGB, 6 или 3 символа (например, "002244")
 */
ColorInput.prototype.give_new_color = function() {
  if (this.color_hex.length === 6) {
    color.change([parseInt(this.color_hex.substring(0, 2), 16), parseInt(this.color_hex.substring(2, 4), 16), parseInt(this.color_hex.substring(4), 16)]);
  } else {
    color.change([parseInt((this.color_hex[0] + this.color_hex[0]), 16), parseInt((this.color_hex[1] + this.color_hex[1]), 16), parseInt((this.color_hex[2] + this.color_hex[2]), 16)]);
  }
}

ColorInput.prototype.display_error_message = function(error) {
  document.getElementById('error').innerHTML = error;
}


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
      color.change([false, ui.position.top, ui.position.left]);
      green_blue_palette.change([false, ui.position.top, ui.position.left]);
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
      color.change([ui.position.left, false, false]);
      red_palette.change([ui.position.left, false, false]);
      green_blue_palette.change([ui.position.left, false, false]);
    }
  });
});