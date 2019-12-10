// =====================
// Create required vars
// =====================
var output = $('.output');
var input = $('textarea.input');
var toOutput;

input.keypress(function (e) {
	if (e.which == 13) {
		var inputVal = $.trim(input.val());
		if (inputVal == "help" || inputVal == "?") {
			help();
			input.val('');
		} else if (inputVal == "ping") {
			pong();
			input.val('');
		} else if (inputVal == "about") {
			aboutMe();
			input.val('');
		} else if (inputVal == "contact") {
			contactMe();
			input.val('');
		} else if (inputVal == "clear") {
			clear();
			input.val('');
		} else if (inputVal == "time") {
			getTime();
			input.val('');
		} else if (inputVal == "info") {
			info();
			input.val('');
		} else if (inputVal.startsWith("say") === true) {
			sayThis(inputVal);
			input.val('');
		} else if (inputVal.startsWith("sudo") === true) {
			sudo(inputVal);
			input.val('');
		} else if (inputVal.startsWith("exit") === true) {
			exit();
			input.val('');
		} else {
			notfound();
			input.val('');
		}
	}
});

// functions related to the commands typed
// =======================================

/**
 * command not found
 */
function notfound() {
	Output('<span>command not found</span></br>');
}

/**
 * prints the separator
 */
function seperator() {
	Output('<span class="seperator">== == == == == == == == == == == == == == == == == ==</span></br>');
}

/**
 * Clears the screen
 */
function clear() {
	output.html("");
	Output('<span>clear</span></br>');
}

/**
 * quits the console
 */
function exit() {
	Output('<span class="blue">Goodbye! Comeback soon.</span>');
	setTimeout(function () {
		window.open('https://github.com/Mrgove10');
	}, 1000);
}

/**
 * Print a list of all the commands
 */
function help() {
	var commandsArray = ['Help: List of available commands',
		'>help',
		'>about',
		'>contact',
		'>ping',
		'>time',
		'>clear',
		'>say',
		'>info'];
	for (var i = 0; i < commandsArray.length; i++) {
		var out = '<span>' + commandsArray[i] + '</span><br/>'
		Output(out);
	}
}

/**
 * Prints more infomation about the simulator
 */
function info() {
	Output('<span>Console simulator by Mario Duarte https://codepen.io/MarioDesigns/pen/JbOyqe</span></br>');
}

/**
 * ping, pong
 */
function pong() {
	Output('<span>pong</span></br><span class="pong"><b class="left">|</b><b class="right">|</b></span></br>');
}

/**
 * say function
 * @param {data} data 
 */
function sayThis(data) {
	data = data.substr(data.indexOf(' ') + 1);
	Output('<span class="green">[say]:</span><span>' + data + '</span></br>');
}

/**
 * Sudo , well kinda
 * @param {data} data 
 */
function sudo(data) {
	data = data.substr(data.indexOf(' ') + 1);
	if (data.startsWith("apt-get") === true) {
		data = "<span class='green'>Updating...</span> The cake is a lie! There is nothing to update..."
	} else {
		data = "The force is week within you, my master you not be!"
	}
	Output('<span>' + data + '</span></br>');
}

/**
 * Gets the curent time
 */
function getTime() {
	//Output('<span>It\'s the 21st century man! Get a SmartWatch</span></br>');
	var today = new Date();
	Output(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

function aboutMe() {
	var aboutMeArray = ['>About:', 'Hi There!', 'I\'m Mario, a Digital Developer working [@wearecollider](http://www.wearecollider.com) during the day and a designer, freerider, pcbuilder, droneracer and science lover on my free time.', 'Fell free to follow me on twitter @MDesignsuk - see contact page.'];
	seperator();
	for (var i = 0; i < aboutMeArray.length; i++) {
		var out = '<span>' + aboutMeArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

function contactMe() {
	var contactArray = [
		'>Contact:',
		'[GitHub](https://github.com/Mrgove10)',
		'[Linkedin](https://bitbucket.org/Mario_Duarte/)',
		'[Mail](co)',
		'[Twitter](https://twitter.com/MDesignsuk)'
	];
	seperator();
	for (var i = 0; i < contactArray.length; i++) {
		var out = '<span>' + contactArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

// Prints out the result of the command into the output div
function Output(data) {
	$(data).appendTo(output);
}