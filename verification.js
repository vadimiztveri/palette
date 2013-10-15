/**
 * Запускает все функции проверки строки
 *
 * @example
 * verification_all("36fdc0"); return true
 *
 * @param {String} color_hex цвет в RGB (например, "36fdc0")
 * @return {Boolean} (например: true)
*/
var verification_all = function(color_hex) {
   var verification = true;
   if (!verification_symbols(color_hex)) {verification = false;}
   if (!verification_numbers(color_hex)) {verification = false;}
   return verification;
}

/**
 * Запускает все функции проверки строки и возвращает сообщение об ошибке
 *
 * @example
 * verification_message("tkm"); return "Можно использовать цифры от 0 до 9 или буквы латинского алфавита от a до f"
 *
 * @param {String} color_hex цвет в RGB (например, "36fdc0")
 * @return {Boolean} (например: true)
*/
var verification_message = function(color_hex) {
   var text_of_error = "";
   if (!verification_symbols(color_hex)) {text_of_error += "Можно использовать цифры от 0 до 9 или буквы латинского алфавита от a до f";}
   if (!verification_numbers(color_hex)) {text_of_error += "<br>Число символов или 3, или 6";}
   return text_of_error;
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