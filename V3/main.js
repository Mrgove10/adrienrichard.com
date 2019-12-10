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
		} else if (inputVal == "projects") {
			projects();
			input.val('');
		} else if (inputVal == "experiences") {
			projects();
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
		'<span class="green">>about</span>',
		'<span class="yellow">>contact</span>',
		'<span class="purple">>projects</span>',
		'<span class="blue">>experiences</span>',
		'<span class="orange">>help</span>',
		'>ping',
		'>time',
		'>clear',
		'>say',
		'>info',
		'>exit'];
	for (var i = 0; i < commandsArray.length; i++) {
		var out = '<span>' + commandsArray[i] + '</span><br/>'
		Output(out);
	}
}

/**
 * lists the projects i have donne
 */
function projects() {
	var projectArray = ['>Projects:',
		'<span class="blue"><h3>Furmap.net</h3></span>',
		'<a href="https://furmap.net">furmap.net</a>',
		'A world map with more then 500 users !',
		'<span class="blue"><h3>Patrimoine Grenoblois</h3></span>',
		'<a href="https://play.google.com/store/apps/details?id=com.AR.grenoble.patrimoine&hl=fr">Play store</a>',
		'https://github.com/Mrgove10/Hololens-Demo-Salon',
		'https://github.com/Mrgove10/iowebinterface',
		'https://github.com/Mrgove10/Mine.Js',
		'https://github.com/Mrgove10/SGJ2019',
	]
	seperator();
	for (var i = 0; i < projectArray.length; i++) {
		var out = '<span>' + projectArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

/**
 * lists my pro experineces
 */
function experiences() {
	var experiencesArray = ['>Experiences:',
		'graaly'
	]
	seperator();
	for (var i = 0; i < experiencesArray.length; i++) {
		var out = '<span>' + experiencesArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

function aboutMe() {
	var aboutMeArray = ['>About:',
		'Hello there!',
		'I\'m Adrien, Developper (web, apps and video games), tinkerer and diyer.',
		'Currently studying at EPSI Grenoble (year 3/5)',
		'<embed src="https://wakatime.com/share/@Adrien/069ebf92-4e0a-4ac3-93bd-516ff27b3bcb.svg" style="height :250px">'];
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
		'[<a href="https://github.com/Mrgove10">GitHub</a>](https://github.com/Mrgove10)',
		'[<a href="https://www.linkedin.com/in/adrien-rich">Linkedin</a>](https://www.linkedin.com/in/adrien-rich)',
		'[<a href="mailto:"richardadrien0@gmail.com">Mail</a>](richardadrien0@gmail.com)',
		'[<a href="https://wakatime.com/@Adrien">Wakatime</a>](https://wakatime.com/@Adrien)'
	];
	seperator();
	for (var i = 0; i < contactArray.length; i++) {
		var out = '<span>' + contactArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

/**
 * Gets the curent time
 */
function getTime() {
	var today = new Date();
	Output('<span>' + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + '</span></br>');
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
 * Prints out the result of the command into the output div
 * @param {*} data 
 */
function Output(data) {
	$(data).appendTo(output);
}
