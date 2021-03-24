studentInfo = {
    studentName: "Jerome Shaaban",
    campus: "Remote FR"
}

module.exports = studentInfo;

let cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hello, I'm ${studentInfo.studentName} from ${studentInfo.campus} !`,
	e : "oO",
	T : "U "
}));

// or cowsay.think()