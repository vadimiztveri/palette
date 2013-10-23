/**
 * Конструктор ползунка с градациями красного цвета
 * @param {Area} rgba, три числа от 0 до 255, градации цветов в RGB (например: [0, 125, 255])
 * @constructor
 */
var RedPalette = function (color) {
  this.red_color = color[0];
};

RedPalette.prototype.change = function(color) {
  if (color[0]) {this.red_color = color[0]};
  document.getElementById('fider').style.left = this.red_color + "px";
  document.getElementById('square-red').style.opacity = this.effect_of_red / 255;
};

/**
 * Обращение к JQ, указание на DIV id="fider" как на объект, который будет перетаскиваться.
 * ui.position.left - количество пикселей слева от родителей
 */
RedPalette.prototype.start_receiving_events = $(function(){
  $("#fider").draggable({
    cursor: "pointer",
    containment: "parent",
    opacity: 0.6,
    refreshPosition: true,
    axis: "x",
    drag: function(event, ui) {
      colors_app.color.change([ui.position.left, false, false]);
      colors_app.red_palette.change([ui.position.left, false, false]);
      colors_app.green_blue_palette.change([ui.position.left, false, false]);
    }
  });
});
