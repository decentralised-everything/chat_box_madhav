const emojify = require("./emoji");

var regex = /(\:.*?\:)/;

const replacer = (match) => {
	const emoji = emojify[match];
	return emoji ? emoji : match;
}


module.exports = (string) => string.replace(regex, replacer); 

