/**
 * Конфигурация данных о цвете
 */
var color = {
  red: "00",
  green: "00",
  blue: "00"
}

/**
 * Получает значения blue и green из палитры, записывает в текущий цвет, вызывает функцию отображения
 *
 * @example
 * get_value_green_blue_field("22", "44");
 *
 * @param {String} blue, green градации каждого цвета от 0 до 255 в HEX ("22", "44")
 * Не возвращает данные.
 */
var get_value_green_blue_field = function(blue, green){
  color.green = chance_dec_to_hex(green);
  color.blue = chance_dec_to_hex(blue);
  display_color();
}

/**
 * Получает значения red, записывает в текущий цвет, вызывает функции отображения
 *
 * @example
 * get_value_rectangular_field(125);
 *
 * @param {Number} red градацию цвета от 0 до 255 (например: 125)
 * Не возвращает данные.
 */
var get_value_red_field = function(red){
  color.red = chance_dec_to_hex(red);
  change_green_blue_for_red(red);
  display_color();
}

/**
 * Получает значение градации цвета от 0 до 255, возвращает в HEX
 *
 * @example
 * chance_dec_to_hex(255); // return "FF"
 *
 * @param {Number} number градацию цвета от 0 до 255 (например: 255)
 * @return {String} строка в HEX (например: FF)
 */
var chance_dec_to_hex = function(number){
  var hex = Number(number).toString(16);
  if (number < 16){
    hex = "0" + hex;
  }
  return hex;
}

/**
 * Получает значение градации цвета в HEX, возвращает число от 0 до 256
 *
 * @example
 * get_dec_to_hex("ff"); // return 256
 *
 * @param {String} hex строка градации цвета в HEX (например: "ff")
 * @return {Number} число от 0 до 255 (например: 255)
 */
var hex_to_dec = function(hex){
  return parseInt(hex,16);
}

/**
 * Получает цвет в HEX (RGB), вызывает функции отображения цвета
 *
 * @example
 * get_new_color_hex("002244");
 *
 * @param {String} color_hex цвет в RGB (например, "002244")
 * Не возвращает данные.
 * Если строка состоит не из тех символов, или символов не 3 и не 6, то запускает функцию отображения ошибки
 */
var get_new_color_hex = function(color_hex){
  	
  if (!verification_symbols(color_hex)) {
    display_error_massage(2);
  } else {
    if (!verification_numbers(color_hex)) {
      display_error_massage(1);
    } else {
    if (color_hex.length === 6) {
      color.red = color_hex.substring(0, 2);
      color.green = color_hex.substring(2, 4);
      color.blue = color_hex.substring(4);
      } else {
        if (color_hex.length === 3){
          color.red = color_hex[0] + color_hex[0];
          color.green = color_hex[1] + color_hex[1];
          color.blue = color_hex[2] + color_hex[2];
        }
      }
    display_color();
    chance_pointer_position();
    change_green_blue_for_red();
    display_error_massage(0);
    }
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
var verification_symbols = function(color_hex){
  var reg = /^[0-9a-fA-F]$/,
      verification = true;
  for (i = 0;i < color_hex.length;i++){
    if (!reg.test(color_hex[i])) {verification = false;}
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
var verification_numbers = function(color_hex){
  if (color_hex.length === 3 || color_hex.length === 6){
    return true;
  } else {
    return false;
  }
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
      get_value_green_blue_field(ui.position.left, ui.position.top)
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
      get_value_red_field(ui.position.left)
    }
  });
});