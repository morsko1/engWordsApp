module.exports = (function () {
	var introView = require('./introView.js'),
		learningView = require('./learningView.js'),
		model = require('./model.js'),
	init = function () {
		if (localStorage.params) {
			run();
			return;
		}
		learningView.hide();
		introView.show();
		addListeners();
	},
	run = function () {
		introView.hide();
		learningView.show();
		model.initParams();
		nextQ();
	},
	nextQ = function () {
		var params = model.getParams();
		if (params.current > params.end) {
			reset();
			return;
		}
		save();
		var question = model.makeQ(params);
		learningView.showQ(question);
		model.increaseParams();
		addListeners();
	},
	save = function () {
		var res = JSON.stringify(model.getParams());
		localStorage.setItem('params', res);
	},
	reset = function () {
		localStorage.removeItem('params');
		init();
	},
	addListeners = function () {
		start.addEventListener('click', run);
		know.addEventListener('click', learningView.showA);
		next.addEventListener('click', nextQ);
		newGame.addEventListener('click', reset);
	};
	return {
		init: init
	};
}());