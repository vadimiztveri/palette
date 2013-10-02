/**
* Выводит новое значение цвета в HEX и отображает этот цвет
*
* @example
* display_it(); // return "FF"
*
* Функция не получает данные в себя, берет значения из конфигурации color, и не возвращает данные
*/
var display_it = function(){
  var string_color = color.red + color.green + color.blue;
  document.getElementById('rgb').value = get_hex();
  document.getElementById('color').style.background = "#" + get_hex();
  console
}

/**
* Выставляет перемещаемые бегунки в необходимое положение
*
* @example
* move_fider();
*
* Не получает и не возвращает значения
*/
var move_fider = function() {
  document.getElementById('fider').style.left = hex_to_dec(color.red) + "px";
  document.getElementById('draggable').style.top = hex_to_dec(color.green) + "px";
  document.getElementById('draggable').style.left = hex_to_dec(color.blue) + "px";
}

/**
* Получает значения red, меняет цвет большого квадратного окна
*
* @example
* change_green_blue_for_red("125");
*
* @param {Number} red градацию цвета от 0 до 255 (например: 125)
* Не возвращает данные
*/
var change_green_blue_for_red = function(red){
  var opacity = red / 255;
  document.getElementById('square-red').style.opacity = opacity;
}