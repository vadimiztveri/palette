(function(){
  
/**
 * Конструктор для получения цвета из поля
 * @param {Area} rgba, три числа от 0 до 255, градации цветов в RGB (например: [0, 125, 255])
 * @constructor
 */
this.ColorInput = function (color_hex) {
  this.color_hex = color_hex;
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
  if (this.error_symbols()) {
    return "Можно использовать цифры от 0 до 9 или буквы латинского алфавита от a до f";
  }
  if (this.error_numbers()) {
    return "Число символов должно быть или 3, или 6";
  }
}

/**
 * Проверяет, состоит ли строка из HEX-символов
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
    colors_app.color.change([parseInt(this.color_hex.substring(0, 2), 16), parseInt(this.color_hex.substring(2, 4), 16), parseInt(this.color_hex.substring(4), 16)]);
  } else {
    colors_app.color.change([parseInt((this.color_hex[0] + this.color_hex[0]), 16), parseInt((this.color_hex[1] + this.color_hex[1]), 16), parseInt((this.color_hex[2] + this.color_hex[2]), 16)]);
  }
};

ColorInput.prototype.display_error_message = function(error) {
  document.getElementById('error').innerHTML = error;
};

document.getElementById('input-color-hex').onchange = function(){
  var color_hex = document.getElementById('input-color-hex').value,
      color_input = new ColorInput(color_hex),
      text_error = color_input.errors();
  if (text_error === undefined) {
    color_input.give_new_color();
    colors_app.green_blue_palette.change(colors_app.color.rgba);
    colors_app.red_palette.change(colors_app.color.rgba);
    text_error = "";
  }
  color_input.display_error_message(text_error);
};

}).call(this);