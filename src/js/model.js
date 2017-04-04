module.exports = (function () {
	var element = document.getElementById('intro'),
		start = document.getElementById('start'),
		enru = document.getElementById('enru'),
		begin = document.getElementById('begin'),
		end = document.getElementById('end'),
		standard = document.getElementById('standard'),
		dict = require('./dictionary.json'),
		params = {},
		initParams = function () {
			if (localStorage.params) {
				params = JSON.parse(localStorage.params);
				return;
			}
			params = {
				isEnRu: (enru.checked === true)? true: false,
				begin: parseInt(begin.value)||1,
				end: parseInt(end.value)||dict.length,
				current: parseInt(begin.value)||1,
				standard: (standard.checked === true)? true: false,
			};
		},
		getParams = function () {
			return params;
		},
		increaseParams = function () {
			params.current++;
		},
		makeQ = function (params) {
			function randomInteger(min, max) {
				var rand = min - 0.5 + Math.random() * (max - min + 1)
				rand = Math.round(rand);
				return rand;
			}
			if (!params.standard) { // если порядок случайный
				params.num = randomInteger(params.begin, params.end) - 1;
			}
			else{
				params.num = params.current-1;
			}
			var data = {},
				en = dict[params.num].en, // ссылка на объект en
				ru = dict[params.num].ru, // ссылка на объект ru
				sound = dict[params.num].sound,
				irr = dict[params.num].irregular || '',
				parts = Object.keys(ru).join(' ');

			data.sound = sound;
			data.parts = parts;
			data.irr = irr;
			data.info =  `${params.begin} - ${params.end} <br> ${params.num + 1}`;
			if (params.isEnRu) {
				data.question = `${en} <br> ${sound} <span id="qparts"> ${parts} </span>`;
				data.answer = '<table>';
				for (name in ru) {
					// если слово - неправильный глагол
					if (name === 'v-' && 'irregular' in dict[params.num]) {
						irr = dict[params.num].irregular + '<br>';
					}
					else {
						irr = '';
					}
					data.answer += '<tr><td>' + irr + ru[name] + '</td><td>' + name + '</td></tr>';
				}
				data.answer += '</table>';
			} // isEnRu end
			else {
				data.question = '<table>';
				for (name in ru) {
					data.question += '<tr><td>' + ru[name] + '</td><td>' + name + '</td></tr>';
				}
				data.question += '</table>';

				if ('irregular' in dict[params.current-1]) {
					irr = 'irregular:<br>' + dict[params.current-1].irregular;
					data.answer = `${en} <br> ${sound} <br> ${irr}`;
				}
				else {
					data.answer = `${en} <br> ${sound}`;
				}
			}
			return data;
		}; // end makeQ
		return {
			initParams: initParams,
			getParams: getParams,
			increaseParams: increaseParams,
			makeQ: makeQ
		};
}());