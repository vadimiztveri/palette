/**
* ������� ����� �������� ����� � HEX � ���������� ���� ����
*
* @example
* display_it(); // return "FF"
*
* ������� �� �������� ������ � ����, ����� �������� �� ������������ color, � �� ���������� ������
*/
var display_it = function(){
  var string_color = color.red + color.green + color.blue;
  document.getElementById('rgb').value = get_hex();
  document.getElementById('color').style.background = "#" + get_hex();
  console
}

/**
* ���������� ������������ ������� � ����������� ���������
*
* @example
* move_fider();
*
* �� �������� � �� ���������� ��������
*/
var move_fider = function() {
  document.getElementById('fider').style.left = hex_to_dec(color.red) + "px";
  document.getElementById('draggable').style.top = hex_to_dec(color.green) + "px";
  document.getElementById('draggable').style.left = hex_to_dec(color.blue) + "px";
}

/**
* �������� �������� red, ������ ���� �������� ����������� ����
*
* @example
* change_green_blue_for_red("125");
*
* @param {Number} red �������� ����� �� 0 �� 255 (��������: 125)
* �� ���������� ������
*/
var change_green_blue_for_red = function(red){
  var opacity = red / 255;
  document.getElementById('square-red').style.opacity = opacity;
}