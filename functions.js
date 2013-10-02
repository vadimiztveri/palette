/**
* ��������� � JQ, �������� �� DIV id="draggable" ��� �� ������, ������� ����� ���������������.
* ��� ����������� ������� �������� ������� get_value_square_field() � �������� �� ������ � ����������� ����� � ������ ������������ ��������
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
* ��������� � JQ, �������� �� DIV id="fider" ��� �� ������, ������� ����� ���������������.
* ��� ����������� ������� �������� ������� get_value_square_field() � �������� �� ������ � ����������� ����� �� ������������ �����
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
* ������������ ������ � �����
*/
var color = {
  red: "00",
  green: "00",
  blue: "00"
}

/**
* ��� ������ ���������� ������ �������� ����� � HEX
*
* @example
* get_hex();
*
* �� �������� ������, ����� �� �� ������������
* @return {String} ������ � HEX (��������: FF00SS)
*/
var get_hex = function(){
  return color.red + color.green + color.blue;
}

/**
* �������� ���� � HEX (RGB), �������� ��� �����������
*
* @example
* get_new_color_hex("002244");
*
* @param {String} color_hex ���� � RGB (��������, "002244")
* �� ���������� ������, � �������� ������� ����������� �����
*/
var get_new_color_hex = function(color_hex){
  color.red = color_hex[1] + color_hex[2];
  color.green = color_hex[3] + color_hex[4];
  color.blue = color_hex[5] + color_hex[6];
  
  console.log(color_hex[1]);
  
  display_it();
  move_fider();
}

/**
* �������� �������� blue � green, ���������� � ������� ����, �������� ������� �����������
*
* @example
* get_value_square_field("22", "44");
*
* @param {String} blue, green �������� ������� ����� �� 0 �� 255 � HEX ("22", "44")
* �� ���������� ������, � �������� ������� ����������� �����
*/
var get_value_square_field = function(blue, green){
  color.green = get_dec_to_hex(green);
  color.blue = get_dec_to_hex(blue);
  display_it();
}

/**
* �������� �������� red, ���������� � ������� ����, �������� ������� ����������� ������
*
* @example
* get_value_rectangular_field(125);
*
* @param {Number} red �������� ����� �� 0 �� 255 (��������: 125)
* �� ���������� ������, � �������� ������� ����������� ������
*/
var get_value_rectangular_field = function(red){
  color.red = get_dec_to_hex(red);
  display_it();
  change_green_blue_for_red(red);
}

/**
* �������� �������� �������� ����� �� 0 �� 255, ���������� � HEX
*
* @example
* get_dec_to_hex(255); // return "FF"
*
* @param {Number} number �������� ����� �� 0 �� 255 (��������: 255)
* @return {String} ������ � HEX (��������: FF)
*/
 var get_dec_to_hex = function(number){
 var hex = Number(number).toString(16);
 if (number < 16){
   hex = "0" + hex;
 }
  return hex;
}

/**
* �������� �������� �������� ����� � HEX, ���������� ����� �� 0 �� 256
*
* @example
* get_dec_to_hex("ff"); // return 256
*
* @param {String} hex ������ �������� ����� � HEX (��������: "ff")
* @return {Number} ����� �� 0 �� 255 (��������: 255)
*/
var hex_to_dec = function(hex){
  return parseInt(hex,16);
}