const studentInfo = require("./information.js");

let cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hello, I'm ${studentInfo.studentName} from ${studentInfo.campus} !`,
	e : "oO",
	T : "U "
}));

// or cowsay.think()