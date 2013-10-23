/**
 * Конструктор квадрата с градациями зеленого и синего цветов
 *
 * @example
 * new GreenBleuSquare([0, 125, 255]);
 *
 * @param {Area} rgba, три числа от 0 до 255, градации цветов в RGB (например: [0, 125, 255])
 * @constructor
 */
var GreenBluePalette = function (color) {
  this.green_color = color[1];
  this.blue_color = color[2];
  this.effect_of_red = color[0];
};

/**
 * Меняет значения
 */
GreenBluePalette.prototype.change = function(color) {
  if (color[1]) {this.green_color = color[1]};
  if (color[2]) {this.blue_color = color[2]};
  if (color[0]) {this.effect_of_red = color[0]};
  document.getElementById('draggable').style.top = this.green_color + "px";
  document.getElementById('draggable').style.left = this.blue_color + "px";
  document.getElementById('square-red').style.opacity = this.effect_of_red / 255;
};

/**
 * Обращение к JQ, указание на DIV с id="draggable" как на объект, который будет перетаскиваться.
 * ui.position.top - количество пикселей сверху от родителя
 * ui.position.left - количество пикселей слева от родителя
 */
GreenBluePalette.prototype.start_receiving_events = $(function(){
  $("#draggable").draggable({
    cursor: "pointer",
    containment: "parent",
    opacity: 0.6,
    refreshPosition: true,
    drag: function(event, ui) {
      colors_app.color.change([false, ui.position.top, ui.position.left]);
      colors_app.green_blue_palette.change([false, ui.position.top, ui.position.left]);
    }
  });
});
