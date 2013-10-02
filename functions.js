/**
* Обращение к JQ, указание на DIV id="draggable" как на объект, который будет перетаскиваться.
* При перемещении объекта вызывает функцию get_value_square_field() и передает ей данные о координатах слева и сверху относительно родителя
*/
$(function(){
  $("#draggable").draggable({
    cursor: "pointer",
    containment: "parent",
    opacity: 0.6,
    refreshPosition: true,
    drag: function(event, ui) {
      get_value_square_field(ui.position.left, ui.position.top)
    }
  });
});

/**
* Обращение к JQ, указание на DIV id="fider" как на объект, который будет перетаскиваться.
* При перемещении объекта вызывает функцию get_value_square_field() и передает ей данные о координатах слева от родителского блока
*/
$(function(){
  $("#fider").draggable({
    cursor: "pointer",
    containment: "parent",
    opacity: 0.6,
    refreshPosition: true,
    axis: "x",
    drag: function(event, ui) {
      get_value_rectangular_field(ui.position.left)
    }
  });
});

/**
* Конфигурация данных о цвете
*/
var color = {
  red: "00",
  green: "00",
  blue: "00"
}

/**
* При вызове возвращает строку текущего цвета в HEX
*
* @example
* get_hex();
*
* Не получает данные, берет их из конфигурации
* @return {String} строка в HEX (например: FF00SS)
*/
var get_hex = function(){
  return color.red + color.green + color.blue;
}

/**
* Получает значение градации цвета от 0 до 255, возвращает в HEX
*
* @example
* get_dec_to_hex(255); // return "FF"
*
* @param {Number} number градацию цвета от 0 до 255 (например: 255)
* @return {String} строка в HEX (например: FF)
*/
 var get_dec_to_hex = function(number){
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
* Получает цвет в HEX (RGB), передает для отображения
*
* @example
* get_new_color_hex("002244");
*
* @param {String} color_hex цвет в RGB (например, "002244")
* Не возвращает данные, а вызывает функции отображения цвета
*/
var get_new_color_hex = function(color_hex){
  color.red = color_hex[0] + color_hex[1];
  color.green = color_hex[2] + color_hex[3];
  color.blue = color_hex[4] + color_hex[5];
  display_it();
  move_fider();
}

/**
* Получает значения blue и green, записывает в текущий цвет, вызывает функцию отображения
*
* @example
* get_value_square_field("22", "44");
*
* @param {String} blue, green градации каждого цвета от 0 до 255 в HEX ("22", "44")
* Не возвращает данные, а вызывает функции отображения цвета
*/
var get_value_square_field = function(blue, green){
  color.green = get_dec_to_hex(green);
  color.blue = get_dec_to_hex(blue);
  display_it();
}

/**
* Получает значения red, записывает в текущий цвет, вызывает функции отображения цветов
*
* @example
* get_value_rectangular_field(125);
*
* @param {Number} red градацию цвета от 0 до 255 (например: 125)
* Не возвращает данные, а вызывает функции отображения цветов
*/
var get_value_rectangular_field = function(red){
  color.red = get_dec_to_hex(red);
  display_it();
  change_green_blue_for_red(red);
}