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
 * Запускает все функции проверки строки
 *
 * @example
 * errors("36fdc"); return "Число символов должно быть или 3, или 6"
 *
 * @param {String} color_hex цвет в RGB (например: "36fdc")
 * @return {String} сообщение об ошибке (например: "Число символов должно быть или 3, или 6")
 * Если ошибок нет, вернет undefined
*/
ColorInput.prototype.errors = function() {
  var text_errors = "";
  if (this.error_symbols()) {
    return "Можно использовать цифры от 0 до 9 или буквы латинского алфавита от a до f";
  }
  if (this.error_numbers()) {
    return "Число символов должно быть или 3, или 6";
  }
}

/**
 * Проверяет состоит ли строка из HEX-символов
 *
 * @example
 * verification_symbols("36fdc0"); return true
 *
 * @param {String} color_hex цвет в RGB (например, "36fdc0")
 * @return {Boolean} (например: true)
*/
ColorInput.prototype.error_symbols = function(){
  var reg = /^[0-9a-fA-F]$/,
      verification = false;
  for (i = 0;i < this.color_hex.length;i++){
if (!reg.test(this.color_hex[i])) {verification = true;}
  }
  return verification;
}

/**
 * Проверяет количество символов. Необходимо, чтобы было либо 3, либо 6.
 *
 * @example
 * verification_numbers("36fdc0"); return true
 *
 * @param {String} color_hex цвет в RGB (например, "36fdc0")
 * @return {Boolean} (например: true)
*/
ColorInput.prototype.error_numbers = function(){
  if (this.color_hex.length === 3 || this.color_hex.length === 6){
    return false;
  } else {
    return true;
  }
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