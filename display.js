/**
 * Выводит новое значение цвета строкой HEX в поле и отображает этот цвет
 *
 * @example
 * display_color();
 *
 * Не получает и возвращает данные. Берет значения из color
 */
var display_color = function(){
  document.getElementById('rgb').value = Color.get_hex();
  document.getElementById('color').style.background = "#" + Color.get_hex();
}

/**
 * Выставляет перемещаемые бегунки в необходимое положение в зависимости от нового цвета.
 *
 * @example
 * move_fider();
 *
 * Не получает и возвращает данные. Берет значения из color
 */
var chance_pointer_position = function() {
  document.getElementById('fider').style.left = Color.rgba[0] + "px";
  document.getElementById('draggable').style.top = Color.rgba[1] + "px";
  document.getElementById('draggable').style.left = Color.rgba[2] + "px";
}

/**
 * Получает значения red, меняет цвет большого квадратного окна.
 *
 * @example
 * change_green_blue_for_red("125");
 *
 * @param {Number} red градацию цвета от 0 до 255 (например: 125)
 * Не возвращает данные
 */
var change_green_blue_on_red = function(red){
  var opacity = red / 255;
  document.getElementById('square-red').style.opacity = opacity;
}

/**
 * Отображает сообщение об ошибке.
 *
 * @example
 * display_error_massage(1);
 *
 * @param {Number} number Номер ошибки (0, 1 или 2) (например: 1)
 * Номер 0 означает, что вводимые данные прошли валидацию и функция удаляет сообщение об ошибке.
 * Не возвращает данные.
*/
var display_error_massage = function(number) {
  var text = "";
  if (number === 1) {text = "Введите 6 или 3 символа, например: ffffff, ссс.";}
  if (number === 2) {text = "Символы должны быть либо цифрами, либо буквам латинского алфавита от A до F";}
  document.getElementById('error').innerHTML = text;
}