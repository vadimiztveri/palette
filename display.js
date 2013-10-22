/**
 * Выводит новое значение цвета строкой HEX в поле и отображает этот цвет
 * @example
 * color.display_color();
 */
ColorInGradient.prototype.display_color = function(){
  document.getElementById('rgb').value = this.get_hex();
  document.getElementById('color').style.background = "#" + this.get_hex();
}

/**
 * Выставляет перемещаемые бегунки в необходимое положение в зависимости от нового цвета.
 * @example
 * color.move_fider();
 */
ColorInGradient.prototype.chance_pointer_position = function() {
  document.getElementById('fider').style.left = color.rgba[0] + "px";
  document.getElementById('draggable').style.top = color.rgba[1] + "px";
  document.getElementById('draggable').style.left = color.rgba[2] + "px";
}

/**
 * Получает значения red, меняет цвет большого квадратного окна.
 * @example
 * color.change_green_blue_field_on_red(125);
 *
 * @param {Number} градация цвета от 0 до 125 (например: 125)
 */
ColorInGradient.prototype.change_green_blue_field_on_red = function(red){
  var opacity = red / 255;
  document.getElementById('square-red').style.opacity = opacity;
}

/**
 * Отображает сообщение об ошибке.
 *
 * @example
 * display_error_massage(1);
 *
 * @param {String} error Сообщение об ошибке текстом (например: "")
*/
ColorInGradient.prototype.display_error_massage = function(error) {
  document.getElementById('error').innerHTML = error;
}