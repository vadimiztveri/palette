function Application() {
};

Application.prototype.run = function() {
	var start_color = [0, 0, 0];

	this.color = new Color(start_color);
	this.green_blue_palette = new GreenBluePalette(start_color);
	this.green_blue_palette.start_receiving_events;
	this.red_palette = new RedPalette(start_color);
	this.red_palette.start_receiving_events;
};
			
var colors_app = new Application();
colors_app.run();