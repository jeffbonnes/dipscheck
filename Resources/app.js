Ti.UI.setBackgroundColor('black');

var dpi = Ti.Platform.displayCaps.dpi;
var width = Ti.Platform.displayCaps.platformWidth;
var height = Ti.Platform.displayCaps.platformHeight;


var pixelsToDps = function(pixels) {
	return (pixels / (dpi / 160));
};
var dpsToPixels = function(dps) {
	return (dps * (dpi / 160));
};

var win = Titanium.UI.createWindow({
	title : 'Image Test',
	backgroundColor : '#fff'
});

win.orientationModes = [Ti.UI.PORTRAIT];

var image = Ti.UI.createImageView({
	top : 10,
	width : 100,
	height : 100,
	backgroundColor : 'blue',
	image : '/images/common/myimage.png'
});

var label = Ti.UI.createLabel({
	height : 20,
	top : 120,
	text : '100dp = ' + dpsToPixels(100) + 'px',
	textAlign : 'center'
});

var labelWidth = Ti.UI.createLabel({
	height : 20,
	top : 150,
	text : 'screen width = ' + pixelsToDps(width) + 'dp, ' + width + 'px',
	textAlign : 'center'
});

var labelHeight = Ti.UI.createLabel({
	height : 20,
	top : 180,
	text : 'screen height = ' + pixelsToDps(height) + 'dp, ' + height + 'px',
	textAlign : 'center'
});

var labelDpi = Ti.UI.createLabel({
	height : 20,
	top : 210,
	text : 'screen dpi = ' + dpi,
	textAlign : 'center'
});

win.add(image);
win.add(label);
win.add(labelWidth);
win.add(labelHeight);
win.add(labelDpi);

// I want to show the splash screen a little longer...
setTimeout(function() {
	win.open();
}, 1500);
