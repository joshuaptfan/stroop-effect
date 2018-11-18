var tests = [
	['colors', true, 'Matched color names'],
	['colors', false, 'Unmatched color names'],
	['nouns', false, 'Random words']
];
var testNum = 0;

document.onreadystatechange = function () {
	var bannerBG = document.getElementById('banner-bg');
	for (var i = 0; i < 60; i++) {
		var word = document.createElement('span');
		word.innerHTML = words.colors[Math.floor(Math.random() * words.colors.length)];
		word.style.textShadow = colors[Math.floor(Math.random() * colors.length)] + ' 0 0 0.5rem';
		word.style.top = Math.random() * 100 + '%';
		word.style.left = Math.random() * 100 + '%';
		bannerBG.appendChild(word);
	}

	document.getElementById('start').addEventListener('click', pressStart);
	document.getElementById('finish').addEventListener('click', genScore);
	document.getElementById('home').addEventListener('click', pressHome);
}

function pressStart(e) {
	var main = document.getElementById('main');
	e.target.removeEventListener('click', pressStart);
	main.style.animation = 'none';
	setTimeout(function () {
		main.style.animation = 'fly-out-left 0.3s forwards';
		startCountdown();
	});
}

function startCountdown() {
	var countdown = document.getElementById('countdown');
	var count = countdown.children[0];
	var ring = countdown.children[1];

	countdown.style.animation = 'fly-in-right-fade-out 3.2s';
	count.innerHTML = '3';
	count.style.animation = 'none';
	ring.style.animation = 'none';
	setTimeout(function () {
		count.style.animation = '';
		ring.style.animation = '';
		count.style.animationPlayState = 'running';
		ring.style.animationPlayState = 'running';
	});
	var sI = setInterval(function () {
		count.innerHTML = --count.innerHTML;
		if (count.innerHTML == 0) {
			count.innerHTML = 'GO';
			clearInterval(sI);
			countdown.style.animation = 'none';
			// genTask(tests[testNum][0], tests[testNum][1]);
			genTask(test[testNum]);
		}
	}, 1000);
}

function genTask(set, isColorSync) {
	console.log(set);
	var task = document.getElementById('task');
	// var wordSet = words[set];

	while (task.lastChild)
		task.removeChild(task.lastChild);

	// Randomized test
	// for (var i = 0; i < 30; i++) {
	// 	var word = document.createElement('span');
	// 	var rand = Math.floor(Math.random() * wordSet.length);
	// 	word.innerHTML = wordSet[rand];
	// 	word.style.color = colors[isColorSync ? rand : Math.floor(Math.random() * colors.length)];
	// 	task.appendChild(word);
	// }

	// Fixed test
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 3; j++) {
			var word = document.createElement('span');
			word.innerHTML = set[i + j * 5].w;
			word.style.color = set[i + j * 5].c;
			task.appendChild(word);
		}
	}

	document.getElementById('test').style.display = 'block';
	document.getElementById('finish').style.display = 'inline-block';
	document.getElementById('home').style.display = 'none';
	document.getElementById('score').style.display = 'none';
	document.getElementById('next').style.display = 'none';
	window.testTime = Date.now();
}

function genScore() {
	var score = document.getElementById('score');

	document.getElementById('finish').style.display = 'none';
	score.style.display = 'block';
	if (testNum == score.childElementCount) {
		var testScore = document.createElement('span');
		testScore.innerHTML = '<b>' + tests[testNum][2] + '</b><br>' +
			((Date.now() - testTime) * 0.001).toFixed(3) + ' seconds';
		score.appendChild(testScore);
	}

	document.getElementById('home').style.display = 'inline-block';

	if (++testNum < 3) {
		var next = document.getElementById('next');
		next.style.display = 'inline-block';
		next.addEventListener('click', startCountdown);
	}
}

function pressHome() {
	var main = document.getElementById('main');
	var score = document.getElementById('score');

	document.getElementById('test').style.display = 'none';

	testNum = 0;
	while (score.lastChild)
		score.removeChild(score.lastChild);

	main.style.right = '100%';
	main.style.animation = 'none';
	setTimeout(function () {
		main.style.animation = 'fly-out-left 0.3s reverse forwards';
		document.getElementById('start').addEventListener('click', pressStart);
	});
}
