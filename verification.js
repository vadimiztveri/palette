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