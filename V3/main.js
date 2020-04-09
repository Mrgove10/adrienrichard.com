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
		} else if (inputVal == "skills") {
			skills();
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
			experiences();
			input.val('');
		} else if (inputVal == "time") {
			getTime();
			input.val('');
		} else if (inputVal == "info") {
			info();
			input.val('');
		} else if (inputVal == "doge") {
			doge();
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
	Output('<span class="blue">Goodbye! Comeback soon.</span><br>');
	setTimeout(function () {
		window.open('https://www.linkedin.com/in/adrien-rich/');
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
		'<span class="orange">>skills</span>',
		'<span class="blue">>experiences</span>',
		'>help',
		'>ping',
		'>time',
		'>clear',
		'>say',
		'>info',
		'>exit'];
	seperator();
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
		'<u>Furmap.net</u>',
		'A world map with more then 800 users !',
		'<a href="https://furmap.net" target="_blank">furmap.net</a>',
		'<br>',
		//---
		'===',
		'<u>Patrimoine Grenoblois</u>',
		'ionic app to discover Grenoble',
		'<a href="https://play.google.com/store/apps/details?id=com.AR.grenoble.patrimoine&hl=fr" target="_blank">Play store</a>',
		'<br>',
		//---
		'===',
		'<u>Hololens Demo</u>',
		'<a href="https://github.com/Mrgove10/Hololens-Demo-Salon" target="_blank">Github</a>',
		'Hololens demo application for trade shows',
		'<br>',
		//---
		'===',
		'<u>Web Interface to start remote computers</u>',
		'<a href="https://github.com/Mrgove10/iowebinterface" target="_blank">Github</a>',
		'Web interface to start/stop a server remotly',
		'<br>',
		//---
		'===',
		'<u>Minecraft MiniGame</u>',
		'<a href="https://github.com/Mrgove10/Mine.Js" target="_blank">Github</a>',
		'Minecraft clone in javascript with Babylon.js',
		'<br>',
		//---
		'===',
		'<u>Video Game for a game jam</u>',
		'<a href="https://github.com/Mrgove10/SGJ2019" target="_blank">Github</a>',
		'Game made in unity in 48 hours. Goal was to show the risk of technology linked with medical treatments',
	];
	seperator();
	for (var i = 0; i < projectArray.length; i++) {
		if (projectArray[i] === '===') {
			seperator();
		} else {
			var out = '<span>' + projectArray[i] + '</span><br/>';
			Output(out);
		}

	}
}

/**
 * lists my pro experineces
 */
function experiences() {
	var experiencesArray = ['>Experiences:',
		'<span class="blue"><h3>Internship mobile developpement Xamarint</h3></span>',
		'Alliance Reseau',
		'Xamarin app development with asp.net backend.',
		'<i>C#, Asp.net</i>',
		'<span class="blue"><h3>Internship embedded software developmentt</h3></span>',
		'Squadrone system',
		'Integrated software development, making a drone flight simulator',
		'<i>C++, embeded software</i>',
		'<span class="blue"><h3>Video game developper & web developpmentt</h3></span>',
		'Moovlab',
		'Creating animation for video games and also a web interface to choose trainings',
		'<i>cocos2dX, html, css</i>',
		'<span class="blue"><h3>Mobie video game developper</h3></span>',
		'Graaly',
		'Mobile video game, using unity to create aumented reality experiences in most places.',
		'<i>Unity3D, c#</i>',
	];
	seperator();
	for (var i = 0; i < experiencesArray.length; i++) {
		var out = '<span>' + experiencesArray[i] + '</span><br/>'
		Output(out);
	}
}

/**
 * About me function
 */
function aboutMe() {
	var aboutMeArray = ['>About:',
		'Hello there!',
		'I\'m Adrien, Developper (web, apps and video games), tinkerer and diyer.',
		'Currently studying at EPSI Grenoble (year 3 out of 5)',
		'<a href="https://wakatime.com/share/@Adrien/069ebf92-4e0a-4ac3-93bd-516ff27b3bcb.svg">Coding stats :</a>',
		'<embed src="https://wakatime.com/share/@Adrien/069ebf92-4e0a-4ac3-93bd-516ff27b3bcb.svg" style="height :250px">'
	];
	seperator();
	for (var i = 0; i < aboutMeArray.length; i++) {
		var out = '<span>' + aboutMeArray[i] + '</span><br/>'
		Output(out);
	}
}

/**
 * Contact me function
 */
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
}

function skills() {
	var contactArray = [
		'>Skills:',
		'<b>Web</b>',
		'Html, Css, Javascript, Bootstrap<br/>',
		'<b>Databases</b>',
		'Mysql, Sqlite, OracleDB, MicrosoftSQl<br/>',
		'<b>Server</b>',
		'Php, NodeJS, Linux<br/>',
		'<b>Client Apps</b>',
		'C#, Python<br/>',
		'<b>Mobile Apps</b>',
		'Xamarin, Ionic<br/>',
		'<b>Video Games</b>',
		'Unity3D<br/>',
	];
	seperator();
	for (var i = 0; i < contactArray.length; i++) {
		var out = '<span>' + contactArray[i] + '</span><br/>'
		Output(out);
	}
}

/**
 * Gets the curent time
 */
function getTime() {
	var today = new Date();
	seperator();
	Output('<span>>time:<span><br>');
	Output('<span>' + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + '</span></br>');
}

/**
 * Prints more infomation about the simulator
 */
function info() {
	seperator();
	Output('<span>>info:<span><br>');
	Output('<span>Console simulator by Mario Duarte https://codepen.io/MarioDesigns/pen/JbOyqe</span></br>');
}

/**
 * ping, pong
 */
function pong() {
	seperator();
	Output('<span>>pong:</span></br><span class="pong"><b class="left">|</b><b class="right">|</b></span></br>');
}

/**
 * Doge command
 */
function doge() {
	seperator();
	Output('<span>>doge:<span><br>');
	Output('<span><img src="doge text.svg"><span>');
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