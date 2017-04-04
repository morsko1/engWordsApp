module.exports = (function () {

	var element = document.getElementById('learning'),
		header = document.getElementById('header'),
		info = document.getElementById('info'),
		newGame = document.getElementById('newGame'),
		question = document.getElementById('question'),
		answer = document.getElementById('answer'),
		know = document.getElementById('know'),
		next = document.getElementById('next'),
		show = function () {
			element.classList.remove('hidden');
		},
		hide = function () {
			element.classList.add('hidden');
		},
		showQ = function (q) {
			question.innerHTML = q.question;
			answer.innerHTML = q.answer;
			info.innerHTML = q.info;
			know.classList.remove('hidden');
			answer.classList.add('hidden');
			next.classList.add('hidden');
		},
		showA = function () {
			answer.classList.remove('hidden');
			know.classList.add('hidden');
			next.classList.remove('hidden');
		};
		return {
			show: show,
			hide: hide,
			showQ: showQ,
			showA: showA
		};

}());