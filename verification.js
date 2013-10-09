/**
 * ��������� ������� �� ������ �� HEX-��������
 *
 * @example
 * verification_symbols("36fdc0"); return true
 *
 * @param {String} color_hex ���� � RGB (��������, "36fdc0")
 * @return {Boolean} (��������: true)
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
 * ��������� ���������� ��������. ����������, ����� ���� ���� 3, ���� 6.
 *
 * @example
 * verification_numbers("36fdc0"); return true
 *
 * @param {String} color_hex ���� � RGB (��������, "36fdc0")
 * @return {Boolean} (��������: true)
*/
var verification_numbers = function(color_hex){
  if (color_hex.length === 3 || color_hex.length === 6){
    return true;
  } else {
    return false;
  }
}