"use script"

// #5
function func({color, width, height}) {
    console.log('color: ' + color + ', size: ' + width + ' x ' + height);
}

func( {color: 'red', width: 400, height: 500} ); // color: red, size: 400 x 500