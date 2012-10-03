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
	top : '10dp',
	width : '100dp',
	height : '100dp',
	backgroundColor : 'blue',
	image : '/images/common/myimage.png'
});

var label = Ti.UI.createLabel({
	height : '20dp',
	top : '120dp',
	text : '100dp = ' + dpsToPixels(100) + 'px',
	textAlign : 'center'
});

var labelWidth = Ti.UI.createLabel({
	height : '20dp',
	top : '150dp',
	text : 'screen width = ' + pixelsToDps(width) + 'dp, ' + width + 'px',
	textAlign : 'center'
});

var labelHeight = Ti.UI.createLabel({
	height : '20dp',
	top : '180dp',
	text : 'screen height = ' + pixelsToDps(height) + 'dp, ' + height + 'px',
	textAlign : 'center'
});

var labelDpi = Ti.UI.createLabel({
	height : '20dp',
	top : '210dp',
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
