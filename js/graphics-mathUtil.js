(function(){




var distance = function(p1, p2) {
  return Math.sqrt((p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y));
}
var getRand = function(a, b) {
  return Math.round(a + (b - a) * Math.random());
}
var getRandf = function(a, b) {
  return a + (b - a) * Math.random();
}
var getRad = function(deg) {
  return deg * Math.PI / 180;
}
//y in c d for x in a b   
//y-c/(d-c) = x-a/(b-a) 
function getlineMap(x,a,b,c,d){
	return (x-a)*(d-c)/(b-a) +c;
}
var getRandColor = function() {
  return getColorFromArray([getRand(0, 255),getRand(0, 255),getRand(0, 255)]);
}

var getColorFromArray = function(a){
	return 'rgb(' + a[0] + ',' + a[1] + ',' + a[2] + ')';
}
/*hsv in the set [0 1] and rgb in the set[0,255]
*/
var hsvToRgb = function (h, s, v){	
    var r, g, b;
    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    switch(i % 6){
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return [Math.round(r * 255), Math.round(g * 255),Math.round(b * 255)];
}
/*rgb in the set[0,255] and hsv in the set [0 1]  
*/
var rgbToHsv = function (r, g, b){
    r = r/255, g = g/255, b = b/255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max == 0 ? 0 : d / max;

    if(max == min){
        h = 0; // achromatic
    }else{
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s,v];
}


mathUtil={
	distance:distance,
	getRand:getRand,
	getRandf:getRandf,
	getRad:getRad,
	getlineMap:getlineMap,	
};

colorUtil={
	getRandColor:getRandColor,
	getColorFromArray:getColorFromArray,
}

}());

