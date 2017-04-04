(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app = {};
app.model = require('./model.js');
app.introView = require('./introView.js');
app.learningView = require('./learningView.js');
app.controller = require('./controller.js');

app.controller.init();

},{"./controller.js":2,"./introView.js":4,"./learningView.js":5,"./model.js":6}],2:[function(require,module,exports){
module.exports = function () {
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
}();

},{"./introView.js":4,"./learningView.js":5,"./model.js":6}],3:[function(require,module,exports){
module.exports=[
    {
        "id": 1,
        "en": "the",
        "sound": "[Dq]",
        "ru": {
            "noPart": "артикль определен."
        }
    },
    {
        "id": 2,
        "en": "and",
        "sound": "[xnd]",
        "ru": {
            "cj-": "и; с; а, но"
        }
    },
    {
        "id": 3,
        "en": "a",
        "sound": "[q]",
        "ru": {
            "noPart": "артикль неопределенный"
        }
    },
    {
        "id": 4,
        "en": "to",
        "sound": "[tH, tu, tq]",
        "ru": {
            "prep-": "к, в, на, до, для;",
            "part-": "перед инфинитивом глагола"
        }
    },
    {
        "id": 5,
        "en": "I",
        "sound": "[aI]",
        "ru": {
            "pron-": "я"
        }
    },
    {
        "id": 6,
        "en": "is",
        "sound": "[Iz]",
        "ru": {
            "v-": "3-е л. ед.ч. наст. врем. гл. to be (с he/she/it)"
        }
    },
    {
        "id": 7,
        "en": "of",
        "sound": "[Ov, qv]",
        "ru": {
            "prep-": "из, от, о, об"
        }
    },
    {
        "id": 8,
        "en": "have",
        "sound": "[hxv]",
        "ru": {
            "v-": "иметь; получать; быть должным"
        },
        "irregular": "had; had [hxd]"
    },
    {
        "id": 9,
        "en": "you",
        "sound": "[jH]",
        "ru": {
            "pron-": "ты, вы"
        }
    },
    {
        "id": 10,
        "en": "he",
        "sound": "[hJ]",
        "ru": {
            "pron-": "он"
        }
    },
    {
        "id": 11,
        "en": "it",
        "sound": "[It]",
        "ru": {
            "pron-": "он, она, оно; это"
        }
    },
    {
        "id": 12,
        "en": "in",
        "sound": "[In]",
        "ru": {
            "prep-": "в"
        }
    },
    {
        "id": 13,
        "en": "not",
        "sound": "[nOt]",
        "ru": {
            "adv-": "не, нет; ни"
        }
    },
    {
        "id": 14,
        "en": "was",
        "sound": "[wOz, wqz ]",
        "ru": {
            "v-": "был, была, было; пр. вр. ед. ч. гл. to be (с I, he/she/it)"
        }
    },
    {
        "id": 15,
        "en": "that",
        "sound": "[Dxt]",
        "ru": {
            "pron-": "тот, та, то"
        }
    },
    {
        "id": 16,
        "en": "his",
        "sound": "[hIz]",
        "ru": {
            "pron-": "его"
        }
    },
    {
        "id": 17,
        "en": "do",
        "sound": "[dH]",
        "ru": {
            "v-": "делать"
        },
        "irregular": "did; done [dAn]"
    },
    {
        "id": 18,
        "en": "on",
        "sound": "[On]",
        "ru": {
            "prep-": "на"
        }
    },
    {
        "id": 19,
        "en": "with",
        "sound": "[wID]",
        "ru": {
            "prep-": "с, вместе с"
        }
    },
    {
        "id": 20,
        "en": "she",
        "sound": "[SJ]",
        "ru": {
            "pron-": "она"
        }
    },
    {
        "id": 21,
        "en": "at",
        "sound": "[xt]",
        "ru": {
            "prep-": "около, у; в, на"
        }
    },
    {
        "id": 22,
        "en": "say",
        "sound": "[seI]",
        "ru": {
            "v-": "говорить"
        },
        "irregular": "said; said [sed]"
    },
    {
        "id": 23,
        "en": "her",
        "sound": "[hW]",
        "ru": {
            "pron-": "еѐ"
        }
    },
    {
        "id": 24,
        "en": "for",
        "sound": "[fL]",
        "ru": {
            "prep-": "в течение, на, для"
        }
    },
    {
        "id": 25,
        "en": "as",
        "sound": "[xz, qz]",
        "ru": {
            "adv-": "как;",
            "cj-": "когда"
        }
    },
    {
        "id": 26,
        "en": "are",
        "sound": "[R]",
        "ru": {
            "v-": "мн. ч. наст. врем. гл. to be (с we, you, they)"
        }
    },
    {
        "id": 27,
        "en": "we",
        "sound": "[wJ]",
        "ru": {
            "pron-": "мы"
        }
    },
    {
        "id": 28,
        "en": "but",
        "sound": "[bAt]",
        "ru": {
            "adv-": "только, лишь;",
            "prep-": "кроме;",
            "cj-": "но, а"
        }
    },
    {
        "id": 29,
        "en": "can",
        "sound": "[kxn]",
        "ru": {
            "v-": "мочь; уметь"
        }
    },
    {
        "id": 30,
        "en": "him",
        "sound": "[hIm]",
        "ru": {
            "pron-": "его"
        }
    },
    {
        "id": 31,
        "en": "they",
        "sound": "[DeI]",
        "ru": {
            "pron-": "они"
        }
    },
    {
        "id": 32,
        "en": "up",
        "sound": "[Ap]",
        "ru": {
            "adv-": "наверх(у), выше;",
            "prep-": "вверх по, вдоль по"
        }
    },
    {
        "id": 33,
        "en": "what",
        "sound": "[wOt]",
        "ru": {
            "pron-": "что"
        }
    },
    {
        "id": 34,
        "en": "out",
        "sound": "[aut]",
        "ru": {
            "adv-": "вне, снаружи;",
            "prep-": "вне, за"
        }
    },
    {
        "id": 35,
        "en": "me",
        "sound": "[mJ]",
        "ru": {
            "pron-": "мне, меня"
        }
    },
    {
        "id": 36,
        "en": "go",
        "sound": "[gou]",
        "ru": {
            "v-": "идти, ехать; уходить"
        },
        "irregular": "went; gone [gOn, ам. gAn]"
    },
    {
        "id": 37,
        "en": "get",
        "sound": "[get]",
        "ru": {
            "v-": "получать; брать; приобретать"
        },
        "irregular": "got [gOt, ам. gAt]; got"
    },
    {
        "id": 38,
        "en": "this",
        "sound": "[DIs]",
        "ru": {
            "pron-": "этот, эта, это"
        }
    },
    {
        "id": 39,
        "en": "from",
        "sound": "[frOm]",
        "ru": {
            "prep-": "от, из, с"
        }
    },
    {
        "id": 40,
        "en": "be",
        "sound": "[bJ]",
        "ru": {
            "v-": "быть, существовать; находиться и др."
        }
    },
    {
        "id": 41,
        "en": "look",
        "sound": "[luk]",
        "ru": {
            "n-": "взгляд;",
            "v-": "смотреть"
        }
    },
    {
        "id": 42,
        "en": "my",
        "sound": "[maI]",
        "ru": {
            "pron-": "мой"
        }
    },
    {
        "id": 43,
        "en": "there",
        "sound": "[DFq]",
        "ru": {
            "adv-": "там, туда; вот"
        }
    },
    {
        "id": 44,
        "en": "know",
        "sound": "[nou]",
        "ru": {
            "v-": "знать"
        },
        "irregular": "knew [njH]; known [noun]"
    },
    {
        "id": 45,
        "en": "all",
        "sound": "[Ll]",
        "ru": {
            "pron-": "все, вся, всѐ"
        }
    },
    {
        "id": 46,
        "en": "one",
        "sound": "[wAn]",
        "ru": {
            "num-": "один;",
            "n-": "один"
        }
    },
    {
        "id": 47,
        "en": "no",
        "sound": "[nou]",
        "ru": {
            "part-": "нет;",
            "adv-": "не"
        }
    },
    {
        "id": 48,
        "en": "see",
        "sound": "[sJ]",
        "ru": {
            "v-": "видеть"
        },
        "irregular": "saw [sL]; seen [sJn]"
    },
    {
        "id": 49,
        "en": "will",
        "sound": "[wIl]",
        "ru": {
            "noPart": "1) вспом. гл. в Future Ind.; 2) как модальный"
        }
    },
    {
        "id": 50,
        "en": "back",
        "sound": "[bxk]",
        "ru": {
            "n-": "спина;",
            "a-": "задний"
        }
    },
    {
        "id": 51,
        "en": "into",
        "sound": "['Intu,'Intq]",
        "ru": {
            "prep-": "в"
        }
    },
    {
        "id": 52,
        "en": "like",
        "sound": "[laIk]",
        "ru": {
            "a-": "похожий;",
            "adv-": "как, подобно;",
            "v-": "любить, нравиться"
        }
    },
    {
        "id": 53,
        "en": "if",
        "sound": "[If]",
        "ru": {
            "cj-": "если"
        }
    },
    {
        "id": 54,
        "en": "were",
        "sound": "[wW, wq]",
        "ru": {
            "v-": "были; прош. врем. мн. ч. гл. to be (с we, you, they)"
        }
    },
    {
        "id": 55,
        "en": "then",
        "sound": "[Den]",
        "ru": {
            "adv-": "тогда; затем"
        }
    },
    {
        "id": 56,
        "en": "an",
        "sound": "[xn, qn]",
        "ru": {
            "noPart": "артикль неопредел."
        }
    },
    {
        "id": 57,
        "en": "come",
        "sound": "[kAm]",
        "ru": {
            "v-": "приходить, приезжать; случаться"
        },
        "irregular": "came [keIm]; come"
    },
    {
        "id": 58,
        "en": "think",
        "sound": "[TINk]",
        "ru": {
            "v-": "думать; считать, полагать"
        },
        "irregular": "thought [TLt]; thought"
    },
    {
        "id": 59,
        "en": "so",
        "sound": "[sou]",
        "ru": {
            "adv-": "так; тоже, также"
        }
    },
    {
        "id": 60,
        "en": "down",
        "sound": "[daun]",
        "ru": {
            "adv-": "вниз, внизу;",
            "prep-": "вниз по, вдоль по"
        }
    },
    {
        "id": 61,
        "en": "your",
        "sound": "[jL]",
        "ru": {
            "pron-": "твой, ваш"
        }
    },
    {
        "id": 62,
        "en": "them",
        "sound": "[Dem]",
        "ru": {
            "pron-": "их, им"
        }
    },
    {
        "id": 63,
        "en": "would",
        "sound": "[wud]",
        "ru": {
            "noPart": "1) вспом. гл.; 2) как модальный"
        }
    },
    {
        "id": 64,
        "en": "about",
        "sound": "[q'baut]",
        "ru": {
            "adv-": "кругом, вокруг; около;",
            "prep-": "о, об, относительно"
        }
    },
    {
        "id": 65,
        "en": "man",
        "sound": "[mxn]",
        "ru": {
            "n-": "человек, мужчина"
        }
    },
    {
        "id": 66,
        "en": "take",
        "sound": "[teIk]",
        "ru": {
            "v-": "брать; доставлять; принимать"
        },
        "irregular": "took [tuk]; taken [teIkn]"
    },
    {
        "id": 67,
        "en": "just",
        "sound": "[GAst]",
        "ru": {
            "adv-": "только что"
        }
    },
    {
        "id": 68,
        "en": "by",
        "sound": "[baI]",
        "ru": {
            "prep-": "у, около"
        }
    },
    {
        "id": 69,
        "en": "am",
        "sound": "[xm]",
        "ru": {
            "v-": "1-е л. ед.ч. наст. врем. гл. to be"
        }
    },
    {
        "id": 70,
        "en": "now",
        "sound": "[nau]",
        "ru": {
            "adv-": "теперь, сейчас"
        }
    },
    {
        "id": 71,
        "en": "over",
        "sound": "['ouvq]",
        "ru": {
            "prep-": "над; свыше"
        }
    },
    {
        "id": 72,
        "en": "make",
        "sound": "[meIk]",
        "ru": {
            "v-": "делать, производить; совершать"
        },
        "irregular": "made [meId]; made"
    },
    {
        "id": 73,
        "en": "been",
        "sound": "[bJn]",
        "ru": {
            "noPart": "прич. пр. вр. гл. to be"
        }
    },
    {
        "id": 74,
        "en": "or",
        "sound": "[L]",
        "ru": {
            "cj-": "или"
        }
    },
    {
        "id": 75,
        "en": "time",
        "sound": "[taIm]",
        "ru": {
            "n-": "время; раз"
        }
    },
    {
        "id": 76,
        "en": "when",
        "sound": "[wen]",
        "ru": {
            "adv-": "когда"
        }
    },
    {
        "id": 77,
        "en": "hand",
        "sound": "[hxnd]",
        "ru": {
            "n-": "рука"
        }
    },
    {
        "id": 78,
        "en": "who",
        "sound": "[hH]",
        "ru": {
            "pron-": "кто; который"
        }
    },
    {
        "id": 79,
        "en": "want",
        "sound": "[wOnt]",
        "ru": {
            "v-": "хотеть"
        }
    },
    {
        "id": 80,
        "en": "here",
        "sound": "[hIq]",
        "ru": {
            "adv-": "здесь, тут"
        }
    },
    {
        "id": 81,
        "en": "tell",
        "sound": "[tel]",
        "ru": {
            "v-": "говорить"
        },
        "irregular": "told [tould]; told"
    },
    {
        "id": 82,
        "en": "off",
        "sound": "[Of]",
        "ru": {
            "prep-": "с, от"
        }
    },
    {
        "id": 83,
        "en": "right",
        "sound": "[raIt]",
        "ru": {
            "a-": "правый;",
            "adv-": "верно"
        }
    },
    {
        "id": 84,
        "en": "their",
        "sound": "[DFq]",
        "ru": {
            "pron-": "их"
        }
    },
    {
        "id": 85,
        "en": "turn",
        "sound": "[tWn]",
        "ru": {
            "v-": "поворачивать(ся)"
        }
    },
    {
        "id": 86,
        "en": "two",
        "sound": "[tH]",
        "ru": {
            "num-": "два"
        }
    },
    {
        "id": 87,
        "en": "through",
        "sound": "[TrH]",
        "ru": {
            "prep-": "через, сквозь"
        }
    },
    {
        "id": 88,
        "en": "eye",
        "sound": "[aI]",
        "ru": {
            "n-": "глаз; взгляд"
        }
    },
    {
        "id": 89,
        "en": "head",
        "sound": "[hed]",
        "ru": {
            "n-": "голова"
        }
    },
    {
        "id": 90,
        "en": "other",
        "sound": "['ADq]",
        "ru": {
            "a-": "другой, иной, еще;",
            "pron-": "другой; others- другие"
        }
    },
    {
        "id": 91,
        "en": "how",
        "sound": "[hau]",
        "ru": {
            "adv-": "как"
        }
    },
    {
        "id": 92,
        "en": "some",
        "sound": "[sAm]",
        "ru": {
            "pron-": "несколько"
        }
    },
    {
        "id": 93,
        "en": "more",
        "sound": "[mL]",
        "ru": {
            "adv-": "больше, более"
        }
    },
    {
        "id": 94,
        "en": "around",
        "sound": "[q'raund]",
        "ru": {
            "adv-": "кругом, вокруг; поблизости;",
            "prep-": "вокруг, по"
        }
    },
    {
        "id": 95,
        "en": "door",
        "sound": "[dL]",
        "ru": {
            "n-": "дверь"
        }
    },
    {
        "id": 96,
        "en": "room",
        "sound": "[rHm]",
        "ru": {
            "n-": "комната"
        }
    },
    {
        "id": 97,
        "en": "face",
        "sound": "[feIs]",
        "ru": {
            "n-": "лицо"
        }
    },
    {
        "id": 98,
        "en": "day",
        "sound": "[deI]",
        "ru": {
            "n-": "день; сутки"
        }
    },
    {
        "id": 99,
        "en": "where",
        "sound": "[wFq]",
        "ru": {
            "adv-": "где; куда"
        }
    },
    {
        "id": 100,
        "en": "way",
        "sound": "[weI]",
        "ru": {
            "n-": "путь, дорога"
        }
    },
    {
        "id": 101,
        "en": "night",
        "sound": "[naIt]",
        "ru": {
            "n-": "ночь; вечер"
        }
    },
    {
        "id": 102,
        "en": "well",
        "sound": "[wel]",
        "ru": {
            "adv-": "хорошо"
        }
    },
    {
        "id": 103,
        "en": "thing",
        "sound": "[TIN]",
        "ru": {
            "n-": "вещь, предмет"
        }
    },
    {
        "id": 104,
        "en": "open",
        "sound": "['oupqn]",
        "ru": {
            "v-": ""
        }
    },
    {
        "id": 105,
        "en": "away",
        "sound": "[q'weI]",
        "ru": {
            "adv-": "далеко; прочь"
        }
    },
    {
        "id": 106,
        "en": "give",
        "sound": "[gIv]",
        "ru": {
            "v-": "давать"
        },
        "irregular": "gave [geIv]; given [gIvn]"
    },
    {
        "id": 107,
        "en": "only",
        "sound": "['ounlI]",
        "ru": {
            "adv-": "только"
        }
    },
    {
        "id": 108,
        "en": "something",
        "sound": "['sAmTIN]",
        "ru": {
            "pron-": "что-то, что-нибудь;",
            "adv-": "примерно, около"
        }
    },
    {
        "id": 109,
        "en": "ask",
        "sound": "[Rsk]",
        "ru": {
            "v-": "спрашивать"
        }
    },
    {
        "id": 110,
        "en": "move",
        "sound": "[mHv]",
        "ru": {
            "v-": "двигать(ся)"
        }
    },
    {
        "id": 111,
        "en": "stand",
        "sound": "[stxnd]",
        "ru": {
            "v-": "стоять; ставить; терпеть;",
            "n-": "стойка"
        },
        "irregular": "stood [stud]; stood"
    },
    {
        "id": 112,
        "en": "good",
        "sound": "[gud]",
        "ru": {
            "a-": "хороший;",
            "n-": "добро"
        }
    },
    {
        "id": 113,
        "en": "find",
        "sound": "[faInd]",
        "ru": {
            "v-": "находить, обнаруживать"
        },
        "irregular": "found [faund]; found"
    },
    {
        "id": 114,
        "en": "again",
        "sound": "[q'gen]",
        "ru": {
            "adv-": "опять, снова"
        }
    },
    {
        "id": 115,
        "en": "little",
        "sound": "[lItl]",
        "ru": {
            "a-": "маленький"
        }
    },
    {
        "id": 116,
        "en": "try",
        "sound": "[traI]",
        "ru": {
            "v-": "пытаться,"
        }
    },
    {
        "id": 117,
        "en": "too",
        "sound": "[tH]",
        "ru": {
            "adv-": "также; слишком"
        }
    },
    {
        "id": 118,
        "en": "still",
        "sound": "[stIl]",
        "ru": {
            "a-": "тихий;",
            "adv-": "все еще"
        }
    },
    {
        "id": 119,
        "en": "hear",
        "sound": "[hIq]",
        "ru": {
            "v-": "слышать; слушать"
        },
        "irregular": "heard [hWd]; heard"
    },
    {
        "id": 120,
        "en": "walk",
        "sound": "[wLk]",
        "ru": {
            "n-": "ходьба;",
            "v-": "ходить"
        }
    },
    {
        "id": 121,
        "en": "before",
        "sound": "[bI'fL]",
        "ru": {
            "prep-": "перед;",
            "adv-": "раньше"
        }
    },
    {
        "id": 122,
        "en": "leave",
        "sound": "[lJv]",
        "ru": {
            "v-": "(left; left) покидать"
        }
    },
    {
        "id": 123,
        "en": "sit",
        "sound": "[sIt]",
        "ru": {
            "v-": "сидеть"
        },
        "irregular": "sat [sxt]; sat"
    },
    {
        "id": 124,
        "en": "let",
        "sound": "[let]",
        "ru": {
            "v-": "(let; let) позволять"
        }
    },
    {
        "id": 125,
        "en": "long",
        "sound": "[lON]",
        "ru": {
            "a-": "длинный;",
            "adv-": "долго"
        }
    },
    {
        "id": 126,
        "en": "call",
        "sound": "[kLl]",
        "ru": {
            "n-": "призыв;",
            "v-": "звать"
        }
    },
    {
        "id": 127,
        "en": "feel",
        "sound": "[fJl]",
        "ru": {
            "v-": "(felt; felt) чувствовать"
        }
    },
    {
        "id": 128,
        "en": "close",
        "sound": "[klouz]",
        "ru": {
            "a-": "близкий, тесный;",
            "adv-": "близко;",
            "v-": "закрывать(ся)"
        }
    },
    {
        "id": 129,
        "en": "very",
        "sound": "['verI]",
        "ru": {
            "adv-": "очень"
        }
    },
    {
        "id": 130,
        "en": "why",
        "sound": "[waI]",
        "ru": {
            "adv-": "почему"
        }
    },
    {
        "id": 131,
        "en": "which",
        "sound": "[wIC]",
        "ru": {
            "pron-": "который; что"
        }
    },
    {
        "id": 132,
        "en": "car",
        "sound": "[kR]",
        "ru": {
            "n-": "автомобиль, машина"
        }
    },
    {
        "id": 133,
        "en": "any",
        "sound": "['enI]",
        "ru": {
            "pron-": "какой-нибудь"
        }
    },
    {
        "id": 134,
        "en": "hold",
        "sound": "[hould]",
        "ru": {
            "v-": "(held; held) держать; владеть; вмещать"
        }
    },
    {
        "id": 135,
        "en": "work",
        "sound": "[wWk]",
        "ru": {
            "n-": "работа;",
            "v-": "работать"
        }
    },
    {
        "id": 136,
        "en": "run",
        "sound": "[rAn]",
        "ru": {
            "v-": "бежать"
        },
        "irregular": "ran [rxn]; run"
    },
    {
        "id": 137,
        "en": "never",
        "sound": "['nevq]",
        "ru": {
            "adv-": "никогда"
        }
    },
    {
        "id": 138,
        "en": "start",
        "sound": "[stRt]",
        "ru": {
            "n-": "начало;",
            "v-": "начинать(ся)"
        }
    },
    {
        "id": 139,
        "en": "even",
        "sound": "['Jvn]",
        "ru": {
            "adv-": "даже; ровно"
        }
    },
    {
        "id": 140,
        "en": "light",
        "sound": "[laIt]",
        "ru": {
            "n-": "свет;",
            "v-": "освещать(ся)"
        },
        "irregular": "lit, lighted; lit, lighted ['laItId]"
    },
    {
        "id": 141,
        "en": "than",
        "sound": "[Dxn]",
        "ru": {
            "cj-": "чем, нежели"
        }
    },
    {
        "id": 142,
        "en": "after",
        "sound": "['Rfte]",
        "ru": {
            "prep-": "после, через;",
            "adv-": "потом"
        }
    },
    {
        "id": 143,
        "en": "put",
        "sound": "[put]",
        "ru": {
            "v-": "(put; put) положить"
        }
    },
    {
        "id": 144,
        "en": "yes",
        "sound": "[jes]",
        "ru": {
            "adv-": "да"
        }
    },
    {
        "id": 145,
        "en": "stop",
        "sound": "[stOp]",
        "ru": {
            "n-": "остановка;",
            "v-": "останавливать(ся)"
        }
    },
    {
        "id": 146,
        "en": "old",
        "sound": "[ould]",
        "ru": {
            "a-": "старый"
        }
    },
    {
        "id": 147,
        "en": "watch",
        "sound": "[wOC]",
        "ru": {
            "v-": "смотреть, следить;",
            "n-": "часы"
        }
    },
    {
        "id": 148,
        "en": "first",
        "sound": "[fWst]",
        "ru": {
            "a-": "первый;",
            "adv-": "сначала"
        }
    },
    {
        "id": 149,
        "en": "may",
        "sound": "[meI]",
        "ru": {
            "v-": "мочь и др.;",
            "n-": "май (месяц)"
        }
    },
    {
        "id": 150,
        "en": "talk",
        "sound": "[tLk]",
        "ru": {
            "n-": "разговор;",
            "v-": "говорить"
        }
    },
    {
        "id": 151,
        "en": "another",
        "sound": "[q'nADq]",
        "ru": {
            "pron-": "другой"
        }
    },
    {
        "id": 152,
        "en": "cut",
        "sound": "[kAt]",
        "ru": {
            "v-": "(cut; cut) резать"
        }
    },
    {
        "id": 153,
        "en": "mean",
        "sound": "[mJn]",
        "ru": {
            "n-": "середина;",
            "v-": "значить; подразумевать"
        },
        "irregular": "meant; meant [ment]"
    },
    {
        "id": 154,
        "en": "pull",
        "sound": "[pul]",
        "ru": {
            "v-": "тянуть, тащить"
        }
    },
    {
        "id": 155,
        "en": "behind",
        "sound": "[bI'haInd]",
        "ru": {
            "prep-": "за;",
            "adv-": "сзади, позади"
        }
    },
    {
        "id": 156,
        "en": "smile",
        "sound": "[smaIl]",
        "ru": {
            "n-": "улыбка;",
            "v-": "улыбаться"
        }
    },
    {
        "id": 157,
        "en": "our",
        "sound": "['auq]",
        "ru": {
            "pron-": "наш"
        }
    },
    {
        "id": 158,
        "en": "toward(s)",
        "sound": "[tq'wLd(z)]",
        "ru": {
            "prep-": "к"
        }
    },
    {
        "id": 159,
        "en": "much",
        "sound": "[mAC]",
        "ru": {
            "a-": "много;",
            "adv-": "много"
        }
    },
    {
        "id": 160,
        "en": "its",
        "sound": "[Its]",
        "ru": {
            "pron-": "его, еѐ (о предм.)"
        }
    },
    {
        "id": 161,
        "en": "house",
        "sound": "[haus]",
        "ru": {
            "n-": "дом"
        }
    },
    {
        "id": 162,
        "en": "keep",
        "sound": "[kJp]",
        "ru": {
            "v-": "(kept; kept) держать"
        }
    },
    {
        "id": 163,
        "en": "place",
        "sound": "[pleIs]",
        "ru": {}
    },
    {
        "id": 164,
        "en": "begin",
        "sound": "[bI'gIn]",
        "ru": {
            "v-": "начинать(ся); приступать (к)"
        },
        "irregular": "began [bI'gxn]; begun [bI'gAn]"
    },
    {
        "id": 165,
        "en": "nothing",
        "sound": "['nATIN]",
        "ru": {
            "pron-": "ничего"
        }
    },
    {
        "id": 166,
        "en": "year",
        "sound": "[jW]",
        "ru": {
            "n-": "год"
        }
    },
    {
        "id": 167,
        "en": "woman",
        "sound": "['wumqn]",
        "ru": {
            "n-": "женщина"
        }
    },
    {
        "id": 168,
        "en": "side",
        "sound": "[said]",
        "ru": {
            "n-": "сторона"
        }
    },
    {
        "id": 169,
        "en": "because",
        "sound": "[bI'kOz]",
        "ru": {
            "cj-": "потому что"
        }
    },
    {
        "id": 170,
        "en": "three",
        "sound": "[TrJ]",
        "ru": {
            "num-": "три"
        }
    },
    {
        "id": 171,
        "en": "seem",
        "sound": "[sJm]",
        "ru": {
            "v-": "казаться"
        }
    },
    {
        "id": 172,
        "en": "wait",
        "sound": "[weIt]",
        "ru": {
            "v-": "ждать"
        }
    },
    {
        "id": 173,
        "en": "need",
        "sound": "[nJd]",
        "ru": {
            "v-": "нуждаться"
        }
    },
    {
        "id": 174,
        "en": "moment",
        "sound": "['moumqnt]",
        "ru": {
            "n-": "мгновение, момент"
        }
    },
    {
        "id": 175,
        "en": "himself",
        "sound": "[hIm'self]",
        "ru": {
            "pron-": "себя; сам"
        }
    },
    {
        "id": 176,
        "en": "stare",
        "sound": "[stFq]",
        "ru": {
            "v-": "уставиться (на)"
        }
    },
    {
        "id": 177,
        "en": "arm",
        "sound": "[Rm]",
        "ru": {
            "n-": "1) рука; 2)~s оружие"
        }
    },
    {
        "id": 178,
        "en": "use",
        "sound": "[jHs]",
        "ru": {
            "n-": "применение, польза; v [jHz]- употредлять, применять и др."
        }
    },
    {
        "id": 179,
        "en": "voice",
        "sound": "[vOIs]",
        "ru": {
            "n-": "голос"
        }
    },
    {
        "id": 180,
        "en": "last",
        "sound": "[lRst]",
        "ru": {
            "a-": "последний"
        }
    },
    {
        "id": 181,
        "en": "late",
        "sound": "[leIt]",
        "ru": {
            "a-": "поздний;",
            "adv-": "поздно"
        }
    },
    {
        "id": 182,
        "en": "across",
        "sound": "[q'krOs]",
        "ru": {
            "prep-": "через, сквозь;",
            "adv-": "поперек"
        }
    },
    {
        "id": 183,
        "en": "sure",
        "sound": "[Suq]",
        "ru": {
            "a-": "уверенный;",
            "adv-": "конечно"
        }
    },
    {
        "id": 184,
        "en": "front",
        "sound": "[frAnt]",
        "ru": {
            "a-": "передний"
        }
    },
    {
        "id": 185,
        "en": "sound",
        "sound": "[saund]",
        "ru": {
            "n-": "звук;",
            "v-": "звучать"
        }
    },
    {
        "id": 186,
        "en": "big",
        "sound": "[bIg]",
        "ru": {
            "a-": "большой"
        }
    },
    {
        "id": 187,
        "en": "really",
        "sound": "['rIqlI]",
        "ru": {
            "adv-": "действительно"
        }
    },
    {
        "id": 188,
        "en": "name",
        "sound": "[neIm]",
        "ru": {
            "n-": "имя; название"
        }
    },
    {
        "id": 189,
        "en": "should",
        "sound": "[Sud]",
        "ru": {
            "noPart": "1) вспом. гл.; 2) как модальный: должен, следует"
        }
    },
    {
        "id": 190,
        "en": "new",
        "sound": "[njH]",
        "ru": {
            "a-": "новый"
        }
    },
    {
        "id": 191,
        "en": "anything",
        "sound": "['enITIN]",
        "ru": {
            "pron-": "что-нибудь; что угодно"
        }
    },
    {
        "id": 192,
        "en": "against",
        "sound": "[q'genst]",
        "ru": {
            "prep-": "против"
        }
    },
    {
        "id": 193,
        "en": "guy",
        "sound": "[gaI]",
        "ru": {
            "n-": "парень"
        }
    },
    {
        "id": 194,
        "en": "kill",
        "sound": "[kIl]",
        "ru": {
            "v-": "убивать"
        }
    },
    {
        "id": 195,
        "en": "point",
        "sound": "[pOInt]",
        "ru": {
            "n-": "острие; точка; пункт; смысл;",
            "v-": "указывать на"
        }
    },
    {
        "id": 196,
        "en": "small",
        "sound": "[smLl]",
        "ru": {
            "a-": "маленький"
        }
    },
    {
        "id": 197,
        "en": "happen",
        "sound": "['hxpqn]",
        "ru": {
            "v-": "случаться"
        }
    },
    {
        "id": 198,
        "en": "wall",
        "sound": "[wLl]",
        "ru": {
            "n-": "стена"
        }
    },
    {
        "id": 199,
        "en": "black",
        "sound": "[blxk]",
        "ru": {
            "a-": "черный"
        }
    },
    {
        "id": 200,
        "en": "step",
        "sound": "[step]",
        "ru": {
            "n-": "шаг;",
            "v-": "шагать"
        }
    },
    {
        "id": 201,
        "en": "window",
        "sound": "['wIndou]",
        "ru": {
            "n-": "окно"
        }
    },
    {
        "id": 202,
        "en": "life",
        "sound": "[laIf]",
        "ru": {
            "n-": "жизнь"
        }
    },
    {
        "id": 203,
        "en": "maybe",
        "sound": "['meIbI]",
        "ru": {
            "adv-": "может быть"
        }
    },
    {
        "id": 204,
        "en": "fall",
        "sound": "[fLl]",
        "ru": {
            "v-": "падать, понижаться;",
            "n-": "падение; осень"
        },
        "irregular": "fell; fallen ['fLln]"
    },
    {
        "id": 205,
        "en": "own",
        "sound": "[oun]",
        "ru": {
            "a-": "свой;",
            "v-": "владеть"
        }
    },
    {
        "id": 206,
        "en": "far",
        "sound": "[fR]",
        "ru": {
            "a-": "дальний;",
            "adv-": "далеко"
        }
    },
    {
        "id": 207,
        "en": "under",
        "sound": "['Andq]",
        "ru": {
            "prep-": "под; ниже"
        }
    },
    {
        "id": 208,
        "en": "boy",
        "sound": "[bOI]",
        "ru": {
            "n-": "мальчик, парень"
        }
    },
    {
        "id": 209,
        "en": "end",
        "sound": "[end]",
        "ru": {
            "n-": "конец;",
            "v-": "кончать(ся)"
        }
    },
    {
        "id": 210,
        "en": "those",
        "sound": "[Douz]",
        "ru": {
            "pron-": "те"
        }
    },
    {
        "id": 211,
        "en": "reach",
        "sound": "[rJC]",
        "ru": {
            "v-": "достигать"
        }
    },
    {
        "id": 212,
        "en": "while",
        "sound": "[waIl]",
        "ru": {
            "cj-": "в то время как"
        }
    },
    {
        "id": 213,
        "en": "floor",
        "sound": "[flL]",
        "ru": {
            "n-": "пол; этаж"
        }
    },
    {
        "id": 214,
        "en": "street",
        "sound": "[strJt]",
        "ru": {
            "n-": "улица"
        }
    },
    {
        "id": 215,
        "en": "help",
        "sound": "[help]",
        "ru": {}
    },
    {
        "id": 216,
        "en": "girl",
        "sound": "[gWl]",
        "ru": {
            "n-": "девочка, девушка"
        }
    },
    {
        "id": 217,
        "en": "next",
        "sound": "[nekst]",
        "ru": {
            "a-": "следующий; будущий;",
            "adv-": "потом, затем;",
            "prep-": "рядом"
        }
    },
    {
        "id": 218,
        "en": "few",
        "sound": "[fjH]",
        "ru": {
            "a-": "немного; a ~"
        }
    },
    {
        "id": 219,
        "en": "white",
        "sound": "[waIt]",
        "ru": {
            "a-": "белый"
        }
    },
    {
        "id": 220,
        "en": "must",
        "sound": "[mAst]",
        "ru": {
            "v-": "должен, обязан"
        }
    },
    {
        "id": 221,
        "en": "feet",
        "sound": "[fJt]",
        "ru": {
            "n-": "ноги"
        }
    },
    {
        "id": 222,
        "en": "table",
        "sound": "['teIbl]",
        "ru": {
            "n-": "стол"
        }
    },
    {
        "id": 223,
        "en": "these",
        "sound": "[DJz]",
        "ru": {
            "pron-": "эти"
        }
    },
    {
        "id": 224,
        "en": "show",
        "sound": "[Sou]",
        "ru": {
            "n-": "показ;",
            "v-": "показывать"
        },
        "irregular": "showed ['Soud]; shown [Soun], редк. showed"
    },
    {
        "id": 225,
        "en": "okay",
        "sound": "или OK ['o(u)'keI]",
        "ru": {
            "int-": "хорошо!, ладно!, есть!"
        }
    },
    {
        "id": 226,
        "en": "enough",
        "sound": "[I'nAf]",
        "ru": {
            "adv-": "достаточно"
        }
    },
    {
        "id": 227,
        "en": "phone",
        "sound": "[foun]",
        "ru": {
            "n-": "телефон;",
            "v-": "звонить по телефону"
        }
    },
    {
        "id": 228,
        "en": "body",
        "sound": "['bOdI]",
        "ru": {
            "n-": "тело"
        }
    },
    {
        "id": 229,
        "en": "same",
        "sound": "[seIm]",
        "ru": {
            "a-": "тот же самый"
        }
    },
    {
        "id": 230,
        "en": "minute",
        "sound": "['mInIt]",
        "ru": {
            "n-": "минута"
        }
    },
    {
        "id": 231,
        "en": "shake",
        "sound": "[SeIk]",
        "ru": {
            "v-": "трясти(сь); дрожать; потрясать"
        },
        "irregular": "shook [Suk]; shaken ['SeIkn]"
    },
    {
        "id": 232,
        "en": "water",
        "sound": "['wLtq]",
        "ru": {
            "n-": "вода"
        }
    },
    {
        "id": 233,
        "en": "fire",
        "sound": "['faIq]",
        "ru": {
            "n-": "огонь; пожар;",
            "v-": "стрелять; поджигать"
        }
    },
    {
        "id": 234,
        "en": "inside",
        "sound": "[In'saId]",
        "ru": {
            "a-": "внутренний;",
            "adv-": "внутри;",
            "prep-": "внутрь"
        }
    },
    {
        "id": 235,
        "en": "break",
        "sound": "[breIk]",
        "ru": {
            "v-": "ломать(ся);",
            "n-": "пролом; перерыв"
        },
        "irregular": "broke [brouk]; broken [broukn]"
    },
    {
        "id": 236,
        "en": "ever",
        "sound": "['evq]",
        "ru": {
            "adv-": "когда-либо"
        }
    },
    {
        "id": 237,
        "en": "follow",
        "sound": "['fOlou]",
        "ru": {
            "v-": "следовать (за)"
        }
    },
    {
        "id": 238,
        "en": "second",
        "sound": "['sekqnd]",
        "ru": {
            "n-": "секунда;",
            "num-": "второй"
        }
    },
    {
        "id": 239,
        "en": "nod",
        "sound": "[nOd]",
        "ru": {
            "v-": "кивать головой;",
            "n-": "кивок"
        }
    },
    {
        "id": 240,
        "en": "meet",
        "sound": "[mJt]",
        "ru": {
            "v-": "(met; met) встречать(ся); знакомиться"
        }
    },
    {
        "id": 241,
        "en": "great",
        "sound": "[greIt]",
        "ru": {
            "a-": "большой, великий"
        }
    },
    {
        "id": 242,
        "en": "yeah",
        "sound": "[jq, jx]",
        "ru": {
            "adv-": "разг. от yes - да"
        }
    },
    {
        "id": 243,
        "en": "each",
        "sound": "[JC]",
        "ru": {
            "pron-": "каждый, всякий"
        }
    },
    {
        "id": 244,
        "en": "mind",
        "sound": "[maInd]",
        "ru": {
            "n-": "разум; мнение"
        }
    },
    {
        "id": 245,
        "en": "suddenly",
        "sound": "['sAdnlI]",
        "ru": {
            "adv-": "вдруг"
        }
    },
    {
        "id": 246,
        "en": "dead",
        "sound": "[ded]",
        "ru": {
            "a-": "мертвый"
        }
    },
    {
        "id": 247,
        "en": "almost",
        "sound": "['Llmoust]",
        "ru": {
            "adv-": "почти"
        }
    },
    {
        "id": 248,
        "en": "gun",
        "sound": "[gAn]",
        "ru": {
            "n-": "огнестр. оружие"
        }
    },
    {
        "id": 249,
        "en": "both",
        "sound": "[bouT]",
        "ru": {
            "pron-": "оба"
        }
    },
    {
        "id": 250,
        "en": "speak",
        "sound": "[spJk]",
        "ru": {
            "v-": "говорить, разговаривать"
        },
        "irregular": "spoke [spouk]; spoken [spoukn]"
    },
    {
        "id": 251,
        "en": "love",
        "sound": "[lAv]",
        "ru": {
            "n-": "любовь;",
            "v-": "любить"
        }
    },
    {
        "id": 252,
        "en": "pick",
        "sound": "[pIk]",
        "ru": {
            "v-": "собирать; выбирать"
        }
    },
    {
        "id": 253,
        "en": "home",
        "sound": "[houm]",
        "ru": {
            "n-": "дом"
        }
    },
    {
        "id": 254,
        "en": "without",
        "sound": "[wI'Daut]",
        "ru": {
            "prep-": "без"
        }
    },
    {
        "id": 255,
        "en": "win",
        "sound": "[wIn]",
        "ru": {
            "v-": "выиграть"
        },
        "irregular": "won; won [wAn]"
    },
    {
        "id": 256,
        "en": "once",
        "sound": "[wAns]",
        "ru": {
            "adv-": "однажды"
        }
    },
    {
        "id": 257,
        "en": "word",
        "sound": "[wWd]",
        "ru": {
            "n-": "слово"
        }
    },
    {
        "id": 258,
        "en": "better",
        "sound": "['betq]",
        "ru": {
            "adv-": "лучше"
        }
    },
    {
        "id": 259,
        "en": "every",
        "sound": "['evrI]",
        "ru": {
            "pron-": "каждый"
        }
    },
    {
        "id": 260,
        "en": "god",
        "sound": "[gOd, ам. gAd]",
        "ru": {
            "n-": "бог"
        }
    },
    {
        "id": 261,
        "en": "build",
        "sound": "[bIld]",
        "ru": {
            "v-": "(built; built) строить; building также",
            "n-": "здание"
        }
    },
    {
        "id": 262,
        "en": "until",
        "sound": "[An'tIl]",
        "ru": {
            "prep-": "до тех пор пока"
        }
    },
    {
        "id": 263,
        "en": "beat",
        "sound": "[bJt]",
        "ru": {
            "v-": "бить"
        },
        "irregular": "beat; beaten [bJtn]"
    },
    {
        "id": 264,
        "en": "course",
        "sound": "[kLs]",
        "ru": {
            "n-": "курс; of course- конечно"
        }
    },
    {
        "id": 265,
        "en": "lot",
        "sound": "[lOt]",
        "ru": {
            "n-": "жребий, судьба; a lot of, lots of –много, масса"
        }
    },
    {
        "id": 266,
        "en": "drive",
        "sound": "[draIv]",
        "ru": {
            "v-": "ехать; управлять (автомоб.);",
            "n-": "езда"
        },
        "irregular": "drove [drouv]; driven ['drIvn]"
    },
    {
        "id": 267,
        "en": "bring",
        "sound": "[brIN]",
        "ru": {
            "v-": "приносить; приводить; привозить"
        },
        "irregular": "brought; brought [brLt]"
    },
    {
        "id": 268,
        "en": "along",
        "sound": "[q'lON]",
        "ru": {
            "prep-": "по;",
            "adv-": "вперед"
        }
    },
    {
        "id": 269,
        "en": "five",
        "sound": "[faIv]",
        "ru": {
            "num-": "пять"
        }
    },
    {
        "id": 270,
        "en": "hard",
        "sound": "[hRd]",
        "ru": {
            "a-": "твердый, трудный;",
            "adv-": "сильно, упорно"
        }
    },
    {
        "id": 271,
        "en": "air",
        "sound": "[Fq]",
        "ru": {
            "n-": "воздух;",
            "a-": "воздушный"
        }
    },
    {
        "id": 272,
        "en": "continue",
        "sound": "[kqn'tInjH]",
        "ru": {
            "v-": "продолжать(ся)"
        }
    },
    {
        "id": 273,
        "en": "most",
        "sound": "[moust]",
        "ru": {
            "n-": "большинство;",
            "a-": "наибольший;",
            "adv-": "наиболее"
        }
    },
    {
        "id": 274,
        "en": "pass",
        "sound": "[pRs]",
        "ru": {
            "v-": "проходить, проезжать; выдержать (экзамен);",
            "n-": "пропуск"
        }
    },
    {
        "id": 275,
        "en": "always",
        "sound": "['Llwqz]",
        "ru": {
            "adv-": "всегда"
        }
    },
    {
        "id": 276,
        "en": "kid",
        "sound": "[kId]",
        "ru": {
            "n-": "ребенок, малыш;",
            "v-": "подшучивать; обманывать"
        }
    },
    {
        "id": 277,
        "en": "believe",
        "sound": "[bI'lJv]",
        "ru": {
            "v-": "верить"
        }
    },
    {
        "id": 278,
        "en": "half",
        "sound": "[hRf]",
        "ru": {
            "n-": "половина"
        }
    },
    {
        "id": 279,
        "en": "line",
        "sound": "[laIn]",
        "ru": {
            "n-": "линия;",
            "v-": "проводить линии; выстраивать(ся) в ряд"
        }
    },
    {
        "id": 280,
        "en": "high",
        "sound": "[haI]",
        "ru": {
            "a-": "высокий; высший;",
            "adv-": "высоко"
        }
    },
    {
        "id": 281,
        "en": "set",
        "sound": "[set]",
        "ru": {
            "v-": "(set; set) ставить, помещать;",
            "n-": "комплект, набор"
        }
    },
    {
        "id": 282,
        "en": "read",
        "sound": "[rJd]",
        "ru": {
            "v-": "читать"
        },
        "irregular": "read [red]; read [red]"
    },
    {
        "id": 283,
        "en": "world",
        "sound": "[wWld]",
        "ru": {
            "n-": "мир, вселенная"
        }
    },
    {
        "id": 284,
        "en": "hour",
        "sound": "['auq]",
        "ru": {
            "n-": "час"
        }
    },
    {
        "id": 285,
        "en": "office",
        "sound": "['Ofis]",
        "ru": {
            "n-": "контора"
        }
    },
    {
        "id": 286,
        "en": "play",
        "sound": "[pleI]",
        "ru": {
            "n-": "игра;",
            "v-": "играть"
        }
    },
    {
        "id": 287,
        "en": "young",
        "sound": "[jAN]",
        "ru": {
            "a-": "молодой, юный"
        }
    },
    {
        "id": 288,
        "en": "answer",
        "sound": "['Rnse]",
        "ru": {
            "n-": "ответ;",
            "v-": "отвечать"
        }
    },
    {
        "id": 289,
        "en": "shoot",
        "sound": "[SHt]",
        "ru": {
            "v-": ""
        },
        "irregular": "shot; shot [SOt]"
    },
    {
        "id": 290,
        "en": "dark",
        "sound": "[dRk]",
        "ru": {
            "n-": "темнота;"
        }
    },
    {
        "id": 291,
        "en": "laugh",
        "sound": "[lRf]",
        "ru": {
            "n-": "смех;",
            "v-": "смеяться"
        }
    },
    {
        "id": 292,
        "en": "bed",
        "sound": "[bed]",
        "ru": {
            "n-": "кровать, постель"
        }
    },
    {
        "id": 293,
        "en": "thank",
        "sound": "[TxNk]",
        "ru": {
            "v-": "благодарить"
        }
    },
    {
        "id": 294,
        "en": "remember",
        "sound": "[rI'membq]",
        "ru": {
            "v-": "помнить, вспоминать"
        }
    },
    {
        "id": 295,
        "en": "drop",
        "sound": "[drOp]",
        "ru": {
            "n-": "капля;",
            "v-": "капать"
        }
    },
    {
        "id": 296,
        "en": "friend",
        "sound": "[frend]",
        "ru": {
            "n-": "друг, подруга"
        }
    },
    {
        "id": 297,
        "en": "though",
        "sound": "[Dou]",
        "ru": {
            "adv-": "однако;",
            "cj-": "хотя"
        }
    },
    {
        "id": 298,
        "en": "glass",
        "sound": "[glRs]",
        "ru": {
            "n-": "стекло; стакан"
        }
    },
    {
        "id": 299,
        "en": "hair",
        "sound": "[hFq]",
        "ru": {
            "n-": "волос, волосы"
        }
    },
    {
        "id": 300,
        "en": "hell",
        "sound": "[hel]",
        "ru": {
            "n-": "ад, преисподняя"
        }
    },
    {
        "id": 301,
        "en": "catch",
        "sound": "[kxC]",
        "ru": {
            "v-": "ловить, поймать, застигнуть;",
            "n-": "захват"
        },
        "irregular": "caught [kLt]; caught"
    },
    {
        "id": 302,
        "en": "mother",
        "sound": "['mADq]",
        "ru": {
            "n-": "мать"
        }
    },
    {
        "id": 303,
        "en": "four",
        "sound": "[fL]",
        "ru": {
            "num-": "четыре"
        }
    },
    {
        "id": 304,
        "en": "listen",
        "sound": "['lIsn]",
        "ru": {
            "v-": "слушать"
        }
    },
    {
        "id": 305,
        "en": "understand",
        "sound": "[\"Andq'stxnd]",
        "ru": {
            "v-": "понимать"
        },
        "irregular": "understood [\"Andq'stud]; understood"
    },
    {
        "id": 306,
        "en": "sir",
        "sound": "[sW]",
        "ru": {
            "n-": "сэр, господин"
        }
    },
    {
        "id": 307,
        "en": "lose",
        "sound": "[lHz]",
        "ru": {
            "v-": "(lost; lost) терять; проигрывать; отставать (о часах)"
        }
    },
    {
        "id": 308,
        "en": "lie",
        "sound": "[laI]",
        "ru": {
            "v-": "лгать",
            "n-": "ложь;"
        }
    },
    {
        "id": 309,
        "en": "between",
        "sound": "[bI'twJn]",
        "ru": {
            "prep-": "между"
        }
    },
    {
        "id": 310,
        "en": "live",
        "sound": "[lIv]",
        "ru": {
            "v-": "жить"
        }
    },
    {
        "id": 311,
        "en": "money",
        "sound": "['mAnI]",
        "ru": {
            "n-": "деньги"
        }
    },
    {
        "id": 312,
        "en": "father",
        "sound": "['fRDq]",
        "ru": {
            "n-": "отец"
        }
    },
    {
        "id": 313,
        "en": "morning",
        "sound": "['mLnIN]",
        "ru": {
            "n-": "утро"
        }
    },
    {
        "id": 314,
        "en": "red",
        "sound": "[red]",
        "ru": {
            "a-": "красный"
        }
    },
    {
        "id": 315,
        "en": "please",
        "sound": "[plJz]",
        "ru": {
            "v-": "нравиться"
        }
    },
    {
        "id": 316,
        "en": "everything",
        "sound": "['evrITIN]",
        "ru": {
            "pron-": "всѐ"
        }
    },
    {
        "id": 317,
        "en": "slowly",
        "sound": "['sloulI]",
        "ru": {
            "adv-": "медленно"
        }
    },
    {
        "id": 318,
        "en": "rise",
        "sound": "[raIz]",
        "ru": {
            "v-": "подниматься, вставать; восходить"
        },
        "irregular": "rose [rouz]; risen [rIzn]"
    },
    {
        "id": 319,
        "en": "die",
        "sound": "[daI]",
        "ru": {
            "v-": "умирать"
        }
    },
    {
        "id": 320,
        "en": "else",
        "sound": "[els]",
        "ru": {
            "adv-": "еще; кроме"
        }
    },
    {
        "id": 321,
        "en": "kind",
        "sound": "[kaInd]",
        "ru": {
            "n-": "сорт, вид;",
            "a-": "добрый, любезный"
        }
    },
    {
        "id": 322,
        "en": "wear",
        "sound": "[wFq]",
        "ru": {
            "v-": "носить (одежду и т.п.);",
            "n-": "одежда"
        },
        "irregular": "wore [wL]; worn [wLn]"
    },
    {
        "id": 323,
        "en": "hit",
        "sound": "[hIt]",
        "ru": {
            "v-": "(hit; hit) ударять(ся); попадать;",
            "n-": "удар; попадание"
        }
    },
    {
        "id": 324,
        "en": "hang",
        "sound": "[hxN]",
        "ru": {
            "v-": "висеть; вешать; hanging",
            "n-": "вешание;",
            "a-": "висячий"
        },
        "irregular": "hung; hung [hAN]; но hanged; hanged [hxNd] в знач. казнить"
    },
    {
        "id": 325,
        "en": "many",
        "sound": "['menI]",
        "ru": {
            "n-": "многие, множество;",
            "a-": "многие, много"
        }
    },
    {
        "id": 326,
        "en": "someone",
        "sound": "['sAmwAn]",
        "ru": {
            "pron-": "кто-то"
        }
    },
    {
        "id": 327,
        "en": "drink",
        "sound": "[drINk]",
        "ru": {
            "v-": "пить; выпивать;",
            "n-": "питье"
        },
        "irregular": "drank [drxNk]; drunk [drANk]"
    },
    {
        "id": 328,
        "en": "stay",
        "sound": "[steI]",
        "ru": {
            "n-": "пребывание;",
            "v-": "оставаться; жить"
        }
    },
    {
        "id": 329,
        "en": "shoulder",
        "sound": "['Souldq]",
        "ru": {
            "n-": "плечо"
        }
    },
    {
        "id": 330,
        "en": "past",
        "sound": "[pRst]",
        "ru": {
            "n-": "прошлое;",
            "a-": "прошлый;",
            "prep-": "после, за; мимо"
        }
    },
    {
        "id": 331,
        "en": "grab",
        "sound": "[grxb]",
        "ru": {
            "v-": "хватать(ся)"
        }
    },
    {
        "id": 332,
        "en": "question",
        "sound": "['kwesCn]",
        "ru": {
            "n-": "вопрос; проблема;",
            "v-": "распрашивать"
        }
    },
    {
        "id": 333,
        "en": "part",
        "sound": "[pRt]",
        "ru": {
            "n-": "часть; роль"
        }
    },
    {
        "id": 334,
        "en": "case",
        "sound": "[keIs]",
        "ru": {
            "n-": "1) случай; обстоятельство; 2) ящик, чемодан"
        }
    },
    {
        "id": 335,
        "en": "mouth",
        "sound": "[mauT]",
        "ru": {
            "n-": "рот"
        }
    },
    {
        "id": 336,
        "en": "throw",
        "sound": "[Trou]",
        "ru": {
            "v-": "бросать, кидать"
        },
        "irregular": "threw [TrH]; thrown [Troun]"
    },
    {
        "id": 337,
        "en": "enter",
        "sound": "['entq]",
        "ru": {
            "v-": "входить (в)"
        }
    },
    {
        "id": 338,
        "en": "hundred",
        "sound": "['hAndrId]",
        "ru": {
            "num-": "сто"
        }
    },
    {
        "id": 339,
        "en": "cover",
        "sound": "['kAvq]",
        "ru": {
            "n-": "(по)крышка;",
            "v-": "покрывать, прикрывать"
        }
    },
    {
        "id": 340,
        "en": "blood",
        "sound": "[blAd]",
        "ru": {
            "n-": "кровь"
        }
    },
    {
        "id": 341,
        "en": "check",
        "sound": "[Cek]",
        "ru": {
            "n-": "проверка, контроль;",
            "v-": "проверять, контролировать"
        }
    },
    {
        "id": 342,
        "en": "outside",
        "sound": "[\"aut'saId]",
        "ru": {
            "a-": "наружный, внешний;",
            "adv-": "снаружи"
        }
    },
    {
        "id": 343,
        "en": "large",
        "sound": "[lRG]",
        "ru": {
            "a-": "большой, крупный"
        }
    },
    {
        "id": 344,
        "en": "change",
        "sound": "[CeInG]",
        "ru": {
            "n-": "изменение, перемена;",
            "v-": "менять(ся), изменять(ся)"
        }
    },
    {
        "id": 345,
        "en": "push",
        "sound": "[puS]",
        "ru": {
            "n-": "толчок;",
            "v-": "толкать(ся); нажимать"
        }
    },
    {
        "id": 346,
        "en": "sorry",
        "sound": "['sOrI]",
        "ru": {
            "a-": "сожалеющий"
        }
    },
    {
        "id": 347,
        "en": "bad",
        "sound": "[bxd]",
        "ru": {
            "a-": "плохой"
        }
    },
    {
        "id": 348,
        "en": "top",
        "sound": "[tOp]",
        "ru": {
            "n-": "верх;",
            "a-": "верхний"
        }
    },
    {
        "id": 349,
        "en": "chair",
        "sound": "[CFq]",
        "ru": {
            "n-": "стул, кресло"
        }
    },
    {
        "id": 350,
        "en": "finger",
        "sound": "['fINgq]",
        "ru": {
            "n-": "палец"
        }
    },
    {
        "id": 351,
        "en": "lead",
        "sound": "[lJd]",
        "ru": {
            "v-": "(led; led) вести"
        }
    },
    {
        "id": 352,
        "en": "scream",
        "sound": "[skrJm]",
        "ru": {
            "n-": "крик, вопль;",
            "v-": "кричать, вопить"
        }
    },
    {
        "id": 353,
        "en": "ground",
        "sound": "[graund]",
        "ru": {
            "n-": "земля"
        }
    },
    {
        "id": 354,
        "en": "already",
        "sound": "[Ll'redI]",
        "ru": {
            "adv-": "уже"
        }
    },
    {
        "id": 355,
        "en": "forward",
        "sound": "['fLwqd]",
        "ru": {
            "adv-": "вперед;",
            "a-": "передний"
        }
    },
    {
        "id": 356,
        "en": "figure",
        "sound": "['fIgq]",
        "ru": {
            "n-": "фигура; цифра;",
            "v-": "вычислять; понимать"
        }
    },
    {
        "id": 357,
        "en": "touch",
        "sound": "[tAC]",
        "ru": {
            "n-": "прикосновение;",
            "v-": "трогать, касаться"
        }
    },
    {
        "id": 358,
        "en": "become",
        "sound": "[bI'kAm]",
        "ru": {
            "v-": "становиться, делаться"
        },
        "irregular": "became [bI'keIm]; become"
    },
    {
        "id": 359,
        "en": "yet",
        "sound": "[jet]",
        "ru": {
            "adv-": "еще;",
            "cj-": "однако"
        }
    },
    {
        "id": 360,
        "en": "also",
        "sound": "['Llsou]",
        "ru": {
            "adv-": "также"
        }
    },
    {
        "id": 361,
        "en": "desk",
        "sound": "[desk]",
        "ru": {
            "n-": "письменный. стол"
        }
    },
    {
        "id": 362,
        "en": "clear",
        "sound": "[klIq]",
        "ru": {
            "v-": "очищать;",
            "a-": "чистый"
        }
    },
    {
        "id": 363,
        "en": "real",
        "sound": "[rIql]",
        "ru": {
            "a-": "действительный"
        }
    },
    {
        "id": 364,
        "en": "carry",
        "sound": "['kxrI]",
        "ru": {
            "v-": "нести; везти"
        }
    },
    {
        "id": 365,
        "en": "sleep",
        "sound": "[slJp]",
        "ru": {
            "v-": "(slept; slept) спать"
        }
    },
    {
        "id": 366,
        "en": "glance",
        "sound": "[glRns]",
        "ru": {
            "n-": "(быстрый) взгляд;",
            "v-": "(мельком) взглянуть"
        }
    },
    {
        "id": 367,
        "en": "seat",
        "sound": "[sJt]",
        "ru": {
            "n-": "сиденье; место;",
            "v-": "усаживать; вмещать"
        }
    },
    {
        "id": 368,
        "en": "matter",
        "sound": "['mxtq]",
        "ru": {
            "n-": "дело, вопрос;",
            "v-": "иметь значение"
        }
    },
    {
        "id": 369,
        "en": "number",
        "sound": "['nAmbq]",
        "ru": {
            "n-": "число"
        }
    },
    {
        "id": 370,
        "en": "ship",
        "sound": "[SIp]",
        "ru": {
            "n-": "корабль, судно"
        }
    },
    {
        "id": 371,
        "en": "full",
        "sound": "[ful]",
        "ru": {
            "a-": "полный"
        }
    },
    {
        "id": 372,
        "en": "police",
        "sound": "[pq'lJs]",
        "ru": {
            "n-": "полиция"
        }
    },
    {
        "id": 373,
        "en": "twenty",
        "sound": "['twentI]",
        "ru": {
            "num-": "двадцать"
        }
    },
    {
        "id": 374,
        "en": "send",
        "sound": "[send]",
        "ru": {
            "v-": "(sent; sent) посылать; отправлять; присылать"
        }
    },
    {
        "id": 375,
        "en": "gonna",
        "sound": "['gOnq]",
        "ru": {
            "noPart": "сокр. = going to– собираться что-либо сделать"
        }
    },
    {
        "id": 376,
        "en": "together",
        "sound": "[tq'geDq]",
        "ru": {
            "adv-": "вместе"
        }
    },
    {
        "id": 377,
        "en": "ten",
        "sound": "[ten]",
        "ru": {
            "num-": "десять"
        }
    },
    {
        "id": 378,
        "en": "roll",
        "sound": "[roul]",
        "ru": {
            "n-": "рулон; раскат;",
            "v-": "катить(ся); грохотать; качать(ся)"
        }
    },
    {
        "id": 379,
        "en": "return",
        "sound": "[rI'tWn]",
        "ru": {
            "n-": "возврат;",
            "a-": "ответный;",
            "v-": "возвращать(ся); отвечать"
        }
    },
    {
        "id": 380,
        "en": "such",
        "sound": "[sAC]",
        "ru": {
            "a-": "такой"
        }
    },
    {
        "id": 381,
        "en": "near",
        "sound": "[nIq]",
        "ru": {
            "a-": "ближний;",
            "adv-": "близко;",
            "prep-": "около;",
            "v-": "приближаться"
        }
    },
    {
        "id": 382,
        "en": "miss",
        "sound": "[mIs]",
        "ru": {
            "v-": "промахнуться;",
            "n-": "промах; Miss- мисс (дев. или незамужн. ж.)"
        }
    },
    {
        "id": 383,
        "en": "pay",
        "sound": "[peI]",
        "ru": {
            "v-": "платить;",
            "n-": "плата"
        },
        "irregular": "paid; paid [peId]"
    },
    {
        "id": 384,
        "en": "paper",
        "sound": "['peIpq]",
        "ru": {
            "n-": "бумага; газета"
        }
    },
    {
        "id": 385,
        "en": "rest",
        "sound": "[rest]",
        "ru": {
            "v-": "отдыхать; лежать;",
            "n-": "покой, отдых; the ~ остаток"
        }
    },
    {
        "id": 386,
        "en": "appear",
        "sound": "[q'pIq]",
        "ru": {
            "v-": "появляться"
        }
    },
    {
        "id": 387,
        "en": "park",
        "sound": "[pRk]",
        "ru": {
            "n-": "парк"
        }
    },
    {
        "id": 388,
        "en": "above",
        "sound": "[q'bAv]",
        "ru": {
            "prep-": "над; свыше;",
            "adv-": "наверху, выше"
        }
    },
    {
        "id": 389,
        "en": "onto",
        "sound": "['Ontu]",
        "ru": {
            "prep-": "на"
        }
    },
    {
        "id": 390,
        "en": "control",
        "sound": "[kqn'troul]",
        "ru": {
            "n-": "управление, контроль;",
            "v-": "управлять"
        }
    },
    {
        "id": 391,
        "en": "fly",
        "sound": "[flaI]",
        "ru": {
            "v-": "лететь, летать; мчаться; 2)",
            "n-": "муха"
        },
        "irregular": "flew [flH]; flown [floun]"
    },
    {
        "id": 392,
        "en": "pause",
        "sound": "[pLz]",
        "ru": {
            "n-": "пауза, перерыв;",
            "v-": "делать паузу, перерыв"
        }
    },
    {
        "id": 393,
        "en": "road",
        "sound": "[roud]",
        "ru": {
            "n-": "дорога; путь"
        }
    },
    {
        "id": 394,
        "en": "probably",
        "sound": "['prObqblI]",
        "ru": {
            "adv-": "вероятно"
        }
    },
    {
        "id": 395,
        "en": "finally",
        "sound": "['faInlI]",
        "ru": {
            "adv-": "в заключение"
        }
    },
    {
        "id": 396,
        "en": "guard",
        "sound": "[gRd]",
        "ru": {
            "n-": "стража, охрана; часовой;",
            "v-": "охранять; защищать"
        }
    },
    {
        "id": 397,
        "en": "draw",
        "sound": "[drL]",
        "ru": {
            "v-": "1) тащить, тянуть; 2) чертить, рисовать"
        },
        "irregular": "drew [drH]; drawn [drLn]"
    },
    {
        "id": 398,
        "en": "city",
        "sound": "['sItI]",
        "ru": {
            "n-": "город"
        }
    },
    {
        "id": 399,
        "en": "deep",
        "sound": "[dJp]",
        "ru": {
            "a-": "глубокий;"
        }
    },
    {
        "id": 400,
        "en": "job",
        "sound": "[GOb]",
        "ru": {
            "n-": "работа; дело"
        }
    },
    {
        "id": 401,
        "en": "ring",
        "sound": "[rIN]",
        "ru": {
            "v-": "звонить, звенеть;",
            "n-": "кольцо; круг"
        },
        "irregular": "rang [rxN]; rung [rAN]"
    },
    {
        "id": 402,
        "en": "fight",
        "sound": "[faIt]",
        "ru": {
            "n-": "бой; драка;",
            "v-": "бороться, сражаться"
        },
        "irregular": "fought; fought [fLt]"
    },
    {
        "id": 403,
        "en": "leg",
        "sound": "[leg]",
        "ru": {
            "n-": "нога; ножка"
        }
    },
    {
        "id": 404,
        "en": "wonder",
        "sound": "['wAndq]",
        "ru": {
            "n-": "удивление;",
            "v-": "удивляться; интересоваться"
        }
    },
    {
        "id": 405,
        "en": "lean",
        "sound": "[lJn]",
        "ru": {
            "v-": "прислонять(ся); наклонять(ся); 2)",
            "a-": "тощий, худой"
        }
    },
    {
        "id": 406,
        "en": "since",
        "sound": "[sIns]",
        "ru": {
            "prep-": "с;",
            "adv-": "с тех пор;",
            "cj-": "с тех пор как"
        }
    },
    {
        "id": 407,
        "en": "hope",
        "sound": "[houp]",
        "ru": {
            "n-": "надежда;",
            "v-": "надеяться"
        }
    },
    {
        "id": 408,
        "en": "left",
        "sound": "[left]",
        "ru": {
            "a-": "левый;",
            "adv-": "налево"
        }
    },
    {
        "id": 409,
        "en": "sign",
        "sound": "[saIn]",
        "ru": {
            "n-": "знак;",
            "v-": "подписывать(ся)"
        }
    },
    {
        "id": 410,
        "en": "cross",
        "sound": "[krOs]",
        "ru": {
            "n-": "крест;",
            "v-": "пересекать; переходить; скрещивать"
        }
    },
    {
        "id": 411,
        "en": "suppose",
        "sound": "[sq'pouz]",
        "ru": {
            "v-": "предполагать"
        }
    },
    {
        "id": 412,
        "en": "order",
        "sound": "['Ldq]",
        "ru": {
            "n-": "порядок; приказ; заказ;",
            "v-": "приказывать; заказывать"
        }
    },
    {
        "id": 413,
        "en": "eat",
        "sound": "[Jt]",
        "ru": {
            "v-": "есть"
        },
        "irregular": "ate [et]; eaten ['Jtn]"
    },
    {
        "id": 414,
        "en": "corner",
        "sound": "['kLnq]",
        "ru": {
            "n-": "угол"
        }
    },
    {
        "id": 415,
        "en": "wrong",
        "sound": "[rON]",
        "ru": {
            "a-": "неправильный; не тот;",
            "adv-": "неправильно, неверно"
        }
    },
    {
        "id": 416,
        "en": "tear",
        "sound": "1) [tFq]",
        "ru": {
            "v-": "рвать(ся);",
            "n-": "слеза"
        },
        "irregular": "tore [tL]; torn [tLn]"
    },
    {
        "id": 417,
        "en": "shit",
        "sound": "[SIt]",
        "ru": {
            "n-": "дерьмо;",
            "v-": "гадить"
        }
    },
    {
        "id": 418,
        "en": "six",
        "sound": "[sIks]",
        "ru": {
            "num-": "шесть"
        }
    },
    {
        "id": 419,
        "en": "soon",
        "sound": "[sHn]",
        "ru": {
            "adv-": "скоро, вскоре"
        }
    },
    {
        "id": 420,
        "en": "fast",
        "sound": "[fRst]",
        "ru": {
            "a-": "быстрый; прочный;",
            "adv-": "быстро; прочно"
        }
    },
    {
        "id": 421,
        "en": "bill",
        "sound": "[bIl]",
        "ru": {
            "n-": "счет; банкнота"
        }
    },
    {
        "id": 422,
        "en": "quickly",
        "sound": "['kwIklI]",
        "ru": {
            "adv-": "быстро"
        }
    },
    {
        "id": 423,
        "en": "shadow",
        "sound": "['Sxdou]",
        "ru": {
            "n-": "тень"
        }
    },
    {
        "id": 424,
        "en": "wife",
        "sound": "[waIf]",
        "ru": {
            "n-": "жена"
        }
    },
    {
        "id": 425,
        "en": "dress",
        "sound": "[dres]",
        "ru": {
            "n-": "платье, одежда;",
            "v-": "одевать(ся)"
        }
    },
    {
        "id": 426,
        "en": "damn",
        "sound": "[dxm]",
        "ru": {
            "n-": "проклятие;",
            "v-": "проклинать; в знач. междомет.: черт!"
        }
    },
    {
        "id": 427,
        "en": "guess",
        "sound": "[ges]",
        "ru": {
            "v-": "думать, полагать"
        }
    },
    {
        "id": 428,
        "en": "myself",
        "sound": "[maI'self]",
        "ru": {
            "pron-": "себя; сам"
        }
    },
    {
        "id": 429,
        "en": "care",
        "sound": "[kFq]",
        "ru": {
            "n-": "забота;v-заботиться"
        }
    },
    {
        "id": 430,
        "en": "raise",
        "sound": "[reIz]",
        "ru": {
            "v-": "поднимать"
        }
    },
    {
        "id": 431,
        "en": "mile",
        "sound": "[maIl]",
        "ru": {
            "n-": "миля (сухопутн. м. =1609м; морск. м. =1853м)"
        }
    },
    {
        "id": 432,
        "en": "land",
        "sound": "[lxnd]",
        "ru": {
            "n-": "земля; почва; страна;",
            "v-": "приземляться; высаживаться"
        }
    },
    {
        "id": 433,
        "en": "perhaps",
        "sound": "[pq'hxps]",
        "ru": {
            "adv-": "может быть, возможно"
        }
    },
    {
        "id": 434,
        "en": "bar",
        "sound": "[bR]",
        "ru": {
            "n-": "засов; преграда; решетка"
        }
    },
    {
        "id": 435,
        "en": "blue",
        "sound": "[blH]",
        "ru": {
            "a-": "синий, голубой"
        }
    },
    {
        "id": 436,
        "en": "idea",
        "sound": "[aI'dIq]",
        "ru": {
            "n-": "идея, мысль"
        }
    },
    {
        "id": 437,
        "en": "death",
        "sound": "[deT]",
        "ru": {
            "n-": "смерть"
        }
    },
    {
        "id": 438,
        "en": "alone",
        "sound": "[q'loun]",
        "ru": {
            "a-": "один, одинокий"
        }
    },
    {
        "id": 439,
        "en": "best",
        "sound": "[best]",
        "ru": {
            "a-": "(наи)лучший;",
            "adv-": "лучше всего; больше всего"
        }
    },
    {
        "id": 440,
        "en": "dad,",
        "sound": "daddy [dxd,'dxdI]",
        "ru": {
            "n-": "папа"
        }
    },
    {
        "id": 441,
        "en": "whole",
        "sound": "[houl]",
        "ru": {
            "a-": "весь, целый"
        }
    },
    {
        "id": 442,
        "en": "tree",
        "sound": "[trJ]",
        "ru": {
            "n-": "дерево"
        }
    },
    {
        "id": 443,
        "en": "force",
        "sound": "[fLs]",
        "ru": {
            "n-": "сила; насилие; ~s войска;",
            "v-": "заставлять, принуждать"
        }
    },
    {
        "id": 444,
        "en": "fill",
        "sound": "[fIl]",
        "ru": {
            "v-": "наполнять(ся)"
        }
    },
    {
        "id": 445,
        "en": "crowd",
        "sound": "[kraud]",
        "ru": {
            "n-": "толпа;",
            "v-": "толпиться; набиваться битком"
        }
    },
    {
        "id": 446,
        "en": "shut",
        "sound": "[SAt]",
        "ru": {
            "v-": "(shut; shut) закрывать(ся); перекрывать; запирать"
        }
    },
    {
        "id": 447,
        "en": "business",
        "sound": "['bIznIs]",
        "ru": {
            "n-": "дело, занятие"
        }
    },
    {
        "id": 448,
        "en": "blow",
        "sound": "[blou]",
        "ru": {
            "v-": "дуть; раздувать; 2)",
            "n-": "удар"
        },
        "irregular": "blew [blH]; blown [bloun]"
    },
    {
        "id": 449,
        "en": "cry",
        "sound": "[kraI]",
        "ru": {
            "n-": "крик;",
            "v-": "кричать"
        }
    },
    {
        "id": 450,
        "en": "write",
        "sound": "[raIt]",
        "ru": {
            "v-": "писать"
        },
        "irregular": "wrote [rout]; written ['rItn]"
    },
    {
        "id": 451,
        "en": "notice",
        "sound": "['noutIs]",
        "ru": {
            "n-": "извещение; внимание;",
            "v-": "обращать внимание"
        }
    },
    {
        "id": 452,
        "en": "fine",
        "sound": "[faIn]",
        "ru": {
            "a-": "прекрасный; ясный"
        }
    },
    {
        "id": 453,
        "en": "quite",
        "sound": "[kwaIt]",
        "ru": {
            "adv-": "вполне, совсем"
        }
    },
    {
        "id": 454,
        "en": "power",
        "sound": "['pauq]",
        "ru": {
            "n-": "сила, энергия"
        }
    },
    {
        "id": 455,
        "en": "fact",
        "sound": "[fxkt]",
        "ru": {
            "n-": "факт"
        }
    },
    {
        "id": 456,
        "en": "pretty",
        "sound": "['prItI]",
        "ru": {
            "a-": "хорошенький"
        }
    },
    {
        "id": 457,
        "en": "week",
        "sound": "[wJk]",
        "ru": {
            "n-": "неделя"
        }
    },
    {
        "id": 458,
        "en": "nice",
        "sound": "[naIs]",
        "ru": {
            "a-": "хороший; милый"
        }
    },
    {
        "id": 459,
        "en": "lock",
        "sound": "[lOk]",
        "ru": {
            "n-": "замок;",
            "v-": "запирать"
        }
    },
    {
        "id": 460,
        "en": "story",
        "sound": "['stLrI]",
        "ru": {
            "n-": "повесть, рассказ"
        }
    },
    {
        "id": 461,
        "en": "dog",
        "sound": "[dOg]",
        "ru": {
            "n-": "собака"
        }
    },
    {
        "id": 462,
        "en": "least",
        "sound": "[lJst]",
        "ru": {
            "a-": "наименьший;",
            "adv-": "наименее; n: the ~ самое меньшее"
        }
    },
    {
        "id": 463,
        "en": "empty",
        "sound": "['emptI]",
        "ru": {
            "a-": "пустой"
        }
    },
    {
        "id": 464,
        "en": "everyone",
        "sound": "['evrIwAn]",
        "ru": {
            "pron-": "каждый"
        }
    },
    {
        "id": 465,
        "en": "wave",
        "sound": "[weIv]",
        "ru": {
            "n-": "волна; взмах (рукой);",
            "v-": "махать (рукой); развеваться"
        }
    },
    {
        "id": 466,
        "en": "several",
        "sound": "['sevrel]",
        "ru": {
            "a-": "несколько"
        }
    },
    {
        "id": 467,
        "en": "silence",
        "sound": "['saIlqns]",
        "ru": {
            "n-": "молчание"
        }
    },
    {
        "id": 468,
        "en": "short",
        "sound": "[SLt]",
        "ru": {
            "a-": "короткий"
        }
    },
    {
        "id": 469,
        "en": "cold",
        "sound": "[kould]",
        "ru": {
            "a-": "холодный"
        }
    },
    {
        "id": 470,
        "en": "problem",
        "sound": "['prOblqm]",
        "ru": {
            "n-": "проблема"
        }
    },
    {
        "id": 471,
        "en": "fucking",
        "sound": "[fAkIN]",
        "ru": {
            "a-": "чертов, долбаный, траханный и т.п."
        }
    },
    {
        "id": 472,
        "en": "cop",
        "sound": "[kOp]",
        "ru": {
            "n-": "полицейский"
        }
    },
    {
        "id": 473,
        "en": "thousand",
        "sound": "['Tauznd]",
        "ru": {
            "num-": "тысяча"
        }
    },
    {
        "id": 474,
        "en": "approach",
        "sound": "[q'prouC]",
        "ru": {
            "n-": "приближение;",
            "v-": "приближаться (к)"
        }
    },
    {
        "id": 475,
        "en": "realize",
        "sound": "['rIqlaIz]",
        "ru": {
            "v-": "представлять себе, понимать, осознавать"
        }
    },
    {
        "id": 476,
        "en": "rock",
        "sound": "[rOk]",
        "ru": {
            "n-": "камень; скала;",
            "v-": "качать(ся)"
        }
    },
    {
        "id": 477,
        "en": "piece",
        "sound": "[pJs]",
        "ru": {
            "n-": "кусок; штука"
        }
    },
    {
        "id": 478,
        "en": "wind",
        "sound": "1) [wInd]",
        "ru": {
            "n-": "ветер;запах;",
            "v-": "виться, извиваться"
        },
        "irregular": "wound; wound [waund]"
    },
    {
        "id": 479,
        "en": "box",
        "sound": "[bOks]",
        "ru": {
            "n-": "коробка, ящик"
        }
    },
    {
        "id": 480,
        "en": "either",
        "sound": "['aIDq]",
        "ru": {
            "pron-": "любой (из двух);",
            "adv-": "также (при отриц.)"
        }
    },
    {
        "id": 481,
        "en": "sort",
        "sound": "[sLt]",
        "ru": {
            "n-": "сорт, род, вид"
        }
    },
    {
        "id": 482,
        "en": "kiss",
        "sound": "[kIs]",
        "ru": {
            "n-": "поцелуй;",
            "v-": "целовать(ся)"
        }
    },
    {
        "id": 483,
        "en": "edge",
        "sound": "[eG]",
        "ru": {
            "n-": "острие, лезвие; край, кромка;",
            "v-": "точить; окаймлять"
        }
    },
    {
        "id": 484,
        "en": "interest",
        "sound": "['IntrIst]",
        "ru": {
            "n-": "интерес;",
            "v-": "(за)интересовать"
        }
    },
    {
        "id": 485,
        "en": "surprise",
        "sound": "[sq'praIz]",
        "ru": {
            "n-": "удивление; сюрприз;",
            "v-": "удивлять"
        }
    },
    {
        "id": 486,
        "en": "bit",
        "sound": "[bIt]",
        "ru": {
            "n-": "кусочек; a ~ немного"
        }
    },
    {
        "id": 487,
        "en": "forget",
        "sound": "[fq'get]",
        "ru": {
            "v-": "забывать, не помнить"
        },
        "irregular": "forgot [fq'gOt]; forgotten fq'gOtn]"
    },
    {
        "id": 488,
        "en": "stick",
        "sound": "[stIk]",
        "ru": {
            "v-": "втыкать, прикалывать; липнуть; 2)",
            "n-": "палка"
        },
        "irregular": "stuck; stuck [stAk]"
    },
    {
        "id": 489,
        "en": "heart",
        "sound": "[hRt]",
        "ru": {
            "n-": "сердце"
        }
    },
    {
        "id": 490,
        "en": "finish",
        "sound": "['fInIS]",
        "ru": {
            "n-": "окончание;",
            "v-": "заканчивать(ся), кончать(ся)"
        }
    },
    {
        "id": 491,
        "en": "fuck",
        "sound": "[fAk]",
        "ru": {
            "n-": "траханье;",
            "v-": "трахать)"
        }
    },
    {
        "id": 492,
        "en": "grow",
        "sound": "[grou]",
        "ru": {
            "v-": "расти; увеличиваться; становиться"
        },
        "irregular": "grew [grH]; grown [groun]"
    },
    {
        "id": 493,
        "en": "ago",
        "sound": "[q'gou]",
        "ru": {
            "adv-": "тому назад"
        }
    },
    {
        "id": 494,
        "en": "bag",
        "sound": "[bxg]",
        "ru": {
            "n-": "мешок, сумка"
        }
    },
    {
        "id": 495,
        "en": "sense",
        "sound": "[sens]",
        "ru": {
            "n-": "чувство, ощущение;",
            "v-": "чувствовать, осознавать"
        }
    },
    {
        "id": 496,
        "en": "picture",
        "sound": "['pIkCq]",
        "ru": {
            "n-": "картина"
        }
    },
    {
        "id": 497,
        "en": "ready",
        "sound": "['redI]",
        "ru": {
            "a-": "готовый"
        }
    },
    {
        "id": 498,
        "en": "chance",
        "sound": "[CRns]",
        "ru": {
            "n-": "случай, шанс"
        }
    },
    {
        "id": 499,
        "en": "worry",
        "sound": "['wArI]",
        "ru": {
            "v-": "беспокоить(ся"
        }
    },
    {
        "id": 500,
        "en": "ahead",
        "sound": "[q'hed]",
        "ru": {
            "adv-": "вперед; впереди"
        }
    },
    {
        "id": 501,
        "en": "couple",
        "sound": "['kApl]",
        "ru": {
            "n-": "два, пара"
        }
    },
    {
        "id": 502,
        "en": "press",
        "sound": "[pres]",
        "ru": {
            "n-": "пресса, печать; 2)",
            "v-": "нажимать, давить"
        }
    },
    {
        "id": 503,
        "en": "doctor",
        "sound": "['dOktq]",
        "ru": {
            "n-": "врач, доктор"
        }
    },
    {
        "id": 504,
        "en": "book",
        "sound": "[buk]",
        "ru": {
            "n-": "книга"
        }
    },
    {
        "id": 505,
        "en": "officer",
        "sound": "['OfIsq]",
        "ru": {
            "n-": "офицер"
        }
    },
    {
        "id": 506,
        "en": "anyone",
        "sound": "['enIwAn]",
        "ru": {
            "pron-": ""
        }
    },
    {
        "id": 507,
        "en": "son",
        "sound": "[sAn]",
        "ru": {
            "n-": "сын"
        }
    },
    {
        "id": 508,
        "en": "pocket",
        "sound": "['pOkIt]",
        "ru": {
            "n-": "карман"
        }
    },
    {
        "id": 509,
        "en": "human",
        "sound": "['hjHmqn]",
        "ru": {
            "a-": "человеческий"
        }
    },
    {
        "id": 510,
        "en": "family",
        "sound": "['fxmIlI]",
        "ru": {
            "n-": "семья"
        }
    },
    {
        "id": 511,
        "en": "safe",
        "sound": "[seIf]",
        "ru": {
            "a-": "безопасный"
        }
    },
    {
        "id": 512,
        "en": "burn",
        "sound": "[bWn]",
        "ru": {
            "v-": "жечь; гореть"
        },
        "irregular": "бр. burnt, burnt [bWnt]; ам. burned, burned [bWnd]"
    },
    {
        "id": 513,
        "en": "breath",
        "sound": "[breT]",
        "ru": {
            "n-": "дыхание; вздох"
        }
    },
    {
        "id": 514,
        "en": "early",
        "sound": "['WlI]",
        "ru": {
            "a-": "ранний;",
            "adv-": "рано"
        }
    },
    {
        "id": 515,
        "en": "jump",
        "sound": "[GAmp]",
        "ru": {
            "n-": "прыжок;",
            "v-": "прыгать"
        }
    },
    {
        "id": 516,
        "en": "lift",
        "sound": "[lIft]",
        "ru": {
            "n-": "лифт;",
            "v-": "поднимать"
        }
    },
    {
        "id": 517,
        "en": "green",
        "sound": "[grJn]",
        "ru": {
            "a-": "зеленый"
        }
    },
    {
        "id": 518,
        "en": "reason",
        "sound": "['rJzn]",
        "ru": {
            "n-": "причина; разум"
        }
    },
    {
        "id": 519,
        "en": "lay",
        "sound": "[leI]",
        "ru": {
            "v-": "(laid; laid leId]) класть, положить; (lay также и прош. вр. от lie лежать)"
        }
    },
    {
        "id": 520,
        "en": "free",
        "sound": "[frJ]",
        "ru": {
            "a-": "свободный"
        }
    },
    {
        "id": 521,
        "en": "machine",
        "sound": "[mq'SJn]",
        "ru": {
            "n-": "машина"
        }
    },
    {
        "id": 522,
        "en": "beside",
        "sound": "[bI'saId]",
        "ru": {
            "prep-": "рядом с; около"
        }
    },
    {
        "id": 523,
        "en": "stuff",
        "sound": "[stAf]",
        "ru": {
            "n-": "все, что угодно: вещь, штука, барахло и т.п."
        }
    },
    {
        "id": 524,
        "en": "wide",
        "sound": "[waId]",
        "ru": {
            "a-": "широкий;",
            "adv-": "широко"
        }
    },
    {
        "id": 525,
        "en": "round",
        "sound": "[raund]",
        "ru": {
            "a-": "круглый;",
            "n-": "круг;",
            "v-": "огибать;",
            "adv-": "вокруг;",
            "prep-": "вокруг"
        }
    },
    {
        "id": 526,
        "en": "expect",
        "sound": "[Ik'spekt]",
        "ru": {
            "v-": "ожидать"
        }
    },
    {
        "id": 527,
        "en": "neck",
        "sound": "[nek]",
        "ru": {
            "n-": "шея; горлышко(бут.)"
        }
    },
    {
        "id": 528,
        "en": "careful",
        "sound": "['kFqfl]",
        "ru": {
            "a-": "осторожный; внимательный"
        }
    },
    {
        "id": 529,
        "en": "lip",
        "sound": "[lIp]",
        "ru": {
            "n-": "губа"
        }
    },
    {
        "id": 530,
        "en": "school",
        "sound": "[skHl]",
        "ru": {
            "n-": "школа"
        }
    },
    {
        "id": 531,
        "en": "hide",
        "sound": "[haId]",
        "ru": {
            "v-": "прятать(ся); скрывать(ся);",
            "n-": "шкура"
        },
        "irregular": "hid; hidden [hIdn]"
    },
    {
        "id": 532,
        "en": "deal",
        "sound": "[dJl]",
        "ru": {
            "n-": "(некоторое) количество; доля; сделка, соглашение; реже",
            "v-": "распределять, выдавать"
        },
        "irregular": "dealt; dealt [delt]"
    },
    {
        "id": 533,
        "en": "whisper",
        "sound": "['wIspq]",
        "ru": {
            "n-": "шепот;",
            "v-": "шептать"
        }
    },
    {
        "id": 534,
        "en": "space",
        "sound": "[speIs]",
        "ru": {
            "n-": "пространство, место; расстояние; космос"
        }
    },
    {
        "id": 535,
        "en": "herself",
        "sound": "[hW'self]",
        "ru": {
            "pron-": "себя; сама"
        }
    },
    {
        "id": 536,
        "en": "baby",
        "sound": "['beIbI]",
        "ru": {
            "n-": "ребенок; малыш"
        }
    },
    {
        "id": 537,
        "en": "climb",
        "sound": "[klaIm]",
        "ru": {
            "v-": "подниматься(на)"
        }
    },
    {
        "id": 538,
        "en": "easy",
        "sound": "['JzI]",
        "ru": {
            "a-": "легкий;",
            "adv-": "легко"
        }
    },
    {
        "id": 539,
        "en": "plan",
        "sound": "[plxn]",
        "ru": {
            "n-": "план;"
        }
    },
    {
        "id": 540,
        "en": "yourself",
        "sound": "[jL'self]",
        "ru": {
            "pron-": "себя; сам"
        }
    },
    {
        "id": 541,
        "en": "trouble",
        "sound": "['trAbl]",
        "ru": {
            "n-": "заботы, беспокойство;",
            "v-": "беспокоить(ся)"
        }
    },
    {
        "id": 542,
        "en": "slide",
        "sound": "[slaId]",
        "ru": {
            "v-": "(slid; slid) скользить, поскользнуться;",
            "n-": "скольжение"
        }
    },
    {
        "id": 543,
        "en": "thirty",
        "sound": "['TWtI]",
        "ru": {
            "num-": "тридцать"
        }
    },
    {
        "id": 544,
        "en": "train",
        "sound": "[treIn]",
        "ru": {
            "n-": "поезд; 2)",
            "v-": "воспитывать; тренировать(ся)"
        }
    },
    {
        "id": 545,
        "en": "low",
        "sound": "[lou]",
        "ru": {
            "a-": "низкий;",
            "adv-": "низко"
        }
    },
    {
        "id": 546,
        "en": "key",
        "sound": "[kJ]",
        "ru": {
            "n-": "ключ"
        }
    },
    {
        "id": 547,
        "en": "different",
        "sound": "['dIfrqnt]",
        "ru": {
            "a-": "различный"
        }
    },
    {
        "id": 548,
        "en": "swing",
        "sound": "[swIN]",
        "ru": {
            "v-": "качать(ся;",
            "n-": "колебание; размах"
        },
        "irregular": "swung; swung [swAN]"
    },
    {
        "id": 549,
        "en": "coffee",
        "sound": "['kOfI]",
        "ru": {
            "n-": "кофе"
        }
    },
    {
        "id": 550,
        "en": "radio",
        "sound": "['reIdIou]",
        "ru": {
            "n-": "радио"
        }
    },
    {
        "id": 551,
        "en": "hotel",
        "sound": "[hou'tel]",
        "ru": {
            "n-": "гостиница,"
        }
    },
    {
        "id": 552,
        "en": "anyway",
        "sound": "['enIweI]",
        "ru": {
            "adv-": "в любом случае"
        }
    },
    {
        "id": 553,
        "en": "shout",
        "sound": "[Saut]",
        "ru": {
            "n-": "крик;",
            "v-": "кричать"
        }
    },
    {
        "id": 554,
        "en": "state",
        "sound": "[steIt]",
        "ru": {
            "n-": "состояние;",
            "a-": "государственный; 2)",
            "v-": "излагать"
        }
    },
    {
        "id": 555,
        "en": "study",
        "sound": "['stAdI]",
        "ru": {
            "n-": "изучение; обучение, занятия;",
            "v-": "учить(ся)"
        }
    },
    {
        "id": 556,
        "en": "foot",
        "sound": "[fut]",
        "ru": {
            "n-": "1) ступня, нога; 2) подножие; 3) фут =30,48 см"
        }
    },
    {
        "id": 557,
        "en": "slow",
        "sound": "[slou]",
        "ru": {
            "a-": "медленный;",
            "v-": "замедлять(ся)"
        }
    },
    {
        "id": 558,
        "en": "station",
        "sound": "['steISn]",
        "ru": {
            "n-": "станция; вокзал"
        }
    },
    {
        "id": 559,
        "en": "brother",
        "sound": "['brADq]",
        "ru": {
            "n-": "брат"
        }
    },
    {
        "id": 560,
        "en": "hurt",
        "sound": "[hWt]",
        "ru": {
            "v-": "(hurt; hurt) ушибить; болеть, причинять боль"
        }
    },
    {
        "id": 561,
        "en": "game",
        "sound": "[geIm]",
        "ru": {
            "n-": "игра"
        }
    },
    {
        "id": 562,
        "en": "heavy",
        "sound": "['hevI]",
        "ru": {
            "a-": "тяжелый"
        }
    },
    {
        "id": 563,
        "en": "lady",
        "sound": "['leIdI]",
        "ru": {
            "n-": "дама; госпожа"
        }
    },
    {
        "id": 564,
        "en": "below",
        "sound": "[bI'lou]",
        "ru": {
            "prep-": "ниже, под;",
            "adv-": "внизу"
        }
    },
    {
        "id": 565,
        "en": "kitchen",
        "sound": "['kICIn]",
        "ru": {
            "n-": "кухня"
        }
    },
    {
        "id": 566,
        "en": "buy",
        "sound": "[baI]",
        "ru": {
            "v-": "покупать"
        },
        "irregular": "bought; bought [bLt]"
    },
    {
        "id": 567,
        "en": "area",
        "sound": "['FqrIq]",
        "ru": {
            "n-": "площадь; район"
        }
    },
    {
        "id": 568,
        "en": "knock",
        "sound": "[nOk]",
        "ru": {
            "n-": "стук; удар;",
            "v-": "стучать(ся); бить"
        }
    },
    {
        "id": 569,
        "en": "star",
        "sound": "[stR]",
        "ru": {
            "n-": "звезда"
        }
    },
    {
        "id": 570,
        "en": "decide",
        "sound": "[dI'saId]",
        "ru": {
            "v-": "решать(ся)"
        }
    },
    {
        "id": 571,
        "en": "view",
        "sound": "[vjH]",
        "ru": {
            "n-": "вид; взгляд, мнение"
        }
    },
    {
        "id": 572,
        "en": "flash",
        "sound": "[flxS]",
        "ru": {
            "n-": "вспышка;",
            "v-": "вспыхивать"
        }
    },
    {
        "id": 573,
        "en": "sun",
        "sound": "[sAn]",
        "ru": {
            "n-": "солнце"
        }
    },
    {
        "id": 574,
        "en": "month",
        "sound": "[mAnT]",
        "ru": {
            "n-": "месяц"
        }
    },
    {
        "id": 575,
        "en": "straight",
        "sound": "[streIt]",
        "ru": {
            "a-": "прямой; честный;",
            "adv-": "прямо; немедленно"
        }
    },
    {
        "id": 576,
        "en": "truck",
        "sound": "[trAk]",
        "ru": {
            "n-": "грузовик"
        }
    },
    {
        "id": 577,
        "en": "shirt",
        "sound": "[SWt]",
        "ru": {
            "n-": "рубашка (мужская)"
        }
    },
    {
        "id": 578,
        "en": "remain",
        "sound": "[rI'meIn]",
        "ru": {
            "v-": "оставаться"
        }
    },
    {
        "id": 579,
        "en": "whatever",
        "sound": "[wOt'evq]",
        "ru": {
            "a-": "любой;",
            "pron-": "все, что; (в отриц. предл.) вообще не"
        }
    },
    {
        "id": 580,
        "en": "sky",
        "sound": "[skaI]",
        "ru": {
            "n-": "небо"
        }
    },
    {
        "id": 581,
        "en": "suit",
        "sound": "[sjHt]",
        "ru": {
            "v-": "удовлетворять требованиям; годиться;",
            "n-": "костюм"
        }
    },
    {
        "id": 582,
        "en": "hot",
        "sound": "[hOt]",
        "ru": {
            "a-": "горячий, жаркий"
        }
    },
    {
        "id": 583,
        "en": "boat",
        "sound": "[bout]",
        "ru": {
            "n-": "лодка; судно"
        }
    },
    {
        "id": 584,
        "en": "ride",
        "sound": "[raId]",
        "ru": {
            "v-": "ехать (верхом, в машине);",
            "n-": "поездка"
        },
        "irregular": "rode [roud]; ridden [rIdn]"
    },
    {
        "id": 585,
        "en": "fear",
        "sound": "[fIq]",
        "ru": {
            "n-": "страх;",
            "v-": "бояться"
        }
    },
    {
        "id": 586,
        "en": "pain",
        "sound": "[peIn]",
        "ru": {
            "n-": "боль; страдание"
        }
    },
    {
        "id": 587,
        "en": "note",
        "sound": "[nout]",
        "ru": {
            "n-": "заметка; записка; банкнота;",
            "v-": "отмечать; замечать"
        }
    },
    {
        "id": 588,
        "en": "sight",
        "sound": "[saIt]",
        "ru": {
            "n-": "зрение; вид; взгляд"
        }
    },
    {
        "id": 589,
        "en": "wish",
        "sound": "[wIS]",
        "ru": {
            "n-": "желание;",
            "v-": "желать"
        }
    },
    {
        "id": 590,
        "en": "slip",
        "sound": "[slIp]",
        "ru": {
            "n-": "скольжение; ошибка;",
            "v-": "скользить; поскользнуться"
        }
    },
    {
        "id": 591,
        "en": "hall",
        "sound": "[hLl]",
        "ru": {
            "n-": "зал; передняя; холл"
        }
    },
    {
        "id": 592,
        "en": "actually",
        "sound": "['xkCuelI]",
        "ru": {
            "adv-": "фактически, на самом деле"
        }
    },
    {
        "id": 593,
        "en": "group",
        "sound": "[grHp]",
        "ru": {
            "n-": "группа"
        }
    },
    {
        "id": 594,
        "en": "learn",
        "sound": "[lWn]",
        "ru": {
            "v-": "учить(ся), изучать; узнавать"
        },
        "irregular": "бр. learnt, learnt [lWnt], ам. learned, learned [lWnd]"
    },
    {
        "id": 595,
        "en": "race",
        "sound": "[reIs]",
        "ru": {
            "n-": "гонки;",
            "v-": "мчаться; гнать"
        }
    },
    {
        "id": 596,
        "en": "dollar",
        "sound": "['dOlq]",
        "ru": {
            "n-": "доллар"
        }
    },
    {
        "id": 597,
        "en": "true",
        "sound": "[trH]",
        "ru": {
            "a-": "правдивый; верный"
        }
    },
    {
        "id": 598,
        "en": "children",
        "sound": "['CIldrqn]",
        "ru": {
            "n-": "дети"
        }
    },
    {
        "id": 599,
        "en": "shot",
        "sound": "[SOt]",
        "ru": {
            "n-": "выстрел"
        }
    },
    {
        "id": 600,
        "en": "afraid",
        "sound": "[q'freId]",
        "ru": {
            "a-": "испуганный"
        }
    },
    {
        "id": 601,
        "en": "except",
        "sound": "[Ik'sept]",
        "ru": {
            "prep-": "кроме"
        }
    },
    {
        "id": 602,
        "en": "grin",
        "sound": "[grIn]",
        "ru": {
            "n-": "усмешка;",
            "v-": "ухмыляться"
        }
    },
    {
        "id": 603,
        "en": "cause",
        "sound": "[kLz]",
        "ru": {
            "n-": "причина;",
            "v-": "быть причиной, причинять"
        }
    },
    {
        "id": 604,
        "en": "exactly",
        "sound": "[Ig'zxktlI]",
        "ru": {
            "adv-": "точно"
        }
    },
    {
        "id": 605,
        "en": "mark",
        "sound": "[mRk]",
        "ru": {
            "n-": "знак; оценка, балл;",
            "v-": "ставить знак, отметку"
        }
    },
    {
        "id": 606,
        "en": "stone",
        "sound": "[stoun]",
        "ru": {
            "n-": "камень;",
            "a-": "каменный"
        }
    },
    {
        "id": 607,
        "en": "computer",
        "sound": "[kqm'pjHtq]",
        "ru": {
            "n-": "компьютер"
        }
    },
    {
        "id": 608,
        "en": "huge",
        "sound": "[hjHG]",
        "ru": {
            "a-": "огромный"
        }
    },
    {
        "id": 609,
        "en": "less",
        "sound": "[les]",
        "ru": {
            "a-": "меньший;",
            "adv-": "менее"
        }
    },
    {
        "id": 610,
        "en": "explain",
        "sound": "[Ik'spleIn]",
        "ru": {
            "v-": "объяснять"
        }
    },
    {
        "id": 611,
        "en": "spot",
        "sound": "[spOt]",
        "ru": {
            "n-": "пятно; место;",
            "v-": "пятнать; узнавать, отмечать"
        }
    },
    {
        "id": 612,
        "en": "upon",
        "sound": "[q'pOn]",
        "ru": {
            "noPart": "prep = on – на"
        }
    },
    {
        "id": 613,
        "en": "reply",
        "sound": "[rI'plaI]",
        "ru": {
            "n-": "ответ;",
            "v-": "отвечать"
        }
    },
    {
        "id": 614,
        "en": "clean",
        "sound": "[klJn]",
        "ru": {
            "a-": "чистый;",
            "v-": "чистить"
        }
    },
    {
        "id": 615,
        "en": "centre",
        "sound": "бр. = center ам. (1:10) ['sentq]",
        "ru": {
            "n-": "центр"
        }
    },
    {
        "id": 616,
        "en": "corridor",
        "sound": "['kOrIdL]",
        "ru": {
            "n-": "коридор"
        }
    },
    {
        "id": 617,
        "en": "chest",
        "sound": "[Cest]",
        "ru": {
            "n-": "грудная клетка"
        }
    },
    {
        "id": 618,
        "en": "ear",
        "sound": "[Iq]",
        "ru": {
            "n-": "ухо"
        }
    },
    {
        "id": 619,
        "en": "report",
        "sound": "[rI'pLt]",
        "ru": {
            "n-": "доклад, сообщение;",
            "v-": "докладывать, сообщать"
        }
    },
    {
        "id": 620,
        "en": "dream",
        "sound": "[drJm]",
        "ru": {
            "v-": "видеть во сне;",
            "n-": "мечта"
        },
        "irregular": "бр. dreamt, dreamt [dremt]; ам. dreamed, dreamed [drJmd]"
    },
    {
        "id": 621,
        "en": "living",
        "sound": "['lIvIN]",
        "ru": {
            "n-": "жизнь;",
            "a-": "живой"
        }
    },
    {
        "id": 622,
        "en": "middle",
        "sound": "[mIdl]",
        "ru": {
            "n-": "середина;",
            "a-": "средний"
        }
    },
    {
        "id": 623,
        "en": "wheel",
        "sound": "[wJl]",
        "ru": {
            "n-": "колесо;",
            "v-": "катить"
        }
    },
    {
        "id": 624,
        "en": "bottle",
        "sound": "[bOtl]",
        "ru": {
            "n-": "бутылка"
        }
    },
    {
        "id": 625,
        "en": "somebody",
        "sound": "['sAmbqdI]",
        "ru": {
            "pron-": "кто-то, кто-нибудь"
        }
    },
    {
        "id": 626,
        "en": "able",
        "sound": "['eIbl]",
        "ru": {
            "a-": "способный; умелый"
        }
    },
    {
        "id": 627,
        "en": "movie",
        "sound": "['mHvI]",
        "ru": {
            "n-": "кино, фильм"
        }
    },
    {
        "id": 628,
        "en": "driver",
        "sound": "['draIvq]",
        "ru": {
            "n-": "водитель"
        }
    },
    {
        "id": 629,
        "en": "happy",
        "sound": "['hxpI]",
        "ru": {
            "a-": "счастливый"
        }
    },
    {
        "id": 630,
        "en": "murder",
        "sound": "['mWdq]",
        "ru": {
            "n-": "убийство;",
            "v-": "убивать"
        }
    },
    {
        "id": 631,
        "en": "rather",
        "sound": "['rRDq]",
        "ru": {
            "adv-": "довольно; вернее, скорее"
        }
    },
    {
        "id": 632,
        "en": "offer",
        "sound": "['Ofq]",
        "ru": {
            "n-": "предложение;",
            "v-": "предлагать"
        }
    },
    {
        "id": 633,
        "en": "quiet",
        "sound": "['kwaIqt]",
        "ru": {
            "a-": "спокойный"
        }
    },
    {
        "id": 634,
        "en": "rush",
        "sound": "[rAS]",
        "ru": {
            "n-": "спешка;",
            "v-": "бросаться"
        }
    },
    {
        "id": 635,
        "en": "rain",
        "sound": "[reIn]",
        "ru": {
            "n-": "дождь"
        }
    },
    {
        "id": 636,
        "en": "today",
        "sound": "[tq'deI]",
        "ru": {
            "adv-": "сегодня"
        }
    },
    {
        "id": 637,
        "en": "freeze",
        "sound": "[frJz]",
        "ru": {
            "v-": "замерзать; замораживать"
        },
        "irregular": "froze [frouz]; frozen [frouzn]"
    },
    {
        "id": 638,
        "en": "bank",
        "sound": "[bxNk]",
        "ru": {
            "n-": "банк",
            "v-": "насыпать; 2)"
        }
    },
    {
        "id": 639,
        "en": "bedroom",
        "sound": "['bedrum]",
        "ru": {
            "n-": "спальня"
        }
    },
    {
        "id": 640,
        "en": "kick",
        "sound": "[kIk]",
        "ru": {
            "n-": "удар ногой; пинок;",
            "v-": "ударять ногой"
        }
    },
    {
        "id": 641,
        "en": "field",
        "sound": "[fJld]",
        "ru": {
            "n-": "поле"
        }
    },
    {
        "id": 642,
        "en": "beautiful",
        "sound": "['bjHtIfl]",
        "ru": {
            "a-": "красивый"
        }
    },
    {
        "id": 643,
        "en": "stair",
        "sound": "[stFq]",
        "ru": {
            "n-": "ступенька"
        }
    },
    {
        "id": 644,
        "en": "form",
        "sound": "[fLm]",
        "ru": {
            "n-": "форма; бланк; класс;",
            "v-": "формировать(ся)"
        }
    },
    {
        "id": 645,
        "en": "angle",
        "sound": "['xNgl]",
        "ru": {
            "n-": "угол"
        }
    },
    {
        "id": 646,
        "en": "darkness",
        "sound": "['dRknIs]",
        "ru": {
            "n-": "темнота"
        }
    },
    {
        "id": 647,
        "en": "card",
        "sound": "[kRd]",
        "ru": {
            "n-": "открытка; билет"
        }
    },
    {
        "id": 648,
        "en": "person",
        "sound": "['pWsn]",
        "ru": {
            "n-": "человек"
        }
    },
    {
        "id": 649,
        "en": "nobody",
        "sound": "['noubqdI]",
        "ru": {
            "pron-": "никто"
        }
    },
    {
        "id": 650,
        "en": "hole",
        "sound": "[houl]",
        "ru": {
            "n-": "дыра, отверстие"
        }
    },
    {
        "id": 651,
        "en": "earth",
        "sound": "[WT]",
        "ru": {
            "n-": "земля; почва"
        }
    },
    {
        "id": 652,
        "en": "gray",
        "sound": "= grey (3:1) [greI]",
        "ru": {
            "a-": "серый; седой"
        }
    },
    {
        "id": 653,
        "en": "snap",
        "sound": "[snxp]",
        "ru": {
            "n-": "треск;",
            "v-": "треснуть"
        }
    },
    {
        "id": 654,
        "en": "war",
        "sound": "[wL]",
        "ru": {
            "n-": "война"
        }
    },
    {
        "id": 655,
        "en": "within",
        "sound": "[wI'DIn]",
        "ru": {
            "prep-": "в; внутри"
        }
    },
    {
        "id": 656,
        "en": "music",
        "sound": "['mjHzIk]",
        "ru": {
            "n-": "музыка"
        }
    },
    {
        "id": 657,
        "en": "skin",
        "sound": "[skIn]",
        "ru": {
            "n-": "кожа; шкура"
        }
    },
    {
        "id": 658,
        "en": "sea",
        "sound": "[sJ]",
        "ru": {
            "n-": "море"
        }
    },
    {
        "id": 659,
        "en": "cigarette",
        "sound": "[\"sIgq'ret]",
        "ru": {
            "n-": "сигарета"
        }
    },
    {
        "id": 660,
        "en": "lower",
        "sound": "['louq]",
        "ru": {
            "a-": "нижний;",
            "v-": "спускать(ся); понижать(ся)"
        }
    },
    {
        "id": 661,
        "en": "attention",
        "sound": "[q'tenSn]",
        "ru": {
            "n-": "внимание"
        }
    },
    {
        "id": 662,
        "en": "direction",
        "sound": "[dI'rekSn]",
        "ru": {
            "n-": "направление"
        }
    },
    {
        "id": 663,
        "en": "ice",
        "sound": "[aIs]",
        "ru": {
            "n-": "лед"
        }
    },
    {
        "id": 664,
        "en": "knee",
        "sound": "[nJ]",
        "ru": {
            "n-": "колено"
        }
    },
    {
        "id": 665,
        "en": "search",
        "sound": "[sWC]",
        "ru": {
            "n-": "поиски;",
            "v-": "искать"
        }
    },
    {
        "id": 666,
        "en": "company",
        "sound": "['kAmpqnI]",
        "ru": {
            "n-": "компания"
        }
    },
    {
        "id": 667,
        "en": "eight",
        "sound": "[eIt]",
        "ru": {
            "num-": "восемь"
        }
    },
    {
        "id": 668,
        "en": "block",
        "sound": "[blOk]",
        "ru": {
            "n-": "глыба; квартал (города);",
            "v-": "преграждать; блокировать"
        }
    },
    {
        "id": 669,
        "en": "save",
        "sound": "[seIv]",
        "ru": {
            "v-": "спасать; экономить"
        }
    },
    {
        "id": 670,
        "en": "smell",
        "sound": "[smel]",
        "ru": {
            "v-": "нюхать; пахнуть;",
            "n-": "запах"
        },
        "irregular": "бр. smelt, smelt [smelt], ам. smelled, smelled [smeld]"
    },
    {
        "id": 671,
        "en": "track",
        "sound": "[trxk]",
        "ru": {
            "n-": "след; тропинка; колея ж/д;",
            "v-": "следить (за)"
        }
    },
    {
        "id": 672,
        "en": "weapon",
        "sound": "['wepqn]",
        "ru": {
            "n-": "оружие"
        }
    },
    {
        "id": 673,
        "en": "horse",
        "sound": "[hLs]",
        "ru": {
            "n-": "лошадь, конь"
        }
    },
    {
        "id": 674,
        "en": "apartment",
        "sound": "[q'pRtmqnt]",
        "ru": {
            "n-": "комната; квартира"
        }
    },
    {
        "id": 675,
        "en": "reveal",
        "sound": "[rI'vJl]",
        "ru": {
            "v-": "открывать, разоблачать; обнаруживать"
        }
    },
    {
        "id": 676,
        "en": "charge",
        "sound": "[CRG]",
        "ru": {
            "n-": "заряд; нагрузка; поручение;",
            "v-": "заряжать; нагружать"
        }
    },
    {
        "id": 677,
        "en": "record",
        "sound": "['rekLd]",
        "ru": {
            "n-": "запись; пластинка;",
            "v-": "[rI'kLd] записывать"
        },
        "irregular": ""
    },
    {
        "id": 678,
        "en": "clothes",
        "sound": "[klouDz]",
        "ru": {
            "n-": "одежда, платье"
        }
    },
    {
        "id": 679,
        "en": "child",
        "sound": "[CaIld]",
        "ru": {
            "n-": "ребенок"
        }
    },
    {
        "id": 680,
        "en": "beyond",
        "sound": "[bI'jOnd]",
        "ru": {
            "prep-": "за; вне, сверх, выше;",
            "adv-": "вдали"
        }
    },
    {
        "id": 681,
        "en": "spend",
        "sound": "[spend]",
        "ru": {
            "v-": "(spent; spent) тратить, расходовать"
        }
    },
    {
        "id": 682,
        "en": "tonight",
        "sound": "[tq'naIt]",
        "ru": {
            "adv-": "сегодня вечером"
        }
    },
    {
        "id": 683,
        "en": "loud",
        "sound": "[laud]",
        "ru": {
            "a-": "громкий;",
            "adv-": "громко"
        }
    },
    {
        "id": 684,
        "en": "tire",
        "sound": "['taIq]",
        "ru": {
            "v-": "утомлять(ся), уставать"
        }
    },
    {
        "id": 685,
        "en": "shrug",
        "sound": "[SrAg]",
        "ru": {
            "v-": "пожимать (плечами)"
        }
    },
    {
        "id": 686,
        "en": "slam",
        "sound": "[slxm]",
        "ru": {
            "v-": "со стуком/шумом закрыть, захлопнуть, швырнуть"
        }
    },
    {
        "id": 687,
        "en": "position",
        "sound": "[pq'zISn]",
        "ru": {
            "n-": "положение"
        }
    },
    {
        "id": 688,
        "en": "arrive",
        "sound": "[q'raIv]",
        "ru": {
            "v-": "прибывать"
        }
    },
    {
        "id": 689,
        "en": "animal",
        "sound": "['xnImql]",
        "ru": {
            "n-": "животное"
        }
    },
    {
        "id": 690,
        "en": "brown",
        "sound": "[braun]",
        "ru": {
            "a-": "коричневый"
        }
    },
    {
        "id": 691,
        "en": "somewhere",
        "sound": "['sAmweq]",
        "ru": {
            "adv-": "где-нибудь, куда-нибудь"
        }
    },
    {
        "id": 692,
        "en": "tape",
        "sound": "[teIp]",
        "ru": {
            "n-": "лента;",
            "v-": "записывать"
        }
    },
    {
        "id": 693,
        "en": "soldier",
        "sound": "['soulGq]",
        "ru": {
            "n-": "солдат"
        }
    },
    {
        "id": 694,
        "en": "nose",
        "sound": "[nouz]",
        "ru": {
            "n-": "нос; обоняние"
        }
    },
    {
        "id": 695,
        "en": "tight",
        "sound": "[taIt]",
        "ru": {
            "a-": "тугой;",
            "adv-": "туго"
        }
    },
    {
        "id": 696,
        "en": "paint",
        "sound": "[peInt]",
        "ru": {
            "n-": "краска;",
            "v-": "красить"
        }
    },
    {
        "id": 697,
        "en": "agent",
        "sound": "['eIGqnt]",
        "ru": {
            "n-": "агент"
        }
    },
    {
        "id": 698,
        "en": "hate",
        "sound": "[heIt]",
        "ru": {
            "v-": "ненавидеть"
        }
    },
    {
        "id": 699,
        "en": "knife",
        "sound": "[naIf]",
        "ru": {
            "n-": "нож"
        }
    },
    {
        "id": 700,
        "en": "colour",
        "sound": "бр. = color ам. (1:7) ['kAlq]",
        "ru": {
            "n-": "цвет; краска;",
            "v-": "красить"
        }
    },
    {
        "id": 701,
        "en": "strike",
        "sound": "[straIk]",
        "ru": {
            "v-": "бастовать;",
            "n-": "забастовка"
        }
    },
    {
        "id": 702,
        "en": "party",
        "sound": "['pRtI]",
        "ru": {
            "n-": "вечеринка; партия"
        }
    },
    {
        "id": 703,
        "en": "fifty",
        "sound": "['fIftI]",
        "ru": {
            "num-": "пятьдесят"
        }
    },
    {
        "id": 704,
        "en": "quick",
        "sound": "[kwIk]",
        "ru": {
            "a-": "быстрый;",
            "adv-": "быстро"
        }
    },
    {
        "id": 705,
        "en": "security",
        "sound": "[sI'kjuqrItI]",
        "ru": {
            "n-": "безопасность"
        }
    },
    {
        "id": 706,
        "en": "news",
        "sound": "[nJHz]",
        "ru": {
            "n-": "новость, новости"
        }
    },
    {
        "id": 707,
        "en": "tomorrow",
        "sound": "[tq'mOrou]",
        "ru": {
            "adv-": "завтра"
        }
    },
    {
        "id": 708,
        "en": "strange",
        "sound": "[streInG]",
        "ru": {
            "a-": "чужой"
        }
    },
    {
        "id": 709,
        "en": "speed",
        "sound": "[spJd]",
        "ru": {
            "n-": "скорость;",
            "v-": "спешить"
        },
        "irregular": "sped [sped], speeded ['spJdId]; sped, speeded"
    },
    {
        "id": 710,
        "en": "disappear",
        "sound": "[\"dIsq'pIq]",
        "ru": {
            "v-": "исчезать"
        }
    },
    {
        "id": 711,
        "en": "hurry",
        "sound": "['hArI]",
        "ru": {
            "n-": "спешка;"
        }
    },
    {
        "id": 712,
        "en": "distance",
        "sound": "['dIstqns]",
        "ru": {
            "n-": "расстояние"
        }
    },
    {
        "id": 713,
        "en": "file",
        "sound": "[faIl]",
        "ru": {
            "n-": "картотека;",
            "v-": "регистрировать"
        }
    },
    {
        "id": 714,
        "en": "deck",
        "sound": "[dek]",
        "ru": {
            "n-": "палуба и др."
        }
    },
    {
        "id": 715,
        "en": "possible",
        "sound": "['pOsIbl]",
        "ru": {
            "a-": "возможный"
        }
    },
    {
        "id": 716,
        "en": "beneath",
        "sound": "[bI'nJT]",
        "ru": {
            "prep-": "под, ниже;",
            "adv-": "внизу"
        }
    },
    {
        "id": 717,
        "en": "bright",
        "sound": "[braIt]",
        "ru": {
            "a-": "яркий, светлый"
        }
    },
    {
        "id": 718,
        "en": "country",
        "sound": "['kAntrI]",
        "ru": {
            "n-": "страна; сельская местность"
        }
    },
    {
        "id": 719,
        "en": "handle",
        "sound": "['hxndl]",
        "ru": {
            "n-": "ручка;",
            "v-": "трогать, брать руками; управлять"
        }
    },
    {
        "id": 720,
        "en": "act",
        "sound": "[xkt]",
        "ru": {
            "n-": "дело;",
            "v-": "действовать"
        }
    },
    {
        "id": 721,
        "en": "afternoon",
        "sound": "[\"Rftq'nHn]",
        "ru": {
            "n-": "время после полудня"
        }
    },
    {
        "id": 722,
        "en": "metal",
        "sound": "['metl]",
        "ru": {
            "n-": "металл"
        }
    },
    {
        "id": 723,
        "en": "telephone",
        "sound": "['telIfoun]",
        "ru": {
            "n-": "телефон"
        }
    },
    {
        "id": 724,
        "en": "evening",
        "sound": "['JvnIN]",
        "ru": {
            "n-": "вечер"
        }
    },
    {
        "id": 725,
        "en": "seven",
        "sound": "['sevn]",
        "ru": {
            "num-": "семь"
        }
    },
    {
        "id": 726,
        "en": "certain",
        "sound": "['sWtn]",
        "ru": {
            "a-": "определенный; уверенный; один, некий"
        }
    },
    {
        "id": 727,
        "en": "crash",
        "sound": "[krxS]",
        "ru": {
            "n-": "грохот; крушение;",
            "v-": "рушиться с треском; разбиться"
        }
    },
    {
        "id": 728,
        "en": "quietly",
        "sound": "['kwaIqtlI]",
        "ru": {
            "adv-": "спокойно"
        }
    },
    {
        "id": 729,
        "en": "shall",
        "sound": "[Sxl]",
        "ru": {
            "noPart": "1) вспом. гл. в Future Ind.; 2) как модальный"
        }
    },
    {
        "id": 730,
        "en": "frame",
        "sound": "[freIm]",
        "ru": {
            "n-": "каркас; рама; кадр;",
            "v-": "составлять, формулировать"
        }
    },
    {
        "id": 731,
        "en": "island",
        "sound": "['aIlqnd]",
        "ru": {
            "n-": "остров"
        }
    },
    {
        "id": 732,
        "en": "store",
        "sound": "[stL]",
        "ru": {
            "n-": "магазин; склад;",
            "v-": "запасать"
        }
    },
    {
        "id": 733,
        "en": "food",
        "sound": "[fHd]",
        "ru": {
            "n-": "пища, еда"
        }
    },
    {
        "id": 734,
        "en": "bathroom",
        "sound": "['bRTrum]",
        "ru": {
            "n-": "ванная; туалет"
        }
    },
    {
        "id": 735,
        "en": "mom",
        "sound": "[mOm]",
        "ru": {
            "n-": "мама"
        }
    },
    {
        "id": 736,
        "en": "mirror",
        "sound": "['mIrq]",
        "ru": {
            "n-": "зеркало"
        }
    },
    {
        "id": 737,
        "en": "plane",
        "sound": "[pleIn]",
        "ru": {
            "n-": "плоскость; самолет (=airplane);",
            "a-": "плоский"
        }
    },
    {
        "id": 738,
        "en": "shape",
        "sound": "[SeIp]",
        "ru": {
            "n-": "форма, вид; образ;",
            "v-": "придавать/принимать форму"
        }
    },
    {
        "id": 739,
        "en": "sigh",
        "sound": "[saI]",
        "ru": {
            "n-": "вздох;",
            "v-": "вздыхать"
        }
    },
    {
        "id": 740,
        "en": "throat",
        "sound": "[Trout]",
        "ru": {
            "n-": "горло"
        }
    },
    {
        "id": 741,
        "en": "fade",
        "sound": "[feId]",
        "ru": {
            "v-": "вянуть; блекнуть"
        }
    },
    {
        "id": 742,
        "en": "important",
        "sound": "[Im'pLtqnt]",
        "ru": {
            "a-": "важный"
        }
    },
    {
        "id": 743,
        "en": "main",
        "sound": "[meIn]",
        "ru": {
            "a-": "основной, главный"
        }
    },
    {
        "id": 744,
        "en": "sometimes",
        "sound": "['sAmtaImz]",
        "ru": {
            "adv-": "иногда"
        }
    },
    {
        "id": 745,
        "en": "ball",
        "sound": "[bLl]",
        "ru": {
            "n-": "шар; мяч"
        }
    },
    {
        "id": 746,
        "en": "tie",
        "sound": "[taI]",
        "ru": {
            "n-": "соединение; лента, шнур; галстук;",
            "v-": "связывать, скреплять"
        }
    },
    {
        "id": 747,
        "en": "crack",
        "sound": "[krxk]",
        "ru": {
            "n-": "треск;",
            "v-": "трещать"
        }
    },
    {
        "id": 748,
        "en": "dance",
        "sound": "[dRns]",
        "ru": {
            "n-": "танец; танцы (вечеринка);",
            "v-": "танцевать"
        }
    },
    {
        "id": 749,
        "en": "engine",
        "sound": "['enGIn]",
        "ru": {
            "n-": "машина;"
        }
    },
    {
        "id": 750,
        "en": "exit",
        "sound": "['eksIt]",
        "ru": {
            "n-": "выход"
        }
    },
    {
        "id": 751,
        "en": "itself",
        "sound": "[It'self]",
        "ru": {
            "pron-": "себя; сам"
        }
    },
    {
        "id": 752,
        "en": "letter",
        "sound": "['letq]",
        "ru": {
            "n-": "буква; письмо"
        }
    },
    {
        "id": 753,
        "en": "bear",
        "sound": "[bFq]",
        "ru": {
            "n-": "медведь; 2)",
            "v-": "носить; выносить, терпеть; рождать; (bore также скука; надоедать; а born также",
            "a-": "прирожденный)"
        },
        "irregular": "bore [bL]; borne [bLn]- носить; bore [bL]; born [bLn]- рождать"
    },
    {
        "id": 754,
        "en": "board",
        "sound": "[bLd]",
        "ru": {
            "n-": "доска; борт (судна, самолета);",
            "v-": "посадка на борт"
        }
    },
    {
        "id": 755,
        "en": "join",
        "sound": "[GOIn]",
        "ru": {
            "v-": "соединять(ся)"
        }
    },
    {
        "id": 756,
        "en": "shock",
        "sound": "[SOk]",
        "ru": {
            "n-": "удар;",
            "v-": "потрясать"
        }
    },
    {
        "id": 757,
        "en": "everybody",
        "sound": "['evrIbOdI]",
        "ru": {
            "pron-": "все"
        }
    },
    {
        "id": 758,
        "en": "add",
        "sound": "[xd]",
        "ru": {
            "v-": "прибавлять"
        }
    },
    {
        "id": 759,
        "en": "spin",
        "sound": "[spIn]",
        "ru": {
            "v-": "вертеть(ся);",
            "n-": "вращение"
        },
        "irregular": "spun [spAn], span [spxn]; spun"
    },
    {
        "id": 760,
        "en": "ass",
        "sound": "[xs]",
        "ru": {
            "n-": "зоол.-осел; дурак"
        }
    },
    {
        "id": 761,
        "en": "blade",
        "sound": "[bleId]",
        "ru": {
            "n-": "лезвие"
        }
    },
    {
        "id": 762,
        "en": "yard",
        "sound": "[jRd]",
        "ru": {
            "n-": "1) двор; 2) ярд (= 91,4 см)"
        }
    },
    {
        "id": 763,
        "en": "hello",
        "sound": "[he(q)'lou]",
        "ru": {
            "int-": "привет!; алло!"
        }
    },
    {
        "id": 764,
        "en": "alive",
        "sound": "[q'laIv]",
        "ru": {
            "a-": "живой"
        }
    },
    {
        "id": 765,
        "en": "mine",
        "sound": "[maIn]",
        "ru": {
            "pron-": "мой"
        }
    },
    {
        "id": 766,
        "en": "pack",
        "sound": "[pxk]",
        "ru": {
            "n-": "пакет; тюк;",
            "v-": "упаковывать(ся); заполнять(ся)"
        }
    },
    {
        "id": 767,
        "en": "silent",
        "sound": "['saIlqnt]",
        "ru": {
            "a-": "молчаливый"
        }
    },
    {
        "id": 768,
        "en": "teeth",
        "sound": "[tJT]",
        "ru": {
            "n-": "зубы"
        }
    },
    {
        "id": 769,
        "en": "crazy",
        "sound": "['kreIzI]",
        "ru": {
            "a-": "сумасшедший"
        }
    },
    {
        "id": 770,
        "en": "gate",
        "sound": "[geIt]",
        "ru": {
            "n-": "ворота, калитка"
        }
    },
    {
        "id": 771,
        "en": "none",
        "sound": "[nAn]",
        "ru": {
            "pron-": "никто, ничто; никакой, ни один;",
            "adv-": "нисколько"
        }
    },
    {
        "id": 772,
        "en": "third",
        "sound": "[TWd]",
        "ru": {
            "num-": "третий"
        }
    },
    {
        "id": 773,
        "en": "wake",
        "sound": "[weIk]",
        "ru": {
            "v-": "просыпаться; будить"
        },
        "irregular": "woke [wouk], waked [weIkt]; woken ['woukn], waked"
    },
    {
        "id": 774,
        "en": "age",
        "sound": "[eIG]",
        "ru": {
            "n-": "возраст;",
            "v-": "стареть"
        }
    },
    {
        "id": 775,
        "en": "truth",
        "sound": "[trHT]",
        "ru": {
            "n-": "правда, истина"
        }
    },
    {
        "id": 776,
        "en": "strong",
        "sound": "[strON]",
        "ru": {
            "a-": "сильный; крепкий"
        }
    },
    {
        "id": 777,
        "en": "clock",
        "sound": "[klOk]",
        "ru": {
            "n-": "часы"
        }
    },
    {
        "id": 778,
        "en": "camera",
        "sound": "['kxmqrq]",
        "ru": {
            "n-": "фото-, кинокамера"
        }
    },
    {
        "id": 779,
        "en": "image",
        "sound": "['ImIG]",
        "ru": {
            "n-": "образ; имидж"
        }
    },
    {
        "id": 780,
        "en": "noise",
        "sound": "[nOIz]",
        "ru": {
            "n-": "шум"
        }
    },
    {
        "id": 781,
        "en": "marry",
        "sound": "['mxrI]",
        "ru": {
            "v-": "женить(ся), выходить замуж"
        }
    },
    {
        "id": 782,
        "en": "wood",
        "sound": "[wud]",
        "ru": {
            "n-": "дерево; лес; в знач. прилагат.: лесной; деревянный"
        }
    },
    {
        "id": 783,
        "en": "law",
        "sound": "[lL]",
        "ru": {
            "n-": "закон; право"
        }
    },
    {
        "id": 784,
        "en": "trust",
        "sound": "[trAst]",
        "ru": {
            "n-": "доверие;",
            "v-": "верить"
        }
    },
    {
        "id": 785,
        "en": "consider",
        "sound": "[kqn'sIdq]",
        "ru": {
            "v-": "рассматривать, обсуждать; полагать"
        }
    },
    {
        "id": 786,
        "en": "million",
        "sound": "['mIljqn]",
        "ru": {
            "num-": "миллион"
        }
    },
    {
        "id": 787,
        "en": "remove",
        "sound": "[rI'mHv]",
        "ru": {
            "v-": "удалять"
        }
    },
    {
        "id": 788,
        "en": "yell",
        "sound": "[jel]",
        "ru": {
            "n-": "крик;",
            "v-": "кричать"
        }
    },
    {
        "id": 789,
        "en": "struggle",
        "sound": "['strAgl]",
        "ru": {
            "n-": "борьба;",
            "v-": "бороться; биться; делать усилие"
        }
    },
    {
        "id": 790,
        "en": "promise",
        "sound": "['prOmIs]",
        "ru": {
            "n-": "обещание;",
            "v-": "обещать"
        }
    },
    {
        "id": 791,
        "en": "instead",
        "sound": "(of) [In'sted (qv)]",
        "ru": {
            "adv-": "вместо, взамен"
        }
    },
    {
        "id": 792,
        "en": "among(st)",
        "sound": "[q'mAN(st)]",
        "ru": {
            "prep-": "среди"
        }
    },
    {
        "id": 793,
        "en": "tiny",
        "sound": "['taInI]",
        "ru": {
            "a-": "крошечный"
        }
    },
    {
        "id": 794,
        "en": "slightly",
        "sound": "['slaItlI]",
        "ru": {
            "adv-": "слегка, едва"
        }
    },
    {
        "id": 795,
        "en": "shop",
        "sound": "[SOp]",
        "ru": {
            "n-": "магазин"
        }
    },
    {
        "id": 796,
        "en": "hospital",
        "sound": "['hOspItl]",
        "ru": {
            "n-": "больница"
        }
    },
    {
        "id": 797,
        "en": "Jesus",
        "sound": "['GJzqs]",
        "ru": {
            "n-": "воскл. боже!"
        }
    },
    {
        "id": 798,
        "en": "bend",
        "sound": "[bend]",
        "ru": {
            "v-": "(bent; bent) гнуть(ся); сгибать(ся); наклонять(ся)"
        }
    },
    {
        "id": 799,
        "en": "count",
        "sound": "[kaunt]",
        "ru": {
            "v-": "считать;",
            "n-": "1) счет, подсчет; 2) граф"
        }
    },
    {
        "id": 800,
        "en": "cool",
        "sound": "[kHl]",
        "ru": {
            "a-": "прохладный"
        }
    },
    {
        "id": 801,
        "en": "agree",
        "sound": "[q'grJ]",
        "ru": {
            "v-": "соглашаться"
        }
    },
    {
        "id": 802,
        "en": "river",
        "sound": "['rIvq]",
        "ru": {
            "n-": "река"
        }
    },
    {
        "id": 803,
        "en": "scare",
        "sound": "[skFq]",
        "ru": {
            "v-": "пугать"
        }
    },
    {
        "id": 804,
        "en": "during",
        "sound": "['djuqrIN]",
        "ru": {
            "prep-": "в течение"
        }
    },
    {
        "id": 805,
        "en": "information",
        "sound": "[\"Infq'meISn]",
        "ru": {
            "n-": "информация, сведения, данные"
        }
    },
    {
        "id": 806,
        "en": "system",
        "sound": "['sIstIm]",
        "ru": {
            "n-": "система"
        }
    },
    {
        "id": 807,
        "en": "surface",
        "sound": "['sWfIs]",
        "ru": {
            "n-": "поверхность"
        }
    },
    {
        "id": 808,
        "en": "service",
        "sound": "['sWvIs]",
        "ru": {
            "n-": "служба"
        }
    },
    {
        "id": 809,
        "en": "bridge",
        "sound": "[brIG]",
        "ru": {
            "n-": "мост"
        }
    },
    {
        "id": 810,
        "en": "attack",
        "sound": "[q'txk]",
        "ru": {
            "n-": "нападение;",
            "v-": "нападать"
        }
    },
    {
        "id": 811,
        "en": "lawyer",
        "sound": "['lLjq]",
        "ru": {
            "n-": "адвокат"
        }
    },
    {
        "id": 812,
        "en": "sing",
        "sound": "[sIN]",
        "ru": {
            "v-": "петь"
        },
        "irregular": "sang [sxN]; sung [sAN]"
    },
    {
        "id": 813,
        "en": "motion",
        "sound": "['mouSn]",
        "ru": {
            "n-": "движение"
        }
    },
    {
        "id": 814,
        "en": "ray",
        "sound": "[reI]",
        "ru": {
            "n-": "луч"
        }
    },
    {
        "id": 815,
        "en": "hill",
        "sound": "[hIl]",
        "ru": {
            "n-": "холм"
        }
    },
    {
        "id": 816,
        "en": "elevator",
        "sound": "['elIveItq]",
        "ru": {
            "n-": "лифт"
        }
    },
    {
        "id": 817,
        "en": "twist",
        "sound": "[twIst]",
        "ru": {
            "n-": "изгиб;",
            "v-": "виться"
        }
    },
    {
        "id": 818,
        "en": "dry",
        "sound": "[draI]",
        "ru": {
            "a-": "сухой;",
            "v-": "сушить(ся)"
        }
    },
    {
        "id": 819,
        "en": "thick",
        "sound": "[TIk]",
        "ru": {
            "a-": "толстый; густой"
        }
    },
    {
        "id": 820,
        "en": "chief",
        "sound": "[CJf]",
        "ru": {
            "n-": "глава;",
            "a-": "главный"
        }
    },
    {
        "id": 821,
        "en": "button",
        "sound": "['bAtn]",
        "ru": {
            "n-": "пуговица; кнопка"
        }
    },
    {
        "id": 822,
        "en": "level",
        "sound": "['levl]",
        "ru": {
            "n-": "уровень"
        }
    },
    {
        "id": 823,
        "en": "general",
        "sound": "['Denqrql]",
        "ru": {
            "a-": "общий; обычный;",
            "n-": "генерал"
        }
    },
    {
        "id": 824,
        "en": "flight",
        "sound": "[flaIt]",
        "ru": {
            "n-": "полет; рейс"
        }
    },
    {
        "id": 825,
        "en": "brain",
        "sound": "[breIn]",
        "ru": {
            "n-": "мозг; ум"
        }
    },
    {
        "id": 826,
        "en": "page",
        "sound": "[peIG]",
        "ru": {
            "n-": "страница"
        }
    },
    {
        "id": 827,
        "en": "pour",
        "sound": "[pL]",
        "ru": {
            "v-": "лить(ся); наливать"
        }
    },
    {
        "id": 828,
        "en": "doorway",
        "sound": "['dLweI]",
        "ru": {
            "n-": "дверной"
        }
    },
    {
        "id": 829,
        "en": "tall",
        "sound": "[tLl]",
        "ru": {
            "a-": "высокий"
        }
    },
    {
        "id": 830,
        "en": "jacket",
        "sound": "['GxkIt]",
        "ru": {
            "n-": "куртка, пиджак"
        }
    },
    {
        "id": 831,
        "en": "bone",
        "sound": "[boun]",
        "ru": {
            "n-": "кость; останки"
        }
    },
    {
        "id": 832,
        "en": "sink",
        "sound": "[sINk]",
        "ru": {
            "v-": "тонуть; топить; погружать(ся); опускать(ся), понижать(ся);",
            "n-": "раковина (водопроводная); впадина"
        },
        "irregular": "sank [sxNk]; sunk [sANk]"
    },
    {
        "id": 833,
        "en": "gotta",
        "sound": "[gOtq, gAtq]",
        "ru": {
            "noPart": "разг. = (have) got to - должен, должна(…ны)"
        }
    },
    {
        "id": 834,
        "en": "circle",
        "sound": "['sWkl]",
        "ru": {
            "n-": "круг; окружность;",
            "v-": "вращаться"
        }
    },
    {
        "id": 835,
        "en": "gaze",
        "sound": "[geIz]",
        "ru": {
            "n-": "пристальный взгляд;",
            "v-": "пристально глядеть; уставиться"
        }
    },
    {
        "id": 836,
        "en": "soft",
        "sound": "[sOft]",
        "ru": {
            "a-": "мягкий; нежный"
        }
    },
    {
        "id": 837,
        "en": "drag",
        "sound": "[drxg]",
        "ru": {
            "v-": "тащить(ся)"
        }
    },
    {
        "id": 838,
        "en": "desert",
        "sound": "['dezqt]",
        "ru": {
            "n-": "пустыня;",
            "a-": "пустынный;",
            "v-": "[dI'zWt] покидать"
        },
        "irregular": ""
    },
    {
        "id": 839,
        "en": "certainly",
        "sound": "['sWtnlI]",
        "ru": {
            "adv-": "конечно"
        }
    },
    {
        "id": 840,
        "en": "fish",
        "sound": "[fIS]",
        "ru": {
            "n-": "рыба;",
            "v-": "ловить рыбу"
        }
    },
    {
        "id": 841,
        "en": "beach",
        "sound": "[bJC]",
        "ru": {
            "n-": "пляж; взморье"
        }
    },
    {
        "id": 842,
        "en": "single",
        "sound": "['sINgl]",
        "ru": {
            "a-": "один, единственный; отдельный; одинокий"
        }
    },
    {
        "id": 843,
        "en": "team",
        "sound": "[tJm]",
        "ru": {
            "n-": "команда; группа"
        }
    },
    {
        "id": 844,
        "en": "bottom",
        "sound": "['bOtqm]",
        "ru": {
            "n-": "дно; низ"
        }
    },
    {
        "id": 845,
        "en": "secret",
        "sound": "['sJkrIt]",
        "ru": {
            "n-": "секрет, тайна;",
            "a-": "секретный, тайный"
        }
    },
    {
        "id": 846,
        "en": "allow",
        "sound": "[q'lau]",
        "ru": {
            "v-": "позволять"
        }
    },
    {
        "id": 847,
        "en": "immediately",
        "sound": "[I'mJdjqtlI]",
        "ru": {
            "adv-": "немедленно"
        }
    },
    {
        "id": 848,
        "en": "concern",
        "sound": "[kqn'sWn]",
        "ru": {
            "n-": "отношение;",
            "v-": "иметь отношение (к)"
        }
    },
    {
        "id": 849,
        "en": "husband",
        "sound": "['hAzbqnd]",
        "ru": {
            "n-": "муж"
        }
    },
    {
        "id": 850,
        "en": "burst",
        "sound": "[bWst]",
        "ru": {
            "v-": "(burst; burst) взрываться; лопаться;",
            "n-": "вспышка; взрыв"
        }
    },
    {
        "id": 851,
        "en": "forty",
        "sound": "['fLtI]",
        "ru": {
            "num-": "сорок"
        }
    },
    {
        "id": 852,
        "en": "sell",
        "sound": "[sel]",
        "ru": {
            "v-": "(sold; sold) продавать"
        }
    },
    {
        "id": 853,
        "en": "leap",
        "sound": "[lJp]",
        "ru": {
            "v-": "прыгать, скакать; перепрыгивать;",
            "n-": "прыжок, скачок"
        },
        "irregular": "leapt [lept], leaped [lept]; leapt, leaped"
    },
    {
        "id": 854,
        "en": "pound",
        "sound": "[paund]",
        "ru": {
            "v-": "бить(ся), колотить(ся); бомбить; 2) фунт (=454г); 3) фунт (стерлингов) – денежн. ед."
        }
    },
    {
        "id": 855,
        "en": "escape",
        "sound": "[Is'keIp]",
        "ru": {
            "n-": "побег;",
            "v-": "совершать побег; спастись; ускользать"
        }
    },
    {
        "id": 856,
        "en": "cloud",
        "sound": "[klaud]",
        "ru": {
            "n-": "облако; туча;",
            "v-": "покрывать(ся) тучами"
        }
    },
    {
        "id": 857,
        "en": "rear",
        "sound": "[rIq]",
        "ru": {
            "n-": "задняя сторона; тыл"
        }
    },
    {
        "id": 858,
        "en": "gold",
        "sound": "[gould]",
        "ru": {
            "n-": "золото;",
            "a-": "золотой"
        }
    },
    {
        "id": 859,
        "en": "simply",
        "sound": "['sImplI]",
        "ru": {
            "adv-": "просто"
        }
    },
    {
        "id": 860,
        "en": "message",
        "sound": "['mesIG]",
        "ru": {
            "n-": "сообщение"
        }
    },
    {
        "id": 861,
        "en": "detective",
        "sound": "[dI'tektIv]",
        "ru": {
            "n-": "сыщик, детектив;",
            "a-": "детективный"
        }
    },
    {
        "id": 862,
        "en": "manage",
        "sound": "['mxnIG]",
        "ru": {
            "v-": "руководить"
        }
    },
    {
        "id": 863,
        "en": "creature",
        "sound": "['krJCq]",
        "ru": {
            "n-": "создание,тварь"
        }
    },
    {
        "id": 864,
        "en": "themselves",
        "sound": "[Dqm'selvz]",
        "ru": {
            "pron-": "себя"
        }
    },
    {
        "id": 865,
        "en": "roof",
        "sound": "[rHf]",
        "ru": {
            "n-": "крыша"
        }
    },
    {
        "id": 866,
        "en": "inch",
        "sound": "[InC]",
        "ru": {
            "n-": "дюйм (= 2,54 см)"
        }
    },
    {
        "id": 867,
        "en": "dinner",
        "sound": "['dInq]",
        "ru": {
            "n-": "обед"
        }
    },
    {
        "id": 868,
        "en": "gesture",
        "sound": "['GesCq]",
        "ru": {
            "n-": "жест;",
            "v-": "жестикулировать"
        }
    },
    {
        "id": 869,
        "en": "army",
        "sound": "['RmI]",
        "ru": {
            "n-": "армия"
        }
    },
    {
        "id": 870,
        "en": "switch",
        "sound": "[swIC]",
        "ru": {
            "n-": "переключение; выключатель;",
            "v-": "переключать"
        }
    },
    {
        "id": 871,
        "en": "nurse",
        "sound": "[nWs]",
        "ru": {
            "n-": "няня; сиделка;",
            "v-": "ухаживать"
        }
    },
    {
        "id": 872,
        "en": "expression",
        "sound": "[Ik'spreSn]",
        "ru": {
            "n-": "выражение"
        }
    },
    {
        "id": 873,
        "en": "yellow",
        "sound": "['jelou]",
        "ru": {
            "a-": "желтый"
        }
    },
    {
        "id": 874,
        "en": "sergeant",
        "sound": "['sRGqnt]",
        "ru": {
            "n-": "сержант"
        }
    },
    {
        "id": 875,
        "en": "warm",
        "sound": "[wLm]",
        "ru": {
            "a-": "теплый;",
            "v-": "греть(ся)"
        }
    },
    {
        "id": 876,
        "en": "roar",
        "sound": "[rL]",
        "ru": {
            "n-": "рев; грохот;",
            "v-": "реветь; грохотать"
        }
    },
    {
        "id": 877,
        "en": "club",
        "sound": "[klAb]",
        "ru": {
            "n-": "клуб"
        }
    },
    {
        "id": 878,
        "en": "pop",
        "sound": "[pOp]",
        "ru": {
            "v-": "хлопнуть, треснуть; 2) сокр. от popular- популярный"
        }
    },
    {
        "id": 879,
        "en": "grand",
        "sound": "[grxnd]",
        "ru": {
            "a-": "грандиозный; большой; важный; восхитительный"
        }
    },
    {
        "id": 880,
        "en": "bite",
        "sound": "[baIt]",
        "ru": {
            "v-": "(bit; bitten) кусать(ся); жалить;",
            "n-": "укус; кусок (пищи)"
        }
    },
    {
        "id": 881,
        "en": "coat",
        "sound": "[kout]",
        "ru": {
            "n-": "пальто"
        }
    },
    {
        "id": 882,
        "en": "size",
        "sound": "[saIz]",
        "ru": {
            "n-": "размер; величина; формат;",
            "v-": "определять величину"
        }
    },
    {
        "id": 883,
        "en": "however",
        "sound": "[hau'evq]",
        "ru": {
            "adv-": "как бы ни;",
            "cj-": "однако, тем не менее"
        }
    },
    {
        "id": 884,
        "en": "cat",
        "sound": "[kxt]",
        "ru": {
            "n-": "кот, кошка"
        }
    },
    {
        "id": 885,
        "en": "type",
        "sound": "[taIp]",
        "ru": {
            "n-": "тип; род; модедь; 2)",
            "v-": "печатать на машинке"
        }
    },
    {
        "id": 886,
        "en": "thin",
        "sound": "[TIn]",
        "ru": {
            "a-": "тонкий; худой; редкий"
        }
    },
    {
        "id": 887,
        "en": "dozen",
        "sound": "['dAzn]",
        "ru": {
            "n-": "дюжина"
        }
    },
    {
        "id": 888,
        "en": "crew",
        "sound": "[krH]",
        "ru": {
            "n-": "экипаж (судна и т.п.)"
        }
    },
    {
        "id": 889,
        "en": "present",
        "sound": "['preznt]",
        "ru": {
            "n-": "подарок; v [prI'zent]- дарить",
            "a-": "присутствующий; 2)"
        }
    },
    {
        "id": 890,
        "en": "shoe",
        "sound": "[SH]",
        "ru": {
            "n-": "(полу)ботинок, туфля"
        }
    },
    {
        "id": 891,
        "en": "beer",
        "sound": "[bIq]",
        "ru": {
            "n-": "пиво"
        }
    },
    {
        "id": 892,
        "en": "doubt",
        "sound": "[daut]",
        "ru": {
            "n-": "сомнение;",
            "v-": "сомневаться"
        }
    },
    {
        "id": 893,
        "en": "settle",
        "sound": "['setl]",
        "ru": {
            "v-": "поселить(ся); устраивать(ся); улаживать; решать"
        }
    },
    {
        "id": 894,
        "en": "daughter",
        "sound": "['dLtq]",
        "ru": {
            "n-": "дочь"
        }
    },
    {
        "id": 895,
        "en": "anybody",
        "sound": "['enIbOdI]",
        "ru": {
            "pron-": "кто-нибудь (в вопр.); никто (в отриц.); любой (в утверд.)"
        }
    },
    {
        "id": 896,
        "en": "grip",
        "sound": "[grip]",
        "ru": {
            "n-": "сжатие; хватка;",
            "v-": "схватывать(за); сжимать"
        }
    },
    {
        "id": 897,
        "en": "completely",
        "sound": "[kqm'plJtlI]",
        "ru": {
            "adv-": "совершенно, полностью"
        }
    },
    {
        "id": 898,
        "en": "nearly",
        "sound": "['nIqlI]",
        "ru": {
            "adv-": "почти; около"
        }
    },
    {
        "id": 899,
        "en": "pair",
        "sound": "[peq]",
        "ru": {
            "n-": "пара"
        }
    },
    {
        "id": 900,
        "en": "nine",
        "sound": "[naIn]",
        "ru": {
            "num-": "девять"
        }
    },
    {
        "id": 901,
        "en": "gather",
        "sound": "['gxDq]",
        "ru": {
            "v-": "собирать(ся)"
        }
    },
    {
        "id": 902,
        "en": "bud",
        "sound": "[bAd]",
        "ru": {
            "n-": "сокр. от buddy приятель"
        }
    },
    {
        "id": 903,
        "en": "bird",
        "sound": "[bWd]",
        "ru": {
            "n-": "птица"
        }
    },
    {
        "id": 904,
        "en": "sister",
        "sound": "['sIstq]",
        "ru": {
            "n-": "сестра"
        }
    },
    {
        "id": 905,
        "en": "special",
        "sound": "['speSl]",
        "ru": {
            "a-": "специальный"
        }
    },
    {
        "id": 906,
        "en": "hallway",
        "sound": "['hLlweI]",
        "ru": {
            "n-": "прихожая"
        }
    },
    {
        "id": 907,
        "en": "base",
        "sound": "[beIs]",
        "ru": {
            "n-": "основа; база;",
            "v-": "основывать, базировать"
        }
    },
    {
        "id": 908,
        "en": "mountain",
        "sound": "['mauntIn]",
        "ru": {
            "n-": "гора"
        }
    },
    {
        "id": 909,
        "en": "flat",
        "sound": "[flxt]",
        "ru": {
            "n-": "квартира"
        }
    },
    {
        "id": 910,
        "en": "sweat",
        "sound": "[swet]",
        "ru": {
            "n-": "пот;",
            "v-": "потеть"
        }
    },
    {
        "id": 911,
        "en": "gently",
        "sound": "['GentlI]",
        "ru": {
            "adv-": "мягко, нежно"
        }
    },
    {
        "id": 912,
        "en": "spread",
        "sound": "[spred]",
        "ru": {
            "v-": "(spread; spread) распространять(ся); расстилать(ся)"
        }
    },
    {
        "id": 913,
        "en": "wire",
        "sound": "['waIq]",
        "ru": {
            "n-": "проволока, провод; телеграмма;",
            "v-": "телеграфировать"
        }
    },
    {
        "id": 914,
        "en": "bullet",
        "sound": "['bulIt]",
        "ru": {
            "n-": "пуля"
        }
    },
    {
        "id": 915,
        "en": "stretch",
        "sound": "[streC]",
        "ru": {
            "v-": "растягивать(ся)"
        }
    },
    {
        "id": 916,
        "en": "master",
        "sound": "['mRstq]",
        "ru": {
            "n-": "хозяин; мастер"
        }
    },
    {
        "id": 917,
        "en": "cell",
        "sound": "[sel]",
        "ru": {
            "n-": "камера; карцер; ячейка"
        }
    },
    {
        "id": 918,
        "en": "counter",
        "sound": "['kauntq]",
        "ru": {
            "n-": "противоположное;",
            "v-": "противостоять"
        }
    },
    {
        "id": 919,
        "en": "private",
        "sound": "['praIvIt]",
        "ru": {
            "a-": "частный; личный; 2)",
            "n-": "рядовой (воинск. звание)"
        }
    },
    {
        "id": 920,
        "en": "king",
        "sound": "[kIN]",
        "ru": {
            "n-": "король"
        }
    },
    {
        "id": 921,
        "en": "flame",
        "sound": "[fleIm]",
        "ru": {
            "n-": "пламя; сияние"
        }
    },
    {
        "id": 922,
        "en": "sick",
        "sound": "[sIk]",
        "ru": {
            "a-": "больной"
        }
    },
    {
        "id": 923,
        "en": "rip",
        "sound": "[rIp]",
        "ru": {
            "v-": "рвать(ся"
        }
    },
    {
        "id": 924,
        "en": "entrance",
        "sound": "['entrqns]",
        "ru": {
            "n-": "вход"
        }
    },
    {
        "id": 925,
        "en": "sheet",
        "sound": "[SJt]",
        "ru": {
            "n-": "простыня; лист"
        }
    },
    {
        "id": 926,
        "en": "entire",
        "sound": "[In'taIq]",
        "ru": {
            "a-": "целый, полный, весь"
        }
    },
    {
        "id": 927,
        "en": "steal",
        "sound": "[stJl]",
        "ru": {
            "v-": "красть"
        },
        "irregular": "stole [stoul]; stolen [stouln]"
    },
    {
        "id": 928,
        "en": "warn",
        "sound": "[wLn]",
        "ru": {
            "v-": "предупреждать"
        }
    },
    {
        "id": 929,
        "en": "judge",
        "sound": "[GAG]",
        "ru": {
            "n-": "судья;",
            "v-": "судить"
        }
    },
    {
        "id": 930,
        "en": "perfect",
        "sound": "['pWfIkt]",
        "ru": {
            "a-": "совершенный"
        }
    },
    {
        "id": 931,
        "en": "command",
        "sound": "[kq'mRnd]",
        "ru": {
            "n-": "команда, приказ;",
            "v-": "приказывать; командовать"
        }
    },
    {
        "id": 932,
        "en": "sharp",
        "sound": "[SRp]",
        "ru": {
            "a-": "острый; резкий"
        }
    },
    {
        "id": 933,
        "en": "scene",
        "sound": "[sJn]",
        "ru": {
            "n-": "сцена; место; явление"
        }
    },
    {
        "id": 934,
        "en": "screen",
        "sound": "[skrJn]",
        "ru": {
            "n-": "экран; ширма;",
            "v-": "прикрывать"
        }
    },
    {
        "id": 935,
        "en": "conversation",
        "sound": "[\"kOnvq'seISn]",
        "ru": {
            "n-": "разговор, беседа"
        }
    },
    {
        "id": 936,
        "en": "dear",
        "sound": "[dIq]",
        "ru": {
            "a-": "дорогой, милый"
        }
    },
    {
        "id": 937,
        "en": "whether",
        "sound": "['weDq]",
        "ru": {
            "cj-": "ли"
        }
    },
    {
        "id": 938,
        "en": "toss",
        "sound": "[tOs]",
        "ru": {
            "n-": "бросание;",
            "v-": "бросать"
        }
    },
    {
        "id": 939,
        "en": "cup",
        "sound": "[kAp]",
        "ru": {
            "n-": "чашка; кубок"
        }
    },
    {
        "id": 940,
        "en": "ceiling",
        "sound": "['sJlIN]",
        "ru": {
            "n-": "потолок"
        }
    },
    {
        "id": 941,
        "en": "fit",
        "sound": "[fIt]",
        "ru": {
            "a-": "годный;",
            "v-": "годиться"
        }
    },
    {
        "id": 942,
        "en": "narrow",
        "sound": "['nxrou]",
        "ru": {
            "a-": "узкий, тесный;",
            "v-": "суживать(ся); уменьшать(ся)"
        }
    },
    {
        "id": 943,
        "en": "imagine",
        "sound": "[I'mxGIn]",
        "ru": {
            "v-": "воображать"
        }
    },
    {
        "id": 944,
        "en": "Christ",
        "sound": "[kraIst]",
        "ru": {
            "n-": "Христос; восклицание: боже!; господи!"
        }
    },
    {
        "id": 945,
        "en": "simple",
        "sound": "['sImpl]",
        "ru": {
            "a-": "простой"
        }
    },
    {
        "id": 946,
        "en": "colonel",
        "sound": "['kWnl]",
        "ru": {
            "n-": "полковник"
        }
    },
    {
        "id": 947,
        "en": "pilot",
        "sound": "['paIlqt]",
        "ru": {
            "n-": "летчик, пилот"
        }
    },
    {
        "id": 948,
        "en": "cheek",
        "sound": "[CJk]",
        "ru": {
            "n-": "1) щека; 2) наглость"
        }
    },
    {
        "id": 949,
        "en": "grace",
        "sound": "[greIs]",
        "ru": {
            "n-": "грация, изящество"
        }
    },
    {
        "id": 950,
        "en": "photo",
        "sound": "['foutou]",
        "ru": {
            "n-": "фотография"
        }
    },
    {
        "id": 951,
        "en": "buddy",
        "sound": "['bAdI]",
        "ru": {
            "n-": "приятель"
        }
    },
    {
        "id": 952,
        "en": "excuse",
        "sound": "1) [Ik'skjHs]",
        "ru": {
            "n-": "извинение; 2) [Ik'skjHz]",
            "v-": "извинять"
        }
    },
    {
        "id": 953,
        "en": "frown",
        "sound": "[fraun]",
        "ru": {
            "v-": "хмуриться"
        }
    },
    {
        "id": 954,
        "en": "tunnel",
        "sound": "['tAnl]",
        "ru": {
            "n-": "тоннель"
        }
    },
    {
        "id": 955,
        "en": "fix",
        "sound": "[fIks]",
        "ru": {
            "v-": "закреплять; чинить"
        }
    },
    {
        "id": 956,
        "en": "hat",
        "sound": "[hxt]",
        "ru": {
            "n-": "шляпа"
        }
    },
    {
        "id": 957,
        "en": "snow",
        "sound": "[snou]",
        "ru": {
            "n-": "снег"
        }
    },
    {
        "id": 958,
        "en": "planet",
        "sound": "['plxnIt]",
        "ru": {
            "n-": "планета"
        }
    },
    {
        "id": 959,
        "en": "glow",
        "sound": "[glou]",
        "ru": {
            "n-": "свет;",
            "v-": "сверкать"
        }
    },
    {
        "id": 960,
        "en": "double",
        "sound": "['dAbl]",
        "ru": {
            "a-": "двойной;",
            "v-": "удваивать;",
            "adv-": "вдвое"
        }
    },
    {
        "id": 961,
        "en": "recognize",
        "sound": "['rekqgnaIz]",
        "ru": {
            "v-": "узнавать"
        }
    },
    {
        "id": 962,
        "en": "sudden",
        "sound": "['sAdn]",
        "ru": {
            "a-": "внезапный"
        }
    },
    {
        "id": 963,
        "en": "steel",
        "sound": "[stJl]",
        "ru": {
            "n-": "сталь;",
            "a-": "стальной"
        }
    },
    {
        "id": 964,
        "en": "worse",
        "sound": "[wWs]",
        "ru": {
            "a-": "худший;",
            "adv-": "хуже"
        }
    },
    {
        "id": 965,
        "en": "wipe",
        "sound": "[waIp]",
        "ru": {
            "v-": "вытирать, утирать"
        }
    },
    {
        "id": 966,
        "en": "stupid",
        "sound": "['stjHpId]",
        "ru": {
            "a-": "глупый, тупой"
        }
    },
    {
        "id": 967,
        "en": "monitor",
        "sound": "['mOnItq]",
        "ru": {
            "n-": "монитор; наставник; староста (класса);",
            "v-": "наставлять"
        }
    },
    {
        "id": 968,
        "en": "test",
        "sound": "[test]",
        "ru": {
            "n-": "испытание; проверка; экзамен;",
            "v-": "испытывать, проверять"
        }
    },
    {
        "id": 969,
        "en": "square",
        "sound": "[skwFq]",
        "ru": {
            "n-": "квадрат; площадь; сквер;",
            "a-": "квадратный"
        }
    },
    {
        "id": 970,
        "en": "mention",
        "sound": "['menSqn]",
        "ru": {
            "n-": "упоминание;",
            "v-": "упоминать; ссылаться на"
        }
    },
    {
        "id": 971,
        "en": "uniform",
        "sound": "['jHnIfLm]",
        "ru": {
            "n-": "форменная одежда;",
            "a-": "форменный;",
            "v-": "одевать в форму"
        }
    },
    {
        "id": 972,
        "en": "south",
        "sound": "[sauT]",
        "ru": {
            "n-": "юг;",
            "a-": "южный;",
            "adv-": "к югу, на юг(е)"
        }
    },
    {
        "id": 973,
        "en": "travel",
        "sound": "['trxvl]",
        "ru": {
            "n-": "путешествие;",
            "v-": "путешествовать"
        }
    },
    {
        "id": 974,
        "en": "mask",
        "sound": "[mRsk]",
        "ru": {
            "n-": "маска;"
        }
    },
    {
        "id": 975,
        "en": "fifteen",
        "sound": "[\"fIf'tJn]",
        "ru": {
            "num-": "пятнадцать"
        }
    },
    {
        "id": 976,
        "en": "class",
        "sound": "[klRs]",
        "ru": {
            "n-": "класс; сорт, качество; в школе- класс, урок, занятие"
        }
    },
    {
        "id": 977,
        "en": "path",
        "sound": "[pRT]",
        "ru": {
            "n-": "тропинка; путь"
        }
    },
    {
        "id": 978,
        "en": "match",
        "sound": "[mxC]",
        "ru": {
            "n-": "состязание, матч;",
            "v-": "состязаться"
        }
    },
    {
        "id": 979,
        "en": "grant",
        "sound": "[grRnt]",
        "ru": {
            "n-": "дар; стипендия;",
            "v-": "дарить, предоставлять"
        }
    },
    {
        "id": 980,
        "en": "memory",
        "sound": "['memqrI]",
        "ru": {
            "n-": "память"
        }
    },
    {
        "id": 981,
        "en": "serious",
        "sound": "['sIqrIqs]",
        "ru": {
            "a-": "серьезный"
        }
    },
    {
        "id": 982,
        "en": "softly",
        "sound": "['sOftlI]",
        "ru": {
            "adv-": "мягко, нежно"
        }
    },
    {
        "id": 983,
        "en": "dust",
        "sound": "[dAst]",
        "ru": {
            "n-": "пыль;",
            "v-": "вытир. пыль"
        }
    },
    {
        "id": 984,
        "en": "major",
        "sound": "['meIGe]",
        "ru": {
            "n-": "майор; 2)",
            "a-": "большой; главный"
        }
    },
    {
        "id": 985,
        "en": "wild",
        "sound": "[waIld]",
        "ru": {
            "a-": "дикий; бешеный"
        }
    },
    {
        "id": 986,
        "en": "calm",
        "sound": "[kRm]",
        "ru": {
            "a-": "тихий;",
            "v-": "успокаивать"
        }
    },
    {
        "id": 987,
        "en": "dig",
        "sound": "[dIg]",
        "ru": {
            "v-": "рыть(ся)"
        },
        "irregular": "dug; dug [dAg]"
    },
    {
        "id": 988,
        "en": "angry",
        "sound": "['xNgrI]",
        "ru": {
            "a-": "сердитый, гневный"
        }
    },
    {
        "id": 989,
        "en": "wet",
        "sound": "[wet]",
        "ru": {
            "a-": "мокрый; дождливый"
        }
    },
    {
        "id": 990,
        "en": "contact",
        "sound": "['kOntxkt]",
        "ru": {
            "n-": "контакт, связь;",
            "v-": "связаться"
        }
    },
    {
        "id": 991,
        "en": "tank",
        "sound": "[txNk]",
        "ru": {
            "n-": "1) танк; 2) цистерна"
        }
    },
    {
        "id": 992,
        "en": "wrap",
        "sound": "[rxp]",
        "ru": {
            "v-": "обертывать"
        }
    },
    {
        "id": 993,
        "en": "action",
        "sound": "['xkSqn]",
        "ru": {
            "n-": "действие"
        }
    },
    {
        "id": 994,
        "en": "click",
        "sound": "[klIk]",
        "ru": {
            "n-": "щелканье;",
            "v-": "щелкать"
        }
    },
    {
        "id": 995,
        "en": "tower",
        "sound": "['tauq]",
        "ru": {
            "n-": "башня; вышка"
        }
    },
    {
        "id": 996,
        "en": "crawl",
        "sound": "[krLl]",
        "ru": {
            "n-": "ползание;",
            "v-": "ползти"
        }
    },
    {
        "id": 997,
        "en": "whose",
        "sound": "[hHz]",
        "ru": {
            "pron-": "чей"
        }
    },
    {
        "id": 998,
        "en": "prepare",
        "sound": "[prI'pFq]",
        "ru": {
            "v-": "готовить(ся)"
        }
    },
    {
        "id": 999,
        "en": "thought",
        "sound": "[TLt]",
        "ru": {
            "n-": "мысль, размышление"
        }
    },
    {
        "id": 1000,
        "en": "load",
        "sound": "[loud]",
        "ru": {
            "n-": "груз;",
            "v-": "грузить"
        }
    },
    {
        "id": 1001,
        "en": "situation",
        "sound": "[\"sItju'eISn]",
        "ru": {
            "n-": "местоположение; ситуация"
        }
    },
    {
        "id": 1002,
        "en": "trip",
        "sound": "[trIp]",
        "ru": {
            "n-": "поездка, путешествие"
        }
    },
    {
        "id": 1003,
        "en": "ignore",
        "sound": "[Ig'nL]",
        "ru": {
            "v-": "игнорировать"
        }
    },
    {
        "id": 1004,
        "en": "lieutenant",
        "sound": "[lef'tenqnt]",
        "ru": {
            "n-": "лейтенант"
        }
    },
    {
        "id": 1005,
        "en": "enjoy",
        "sound": "[In'GOI]",
        "ru": {
            "v-": "наслаждаться"
        }
    },
    {
        "id": 1006,
        "en": "wing",
        "sound": "[wIN]",
        "ru": {
            "n-": "крыло; воен., спорт. фланг, край; филиал; флигель (дома)"
        }
    },
    {
        "id": 1007,
        "en": "belt",
        "sound": "[belt]",
        "ru": {
            "n-": "пояс, ремень"
        }
    },
    {
        "id": 1008,
        "en": "gas",
        "sound": "[gxs]",
        "ru": {
            "n-": "газ; амер. бензин"
        }
    },
    {
        "id": 1009,
        "en": "sweep",
        "sound": "[swJp]",
        "ru": {
            "v-": "мести, чистить; сметать; нестись, мчаться"
        },
        "irregular": "swept; swept [swept]"
    },
    {
        "id": 1010,
        "en": "north",
        "sound": "[nLT]",
        "ru": {
            "n-": "север;",
            "a-": "северный"
        }
    },
    {
        "id": 1011,
        "en": "stage",
        "sound": "[steIG]",
        "ru": {
            "n-": "1) стадия; 2) сцена"
        }
    },
    {
        "id": 1012,
        "en": "bet",
        "sound": "[bet]",
        "ru": {
            "v-": "(bet; bet) держать пари"
        }
    },
    {
        "id": 1013,
        "en": "bother",
        "sound": "['bODq]",
        "ru": {
            "n-": "беспокойство;",
            "v-": "надоедать; беспокоить(ся)"
        }
    },
    {
        "id": 1014,
        "en": "peer",
        "sound": "[pIq]",
        "ru": {
            "v-": "всматриваться"
        }
    },
    {
        "id": 1015,
        "en": "poor",
        "sound": "[puq]",
        "ru": {
            "a-": "бедный; несчастный"
        }
    },
    {
        "id": 1016,
        "en": "neither",
        "sound": "['naIDq]",
        "ru": {
            "pron-": "ни один (из двух); ни тот, ни другой;",
            "adv-": "также не"
        }
    },
    {
        "id": 1017,
        "en": "barely",
        "sound": "['bFqlI]",
        "ru": {
            "adv-": "только, едва, лишь"
        }
    },
    {
        "id": 1018,
        "en": "rifle",
        "sound": "['raIfl]",
        "ru": {
            "n-": "винтовка"
        }
    },
    {
        "id": 1019,
        "en": "west",
        "sound": "[west]",
        "ru": {
            "n-": "запад;",
            "a-": "западный"
        }
    },
    {
        "id": 1020,
        "en": "row",
        "sound": "[rou]",
        "ru": {
            "n-": "ряд; этаж; 2) гребля; грести; 3) [rau] шум, гвалт; шуметь"
        }
    },
    {
        "id": 1021,
        "en": "beam",
        "sound": "[bJm]",
        "ru": {
            "n-": "луч; сияние;",
            "v-": "сиять"
        }
    },
    {
        "id": 1022,
        "en": "storm",
        "sound": "[stLm]",
        "ru": {
            "n-": "буря, шторм; штурм"
        }
    },
    {
        "id": 1023,
        "en": "wound",
        "sound": "[wHnd]",
        "ru": {
            "n-": "рана;",
            "v-": "ранить"
        }
    },
    {
        "id": 1024,
        "en": "plate",
        "sound": "[pleIt]",
        "ru": {
            "n-": "тарелка; пластинка"
        }
    },
    {
        "id": 1025,
        "en": "share",
        "sound": "[SFq]",
        "ru": {
            "n-": "часть;",
            "v-": "делить(ся)"
        }
    },
    {
        "id": 1026,
        "en": "shift",
        "sound": "[SIft]",
        "ru": {
            "n-": "смена;",
            "v-": "менять(ся)"
        }
    },
    {
        "id": 1027,
        "en": "drug",
        "sound": "[drAg]",
        "ru": {
            "n-": "наркотик; лекарство"
        }
    },
    {
        "id": 1028,
        "en": "date",
        "sound": "[deIt]",
        "ru": {
            "n-": "дата, число; свидание;",
            "v-": "датировать; назначать свидание"
        }
    },
    {
        "id": 1029,
        "en": "plastic",
        "sound": "['plxstIk]",
        "ru": {
            "n-": "пластмасса;",
            "a-": "пластичный, гибкий"
        }
    },
    {
        "id": 1030,
        "en": "ghost",
        "sound": "[goust]",
        "ru": {
            "n-": "призрак, привидение"
        }
    },
    {
        "id": 1031,
        "en": "pale",
        "sound": "[peIl]",
        "ru": {
            "a-": "бледный"
        }
    },
    {
        "id": 1032,
        "en": "loose",
        "sound": "[lHs]",
        "ru": {
            "a-": "свободный; незакрепленный"
        }
    },
    {
        "id": 1033,
        "en": "aside",
        "sound": "[q'saId]",
        "ru": {
            "adv-": "в стороне"
        }
    },
    {
        "id": 1034,
        "en": "emerge",
        "sound": "[I'mWG]",
        "ru": {
            "v-": "появляться"
        }
    },
    {
        "id": 1035,
        "en": "hesitate",
        "sound": "['hezIteIt]",
        "ru": {
            "v-": "колебаться, сомневаться; не решаться"
        }
    },
    {
        "id": 1036,
        "en": "often",
        "sound": "['Ofn]",
        "ru": {
            "adv-": "часто"
        }
    },
    {
        "id": 1037,
        "en": "mistake",
        "sound": "[mIs'teIk]",
        "ru": {
            "n-": "ошибка; редко",
            "v-": "ошибаться"
        },
        "irregular": "mistook [mIs'tuk]; mistaken [mIs'teIkn]"
    },
    {
        "id": 1038,
        "en": "bang",
        "sound": "[bxN]",
        "ru": {
            "n-": "удар;",
            "v-": "ударить(ся)"
        }
    },
    {
        "id": 1039,
        "en": "heat",
        "sound": "[hJt]",
        "ru": {
            "n-": "жара;",
            "v-": "нагревать(ся)"
        }
    },
    {
        "id": 1040,
        "en": "bow",
        "sound": "1) [bau]",
        "ru": {
            "n-": "лук (оружие); смычок; бант",
            "v-": "[bou]"
        },
        "irregular": "ланяться; 2"
    },
    {
        "id": 1041,
        "en": "list",
        "sound": "[lIst]",
        "ru": {
            "n-": "список;",
            "v-": "вносить в список"
        }
    },
    {
        "id": 1042,
        "en": "movement",
        "sound": "['mHvmqnt]",
        "ru": {
            "n-": "движение"
        }
    },
    {
        "id": 1043,
        "en": "complete",
        "sound": "[kqm'plJt]",
        "ru": {
            "a-": "полный; законченный;",
            "v-": "заканчивать, завершать"
        }
    },
    {
        "id": 1044,
        "en": "include",
        "sound": "[In'klHd]",
        "ru": {
            "v-": "включать; заключать в себе"
        }
    },
    {
        "id": 1045,
        "en": "feed",
        "sound": "[fJd]",
        "ru": {
            "v-": "(fed; fed) кормить(ся); питаться, есть;",
            "n-": "питание, еда, корм"
        }
    },
    {
        "id": 1046,
        "en": "blast",
        "sound": "[blRst]",
        "ru": {
            "n-": "взрыв;",
            "v-": "взрывать"
        }
    },
    {
        "id": 1047,
        "en": "explode",
        "sound": "[Iks'ploud]",
        "ru": {
            "v-": "взрывать(ся)"
        }
    },
    {
        "id": 1048,
        "en": "bitch",
        "sound": "[bIC]",
        "ru": {
            "n-": "сука; ругат. стерва"
        }
    },
    {
        "id": 1049,
        "en": "weight",
        "sound": "[weIt]",
        "ru": {
            "n-": "вес; тяжесть"
        }
    },
    {
        "id": 1050,
        "en": "yours",
        "sound": "[jLz]",
        "ru": {
            "pron-": "твой, ваш"
        }
    },
    {
        "id": 1051,
        "en": "address",
        "sound": "[q'dres]",
        "ru": {
            "n-": "адрес;",
            "v-": "адресовать; направлять"
        }
    },
    {
        "id": 1052,
        "en": "church",
        "sound": "[CWC]",
        "ru": {
            "n-": "церковь"
        }
    },
    {
        "id": 1053,
        "en": "surround",
        "sound": "[sq'raund]",
        "ru": {
            "v-": "окружать"
        }
    },
    {
        "id": 1054,
        "en": "pile",
        "sound": "[paIl]",
        "ru": {
            "n-": "куча, груда;",
            "v-": "складывать, сваливать в кучу; громоздить"
        }
    },
    {
        "id": 1055,
        "en": "worth",
        "sound": "[wWT]",
        "ru": {
            "n-": "цена, стоимость; ценность;",
            "a-": "имеющий ценность"
        }
    },
    {
        "id": 1056,
        "en": "attempt",
        "sound": "[q'tempt]",
        "ru": {
            "n-": "попытка; покушение;",
            "v-": "пытаться"
        }
    },
    {
        "id": 1057,
        "en": "nervous",
        "sound": "['nWvqs]",
        "ru": {
            "a-": "нервный"
        }
    },
    {
        "id": 1058,
        "en": "government",
        "sound": "['gAvqnmqnt]",
        "ru": {
            "n-": "правительство"
        }
    },
    {
        "id": 1059,
        "en": "dawn",
        "sound": "[dLn]",
        "ru": {
            "n-": "рассвет"
        }
    },
    {
        "id": 1060,
        "en": "trail",
        "sound": "[treIl]",
        "ru": {
            "n-": "след;",
            "v-": "выслеживать"
        }
    },
    {
        "id": 1061,
        "en": "plant",
        "sound": "[plRnt]",
        "ru": {
            "n-": "растение;",
            "v-": "сажать (растения); 2) завод, фабрика"
        }
    },
    {
        "id": 1062,
        "en": "final",
        "sound": "['faInl]",
        "ru": {
            "n-": "финал;",
            "a-": "последний"
        }
    },
    {
        "id": 1063,
        "en": "passenger",
        "sound": "['pxsInGq]",
        "ru": {
            "n-": "пассажир"
        }
    },
    {
        "id": 1064,
        "en": "pool",
        "sound": "[pHl]",
        "ru": {
            "n-": "бассейн"
        }
    },
    {
        "id": 1065,
        "en": "town",
        "sound": "[taun]",
        "ru": {
            "n-": "город"
        }
    },
    {
        "id": 1066,
        "en": "wash",
        "sound": "[wOS]",
        "ru": {
            "v-": "мыть(ся); умываться"
        }
    },
    {
        "id": 1067,
        "en": "pace",
        "sound": "[peIs]",
        "ru": {
            "n-": "шаг;",
            "v-": "шагать"
        }
    },
    {
        "id": 1068,
        "en": "smash",
        "sound": "[smxS]",
        "ru": {
            "n-": "столкновение; гибель; крах;",
            "v-": "разбить(ся) вдребезги"
        }
    },
    {
        "id": 1069,
        "en": "television",
        "sound": "['telI\"vIZn]",
        "ru": {
            "n-": "телевидение"
        }
    },
    {
        "id": 1070,
        "en": "panic",
        "sound": "['pxnIk]",
        "ru": {
            "n-": "паника;",
            "a-": "панический;",
            "v-": "пугать; впадать в панику"
        }
    },
    {
        "id": 1071,
        "en": "self",
        "sound": "[self]",
        "ru": {
            "n-": "сам; pref- само-"
        }
    },
    {
        "id": 1072,
        "en": "admit",
        "sound": "[qd'mIt]",
        "ru": {
            "v-": "впускать; принимать; признавать"
        }
    },
    {
        "id": 1073,
        "en": "directly",
        "sound": "[dI'rektlI]",
        "ru": {
            "adv-": "прямо; немедленно"
        }
    },
    {
        "id": 1074,
        "en": "serve",
        "sound": "[sWv]",
        "ru": {
            "v-": "служить; обслуживать; состоять на службе"
        }
    },
    {
        "id": 1075,
        "en": "map",
        "sound": "[mxp]",
        "ru": {
            "n-": "карта (геогр.)"
        }
    },
    {
        "id": 1076,
        "en": "fat",
        "sound": "[fxt]",
        "ru": {
            "n-": "жир;",
            "a-": "жирный; толстый"
        }
    },
    {
        "id": 1077,
        "en": "van",
        "sound": "[vxn]",
        "ru": {
            "n-": "фургон; багажн. вагон"
        }
    },
    {
        "id": 1078,
        "en": "commander",
        "sound": "[kq'mRndq]",
        "ru": {
            "n-": "командир"
        }
    },
    {
        "id": 1079,
        "en": "goddamn",
        "sound": "['gOddxm]",
        "ru": {
            "n-": "проклятие;",
            "v-": "проклинать"
        }
    },
    {
        "id": 1080,
        "en": "somehow",
        "sound": "['sAmhau]",
        "ru": {
            "adv-": "как-нибудь"
        }
    },
    {
        "id": 1081,
        "en": "post",
        "sound": "[poust]",
        "ru": {
            "n-": "почта;",
            "v-": "отправлять по почте"
        }
    },
    {
        "id": 1082,
        "en": "frighten",
        "sound": "['fraItn]",
        "ru": {
            "v-": "пугать"
        }
    },
    {
        "id": 1083,
        "en": "continuous",
        "sound": "[kqn'tInjuqs]",
        "ru": {
            "a-": "непрерывный; длительный"
        }
    },
    {
        "id": 1084,
        "en": "blind",
        "sound": "[blaInd]",
        "ru": {
            "n-": "штора;",
            "a-": "слепой;",
            "v-": "ослеплять"
        }
    },
    {
        "id": 1085,
        "en": "jerk",
        "sound": "[GWk]",
        "ru": {
            "n-": "резкое движение, толчок;",
            "v-": "резко толкать, дергать"
        }
    },
    {
        "id": 1086,
        "en": "blink",
        "sound": "[blINk]",
        "ru": {
            "v-": "мигать; мерцать"
        }
    },
    {
        "id": 1087,
        "en": "boss",
        "sound": "[bOs]",
        "ru": {
            "n-": "хозяин, босс"
        }
    },
    {
        "id": 1088,
        "en": "nor",
        "sound": "[nL]",
        "ru": {
            "cj-": "ни; также не"
        }
    },
    {
        "id": 1089,
        "en": "operation",
        "sound": "[\"Opq'reISn]",
        "ru": {
            "n-": "действие"
        }
    },
    {
        "id": 1090,
        "en": "glad",
        "sound": "[glxd]",
        "ru": {
            "a-": "радостный, довольный"
        }
    },
    {
        "id": 1091,
        "en": "pistol",
        "sound": "['pIstl]",
        "ru": {
            "n-": "пистолет"
        }
    },
    {
        "id": 1092,
        "en": "suggest",
        "sound": "[sq'Gest]",
        "ru": {
            "v-": "предлагать"
        }
    },
    {
        "id": 1093,
        "en": "teach",
        "sound": "[tJC]",
        "ru": {
            "v-": "учить"
        },
        "irregular": "taught; taught [tLt]"
    },
    {
        "id": 1094,
        "en": "although",
        "sound": "[Ll'Dou]",
        "ru": {
            "cj-": "хотя"
        }
    },
    {
        "id": 1095,
        "en": "lucky",
        "sound": "['lAkI]",
        "ru": {
            "a-": "счастливый"
        }
    },
    {
        "id": 1096,
        "en": "rule",
        "sound": "[rHl]",
        "ru": {
            "n-": "правило;",
            "v-": "управлять"
        }
    },
    {
        "id": 1097,
        "en": "apart",
        "sound": "[q'pRt]",
        "ru": {
            "adv-": "в стороне; отдельно"
        }
    },
    {
        "id": 1098,
        "en": "bloody",
        "sound": "['blAdI]",
        "ru": {
            "a-": "кровавый"
        }
    },
    {
        "id": 1099,
        "en": "flip",
        "sound": "[flIp]",
        "ru": {
            "n-": "легкий удар, щелчок;",
            "v-": "слегка ударить, щелкнуть; смахнуть"
        }
    },
    {
        "id": 1100,
        "en": "flesh",
        "sound": "[fleS]",
        "ru": {
            "n-": "тело, плоть"
        }
    },
    {
        "id": 1101,
        "en": "witness",
        "sound": "['wItnIs]",
        "ru": {
            "n-": "свидетель; очевидец;",
            "v-": "быть свидетелем, видеть"
        }
    },
    {
        "id": 1102,
        "en": "quarter",
        "sound": "['kwLtq]",
        "ru": {
            "n-": "четвертая часть, четверть; район города, квартал"
        }
    },
    {
        "id": 1103,
        "en": "relax",
        "sound": "[rI'lxks]",
        "ru": {
            "v-": "расслаблять(ся)"
        }
    },
    {
        "id": 1104,
        "en": "clearly",
        "sound": "['klIqlI]",
        "ru": {
            "adv-": "ясно; очевидно"
        }
    },
    {
        "id": 1105,
        "en": "repeat",
        "sound": "[rI'pJt]",
        "ru": {
            "v-": "повторять"
        }
    },
    {
        "id": 1106,
        "en": "asleep",
        "sound": "[q'slJp]",
        "ru": {
            "a-": "спящий"
        }
    },
    {
        "id": 1107,
        "en": "helicopter",
        "sound": "['helIkOptq]",
        "ru": {
            "n-": "вертолет"
        }
    },
    {
        "id": 1108,
        "en": "killer",
        "sound": "['kIlq]",
        "ru": {
            "n-": "убийца; ам. гангстер"
        }
    },
    {
        "id": 1109,
        "en": "member",
        "sound": "['membq]",
        "ru": {
            "n-": "член, участник"
        }
    },
    {
        "id": 1110,
        "en": "parent",
        "sound": "['pFqrqnt]",
        "ru": {
            "n-": "родитель"
        }
    },
    {
        "id": 1111,
        "en": "odd",
        "sound": "[Od]",
        "ru": {
            "a-": "нечетный; лишний; странный; 2) odds",
            "n-": "разница; шансы"
        }
    },
    {
        "id": 1112,
        "en": "bomb",
        "sound": "[bOm]",
        "ru": {
            "n-": "бомба;",
            "v-": "бомбить"
        }
    },
    {
        "id": 1113,
        "en": "release",
        "sound": "[rI'lJs]",
        "ru": {
            "v-": "освобождать; выпускать (на волю); выпустить/опубликовать"
        }
    },
    {
        "id": 1114,
        "en": "unless",
        "sound": "[qn'les]",
        "ru": {
            "cj-": "если не"
        }
    },
    {
        "id": 1115,
        "en": "punch",
        "sound": "[pAnC]",
        "ru": {
            "n-": "компостер",
            "v-": "наносить удар кулаком; 2)"
        }
    },
    {
        "id": 1116,
        "en": "history",
        "sound": "['hIstqrI]",
        "ru": {
            "n-": "история"
        }
    },
    {
        "id": 1117,
        "en": "busy",
        "sound": "['bIzI]",
        "ru": {
            "a-": "занятой"
        }
    },
    {
        "id": 1118,
        "en": "bond",
        "sound": "[bOnd]",
        "ru": {
            "n-": "связь, узы; оковы"
        }
    },
    {
        "id": 1119,
        "en": "copy",
        "sound": "['kOpI]",
        "ru": {
            "n-": "копия;",
            "v-": "копировать"
        }
    },
    {
        "id": 1120,
        "en": "accept",
        "sound": "[qk'sept]",
        "ru": {
            "v-": "соглашаться (с)"
        }
    },
    {
        "id": 1121,
        "en": "destroy",
        "sound": "[dI'strOI]",
        "ru": {
            "v-": "разрушать"
        }
    },
    {
        "id": 1122,
        "en": "anymore",
        "sound": "['enI\"mL]",
        "ru": {
            "adv-": "обычно в отриц. предл. в знач. больше не; редко в утверд. в знач. когда-нибудь еще"
        }
    },
    {
        "id": 1123,
        "en": "cab",
        "sound": "[kxb]",
        "ru": {
            "n-": "такси"
        }
    },
    {
        "id": 1124,
        "en": "experience",
        "sound": "[Ik'spIqrIqns]",
        "ru": {
            "n-": "опыт; впечатление;",
            "v-": "испытывать; переживать"
        }
    },
    {
        "id": 1125,
        "en": "shove",
        "sound": "[SAv]",
        "ru": {
            "n-": "толчок;",
            "v-": "толкать(ся)"
        }
    },
    {
        "id": 1126,
        "en": "bastard",
        "sound": "['bxstqd]",
        "ru": {
            "n-": "незаконнорожденный ребенок; разг.-груб. ублюдок и т.п."
        }
    },
    {
        "id": 1127,
        "en": "fool",
        "sound": "[fHl]",
        "ru": {
            "n-": "дурак;",
            "v-": "(о)дурачить"
        }
    },
    {
        "id": 1128,
        "en": "fold",
        "sound": "[fould]",
        "ru": {
            "n-": "складка, сгиб;",
            "v-": "складывать(ся); сгибать(ся)"
        }
    },
    {
        "id": 1129,
        "en": "twelve",
        "sound": "[twelv]",
        "ru": {
            "num-": "двенадцать"
        }
    },
    {
        "id": 1130,
        "en": "evidence",
        "sound": "['evIdqns]",
        "ru": {
            "n-": "свидетельство; доказательство, улика"
        }
    },
    {
        "id": 1131,
        "en": "bus",
        "sound": "[bAs]",
        "ru": {
            "n-": "автобус"
        }
    },
    {
        "id": 1132,
        "en": "brief",
        "sound": "[brJf]",
        "ru": {
            "n-": "резюме;",
            "a-": "краткий;",
            "v-": "кратко излагать"
        }
    },
    {
        "id": 1133,
        "en": "tap",
        "sound": "[txp]",
        "ru": {
            "n-": "стук; легкий удар;",
            "v-": "постучать"
        }
    },
    {
        "id": 1134,
        "en": "drift",
        "sound": "[drIft]",
        "ru": {
            "n-": "медленное течение; дрейф и др.;",
            "v-": "дрейфовать; бездействовать"
        }
    },
    {
        "id": 1135,
        "en": "prove",
        "sound": "[prHv]",
        "ru": {
            "v-": "доказывать; подтверждать; оказываться"
        }
    },
    {
        "id": 1136,
        "en": "personal",
        "sound": "['pWsnql]",
        "ru": {
            "a-": "личный"
        }
    },
    {
        "id": 1137,
        "en": "rub",
        "sound": "[rAb]",
        "ru": {
            "v-": "тереть(ся); натирать"
        }
    },
    {
        "id": 1138,
        "en": "interrupt",
        "sound": "[\"Intq'rApt]",
        "ru": {
            "v-": "прерывать"
        }
    },
    {
        "id": 1139,
        "en": "brush",
        "sound": "[brAS]",
        "ru": {
            "n-": "щетка; кисть;",
            "v-": "чистить (щеткой)"
        }
    },
    {
        "id": 1140,
        "en": "rope",
        "sound": "[roup]",
        "ru": {
            "n-": "веревка; канат; трос"
        }
    },
    {
        "id": 1141,
        "en": "alarm",
        "sound": "[q'lRm]",
        "ru": {
            "n-": "тревога;",
            "v-": "поднять тревогу"
        }
    },
    {
        "id": 1142,
        "en": "aware",
        "sound": "[q'weq]",
        "ru": {
            "a-": "сознающий, знающий"
        }
    },
    {
        "id": 1143,
        "en": "east",
        "sound": "[Jst]",
        "ru": {
            "n-": "восток;",
            "a-": "восточный"
        }
    },
    {
        "id": 1144,
        "en": "terrible",
        "sound": "['terIbl]",
        "ru": {
            "a-": "страшный"
        }
    },
    {
        "id": 1145,
        "en": "tip",
        "sound": "[tIp]",
        "ru": {
            "n-": "кончик; наконечник; 2)",
            "v-": "давать \"на чай\""
        }
    },
    {
        "id": 1146,
        "en": "spring",
        "sound": "[sprIN]",
        "ru": {
            "n-": "прыжок;",
            "v-": "прыгать"
        },
        "irregular": "sprang [sprxN]; sprung [sprAN]"
    },
    {
        "id": 1147,
        "en": "protect",
        "sound": "[prq'tekt]",
        "ru": {
            "v-": "защищать"
        }
    },
    {
        "id": 1148,
        "en": "involve",
        "sound": "[In'vOlv]",
        "ru": {
            "v-": "вовлекать"
        }
    },
    {
        "id": 1149,
        "en": "whip",
        "sound": "[wIp]",
        "ru": {
            "n-": "кнут;",
            "v-": "хлестать"
        }
    },
    {
        "id": 1150,
        "en": "lunch",
        "sound": "[lAnC]",
        "ru": {
            "n-": "ленч, второй завтрак"
        }
    },
    {
        "id": 1151,
        "en": "reporter",
        "sound": "[rI'pLtq]",
        "ru": {
            "n-": "репортер"
        }
    },
    {
        "id": 1152,
        "en": "bell",
        "sound": "[bel]",
        "ru": {
            "n-": "звонок; колокол"
        }
    },
    {
        "id": 1153,
        "en": "suspect",
        "sound": "[sq'spekt]",
        "ru": {
            "v-": "подозревать; полагать, предполагать"
        }
    },
    {
        "id": 1154,
        "en": "evil",
        "sound": "['Jvl]",
        "ru": {
            "n-": "зло; порок;",
            "a-": "злой"
        }
    },
    {
        "id": 1155,
        "en": "booth",
        "sound": "[bHD]",
        "ru": {
            "n-": "будка; киоск; палатка"
        }
    },
    {
        "id": 1156,
        "en": "tone",
        "sound": "[toun]",
        "ru": {
            "n-": "тон (голоса и т.п.)"
        }
    },
    {
        "id": 1157,
        "en": "chamber",
        "sound": "['CeImbe]",
        "ru": {
            "n-": "комната; палата (торг., мед.); кабинет; камера"
        }
    },
    {
        "id": 1158,
        "en": "shower",
        "sound": "['Sauq]",
        "ru": {
            "n-": "ливень; душ; обилие;",
            "v-": "литься; заваливать"
        }
    },
    {
        "id": 1159,
        "en": "examine",
        "sound": "[Ig'zxmIn]",
        "ru": {
            "v-": "рассматривать; исследовать; экзаменовать"
        }
    },
    {
        "id": 1160,
        "en": "sweet",
        "sound": "[swJt]",
        "ru": {
            "a-": "сладкий; милый"
        }
    },
    {
        "id": 1161,
        "en": "choice",
        "sound": "[COIs]",
        "ru": {
            "n-": "выбор"
        }
    },
    {
        "id": 1162,
        "en": "palm",
        "sound": "[pRm]",
        "ru": {
            "n-": "1) пальма; 2) ладонь"
        }
    },
    {
        "id": 1163,
        "en": "assume",
        "sound": "[q'sjHm]",
        "ru": {
            "v-": "допускать"
        }
    },
    {
        "id": 1164,
        "en": "obviously",
        "sound": "['ObvIqslI]",
        "ru": {
            "adv-": "очевидно"
        }
    },
    {
        "id": 1165,
        "en": "traffic",
        "sound": "['trxfIk]",
        "ru": {
            "n-": "движение (уличное, ж/д); транспорт"
        }
    },
    {
        "id": 1166,
        "en": "hook",
        "sound": "[huk]",
        "ru": {
            "n-": "крюк;",
            "v-": "цеплять крючком; застегивать на крючок"
        }
    },
    {
        "id": 1167,
        "en": "wrist",
        "sound": "[rIst]",
        "ru": {
            "n-": "запястье; манжета"
        }
    },
    {
        "id": 1168,
        "en": "cabin",
        "sound": "['kxbIn]",
        "ru": {
            "n-": "кабина; каюта"
        }
    },
    {
        "id": 1169,
        "en": "enemy",
        "sound": "['enqmI]",
        "ru": {
            "n-": "враг, неприятель"
        }
    },
    {
        "id": 1170,
        "en": "smoke",
        "sound": "[smouk]",
        "ru": {
            "n-": "дым;",
            "v-": "дымить(ся)"
        }
    },
    {
        "id": 1171,
        "en": "silver",
        "sound": "['sIlvq]",
        "ru": {
            "n-": "серебро;",
            "a-": "серебрянный"
        }
    },
    {
        "id": 1172,
        "en": "pipe",
        "sound": "[paIp]",
        "ru": {
            "n-": "труба; трубопровод; трубка (курительная) и др."
        }
    },
    {
        "id": 1173,
        "en": "normal",
        "sound": "['nLml]",
        "ru": {
            "a-": "нормальный"
        }
    },
    {
        "id": 1174,
        "en": "chase",
        "sound": "[CeIs]",
        "ru": {
            "n-": "погоня;",
            "v-": "гнаться (за)"
        }
    },
    {
        "id": 1175,
        "en": "secretary",
        "sound": "['sekrqtrI]",
        "ru": {
            "n-": "секретарь"
        }
    },
    {
        "id": 1176,
        "en": "discover",
        "sound": "[dIs'kAve]",
        "ru": {
            "v-": "узнавать; обнаруживать; открывать"
        }
    },
    {
        "id": 1177,
        "en": "wine",
        "sound": "[waIn]",
        "ru": {
            "n-": "вино"
        }
    },
    {
        "id": 1178,
        "en": "gasp",
        "sound": "[gRsp]",
        "ru": {
            "v-": "задыхаться"
        }
    },
    {
        "id": 1179,
        "en": "fail",
        "sound": "[feIl]",
        "ru": {
            "v-": "потерпеть неудачу; не суметь; провалить(ся) на экзаменах"
        }
    },
    {
        "id": 1180,
        "en": "dive",
        "sound": "[daIv]",
        "ru": {
            "n-": "ныряние (в воду); внезапное движение, рывок;",
            "v-": "нырять"
        }
    },
    {
        "id": 1181,
        "en": "breathe",
        "sound": "[brJD]",
        "ru": {
            "v-": "дышать"
        }
    },
    {
        "id": 1182,
        "en": "moon",
        "sound": "[mHn]",
        "ru": {
            "n-": "луна"
        }
    },
    {
        "id": 1183,
        "en": "dissolve",
        "sound": "[dI'zOlv]",
        "ru": {
            "v-": "растворять(ся)"
        }
    },
    {
        "id": 1184,
        "en": "sex",
        "sound": "[seks]",
        "ru": {
            "n-": "пол, секс;",
            "a-": "половой, сексуальный"
        }
    },
    {
        "id": 1185,
        "en": "ace",
        "sound": "[eIs]",
        "ru": {
            "n-": "очко; карт. туз; ас; главный козырь; лучший; высшая оценка"
        }
    },
    {
        "id": 1186,
        "en": "newspaper",
        "sound": "['njHs\"peIpq]",
        "ru": {
            "n-": "газета"
        }
    },
    {
        "id": 1187,
        "en": "twice",
        "sound": "[twaIs]",
        "ru": {
            "adv-": "дважды; вдвое"
        }
    },
    {
        "id": 1188,
        "en": "choose",
        "sound": "[CHz]",
        "ru": {
            "v-": "выбирать; избирать; предпочитать"
        },
        "irregular": "chose [Couz]; chosen ['Couzn]"
    },
    {
        "id": 1189,
        "en": "float",
        "sound": "[flout]",
        "ru": {
            "n-": "плавать (на поверхности); парить, плыть"
        }
    },
    {
        "id": 1190,
        "en": "uncle",
        "sound": "['ANkl]",
        "ru": {
            "n-": "дядя"
        }
    },
    {
        "id": 1191,
        "en": "aim",
        "sound": "[eIm]",
        "ru": {
            "n-": "цель;",
            "v-": "целиться"
        }
    },
    {
        "id": 1192,
        "en": "public",
        "sound": "['pAblIk]",
        "ru": {
            "n-": "публика;",
            "a-": "общественный; публичный; народный"
        }
    },
    {
        "id": 1193,
        "en": "section",
        "sound": "['sekSn]",
        "ru": {
            "n-": "секция; отдел"
        }
    },
    {
        "id": 1194,
        "en": "dangerous",
        "sound": "['deInGrqs]",
        "ru": {
            "a-": "опасный"
        }
    },
    {
        "id": 1195,
        "en": "shine",
        "sound": "[SaIn]",
        "ru": {
            "n-": "блеск, свет;",
            "v-": "сиять; блестеть"
        },
        "irregular": "shone; shone [SOn]"
    },
    {
        "id": 1196,
        "en": "gentleman",
        "sound": "['Gentlmqn]",
        "ru": {
            "n-": "джентльмен; господин; (мн. ч. gentlemen)"
        }
    },
    {
        "id": 1197,
        "en": "song",
        "sound": "[sON]",
        "ru": {
            "n-": "песня"
        }
    },
    {
        "id": 1198,
        "en": "effect",
        "sound": "[I'fekt]",
        "ru": {
            "n-": "результат"
        }
    },
    {
        "id": 1199,
        "en": "nearby",
        "sound": "['nIqbaI]",
        "ru": {
            "a-": "близлежащий, соседний;",
            "adv-": "поблизости, рядом"
        }
    },
    {
        "id": 1200,
        "en": "flower",
        "sound": "['flauq]",
        "ru": {
            "n-": "цветок"
        }
    },
    {
        "id": 1201,
        "en": "faint",
        "sound": "[feInt]",
        "ru": {
            "a-": "слабый;",
            "v-": "ослабевать"
        }
    },
    {
        "id": 1202,
        "en": "pat",
        "sound": "[pxt]",
        "ru": {
            "n-": "похлопывание, шлѐпанье;",
            "v-": "похлопывать;",
            "adv-": "разг. кстати"
        }
    },
    {
        "id": 1203,
        "en": "confuse",
        "sound": "[kqn'fjHz]",
        "ru": {
            "v-": "смущать"
        }
    },
    {
        "id": 1204,
        "en": "visit",
        "sound": "['vIzIt]",
        "ru": {
            "n-": "посещение;",
            "v-": "посещать"
        }
    },
    {
        "id": 1205,
        "en": "film",
        "sound": "[fIlm]",
        "ru": {
            "n-": "пленка; фильм"
        }
    },
    {
        "id": 1206,
        "en": "future",
        "sound": "['fjHCq]",
        "ru": {
            "n-": "будущее"
        }
    },
    {
        "id": 1207,
        "en": "queen",
        "sound": "[kwJn]",
        "ru": {
            "n-": "королева"
        }
    },
    {
        "id": 1208,
        "en": "stomach",
        "sound": "['stAmqk]",
        "ru": {
            "n-": "желудок"
        }
    },
    {
        "id": 1209,
        "en": "demand",
        "sound": "[dI'mRnd]",
        "ru": {
            "n-": "требование; нужда;",
            "v-": "требовать; нуждаться"
        }
    },
    {
        "id": 1210,
        "en": "department",
        "sound": "[dI'pRtmqnt]",
        "ru": {
            "n-": "отдел"
        }
    },
    {
        "id": 1211,
        "en": "boot",
        "sound": "[bHt]",
        "ru": {
            "n-": "ботинок; сапог"
        }
    },
    {
        "id": 1212,
        "en": "trap",
        "sound": "[trxp]",
        "ru": {
            "n-": "капкан; западня; ловушка;",
            "v-": "поймать в ловушку"
        }
    },
    {
        "id": 1213,
        "en": "mess",
        "sound": "[mes]",
        "ru": {
            "n-": "беспорядок; путаница;",
            "v-": "производить беспорядок"
        }
    },
    {
        "id": 1214,
        "en": "battle",
        "sound": "['bxtl]",
        "ru": {
            "n-": "битва, сражение, бой"
        }
    },
    {
        "id": 1215,
        "en": "photograph",
        "sound": "['foutqgrRf]",
        "ru": {
            "n-": "фото, снимок;",
            "v-": "фотографировать, снимать"
        }
    },
    {
        "id": 1216,
        "en": "impossible",
        "sound": "[Im'pOsIbl]",
        "ru": {
            "a-": "невозможный"
        }
    },
    {
        "id": 1217,
        "en": "mad",
        "sound": "[mxd]",
        "ru": {
            "a-": "сумасшедший"
        }
    },
    {
        "id": 1218,
        "en": "guest",
        "sound": "[gest]",
        "ru": {
            "n-": "гость"
        }
    },
    {
        "id": 1219,
        "en": "joke",
        "sound": "[Gouk]",
        "ru": {
            "n-": "шутка;",
            "v-": "шутить"
        }
    },
    {
        "id": 1220,
        "en": "taste",
        "sound": "[teIst]",
        "ru": {
            "n-": "вкус; склонность;",
            "v-": "(по)пробовать (на вкус)"
        }
    },
    {
        "id": 1221,
        "en": "forth",
        "sound": "[fLT]",
        "ru": {
            "adv-": "вперед; впредь"
        }
    },
    {
        "id": 1222,
        "en": "fist",
        "sound": "[fIst]",
        "ru": {
            "n-": "кулак"
        }
    },
    {
        "id": 1223,
        "en": "squeeze",
        "sound": "[skwJz]",
        "ru": {
            "v-": "сжимать; втискивать(ся), протискиваться"
        }
    },
    {
        "id": 1224,
        "en": "especially",
        "sound": "[Is'peSlI]",
        "ru": {
            "adv-": "особенно"
        }
    },
    {
        "id": 1225,
        "en": "stun",
        "sound": "[stAn]",
        "ru": {
            "v-": "оглушать, ошеломлять"
        }
    },
    {
        "id": 1226,
        "en": "wooden",
        "sound": "['wudn]",
        "ru": {
            "a-": "деревянный"
        }
    },
    {
        "id": 1227,
        "en": "leather",
        "sound": "['leDq]",
        "ru": {
            "n-": "кожа (выделанная)"
        }
    },
    {
        "id": 1228,
        "en": "slap",
        "sound": "[slxp]",
        "ru": {
            "v-": "хлопать, шлепать"
        }
    },
    {
        "id": 1229,
        "en": "purpose",
        "sound": "['pWpqs]",
        "ru": {
            "n-": "цель, намерение"
        }
    },
    {
        "id": 1230,
        "en": "band",
        "sound": "[bxnd]",
        "ru": {
            "n-": "1) лента, полоска; 2) группа (людей); банда; оркестр"
        }
    },
    {
        "id": 1231,
        "en": "tough",
        "sound": "[tAf]",
        "ru": {
            "a-": "жесткий; стойкий"
        }
    },
    {
        "id": 1232,
        "en": "vehicle",
        "sound": "['vJIkl]",
        "ru": {
            "n-": "любое средство передвижения (автомобиль и т.п.)"
        }
    },
    {
        "id": 1233,
        "en": "focus",
        "sound": "['foukqs]",
        "ru": {
            "n-": "фокус; перен. центр;",
            "v-": "фокусировать; сосредотачивать"
        }
    },
    {
        "id": 1234,
        "en": "usually",
        "sound": "['jHZuqlI]",
        "ru": {
            "adv-": "обычно"
        }
    },
    {
        "id": 1235,
        "en": "video",
        "sound": "['vIdIou]",
        "ru": {
            "n-": "видео"
        }
    },
    {
        "id": 1236,
        "en": "luck",
        "sound": "[lAk]",
        "ru": {
            "n-": "удача, счастье"
        }
    },
    {
        "id": 1237,
        "en": "iron",
        "sound": "['aIqn]",
        "ru": {
            "n-": "железо;",
            "a-": "железный"
        }
    },
    {
        "id": 1238,
        "en": "effort",
        "sound": "['efqt]",
        "ru": {
            "n-": "усилие, попытка"
        }
    },
    {
        "id": 1239,
        "en": "duty",
        "sound": "['djHtI]",
        "ru": {
            "n-": "долг; пошлина"
        }
    },
    {
        "id": 1240,
        "en": "chick",
        "sound": "[CIk]",
        "ru": {
            "n-": "цыпленок; курятина (еда)"
        }
    },
    {
        "id": 1241,
        "en": "waste",
        "sound": "[weIst]",
        "ru": {
            "n-": "бесполезная трата; потери;",
            "v-": "тратить зря"
        }
    },
    {
        "id": 1242,
        "en": "fresh",
        "sound": "[freS]",
        "ru": {
            "a-": "свежий; новый; чистый"
        }
    },
    {
        "id": 1243,
        "en": "glare",
        "sound": "[glFq]",
        "ru": {
            "n-": "ослепительный свет; свирепый взгляд;",
            "v-": "ослепительно светить; свирепо смотреть"
        }
    },
    {
        "id": 1244,
        "en": "swear",
        "sound": "[swFq]",
        "ru": {
            "v-": "клясться; присягать; ругать(ся)"
        },
        "irregular": "swore [swL]; sworn [swLn]"
    },
    {
        "id": 1245,
        "en": "beauty",
        "sound": "['bjHtI]",
        "ru": {
            "n-": "красота; красавица"
        }
    },
    {
        "id": 1246,
        "en": "tongue",
        "sound": "[tAN]",
        "ru": {
            "n-": "язык"
        }
    },
    {
        "id": 1247,
        "en": "fun",
        "sound": "[fAn]",
        "ru": {
            "n-": "веселье, забава, шутка"
        }
    },
    {
        "id": 1248,
        "en": "cable",
        "sound": "['keIbl]",
        "ru": {
            "n-": "канат; трос; кабель"
        }
    },
    {
        "id": 1249,
        "en": "backward",
        "sound": "['bxkwqd]",
        "ru": {
            "a-": "обратный; отсталый;",
            "adv-": "(тж. ~s) назад; наоборот"
        }
    },
    {
        "id": 1250,
        "en": "honour",
        "sound": "бр. = honor ам. (1:13) ['Onq]",
        "ru": {
            "n-": "честь, слава; почет;",
            "v-": "почитать"
        }
    },
    {
        "id": 1251,
        "en": "cash",
        "sound": "[kxS]",
        "ru": {
            "n-": "наличные деньги"
        }
    },
    {
        "id": 1252,
        "en": "alien",
        "sound": "['eIlIqn]",
        "ru": {
            "n-": "чужестранец, иностранец;",
            "a-": "чужестранный; чуждый"
        }
    },
    {
        "id": 1253,
        "en": "detail",
        "sound": "['dJteIl]",
        "ru": {
            "n-": "подробность, деталь"
        }
    },
    {
        "id": 1254,
        "en": "lab",
        "sound": "[lxb]",
        "ru": {
            "n-": "лаборатория, разг. сокр. от laboratory [lq'bOrqtrI]"
        }
    },
    {
        "id": 1255,
        "en": "director",
        "sound": "[dI'rektq]",
        "ru": {
            "n-": "директор"
        }
    },
    {
        "id": 1256,
        "en": "hardly",
        "sound": "['hRdlI]",
        "ru": {
            "adv-": "едва; едва ли"
        }
    },
    {
        "id": 1257,
        "en": "clerk",
        "sound": "[klRk]",
        "ru": {
            "n-": "клерк, служащий"
        }
    },
    {
        "id": 1258,
        "en": "fence",
        "sound": "[fens]",
        "ru": {
            "n-": "забор, изгородь;",
            "v-": "огораживать"
        }
    },
    {
        "id": 1259,
        "en": "crime",
        "sound": "[kraIm]",
        "ru": {
            "n-": "преступление"
        }
    },
    {
        "id": 1260,
        "en": "strip",
        "sound": "[strIp]",
        "ru": {
            "n-": "полоска, лента;",
            "v-": "сдирать; раздевать(ся); снимать"
        }
    },
    {
        "id": 1261,
        "en": "familiar",
        "sound": "[fq'mIlIq]",
        "ru": {
            "a-": "знакомый"
        }
    },
    {
        "id": 1262,
        "en": "local",
        "sound": "['loukl]",
        "ru": {
            "a-": "местный"
        }
    },
    {
        "id": 1263,
        "en": "price",
        "sound": "[praIs]",
        "ru": {
            "n-": "цена"
        }
    },
    {
        "id": 1264,
        "en": "signal",
        "sound": "['sIgnql]",
        "ru": {
            "n-": "сигнал; знак;",
            "v-": "сигнализировать"
        }
    },
    {
        "id": 1265,
        "en": "giant",
        "sound": "['GaIqnt]",
        "ru": {
            "n-": "великан, гигант, титан;",
            "a-": "громадный, гигантский"
        }
    },
    {
        "id": 1266,
        "en": "chain",
        "sound": "[CeIn]",
        "ru": {
            "n-": "цепь; цепочка; узы; последовательность;",
            "v-": "сковывать"
        }
    },
    {
        "id": 1267,
        "en": "smart",
        "sound": "[smRt]",
        "ru": {
            "a-": "толковый; умный"
        }
    },
    {
        "id": 1268,
        "en": "various",
        "sound": "['vFqrIqs]",
        "ru": {
            "a-": "различный"
        }
    },
    {
        "id": 1269,
        "en": "pants",
        "sound": "[pxnts]",
        "ru": {
            "n-": "брюки; трусы"
        }
    },
    {
        "id": 1270,
        "en": "opposite",
        "sound": "['OpqzIt]",
        "ru": {
            "n-": "противоположность;",
            "a-": "противоположный; prep,",
            "adv-": "против, напротив"
        }
    },
    {
        "id": 1271,
        "en": "breathing",
        "sound": "['brJDIN]",
        "ru": {
            "n-": "дыхание"
        }
    },
    {
        "id": 1272,
        "en": "object",
        "sound": "1) ['ObGIkt]",
        "ru": {
            "n-": "предмет; вещь; цель; 2) [qb'Gekt]",
            "v-": "возражать"
        }
    },
    {
        "id": 1273,
        "en": "grass",
        "sound": "[grRs]",
        "ru": {
            "n-": "трава"
        }
    },
    {
        "id": 1274,
        "en": "apparently",
        "sound": "[q'pxrqntlI]",
        "ru": {
            "adv-": "очевидно"
        }
    },
    {
        "id": 1275,
        "en": "lobby",
        "sound": "['lObI]",
        "ru": {
            "n-": "прихожая, кулуары"
        }
    },
    {
        "id": 1276,
        "en": "dial",
        "sound": "['daIql]",
        "ru": {
            "n-": "циферблат; диск телефона;",
            "v-": "набирать номер, звонить"
        }
    },
    {
        "id": 1277,
        "en": "naked",
        "sound": "['neIkId]",
        "ru": {
            "a-": "обнаженный"
        }
    },
    {
        "id": 1278,
        "en": "intend",
        "sound": "[In'tend]",
        "ru": {
            "v-": "намереваться"
        }
    },
    {
        "id": 1279,
        "en": "honey",
        "sound": "['hAnI]",
        "ru": {
            "n-": "мед; разг. милая, милый, дорогой, душечка"
        }
    },
    {
        "id": 1280,
        "en": "support",
        "sound": "[sq'pLt]",
        "ru": {
            "n-": "поддержка;",
            "v-": "поддерживать; помогать"
        }
    },
    {
        "id": 1281,
        "en": "blond(e)",
        "sound": "[blOnd]",
        "ru": {
            "n-": "блондин; (-e) блондинка;",
            "a-": "белокурый"
        }
    },
    {
        "id": 1282,
        "en": "print",
        "sound": "[prInt]",
        "ru": {
            "n-": "отпечаток; след; шрифт;",
            "v-": "печатать; публиковать"
        }
    },
    {
        "id": 1283,
        "en": "suck",
        "sound": "[sAk]",
        "ru": {
            "v-": "сосать; всасывать"
        }
    },
    {
        "id": 1284,
        "en": "garage",
        "sound": "['gxrRZ]",
        "ru": {
            "n-": "гараж"
        }
    },
    {
        "id": 1285,
        "en": "pattern",
        "sound": "['pxtn]",
        "ru": {
            "n-": "образец; модель"
        }
    },
    {
        "id": 1286,
        "en": "clutch",
        "sound": "[klAC]",
        "ru": {
            "n-": "когти; лапы; хватка;",
            "v-": "схватить(ся); зажать, стиснуть"
        }
    },
    {
        "id": 1287,
        "en": "faith",
        "sound": "[feIT]",
        "ru": {
            "n-": "вера, доверие"
        }
    },
    {
        "id": 1288,
        "en": "sand",
        "sound": "[sxnd]",
        "ru": {
            "n-": "песок"
        }
    },
    {
        "id": 1289,
        "en": "tail",
        "sound": "[teIl]",
        "ru": {
            "n-": "хвост и др."
        }
    },
    {
        "id": 1290,
        "en": "student",
        "sound": "['stjHdqnt]",
        "ru": {
            "n-": "студент"
        }
    },
    {
        "id": 1291,
        "en": "swim",
        "sound": "[swIm]",
        "ru": {
            "v-": "плыть, плавать"
        },
        "irregular": "swam [swxm]; swum [swAm]"
    },
    {
        "id": 1292,
        "en": "dirty",
        "sound": "['dWtI]",
        "ru": {
            "a-": "грязный"
        }
    },
    {
        "id": 1293,
        "en": "forehead",
        "sound": "['fOrId]",
        "ru": {
            "n-": "лоб"
        }
    },
    {
        "id": 1294,
        "en": "strength",
        "sound": "[streNT]",
        "ru": {
            "n-": "сила; прочность"
        }
    },
    {
        "id": 1295,
        "en": "anger",
        "sound": "['xNgq]",
        "ru": {
            "n-": "гнев"
        }
    },
    {
        "id": 1296,
        "en": "laughter",
        "sound": "['lRftq]",
        "ru": {
            "n-": "смех, хохот"
        }
    },
    {
        "id": 1297,
        "en": "distant",
        "sound": "['dIstqnt]",
        "ru": {
            "a-": "отдаленный"
        }
    },
    {
        "id": 1298,
        "en": "subject",
        "sound": "['sAbGIkt]",
        "ru": {
            "n-": "предмет (учебный); тема, предмет (разговора)"
        }
    },
    {
        "id": 1299,
        "en": "remind",
        "sound": "[rI'maInd]",
        "ru": {
            "v-": "напоминать"
        }
    },
    {
        "id": 1300,
        "en": "garden",
        "sound": "['gRdn]",
        "ru": {
            "n-": "сад"
        }
    },
    {
        "id": 1301,
        "en": "forest",
        "sound": "['fOrIst]",
        "ru": {
            "n-": "лес"
        }
    },
    {
        "id": 1302,
        "en": "camp",
        "sound": "[kxmp]",
        "ru": {
            "n-": "лагерь"
        }
    },
    {
        "id": 1303,
        "en": "snake",
        "sound": "[sneIk]",
        "ru": {
            "n-": "змея"
        }
    },
    {
        "id": 1304,
        "en": "echo",
        "sound": "['ekou]",
        "ru": {
            "n-": "эхо; отражение;",
            "v-": "отражаться; вторить"
        }
    },
    {
        "id": 1305,
        "en": "partner",
        "sound": "['pRtnq]",
        "ru": {
            "n-": "партнер"
        }
    },
    {
        "id": 1306,
        "en": "military",
        "sound": "['mIlItrI]",
        "ru": {
            "a-": "военный"
        }
    },
    {
        "id": 1307,
        "en": "client",
        "sound": "['klaIqnt]",
        "ru": {
            "n-": "клиент"
        }
    },
    {
        "id": 1308,
        "en": "everywhere",
        "sound": "['evrIweq]",
        "ru": {
            "adv-": "везде, (по)всюду"
        }
    },
    {
        "id": 1309,
        "en": "skull",
        "sound": "[skAl]",
        "ru": {
            "n-": "череп; устн. голова"
        }
    },
    {
        "id": 1310,
        "en": "exchange",
        "sound": "[Iks'CeInG]",
        "ru": {
            "n-": "обмен;",
            "v-": "менять(ся)"
        }
    },
    {
        "id": 1311,
        "en": "program",
        "sound": "= programme (8:1) ['prougrxm]",
        "ru": {
            "n-": "программа; план;",
            "v-": "планировать"
        }
    },
    {
        "id": 1312,
        "en": "usual",
        "sound": "['jHZuql]",
        "ru": {
            "a-": "обыкновенный"
        }
    },
    {
        "id": 1313,
        "en": "restaurant",
        "sound": "['restrLN]",
        "ru": {
            "n-": "ресторан"
        }
    },
    {
        "id": 1314,
        "en": "equipment",
        "sound": "[I'kwIpmqnt]",
        "ru": {
            "n-": "снаряжение; оборудование"
        }
    },
    {
        "id": 1315,
        "en": "hug",
        "sound": "[hAg]",
        "ru": {
            "n-": "крепкое объятие;",
            "v-": "крепко обнимать"
        }
    },
    {
        "id": 1316,
        "en": "difficult",
        "sound": "['dIfIkqlt]",
        "ru": {
            "a-": "трудный"
        }
    },
    {
        "id": 1317,
        "en": "till",
        "sound": "[tIl]",
        "ru": {
            "prep-": "до; в отриц. предл. не раньше;",
            "cj-": "(до тех пор) пока"
        }
    },
    {
        "id": 1318,
        "en": "buck",
        "sound": "[bAk]",
        "ru": {
            "n-": "доллар и др."
        }
    },
    {
        "id": 1319,
        "en": "react",
        "sound": "[rI'xkt]",
        "ru": {
            "v-": "реагировать"
        }
    },
    {
        "id": 1320,
        "en": "rich",
        "sound": "[rIC]",
        "ru": {
            "a-": "богатый; плодородный"
        }
    },
    {
        "id": 1321,
        "en": "swallow",
        "sound": "['swOlou]",
        "ru": {
            "n-": "глоток;",
            "v-": "глотать"
        }
    },
    {
        "id": 1322,
        "en": "curtain",
        "sound": "['kWtn]",
        "ru": {
            "n-": "занавеска; занавес;",
            "v-": "занавешивать"
        }
    },
    {
        "id": 1323,
        "en": "bury",
        "sound": "['berI]",
        "ru": {
            "v-": "хоронить; зарывать"
        }
    },
    {
        "id": 1324,
        "en": "stream",
        "sound": "[strJm]",
        "ru": {
            "n-": "поток; течение; ручей;",
            "v-": "течь, вытекать, струиться"
        }
    },
    {
        "id": 1325,
        "en": "president",
        "sound": "['prezIdqnt]",
        "ru": {
            "n-": "президент"
        }
    },
    {
        "id": 1326,
        "en": "wanna",
        "sound": "['wOnq]",
        "ru": {
            "noPart": "разг. = want to – хотеть (чего-либо)"
        }
    },
    {
        "id": 1327,
        "en": "soul",
        "sound": "[soul]",
        "ru": {
            "n-": "душа; дух; сущность"
        }
    },
    {
        "id": 1328,
        "en": "duck",
        "sound": "[dAk]",
        "ru": {
            "n-": "утка; 2)",
            "v-": "быстро наклоняться; увертываться; нырять"
        }
    },
    {
        "id": 1329,
        "en": "bolt",
        "sound": "[boult]",
        "ru": {
            "n-": "засов, задвижка; шпингалет; болт;",
            "v-": "запирать на засов и др."
        }
    },
    {
        "id": 1330,
        "en": "display",
        "sound": "[dis'pleI]",
        "ru": {
            "n-": "показ; выставка;",
            "v-": "показывать, демонстрировать"
        }
    },
    {
        "id": 1331,
        "en": "golden",
        "sound": "['gouldn]",
        "ru": {
            "a-": "золотой"
        }
    },
    {
        "id": 1332,
        "en": "pressure",
        "sound": "['preSq]",
        "ru": {
            "n-": "давление; нажим"
        }
    },
    {
        "id": 1333,
        "en": "indicate",
        "sound": "['IndIkeIt]",
        "ru": {
            "v-": "указывать"
        }
    },
    {
        "id": 1334,
        "en": "bay",
        "sound": "[beI]",
        "ru": {
            "n-": "залив, бухта"
        }
    },
    {
        "id": 1335,
        "en": "startle",
        "sound": "['stRtl]",
        "ru": {
            "v-": "испугать; поразить, удивить"
        }
    },
    {
        "id": 1336,
        "en": "avoid",
        "sound": "[q'vOId]",
        "ru": {
            "v-": "избегать; уклоняться (от)"
        }
    },
    {
        "id": 1337,
        "en": "breast",
        "sound": "[brest]",
        "ru": {
            "n-": "грудь"
        }
    },
    {
        "id": 1338,
        "en": "condition",
        "sound": "[kqn'dIS(q)n]",
        "ru": {
            "n-": "условие; состояние;",
            "v-": "обусловливать, определять"
        }
    },
    {
        "id": 1339,
        "en": "sip",
        "sound": "[sIp]",
        "ru": {
            "n-": "глоток; немного;",
            "v-": "пить мал. глотками; пробовать"
        }
    },
    {
        "id": 1340,
        "en": "code",
        "sound": "[koud]",
        "ru": {
            "n-": "кодекс; код;",
            "v-": "кодировать"
        }
    },
    {
        "id": 1341,
        "en": "account",
        "sound": "[q'kaunt]",
        "ru": {
            "n-": "счет; отчет; причина;",
            "v-": "считать, признавать"
        }
    },
    {
        "id": 1342,
        "en": "tremble",
        "sound": "['trembl]",
        "ru": {
            "v-": "дрожать"
        }
    },
    {
        "id": 1343,
        "en": "data",
        "sound": "['deItq]",
        "ru": {
            "n-": "данные, факты"
        }
    },
    {
        "id": 1344,
        "en": "mutter",
        "sound": "['mAtq]",
        "ru": {
            "v-": "бормотать"
        }
    },
    {
        "id": 1345,
        "en": "anywhere",
        "sound": "['enIweq]",
        "ru": {
            "adv-": "где-нибудь (в вопр.); нигде (в отриц.); где угодно (в утверд.)"
        }
    },
    {
        "id": 1346,
        "en": "library",
        "sound": "['laIbrqrI]",
        "ru": {
            "n-": "библиотека"
        }
    },
    {
        "id": 1347,
        "en": "welcome",
        "sound": "['welkqm]",
        "ru": {
            "n-": "париветствие;",
            "v-": "приветствовать"
        }
    },
    {
        "id": 1348,
        "en": "prison",
        "sound": "['prIzn]",
        "ru": {
            "n-": "тюрьма"
        }
    },
    {
        "id": 1349,
        "en": "kneel",
        "sound": "[nJl]",
        "ru": {
            "v-": "становиться на колени"
        },
        "irregular": "knelt [nelt], kneeled [nJld]; knelt, kneeled"
    },
    {
        "id": 1350,
        "en": "lake",
        "sound": "[leIk]",
        "ru": {
            "n-": "озеро"
        }
    },
    {
        "id": 1351,
        "en": "instant",
        "sound": "['Instqnt]",
        "ru": {
            "n-": "мгновение;",
            "a-": "немедленный; растворимый"
        }
    },
    {
        "id": 1352,
        "en": "airport",
        "sound": "['FqpLt]",
        "ru": {
            "n-": "аэропорт"
        }
    },
    {
        "id": 1353,
        "en": "cast",
        "sound": "[kRst]",
        "ru": {
            "v-": "(cast; cast) бросать, кидать; лить, отливать (металл)"
        }
    },
    {
        "id": 1354,
        "en": "indeed",
        "sound": "[In'dJd]",
        "ru": {
            "adv-": "в самом деле"
        }
    },
    {
        "id": 1355,
        "en": "claim",
        "sound": "[kleIm]",
        "ru": {
            "n-": "требование; утверждение;",
            "v-": "требовать; заявлять"
        }
    },
    {
        "id": 1356,
        "en": "target",
        "sound": "['tRgIt]",
        "ru": {
            "n-": "цель, мишень"
        }
    },
    {
        "id": 1357,
        "en": "pin",
        "sound": "[pIn]",
        "ru": {
            "n-": "булавка; шпилька; брошка;",
            "v-": "скалывать, скреплять; прикалывать"
        }
    },
    {
        "id": 1358,
        "en": "respect",
        "sound": "[rI'spekt]",
        "ru": {
            "n-": "уважение; отношение;",
            "v-": "уважать"
        }
    },
    {
        "id": 1359,
        "en": "art",
        "sound": "[Rt]",
        "ru": {
            "n-": "искусство"
        }
    },
    {
        "id": 1360,
        "en": "easily",
        "sound": "['JzIlI]",
        "ru": {
            "adv-": "легко, без труда"
        }
    },
    {
        "id": 1361,
        "en": "attorney",
        "sound": "[q'tWnI]",
        "ru": {
            "n-": "адвокат; юрист"
        }
    },
    {
        "id": 1362,
        "en": "fair",
        "sound": "[fFq]",
        "ru": {
            "a-": "прекрасный; чистый; белокурый; честный, справедливый"
        }
    },
    {
        "id": 1363,
        "en": "muscle",
        "sound": "['mAsl]",
        "ru": {
            "n-": "мышца, мускл"
        }
    },
    {
        "id": 1364,
        "en": "horror",
        "sound": "['hOrq]",
        "ru": {
            "n-": "ужас"
        }
    },
    {
        "id": 1365,
        "en": "bare",
        "sound": "[bFq]",
        "ru": {
            "a-": "голый, обнаженный"
        }
    },
    {
        "id": 1366,
        "en": "beast",
        "sound": "[bJst]",
        "ru": {
            "n-": "зверь; животное"
        }
    },
    {
        "id": 1367,
        "en": "pleasure",
        "sound": "['pleZq]",
        "ru": {
            "n-": "удовольствие"
        }
    },
    {
        "id": 1368,
        "en": "puzzle",
        "sound": "['pAzl]",
        "ru": {
            "n-": "вопрос, ставящий в тупик; загадка;",
            "v-": "озадачивать, смущать"
        }
    },
    {
        "id": 1369,
        "en": "grave",
        "sound": "[greIv]",
        "ru": {
            "n-": "могила; 2)",
            "a-": "серьезный, важный"
        }
    },
    {
        "id": 1370,
        "en": "trace",
        "sound": "[treIs]",
        "ru": {
            "n-": "след;",
            "v-": "прослеживать"
        }
    },
    {
        "id": 1371,
        "en": "excite",
        "sound": "[Ik'saIt]",
        "ru": {
            "v-": "возбуждать, волновать"
        }
    },
    {
        "id": 1372,
        "en": "length",
        "sound": "[leNT]",
        "ru": {
            "n-": "длина"
        }
    },
    {
        "id": 1373,
        "en": "mount",
        "sound": "[maunt]",
        "ru": {
            "n-": "холм, гора"
        }
    },
    {
        "id": 1374,
        "en": "risk",
        "sound": "[rIsk]",
        "ru": {
            "n-": "риск;",
            "v-": "рисковать"
        }
    },
    {
        "id": 1375,
        "en": "ocean",
        "sound": "['ouSn]",
        "ru": {
            "n-": "океан"
        }
    },
    {
        "id": 1376,
        "en": "energy",
        "sound": "['enqGI]",
        "ru": {
            "n-": "энергия,"
        }
    },
    {
        "id": 1377,
        "en": "amaze",
        "sound": "[q'meIz]",
        "ru": {
            "v-": "изумлять, поражать"
        }
    },
    {
        "id": 1378,
        "en": "envelope",
        "sound": "[In'velqp]",
        "ru": {
            "v-": "обертывать, окутывать; n ['envIloup] оболочка"
        },
        "irregular": ""
    },
    {
        "id": 1379,
        "en": "contain",
        "sound": "[kqn'teIn]",
        "ru": {
            "v-": "вмещать"
        }
    },
    {
        "id": 1380,
        "en": "audience",
        "sound": "['LdIqns]",
        "ru": {
            "n-": "публика; зрители"
        }
    },
    {
        "id": 1381,
        "en": "stumble",
        "sound": "['stAmbl]",
        "ru": {
            "v-": "спотыкаться; запинаться"
        }
    },
    {
        "id": 1382,
        "en": "leader",
        "sound": "['lJdq]",
        "ru": {
            "n-": "руководитель; лидер"
        }
    },
    {
        "id": 1383,
        "en": "difference",
        "sound": "['dIfrqns]",
        "ru": {
            "n-": "разница"
        }
    },
    {
        "id": 1384,
        "en": "barrel",
        "sound": "['bxrql]",
        "ru": {
            "n-": "бочка; баррель= 159 л."
        }
    },
    {
        "id": 1385,
        "en": "wonderful",
        "sound": "['wAndqf(u)l]",
        "ru": {
            "a-": "удивительный, замечательный"
        }
    },
    {
        "id": 1386,
        "en": "demon",
        "sound": "= daemon (2,3:1) ['dJmqn]",
        "ru": {
            "n-": "демон, сатана, дьявол; дух"
        }
    },
    {
        "id": 1387,
        "en": "besides",
        "sound": "[bI'saIdz]",
        "ru": {
            "prep-": "кроме;",
            "adv-": "кроме того"
        }
    },
    {
        "id": 1388,
        "en": "dirt",
        "sound": "[dWt]",
        "ru": {
            "n-": "грязь"
        }
    },
    {
        "id": 1389,
        "en": "accident",
        "sound": "['xksIdqnt]",
        "ru": {
            "n-": "случай; авария"
        }
    },
    {
        "id": 1390,
        "en": "steady",
        "sound": "['stedI]",
        "ru": {
            "a-": "твердый, устойчивый;",
            "v-": "делать(ся) устойчивым"
        }
    },
    {
        "id": 1391,
        "en": "interior",
        "sound": "[In'tIqrIq]",
        "ru": {
            "n-": "внутренность;",
            "a-": "внутренний"
        }
    },
    {
        "id": 1392,
        "en": "mission",
        "sound": "['mISqn]",
        "ru": {
            "n-": "миссия, делегация; призвание; поручение"
        }
    },
    {
        "id": 1393,
        "en": "victim",
        "sound": "['vIktIm]",
        "ru": {
            "n-": "жертва"
        }
    },
    {
        "id": 1394,
        "en": "absolutely",
        "sound": "[\"xbsq'lHtlI]",
        "ru": {
            "adv-": "абсолютно; совершенно"
        }
    },
    {
        "id": 1395,
        "en": "patient",
        "sound": "['peISnt]",
        "ru": {
            "n-": "пациент, больной;",
            "a-": "терпеливый"
        }
    },
    {
        "id": 1396,
        "en": "occur",
        "sound": "[q'kW]",
        "ru": {
            "v-": "случаться, происходить; встречаться; приходить на ум"
        }
    },
    {
        "id": 1397,
        "en": "alright",
        "sound": "['Ll'raIt]",
        "ru": {
            "a-": "удовлетворительный;",
            "adv-": "ладно!, согласен!"
        }
    },
    {
        "id": 1398,
        "en": "receive",
        "sound": "[rI'sJv]",
        "ru": {
            "v-": "получать"
        }
    },
    {
        "id": 1399,
        "en": "split",
        "sound": "[splIt]",
        "ru": {
            "v-": "(split; split) раскалывать(ся); расщеплять(ся);",
            "n-": "трещина, щель"
        }
    },
    {
        "id": 1400,
        "en": "practice",
        "sound": "['prxktIs]",
        "ru": {
            "n-": "тренировка;",
            "v-": "(practise бр. = practice ам.) упражнять(ся)"
        }
    },
    {
        "id": 1401,
        "en": "upstairs",
        "sound": "[\"Ap'stFqz]",
        "ru": {
            "adv-": "вверх (по лестнице), наверх; наверху"
        }
    },
    {
        "id": 1402,
        "en": "panel",
        "sound": "['pxnl]",
        "ru": {
            "n-": "щит (управления); панель; список, перечень"
        }
    },
    {
        "id": 1403,
        "en": "ease",
        "sound": "[Jz]",
        "ru": {
            "n-": "покой;",
            "v-": "успокаивать"
        }
    },
    {
        "id": 1404,
        "en": "advance",
        "sound": "[qd'vRns]",
        "ru": {
            "n-": "продвижение; успех; прогресс;",
            "v-": "делать успехи"
        }
    },
    {
        "id": 1405,
        "en": "couch",
        "sound": "[kauC]",
        "ru": {
            "n-": "диван, кушетка"
        }
    },
    {
        "id": 1406,
        "en": "correct",
        "sound": "[kq'rekt]",
        "ru": {
            "a-": "правильный;",
            "v-": "исправлять"
        }
    },
    {
        "id": 1407,
        "en": "firm",
        "sound": "[fWm]",
        "ru": {
            "n-": "фирма;",
            "a-": "твердый, крепкий; стойкий; решительный"
        }
    },
    {
        "id": 1408,
        "en": "smooth",
        "sound": "[smHD]",
        "ru": {
            "a-": "гладкий, ровный;",
            "v-": "сглаживать"
        }
    },
    {
        "id": 1409,
        "en": "powerful",
        "sound": "['pauqf(u)l]",
        "ru": {
            "a-": "мощный"
        }
    },
    {
        "id": 1410,
        "en": "slight",
        "sound": "[slaIt]",
        "ru": {
            "a-": "легкий, слабый"
        }
    },
    {
        "id": 1411,
        "en": "scan",
        "sound": "[skxn]",
        "ru": {
            "v-": "сканировать; бегло просматривать; внимательно смотреть"
        }
    },
    {
        "id": 1412,
        "en": "credit",
        "sound": "['kredIt]",
        "ru": {
            "n-": "вера, доверие"
        }
    },
    {
        "id": 1413,
        "en": "unit",
        "sound": "['jHnIt]",
        "ru": {
            "n-": "единица; целое; единица (измерен.); секция; блок; воен.: часть"
        }
    },
    {
        "id": 1414,
        "en": "glove",
        "sound": "[glAv]",
        "ru": {
            "n-": "перчатка;",
            "v-": "надевать перчатку"
        }
    },
    {
        "id": 1415,
        "en": "claw",
        "sound": "[klL]",
        "ru": {
            "n-": "коготь; клешня; груб. рука, лапа;",
            "v-": "царапать; вцепиться"
        }
    },
    {
        "id": 1416,
        "en": "gear",
        "sound": "[gIq]",
        "ru": {
            "n-": "механизм; передача (скорость); приспособления"
        }
    },
    {
        "id": 1417,
        "en": "engineer",
        "sound": "[\"en(d)ZI'nIq]",
        "ru": {
            "n-": "инженер;",
            "v-": "создавать, проектировать"
        }
    },
    {
        "id": 1418,
        "en": "awake",
        "sound": "[q'weIk]",
        "ru": {
            "v-": "будить; просыпаться"
        },
        "irregular": "awoke [q'wouk]; awoke, awoken [q'woukn]"
    },
    {
        "id": 1419,
        "en": "ought",
        "sound": "[Lt]",
        "ru": {
            "v-": "(долженствование) следует, следовало бы, должен"
        }
    },
    {
        "id": 1420,
        "en": "stack",
        "sound": "[stxk]",
        "ru": {
            "n-": "стог; куча, груда; множество;",
            "v-": "складывать в кучу"
        }
    },
    {
        "id": 1421,
        "en": "flow",
        "sound": "[flou]",
        "ru": {
            "n-": "течение, поток (тж. перен.);",
            "v-": "течь, литься; струиться"
        }
    },
    {
        "id": 1422,
        "en": "whom",
        "sound": "[hHm]",
        "ru": {
            "pron-": "кого; которого"
        }
    },
    {
        "id": 1423,
        "en": "belong",
        "sound": "[bI'lON]",
        "ru": {
            "v-": "принадлежать"
        }
    },
    {
        "id": 1424,
        "en": "ancient",
        "sound": "['eInSqnt]",
        "ru": {
            "a-": "древний; античный"
        }
    },
    {
        "id": 1425,
        "en": "decision",
        "sound": "[dI'sIZn]",
        "ru": {
            "n-": "решение"
        }
    },
    {
        "id": 1426,
        "en": "direct",
        "sound": "[dI'rekt]",
        "ru": {
            "a-": "прямой;",
            "v-": "направлять; руководить, управлять"
        }
    },
    {
        "id": 1427,
        "en": "cap",
        "sound": "[kxp]",
        "ru": {
            "n-": "кепка, шапка; верхушка"
        }
    },
    {
        "id": 1428,
        "en": "highway",
        "sound": "['haIweI]",
        "ru": {
            "n-": "шоссе"
        }
    },
    {
        "id": 1429,
        "en": "exist",
        "sound": "[Ig'zIst]",
        "ru": {
            "v-": "существовать, жить"
        }
    },
    {
        "id": 1430,
        "en": "oil",
        "sound": "[OIl]",
        "ru": {
            "n-": "нефть;",
            "v-": "смазывать"
        }
    },
    {
        "id": 1431,
        "en": "monster",
        "sound": "['mOnstq]",
        "ru": {
            "n-": "чудовище"
        }
    },
    {
        "id": 1432,
        "en": "missing",
        "sound": "['mIsIN]",
        "ru": {
            "a-": "отсутствующий"
        }
    },
    {
        "id": 1433,
        "en": "temple",
        "sound": "['templ]",
        "ru": {
            "n-": "1) храм; 2) висок"
        }
    },
    {
        "id": 1434,
        "en": "spit",
        "sound": "[spIt]",
        "ru": {
            "v-": "плевать(ся); брызгать слюной; моросить, накрапывать (о дожде)"
        },
        "irregular": "spat; spat [spxt]; уст. также spit; spit"
    },
    {
        "id": 1435,
        "en": "ma",
        "sound": "[mR]",
        "ru": {
            "n-": "мама (сокр. от mamma)"
        }
    },
    {
        "id": 1436,
        "en": "chin",
        "sound": "[CIn]",
        "ru": {
            "n-": "подбородок"
        }
    },
    {
        "id": 1437,
        "en": "priest",
        "sound": "[prJst]",
        "ru": {
            "n-": "священник"
        }
    },
    {
        "id": 1438,
        "en": "extend",
        "sound": "[Iks'tend]",
        "ru": {
            "v-": "протягивать; простирать(ся); распространять"
        }
    },
    {
        "id": 1439,
        "en": "sake",
        "sound": "[seIk]",
        "ru": {
            "n-": "for the ~ of, for smb.'s ~ для/ради кого-либо"
        }
    },
    {
        "id": 1440,
        "en": "magazine",
        "sound": "[\"mxgq'zJn]",
        "ru": {
            "n-": "журнал"
        }
    },
    {
        "id": 1441,
        "en": "mass",
        "sound": "[mxs]",
        "ru": {
            "n-": "масса, множество"
        }
    },
    {
        "id": 1442,
        "en": "ticket",
        "sound": "['tIkIt]",
        "ru": {
            "n-": "билет; ярлык"
        }
    },
    {
        "id": 1443,
        "en": "weather",
        "sound": "['weDq]",
        "ru": {
            "n-": "погода"
        }
    },
    {
        "id": 1444,
        "en": "damage",
        "sound": "['dxmIG]",
        "ru": {
            "n-": "вред, повреждение; ущерб;",
            "v-": "повреждать, портить"
        }
    },
    {
        "id": 1445,
        "en": "spill",
        "sound": "[spIl]",
        "ru": {
            "v-": "проливать(ся); рассыпать(ся); разг. сбросить, вывалить; проболтаться"
        },
        "irregular": "бр. spilt, spilt [spIlt], ам. spilled, spilled [spIld]"
    },
    {
        "id": 1446,
        "en": "refuse",
        "sound": "[rI'fjHz]",
        "ru": {
            "v-": "отказывать(ся)"
        }
    },
    {
        "id": 1447,
        "en": "vision",
        "sound": "['vIZn]",
        "ru": {
            "n-": "зрение; зрелище"
        }
    },
    {
        "id": 1448,
        "en": "event",
        "sound": "[I'vent]",
        "ru": {
            "n-": "событие; случай"
        }
    },
    {
        "id": 1449,
        "en": "flashlight",
        "sound": "['flxSlaIt]",
        "ru": {
            "n-": "карманный фонарь"
        }
    },
    {
        "id": 1450,
        "en": "manager",
        "sound": "['mxnIGq]",
        "ru": {
            "n-": "менеджер"
        }
    },
    {
        "id": 1451,
        "en": "presence",
        "sound": "['prezns]",
        "ru": {
            "n-": "присутствие"
        }
    },
    {
        "id": 1452,
        "en": "drawer",
        "sound": "[drL]",
        "ru": {
            "n-": "ящик (стола, комода)"
        }
    },
    {
        "id": 1453,
        "en": "thumb",
        "sound": "[TAm]",
        "ru": {
            "n-": "большой палец (руки); выступ;",
            "v-": "захватывать; уминать"
        }
    },
    {
        "id": 1454,
        "en": "favour",
        "sound": "бр. = favor ам. (1:12) ['feIvq]",
        "ru": {
            "n-": "благосклонность;",
            "v-": "благоволить"
        }
    },
    {
        "id": 1455,
        "en": "march",
        "sound": "[mRC]",
        "ru": {
            "n-": "марш, переход;",
            "v-": "маршировать"
        }
    },
    {
        "id": 1456,
        "en": "create",
        "sound": "[krJ'eIt]",
        "ru": {
            "v-": "творить, создавать"
        }
    },
    {
        "id": 1457,
        "en": "jam",
        "sound": "[Gxm]",
        "ru": {
            "n-": "варенье, джем",
            "v-": "набивать(ся) битком; 2)"
        }
    },
    {
        "id": 1458,
        "en": "danger",
        "sound": "['deInGq]",
        "ru": {
            "n-": "опасность"
        }
    },
    {
        "id": 1459,
        "en": "respond",
        "sound": "[rI'spOnd]",
        "ru": {
            "v-": "отвечать; отзываться, реагировать"
        }
    },
    {
        "id": 1460,
        "en": "summer",
        "sound": "['sAmq]",
        "ru": {
            "n-": "лето"
        }
    },
    {
        "id": 1461,
        "en": "assistant",
        "sound": "[q'sIstqnt]",
        "ru": {
            "n-": "ассистент"
        }
    },
    {
        "id": 1462,
        "en": "massive",
        "sound": "['mxsIv]",
        "ru": {
            "a-": "массивный"
        }
    },
    {
        "id": 1463,
        "en": "century",
        "sound": "['senCqrI]",
        "ru": {
            "n-": "век, столетие"
        }
    },
    {
        "id": 1464,
        "en": "shatter",
        "sound": "['Sxtq]",
        "ru": {
            "v-": "разбить(ся) вдребезги; расстраивать (здоровье)"
        }
    },
    {
        "id": 1465,
        "en": "female",
        "sound": "['fJmeIl]",
        "ru": {
            "a-": "женский;",
            "n-": "женщина"
        }
    },
    {
        "id": 1466,
        "en": "strain",
        "sound": "[streIn]",
        "ru": {
            "n-": "натяжение; напряжение;",
            "v-": "натягивать(ся); напрягать(ся)"
        }
    },
    {
        "id": 1467,
        "en": "justice",
        "sound": "['GAstIs]",
        "ru": {
            "n-": "правосудие"
        }
    },
    {
        "id": 1468,
        "en": "project",
        "sound": "1) ['prOGekt]",
        "ru": {
            "n-": "проект, план; 2) [prq'Gekt]",
            "v-": "проектировать"
        }
    },
    {
        "id": 1469,
        "en": "emergency",
        "sound": "[I'mWGqnsI]",
        "ru": {
            "n-": "крайняя необходимость; критическое положение"
        }
    },
    {
        "id": 1470,
        "en": "customer",
        "sound": "['kAstqmq]",
        "ru": {
            "n-": "покупатель; клиент"
        }
    },
    {
        "id": 1471,
        "en": "pad",
        "sound": "[pxd]",
        "ru": {
            "n-": "подушка; блокнот"
        }
    },
    {
        "id": 1472,
        "en": "collapse",
        "sound": "[kq'lxps]",
        "ru": {
            "n-": "обвал; крах;",
            "v-": "рушиться; терпеть неудачу/крах"
        }
    },
    {
        "id": 1473,
        "en": "arrest",
        "sound": "[q'rest]",
        "ru": {
            "n-": "арест;",
            "v-": "арестовывать"
        }
    },
    {
        "id": 1474,
        "en": "trick",
        "sound": "[trIk]",
        "ru": {
            "n-": "хитрость, обман; фокус, трюк;",
            "v-": "обманывать"
        }
    },
    {
        "id": 1475,
        "en": "series",
        "sound": "['sIqrJz]",
        "ru": {
            "n-": "ряд; серия"
        }
    },
    {
        "id": 1476,
        "en": "electric(al)",
        "sound": "[I'lektrIk(l)]",
        "ru": {
            "a-": "электрический"
        }
    },
    {
        "id": 1477,
        "en": "bug",
        "sound": "[bAg]",
        "ru": {
            "n-": "жук, насекомое; потайной микрофон;",
            "v-": "вести тайн наблюд."
        }
    },
    {
        "id": 1478,
        "en": "lap",
        "sound": "[lxp]",
        "ru": {
            "n-": "колени; 2)",
            "v-": "жадно пить, лакать"
        }
    },
    {
        "id": 1479,
        "en": "rail",
        "sound": "[reIl]",
        "ru": {
            "n-": "ограда; перила; поручень; рельс; разг. ж/д дорога"
        }
    },
    {
        "id": 1480,
        "en": "sixty",
        "sound": "['sIkstI]",
        "ru": {
            "num-": "шестьдесят"
        }
    },
    {
        "id": 1481,
        "en": "porch",
        "sound": "[pLC]",
        "ru": {
            "n-": "крыльцо; веранда"
        }
    },
    {
        "id": 1482,
        "en": "screw",
        "sound": "[skrH]",
        "ru": {
            "n-": "винт и др.;",
            "v-": "завинчивать; вращать; выжимать и др."
        }
    },
    {
        "id": 1483,
        "en": "cliff",
        "sound": "[klIf]",
        "ru": {
            "n-": "(отвесная) скала, утес"
        }
    },
    {
        "id": 1484,
        "en": "pump",
        "sound": "[pAmp]",
        "ru": {
            "n-": "насос;",
            "v-": "накачивать, качать; выталкивать"
        }
    },
    {
        "id": 1485,
        "en": "design",
        "sound": "[dI'zaIn]",
        "ru": {
            "n-": "замысел; проект, план;",
            "v-": "задумывать; проектировать"
        }
    },
    {
        "id": 1486,
        "en": "response",
        "sound": "[rI'spOns]",
        "ru": {
            "n-": "ответ; отклик"
        }
    },
    {
        "id": 1487,
        "en": "fellow",
        "sound": "['felou]",
        "ru": {
            "n-": "парень, приятель"
        }
    },
    {
        "id": 1488,
        "en": "supply",
        "sound": "[sq'plaI]",
        "ru": {
            "n-": "снабжение; запас;",
            "v-": "снабжать; поставлять"
        }
    },
    {
        "id": 1489,
        "en": "mill",
        "sound": "[mIl]",
        "ru": {
            "n-": "мельница; фабрика"
        }
    },
    {
        "id": 1490,
        "en": "alley",
        "sound": "['xlI]",
        "ru": {
            "n-": "узкая улица; аллея"
        }
    },
    {
        "id": 1491,
        "en": "style",
        "sound": "[staIl]",
        "ru": {
            "n-": "стиль; менера; мода"
        }
    },
    {
        "id": 1492,
        "en": "tube",
        "sound": "[tjHb]",
        "ru": {
            "n-": "труба; тюбик; метро (в Лондоне)"
        }
    },
    {
        "id": 1493,
        "en": "bowl",
        "sound": "[boul]",
        "ru": {
            "n-": "шар (в играх);",
            "v-": "играть в шары"
        }
    },
    {
        "id": 1494,
        "en": "orange",
        "sound": "['OrInG]",
        "ru": {
            "n-": "апельсин;",
            "a-": "оранжевый"
        }
    },
    {
        "id": 1495,
        "en": "perfectly",
        "sound": "['pWfIktlI]",
        "ru": {
            "adv-": "совершенно, вполне; превосходно"
        }
    },
    {
        "id": 1496,
        "en": "shotgun",
        "sound": "['SOtgAn]",
        "ru": {
            "n-": "пулемет"
        }
    },
    {
        "id": 1497,
        "en": "necessary",
        "sound": "['nesIsrI]",
        "ru": {
            "a-": "необходимый"
        }
    },
    {
        "id": 1498,
        "en": "pink",
        "sound": "[pINk]",
        "ru": {
            "a-": "розовый"
        }
    },
    {
        "id": 1499,
        "en": "obvious",
        "sound": "['ObvIqs]",
        "ru": {
            "a-": "очевидный, явный"
        }
    },
    {
        "id": 1500,
        "en": "village",
        "sound": "['vIlIG]",
        "ru": {
            "n-": "поселок; деревня"
        }
    },
    {
        "id": 1501,
        "en": "policeman",
        "sound": "[pq'lJsmqn]",
        "ru": {
            "n-": "полицейский; (мн. ч. policemen)"
        }
    },
    {
        "id": 1502,
        "en": "closet",
        "sound": "['klOzIt]",
        "ru": {
            "n-": "амер. чулан; стенной шкаф"
        }
    },
    {
        "id": 1503,
        "en": "result",
        "sound": "[rI'zAlt]",
        "ru": {
            "n-": "результат, следствие;",
            "v-": "происходить в результате"
        }
    },
    {
        "id": 1504,
        "en": "regard",
        "sound": "[rI'gRd]",
        "ru": {
            "n-": "внимание; ~s привет;",
            "v-": "смотреть (на); считать; касаться"
        }
    },
    {
        "id": 1505,
        "en": "possibly",
        "sound": "['pOsIblI]",
        "ru": {
            "adv-": "возможно"
        }
    },
    {
        "id": 1506,
        "en": "hiss",
        "sound": "[hIs]",
        "ru": {
            "n-": "шипение; свист;",
            "v-": "шипеть; свистеть"
        }
    },
    {
        "id": 1507,
        "en": "sidewalk",
        "sound": "['saIdwLk]",
        "ru": {
            "n-": "тротуар"
        }
    },
    {
        "id": 1508,
        "en": "stride",
        "sound": "[straId]",
        "ru": {
            "v-": "шагать (большими шагами);",
            "n-": "большой шаг"
        },
        "irregular": "strode [stroud]; stridden ['strIdn]"
    },
    {
        "id": 1509,
        "en": "breakfast",
        "sound": "['brekfqst]",
        "ru": {
            "n-": "завтрак"
        }
    },
    {
        "id": 1510,
        "en": "trunk",
        "sound": "[trANk]",
        "ru": {
            "n-": "ствол; туловище; дорожный сундук; плавки ~s"
        }
    },
    {
        "id": 1511,
        "en": "stranger",
        "sound": "['streInDq]",
        "ru": {
            "n-": "чужестранец, нездешний; незнакомец, посторонний"
        }
    },
    {
        "id": 1512,
        "en": "dude",
        "sound": "[djHd]",
        "ru": {
            "n-": "парень; тип; пижон"
        }
    },
    {
        "id": 1513,
        "en": "employ",
        "sound": "[Im'plOI]",
        "ru": {
            "v-": "давать работу, нанимать; применять; employee [\"emplOI'J]",
            "n-": "работодатель, предприниматель"
        },
        "irregular": ""
    },
    {
        "id": 1514,
        "en": "branch",
        "sound": "[brRnC]",
        "ru": {
            "n-": "ветка; рукав; отрасль; филиал, отделение"
        }
    },
    {
        "id": 1515,
        "en": "enormous",
        "sound": "[I'nLmqs]",
        "ru": {
            "a-": "громадный"
        }
    },
    {
        "id": 1516,
        "en": "site",
        "sound": "[saIt]",
        "ru": {
            "n-": "место, участок"
        }
    },
    {
        "id": 1517,
        "en": "lamp",
        "sound": "[lxmp]",
        "ru": {
            "n-": "лампа"
        }
    },
    {
        "id": 1518,
        "en": "butt",
        "sound": "[bAt]",
        "ru": {
            "n-": "1) торец; рукоятка (пистолета, меча);",
            "v-": "ударять головой, бодать"
        }
    },
    {
        "id": 1519,
        "en": "cage",
        "sound": "[keIG]",
        "ru": {
            "n-": "клетка; жарг. тюрьма"
        }
    },
    {
        "id": 1520,
        "en": "college",
        "sound": "['kOlIG]",
        "ru": {
            "n-": "колледж"
        }
    },
    {
        "id": 1521,
        "en": "terrify",
        "sound": "['terIfaI]",
        "ru": {
            "v-": "ужасать, внушать страх; запугивать"
        }
    },
    {
        "id": 1522,
        "en": "ruin",
        "sound": "['rHIn]",
        "ru": {
            "n-": "гибель; крушение; ~s развалины, руины;",
            "v-": "разрушать, губить"
        }
    },
    {
        "id": 1523,
        "en": "totally",
        "sound": "['toutqlI]",
        "ru": {
            "adv-": "вполне, совершенно, полностью"
        }
    },
    {
        "id": 1524,
        "en": "wander",
        "sound": "['wOndq]",
        "ru": {
            "v-": "бродить, скитаться"
        }
    },
    {
        "id": 1525,
        "en": "bore",
        "sound": "[bL]",
        "ru": {
            "n-": "скука; зануда (человек);",
            "v-": "сверлить"
        }
    },
    {
        "id": 1526,
        "en": "manner",
        "sound": "['mxnq]",
        "ru": {
            "n-": "способ; манера"
        }
    },
    {
        "id": 1527,
        "en": "yesterday",
        "sound": "['jestqdI]",
        "ru": {
            "adv-": "вчера"
        }
    },
    {
        "id": 1528,
        "en": "produce",
        "sound": "[prq'djHs]",
        "ru": {
            "v-": "производить"
        }
    },
    {
        "id": 1529,
        "en": "hood",
        "sound": "[hud]",
        "ru": {
            "n-": "капюшон; чехол; капот"
        }
    },
    {
        "id": 1530,
        "en": "cost",
        "sound": "[kOst]",
        "ru": {
            "v-": "(cost; cost) стоить;",
            "n-": "цена, стоимость"
        }
    },
    {
        "id": 1531,
        "en": "nail",
        "sound": "[neIl]",
        "ru": {
            "n-": "гвоздь;",
            "v-": "забивать гвозди; прибивать гвоздями"
        }
    },
    {
        "id": 1532,
        "en": "discuss",
        "sound": "[dIs'kAs]",
        "ru": {
            "v-": "обсуждать"
        }
    },
    {
        "id": 1533,
        "en": "shell",
        "sound": "[Sel]",
        "ru": {
            "n-": "раковина; оболочка"
        }
    },
    {
        "id": 1534,
        "en": "whistle",
        "sound": "['wIsl]",
        "ru": {
            "n-": "свист;",
            "v-": "свистеть"
        }
    },
    {
        "id": 1535,
        "en": "dock",
        "sound": "[dOk]",
        "ru": {
            "n-": "скамья подсудимых",
            "v-": "вводить в док; 2)"
        }
    },
    {
        "id": 1536,
        "en": "feature",
        "sound": "['fJCq]",
        "ru": {
            "n-": "особенность; ~s черты лица;",
            "v-": "быть характ. чертой"
        }
    },
    {
        "id": 1537,
        "en": "dining",
        "sound": "['daInIN]",
        "ru": {
            "noPart": "в составный словах dining-table обеденный стол и т.п."
        }
    },
    {
        "id": 1538,
        "en": "buzz",
        "sound": "[bAz]",
        "ru": {
            "n-": "жужжание; гул (голосов);",
            "v-": "жужжать; гудеть"
        }
    },
    {
        "id": 1539,
        "en": "heaven",
        "sound": "['hevn]",
        "ru": {
            "n-": "~(s) небо, небеса; как междометие: (о) боже!; черт возьми!"
        }
    },
    {
        "id": 1540,
        "en": "upset",
        "sound": "[Ap'set]",
        "ru": {
            "v-": "(upset; upset) расстраивать, огорчать;",
            "a-": "расстроенный"
        }
    },
    {
        "id": 1541,
        "en": "steam",
        "sound": "[stJm]",
        "ru": {
            "n-": "пар;",
            "v-": "запотевать"
        }
    },
    {
        "id": 1542,
        "en": "bunch",
        "sound": "[bAnC]",
        "ru": {
            "n-": "связка; пучок; букет; гроздь;",
            "v-": "собирать, связывать"
        }
    },
    {
        "id": 1543,
        "en": "basement",
        "sound": "['beIsmqnt]",
        "ru": {
            "n-": "основание; подвал; (полу)подвальный этаж"
        }
    },
    {
        "id": 1544,
        "en": "junior",
        "sound": "['GHnIq]",
        "ru": {
            "a-": "младший"
        }
    },
    {
        "id": 1545,
        "en": "scar",
        "sound": "[skR]",
        "ru": {
            "n-": "шрам, рубец;",
            "v-": "оставлять шрамы; перен. оставл. глубок. следы"
        }
    },
    {
        "id": 1546,
        "en": "bleed",
        "sound": "[blJd]",
        "ru": {
            "v-": "(bled; bled) кровоточить"
        }
    },
    {
        "id": 1547,
        "en": "nature",
        "sound": "['neICq]",
        "ru": {
            "n-": "природа; натура"
        }
    },
    {
        "id": 1548,
        "en": "curve",
        "sound": "[kWv]",
        "ru": {
            "n-": "кривая (линия); изгиб, поворот;",
            "v-": "изгибать(ся)"
        }
    },
    {
        "id": 1549,
        "en": "official",
        "sound": "[q'fISl]",
        "ru": {
            "n-": "чиновник;",
            "a-": "служебный; официальный"
        }
    },
    {
        "id": 1550,
        "en": "taxi",
        "sound": "['txksI]",
        "ru": {
            "n-": "такси"
        }
    },
    {
        "id": 1551,
        "en": "court",
        "sound": "[kLt]",
        "ru": {
            "n-": "1) суд; 2) двор; площ. для игр; корт"
        }
    },
    {
        "id": 1552,
        "en": "greet",
        "sound": "[grJt]",
        "ru": {
            "v-": "приветствовать; здороваться"
        }
    },
    {
        "id": 1553,
        "en": "silently",
        "sound": "['saIlqntlI]",
        "ru": {
            "adv-": "молча; тихо"
        }
    },
    {
        "id": 1554,
        "en": "rough",
        "sound": "[rAf]",
        "ru": {
            "a-": "грубый; неровный; резкий, суровый (о природе);",
            "adv-": "грубо"
        }
    },
    {
        "id": 1555,
        "en": "explosion",
        "sound": "[Iks'plouZ(q)n]",
        "ru": {
            "n-": "взрыв"
        }
    },
    {
        "id": 1556,
        "en": "piss",
        "sound": "[pIs]",
        "ru": {
            "n-": "моча;",
            "v-": "мочиться"
        }
    },
    {
        "id": 1557,
        "en": "replace",
        "sound": "[rI'pleIs]",
        "ru": {
            "v-": "ставить/класть обратно; заменять, замещать"
        }
    },
    {
        "id": 1558,
        "en": "drunk",
        "sound": "[drANk]",
        "ru": {
            "a-": "пьяный, опьяненный"
        }
    },
    {
        "id": 1559,
        "en": "process",
        "sound": "['prouses]",
        "ru": {
            "n-": "процесс; течение; ход развития;",
            "v-": "подвергать обработке"
        }
    },
    {
        "id": 1560,
        "en": "curse",
        "sound": "[kWs]",
        "ru": {
            "n-": "проклятие; ругательство;",
            "v-": "проклинать; ругаться"
        }
    },
    {
        "id": 1561,
        "en": "jungle",
        "sound": "['GANgl]",
        "ru": {
            "n-": "джунгли"
        }
    },
    {
        "id": 1562,
        "en": "seal",
        "sound": "[sJl]",
        "ru": {
            "n-": "тюлень",
            "v-": "запечатывать; скреплять печатью; 2)"
        }
    },
    {
        "id": 1563,
        "en": "dump",
        "sound": "[dAm]",
        "ru": {
            "n-": "свалка;",
            "v-": "сваливать (в кучу); выбрасывать"
        }
    },
    {
        "id": 1564,
        "en": "particular",
        "sound": "[pq'tIkjulq]",
        "ru": {
            "n-": "частность;",
            "a-": "особый; частный; отдельный"
        }
    },
    {
        "id": 1565,
        "en": "sport",
        "sound": "[spLt]",
        "ru": {
            "n-": "спорт"
        }
    },
    {
        "id": 1566,
        "en": "reaction",
        "sound": "[rI'xkSn]",
        "ru": {
            "n-": "реакция"
        }
    },
    {
        "id": 1567,
        "en": "cook",
        "sound": "[kuk]",
        "ru": {
            "n-": "повар; кухарка;",
            "v-": "готовить, варить"
        }
    },
    {
        "id": 1568,
        "en": "stir",
        "sound": "[stW]",
        "ru": {
            "v-": "шевелить(ся), двигать(ся); мешать, размешивать; волновать"
        }
    },
    {
        "id": 1569,
        "en": "intelligence",
        "sound": "[In'telIGqns]",
        "ru": {
            "n-": "ум"
        }
    },
    {
        "id": 1570,
        "en": "embarrass",
        "sound": "[Im'bxrqs]",
        "ru": {
            "v-": "смущать(ся)"
        }
    },
    {
        "id": 1571,
        "en": "seek",
        "sound": "[sJk]",
        "ru": {
            "v-": "искать, разыскивать; стремиться (к)"
        },
        "irregular": "sought; sought [sLt]"
    },
    {
        "id": 1572,
        "en": "pen",
        "sound": "[pen]",
        "ru": {
            "n-": "ручка; перо"
        }
    },
    {
        "id": 1573,
        "en": "survive",
        "sound": "[sq'vaIv]",
        "ru": {
            "v-": "пережить; выжить"
        }
    },
    {
        "id": 1574,
        "en": "central",
        "sound": "['sentrql]",
        "ru": {
            "a-": "центральный; главный"
        }
    },
    {
        "id": 1575,
        "en": "staff",
        "sound": "[stRf]",
        "ru": {
            "n-": "штат (служащих); штаб (воен.)"
        }
    },
    {
        "id": 1576,
        "en": "crouch",
        "sound": "[krauC]",
        "ru": {
            "v-": "присесть; пригнуться; низко кланяться"
        }
    },
    {
        "id": 1577,
        "en": "rabbit",
        "sound": "['rxbIt]",
        "ru": {
            "n-": "кролик"
        }
    },
    {
        "id": 1578,
        "en": "creep",
        "sound": "[krJp]",
        "ru": {
            "v-": "(crept; crept) ползать"
        }
    },
    {
        "id": 1579,
        "en": "castle",
        "sound": "['kRsl]",
        "ru": {
            "n-": "замок, дворец"
        }
    },
    {
        "id": 1580,
        "en": "observe",
        "sound": "[qb'zWv]",
        "ru": {
            "v-": "наблюдать"
        }
    },
    {
        "id": 1581,
        "en": "arrange",
        "sound": "[q'reInG]",
        "ru": {
            "v-": "располагать"
        }
    },
    {
        "id": 1582,
        "en": "scratch",
        "sound": "[skrxC]",
        "ru": {
            "n-": "царапина; скрип;",
            "v-": "царапать(ся); скрести(сь); чесать(ся)"
        }
    },
    {
        "id": 1583,
        "en": "bat",
        "sound": "[bxt]",
        "ru": {
            "n-": "1) летучая мышь; 2) бита"
        }
    },
    {
        "id": 1584,
        "en": "range",
        "sound": "[reInG]",
        "ru": {
            "n-": "ряд, линия; диапазон"
        }
    },
    {
        "id": 1585,
        "en": "murmur",
        "sound": "['mWmq]",
        "ru": {
            "n-": "журчание; бормотание;",
            "v-": "шептать, бормотать"
        }
    },
    {
        "id": 1586,
        "en": "towel",
        "sound": "['tauql]",
        "ru": {
            "n-": "полотенце"
        }
    },
    {
        "id": 1587,
        "en": "cough",
        "sound": "[kOf]",
        "ru": {
            "n-": "кашель;",
            "v-": "кашлять"
        }
    },
    {
        "id": 1588,
        "en": "hire",
        "sound": "[haIq]",
        "ru": {
            "n-": "наем; прокат;",
            "v-": "нанимать; снимать; брать на прокат"
        }
    },
    {
        "id": 1589,
        "en": "swell",
        "sound": "[swel]",
        "ru": {
            "v-": "раздуваться, набухать; опухать"
        },
        "irregular": "swelled [sweld]; swollen swouln]"
    },
    {
        "id": 1590,
        "en": "medical",
        "sound": "['medIkl]",
        "ru": {
            "a-": "медицинский"
        }
    },
    {
        "id": 1591,
        "en": "male",
        "sound": "[meIl]",
        "ru": {
            "a-": "мужской;",
            "n-": "мужчина"
        }
    },
    {
        "id": 1592,
        "en": "heel",
        "sound": "[hJl]",
        "ru": {
            "n-": "пятка; каблук;",
            "v-": "пристукивать каблуками; следовать по пятам"
        }
    },
    {
        "id": 1593,
        "en": "separate",
        "sound": "v- ['sepqreIt]",
        "ru": {
            "v-": "; разделять(ся);",
            "a-": "['seprIt] отдельный"
        },
        "irregular": "'sepqreIt] отделять(ся"
    },
    {
        "id": 1594,
        "en": "cheer",
        "sound": "[CIq]",
        "ru": {
            "n-": "одобрит. или приветств. восклицание; ура;",
            "v-": "приветствовать"
        }
    },
    {
        "id": 1595,
        "en": "aircraft",
        "sound": "['FqkrRft]",
        "ru": {
            "n-": "самолет, самолеты; авиация (мн. ч. без измен.)"
        }
    },
    {
        "id": 1596,
        "en": "convince",
        "sound": "[kqn'vIns]",
        "ru": {
            "v-": "убеждать; уверять"
        }
    },
    {
        "id": 1597,
        "en": "forever",
        "sound": "[fq'revq]",
        "ru": {
            "adv-": "навсегда, навеки"
        }
    },
    {
        "id": 1598,
        "en": "pitch",
        "sound": "[pIC]",
        "ru": {
            "n-": "бросок; подача и др;",
            "v-": "бросать, кидать и др."
        }
    },
    {
        "id": 1599,
        "en": "upper",
        "sound": "['Apq]",
        "ru": {
            "a-": "верхний; высший"
        }
    },
    {
        "id": 1600,
        "en": "treat",
        "sound": "[trJt]",
        "ru": {
            "n-": "удовольствие;",
            "v-": "обращаться (с); относиться (к); лечить; угощать"
        }
    },
    {
        "id": 1601,
        "en": "instantly",
        "sound": "['InstqntlI]",
        "ru": {
            "adv-": "немедленно"
        }
    },
    {
        "id": 1602,
        "en": "knowledge",
        "sound": "['nOlIG]",
        "ru": {
            "n-": "знание, знания"
        }
    },
    {
        "id": 1603,
        "en": "rat",
        "sound": "[rxt]",
        "ru": {
            "n-": "крыса"
        }
    },
    {
        "id": 1604,
        "en": "cave",
        "sound": "[keIv]",
        "ru": {
            "n-": "пещера; полость;",
            "v-": "выдалбливать"
        }
    },
    {
        "id": 1605,
        "en": "degree",
        "sound": "[dI'grJ]",
        "ru": {
            "n-": "степень; градус"
        }
    },
    {
        "id": 1606,
        "en": "dodge",
        "sound": "[dOG]",
        "ru": {
            "n-": "обман, уловка, хитрость;",
            "v-": "увертываться; увиливать"
        }
    },
    {
        "id": 1607,
        "en": "connect",
        "sound": "[kq'nekt]",
        "ru": {
            "v-": "соединять(ся)"
        }
    },
    {
        "id": 1608,
        "en": "prisoner",
        "sound": "['prIznq]",
        "ru": {
            "n-": "заключенный"
        }
    },
    {
        "id": 1609,
        "en": "scramble",
        "sound": "['skrxmbl]",
        "ru": {
            "v-": "карабкаться; взбираться, пробираться"
        }
    },
    {
        "id": 1610,
        "en": "visible",
        "sound": "['vIzIbl]",
        "ru": {
            "a-": "видимый; явный"
        }
    },
    {
        "id": 1611,
        "en": "pretend",
        "sound": "[prI'tend]",
        "ru": {
            "v-": "притворяться"
        }
    },
    {
        "id": 1612,
        "en": "plain",
        "sound": "[pleIn]",
        "ru": {
            "n-": "равнина;",
            "a-": "очевидный"
        }
    },
    {
        "id": 1613,
        "en": "vanish",
        "sound": "['vxnIS]",
        "ru": {
            "v-": "исчезать"
        }
    },
    {
        "id": 1614,
        "en": "shelf",
        "sound": "[Self]",
        "ru": {
            "n-": "полка, (мн. ч. shelves)"
        }
    },
    {
        "id": 1615,
        "en": "player",
        "sound": "['pleIq]",
        "ru": {
            "n-": "игрок; актер"
        }
    },
    {
        "id": 1616,
        "en": "universe",
        "sound": "['jHnIvWs]",
        "ru": {
            "n-": "мир, вселенная"
        }
    },
    {
        "id": 1617,
        "en": "script",
        "sound": "[skrIpt]",
        "ru": {
            "n-": "сценарий"
        }
    },
    {
        "id": 1618,
        "en": "flicker",
        "sound": "['flIkq]",
        "ru": {
            "n-": "мерцание;",
            "v-": "мерцать"
        }
    },
    {
        "id": 1619,
        "en": "weird",
        "sound": "[wIqd]",
        "ru": {
            "a-": "таинственный"
        }
    },
    {
        "id": 1620,
        "en": "balance",
        "sound": "['bxlqns]",
        "ru": {
            "n-": "весы; равновесие;",
            "v-": "взвешивать; балансировать"
        }
    },
    {
        "id": 1621,
        "en": "language",
        "sound": "['lxNgwIG]",
        "ru": {
            "n-": "язык; речь"
        }
    },
    {
        "id": 1622,
        "en": "blank",
        "sound": "[blxNk]",
        "ru": {
            "a-": "пустой, незаполненный;",
            "n-": "пустое, свободное место; пробел"
        }
    },
    {
        "id": 1623,
        "en": "issue",
        "sound": "['IsjH]",
        "ru": {
            "n-": "издание, выпуск;",
            "v-": "издавать, выпускать"
        }
    },
    {
        "id": 1624,
        "en": "weak",
        "sound": "[wJk]",
        "ru": {
            "a-": "слабый"
        }
    },
    {
        "id": 1625,
        "en": "surely",
        "sound": "['SuqlI]",
        "ru": {
            "adv-": "конечно; несомненно, наверняка"
        }
    },
    {
        "id": 1626,
        "en": "entirely",
        "sound": "[In'taIqlI]",
        "ru": {
            "adv-": "полностью, совершенно"
        }
    },
    {
        "id": 1627,
        "en": "shield",
        "sound": "[SJld]",
        "ru": {
            "n-": "щит; перен. защита;",
            "v-": "прикрывать, защищать"
        }
    },
    {
        "id": 1628,
        "en": "marine",
        "sound": "[mq'rJn]",
        "ru": {
            "n-": "мор. флот; солдат мор. пех.;",
            "a-": "морской"
        }
    },
    {
        "id": 1629,
        "en": "overhead",
        "sound": "[\"ouvq'hed]",
        "ru": {
            "adv-": "наверху, над головой"
        }
    },
    {
        "id": 1630,
        "en": "solid",
        "sound": "['sOlId]",
        "ru": {
            "a-": "твердый; прочный"
        }
    },
    {
        "id": 1631,
        "en": "sail",
        "sound": "[seIl]",
        "ru": {
            "n-": "парус; плавание (на кораб.);",
            "v-": "плыть (на кораб.); парить (в возд.)"
        }
    },
    {
        "id": 1632,
        "en": "stagger",
        "sound": "['stxgq]",
        "ru": {
            "v-": "шататься"
        }
    },
    {
        "id": 1633,
        "en": "elbow",
        "sound": "['elbou]",
        "ru": {
            "n-": "локоть; (резкий) изгиб (реки, дороги); подлокотник"
        }
    },
    {
        "id": 1634,
        "en": "pit",
        "sound": "[pIt]",
        "ru": {
            "n-": "яма, впадина; шахта; котлован; окоп;",
            "v-": "рыть, делать ямы"
        }
    },
    {
        "id": 1635,
        "en": "needle",
        "sound": "['nJdl]",
        "ru": {
            "n-": "игла, иголка"
        }
    },
    {
        "id": 1636,
        "en": "mister",
        "sound": "['mIstq]",
        "ru": {
            "n-": "мистер, господин"
        }
    },
    {
        "id": 1637,
        "en": "eleven",
        "sound": "[I'levn]",
        "ru": {
            "num-": "одиннадцать"
        }
    },
    {
        "id": 1638,
        "en": "platform",
        "sound": "['plxtfLm]",
        "ru": {
            "n-": "платформа; перрон; помост; сцена"
        }
    },
    {
        "id": 1639,
        "en": "mostly",
        "sound": "['moustlI]",
        "ru": {
            "adv-": "главным образом"
        }
    },
    {
        "id": 1640,
        "en": "rapidly",
        "sound": "['rxpIdlI]",
        "ru": {
            "adv-": "быстро"
        }
    },
    {
        "id": 1641,
        "en": "egg",
        "sound": "[eg]",
        "ru": {
            "n-": "яйцо"
        }
    },
    {
        "id": 1642,
        "en": "dare",
        "sound": "[dFq]",
        "ru": {
            "v-": "сметь, отваживаться"
        }
    },
    {
        "id": 1643,
        "en": "owner",
        "sound": "['ounq]",
        "ru": {
            "n-": "владелец, хозяин"
        }
    },
    {
        "id": 1644,
        "en": "suffer",
        "sound": "['sAfq]",
        "ru": {
            "v-": "страдать"
        }
    },
    {
        "id": 1645,
        "en": "hammer",
        "sound": "['hxmq]",
        "ru": {
            "n-": "молоток;",
            "v-": "вбивать, прибивать; колотить"
        }
    },
    {
        "id": 1646,
        "en": "thunder",
        "sound": "['TAndq]",
        "ru": {
            "n-": "гром;",
            "v-": "греметь"
        }
    },
    {
        "id": 1647,
        "en": "corpse",
        "sound": "[kLps]",
        "ru": {
            "n-": "труп"
        }
    },
    {
        "id": 1648,
        "en": "stroke",
        "sound": "[strouk]",
        "ru": {
            "n-": "удар; взмах; 2)",
            "v-": "гладить, поглаживать"
        }
    },
    {
        "id": 1649,
        "en": "heavily",
        "sound": "['hevIlI]",
        "ru": {
            "adv-": "тяжело; сильно"
        }
    },
    {
        "id": 1650,
        "en": "clip",
        "sound": "[klIp]",
        "ru": {
            "n-": "зажим, скрепка;",
            "v-": "зажимать; скреплять"
        }
    },
    {
        "id": 1651,
        "en": "total",
        "sound": "['toutl]",
        "ru": {
            "n-": "целое; сумма;",
            "a-": "общий"
        }
    },
    {
        "id": 1652,
        "en": "helmet",
        "sound": "['helmIt]",
        "ru": {
            "n-": "шлем; каска"
        }
    },
    {
        "id": 1653,
        "en": "bench",
        "sound": "[benC]",
        "ru": {
            "n-": "скамейка"
        }
    },
    {
        "id": 1654,
        "en": "source",
        "sound": "[sLs]",
        "ru": {
            "n-": "источник; начало"
        }
    },
    {
        "id": 1655,
        "en": "scatter",
        "sound": "['skxtq]",
        "ru": {
            "v-": "разбрасывать"
        }
    },
    {
        "id": 1656,
        "en": "eventually",
        "sound": "[I'venCuqlI]",
        "ru": {
            "adv-": "в конечном счете, в конце концов"
        }
    },
    {
        "id": 1657,
        "en": "spray",
        "sound": "[spreI]",
        "ru": {
            "n-": "брызги; распылитель;",
            "v-": "обрызгивать"
        }
    },
    {
        "id": 1658,
        "en": "trade",
        "sound": "[treId]",
        "ru": {
            "n-": "торговля;",
            "v-": "торговать"
        }
    },
    {
        "id": 1659,
        "en": "mix",
        "sound": "[mIks]",
        "ru": {
            "v-": "смешивать(ся)"
        }
    },
    {
        "id": 1660,
        "en": "descend",
        "sound": "[dI'send]",
        "ru": {
            "v-": "спускаться, опускаться, понижаться; переходить"
        }
    },
    {
        "id": 1661,
        "en": "sonny",
        "sound": "['sAnI]",
        "ru": {
            "n-": "разг. сынок"
        }
    },
    {
        "id": 1662,
        "en": "boom",
        "sound": "[bHm]",
        "ru": {
            "n-": "гул, рокот; бум, быстрый подъем;",
            "v-": "греметь; быстро расти"
        }
    },
    {
        "id": 1663,
        "en": "crush",
        "sound": "[krAS]",
        "ru": {
            "v-": "раздавить; (с)мять; сокрушить, уничтожить"
        }
    },
    {
        "id": 1664,
        "en": "relief",
        "sound": "[rI'lJf]",
        "ru": {
            "n-": "облегчение; помощь"
        }
    },
    {
        "id": 1665,
        "en": "senator",
        "sound": "['senqtq]",
        "ru": {
            "n-": "сенатор"
        }
    },
    {
        "id": 1666,
        "en": "trigger",
        "sound": "['trIgq]",
        "ru": {
            "n-": "защелка; спусковой крючок, курок, механизм"
        }
    },
    {
        "id": 1667,
        "en": "insist",
        "sound": "[In'sIst]",
        "ru": {
            "v-": "настаивать"
        }
    },
    {
        "id": 1668,
        "en": "deliver",
        "sound": "[dI'lIvq]",
        "ru": {
            "v-": "доставлять, передавать; вручать"
        }
    },
    {
        "id": 1669,
        "en": "conference",
        "sound": "['kOnfqrqns]",
        "ru": {
            "n-": "конференция; совещание"
        }
    },
    {
        "id": 1670,
        "en": "terror",
        "sound": "['terq]",
        "ru": {
            "n-": "ужас, страх; террор"
        }
    },
    {
        "id": 1671,
        "en": "jar",
        "sound": "[GR]",
        "ru": {
            "n-": "банка",
            "v-": "дребезжать; 2)"
        }
    },
    {
        "id": 1672,
        "en": "argue",
        "sound": "['RgjH]",
        "ru": {
            "v-": "спорить; утверждать, доказывать"
        }
    },
    {
        "id": 1673,
        "en": "require",
        "sound": "[rI'kwaIq]",
        "ru": {
            "v-": "требовать(ся)"
        }
    },
    {
        "id": 1674,
        "en": "worst",
        "sound": "[wWst]",
        "ru": {
            "a-": "наихудший;",
            "adv-": "хуже всего;",
            "n-": "наихудшее"
        }
    },
    {
        "id": 1675,
        "en": "recall",
        "sound": "[rI'kLl]",
        "ru": {
            "v-": "вспоминать; отзывать"
        }
    },
    {
        "id": 1676,
        "en": "halt",
        "sound": "[hLlt]",
        "ru": {
            "n-": "остановка;",
            "v-": "останавливать(ся)"
        }
    },
    {
        "id": 1677,
        "en": "badly",
        "sound": "['bxdlI]",
        "ru": {
            "adv-": "плохо, дурно; очень; сильно"
        }
    },
    {
        "id": 1678,
        "en": "collect",
        "sound": "[kq'lekt]",
        "ru": {
            "v-": "собирать(ся); коллекционировать"
        }
    },
    {
        "id": 1679,
        "en": "rage",
        "sound": "[reIG]",
        "ru": {
            "n-": "ярость;",
            "v-": "злиться"
        }
    },
    {
        "id": 1680,
        "en": "blanket",
        "sound": "['blxNkIt]",
        "ru": {
            "n-": "одеяло"
        }
    },
    {
        "id": 1681,
        "en": "tray",
        "sound": "[treI]",
        "ru": {
            "n-": "поднос; лоток"
        }
    },
    {
        "id": 1682,
        "en": "drip",
        "sound": "[drIp]",
        "ru": {
            "v-": "капать; стекать"
        }
    },
    {
        "id": 1683,
        "en": "limit",
        "sound": "['lImIt]",
        "ru": {
            "n-": "граница, предел;",
            "v-": "ограничивать"
        }
    },
    {
        "id": 1684,
        "en": "fan",
        "sound": "[fxn]",
        "ru": {
            "n-": "болельшик, фанат",
            "v-": "обмахивать; 2)"
        }
    },
    {
        "id": 1685,
        "en": "attach",
        "sound": "[q'txC]",
        "ru": {
            "v-": "прикреплять"
        }
    },
    {
        "id": 1686,
        "en": "upward",
        "sound": "['Apwqd]",
        "ru": {
            "a-": "направленный вверх;",
            "adv-": "вверх, (тж. ~s)"
        }
    },
    {
        "id": 1687,
        "en": "dim",
        "sound": "[dIm]",
        "ru": {
            "a-": "тусклый; смутный, неясный;",
            "v-": "делать тусклым; затенять"
        }
    },
    {
        "id": 1688,
        "en": "deputy",
        "sound": "['depjutI]",
        "ru": {
            "n-": "депутат; заместитель, помошник"
        }
    },
    {
        "id": 1689,
        "en": "sad",
        "sound": "[sxd]",
        "ru": {
            "a-": "печальный, грустный"
        }
    },
    {
        "id": 1690,
        "en": "flick",
        "sound": "[flIk]",
        "ru": {
            "n-": "щелчок; разг. кино, фильм;",
            "v-": "слегка щелкнуть; смахнуть"
        }
    },
    {
        "id": 1691,
        "en": "carpet",
        "sound": "['kRpIt]",
        "ru": {
            "n-": "ковер;",
            "v-": "устилать"
        }
    },
    {
        "id": 1692,
        "en": "expose",
        "sound": "[Iks'pouz]",
        "ru": {
            "v-": "выставлять; подвергать; разоблачать"
        }
    },
    {
        "id": 1693,
        "en": "sob",
        "sound": "[sOb]",
        "ru": {
            "n-": "рыдание, всхлипывание;",
            "v-": "рыдать, всхлипывать"
        }
    },
    {
        "id": 1694,
        "en": "strap",
        "sound": "[strxp]",
        "ru": {
            "n-": "ремень, полоска; завязка, бретелька;",
            "v-": "стягивать ремнями"
        }
    },
    {
        "id": 1695,
        "en": "natural",
        "sound": "['nxCrql]",
        "ru": {
            "a-": "естественный"
        }
    },
    {
        "id": 1696,
        "en": "curious",
        "sound": "['kjuqrIqs]",
        "ru": {
            "a-": "любопытный"
        }
    },
    {
        "id": 1697,
        "en": "starling",
        "sound": "['stRlIN]",
        "ru": {
            "n-": "1) скворец; 2) волнорез"
        }
    },
    {
        "id": 1698,
        "en": "stern",
        "sound": "[stWn]",
        "ru": {
            "a-": "строгий, суровый"
        }
    },
    {
        "id": 1699,
        "en": "comment",
        "sound": "['kOment]",
        "ru": {
            "n-": "комментарий;",
            "v-": "комментировать"
        }
    },
    {
        "id": 1700,
        "en": "bounce",
        "sound": "[bauns]",
        "ru": {
            "v-": "подпрыгивать; отскакивать; вскакивать"
        }
    },
    {
        "id": 1701,
        "en": "threaten",
        "sound": "['Tretn]",
        "ru": {
            "v-": "угрожать"
        }
    },
    {
        "id": 1702,
        "en": "lovely",
        "sound": "['lAvlI]",
        "ru": {
            "a-": "прелестный"
        }
    },
    {
        "id": 1703,
        "en": "waiter",
        "sound": "['weItq]",
        "ru": {
            "n-": "официант"
        }
    },
    {
        "id": 1704,
        "en": "moan",
        "sound": "[moun]",
        "ru": {
            "n-": "стон;",
            "v-": "стонать"
        }
    },
    {
        "id": 1705,
        "en": "exhaust",
        "sound": "[Ig'zLst]",
        "ru": {
            "v-": "истощать, изнурять; исчерпывать"
        }
    },
    {
        "id": 1706,
        "en": "nervously",
        "sound": "['nWvqslI]",
        "ru": {
            "adv-": "нервно"
        }
    },
    {
        "id": 1707,
        "en": "likely",
        "sound": "['laIklI]",
        "ru": {
            "a-": "вероятный;",
            "adv-": "вероятно"
        }
    },
    {
        "id": 1708,
        "en": "sailor",
        "sound": "['seIlq]",
        "ru": {
            "n-": "моряк, матрос"
        }
    },
    {
        "id": 1709,
        "en": "concentrate",
        "sound": "['kOns(e)ntreIt]",
        "ru": {
            "v-": "сосредотачивать(ся); концентрировать(ся)"
        }
    },
    {
        "id": 1710,
        "en": "character",
        "sound": "['kxrIktq]",
        "ru": {
            "n-": "характер; фигура, личность; образ, лицо"
        }
    },
    {
        "id": 1711,
        "en": "defense",
        "sound": "[dI'fens]",
        "ru": {
            "n-": "защита, оборона"
        }
    },
    {
        "id": 1712,
        "en": "term",
        "sound": "[tWm]",
        "ru": {
            "n-": "срок, период; семестр; учебн. четверть; термин"
        }
    },
    {
        "id": 1713,
        "en": "random",
        "sound": "['rxndqm]",
        "ru": {
            "a-": "случайный, произвольный, выбранный наугад"
        }
    },
    {
        "id": 1714,
        "en": "rose",
        "sound": "[rouz]",
        "ru": {
            "n-": "роза"
        }
    },
    {
        "id": 1715,
        "en": "slope",
        "sound": "[sloup]",
        "ru": {
            "n-": "уклон; склон, откос;",
            "v-": "иметь наклон; клониться; наклонить"
        }
    },
    {
        "id": 1716,
        "en": "abruptly",
        "sound": "[q'brAptlI]",
        "ru": {
            "adv-": "внезапно; резко, грубо"
        }
    },
    {
        "id": 1717,
        "en": "fashion",
        "sound": "['fxS(q)n]",
        "ru": {
            "n-": "образ, манера; фасон; стиль;",
            "v-": "придавать вид, форму"
        }
    },
    {
        "id": 1718,
        "en": "awful",
        "sound": "['Lfl]",
        "ru": {
            "a-": "ужасный"
        }
    },
    {
        "id": 1719,
        "en": "glimpse",
        "sound": "[glImps]",
        "ru": {
            "n-": "мелькание; мимолетное впечатление;",
            "v-": "мельком взглянуть"
        }
    },
    {
        "id": 1720,
        "en": "describe",
        "sound": "[dIs'kraIb]",
        "ru": {
            "v-": "описывать"
        }
    },
    {
        "id": 1721,
        "en": "extra",
        "sound": "['ekstrq]",
        "ru": {
            "a-": "дополнительный"
        }
    },
    {
        "id": 1722,
        "en": "purse",
        "sound": "[pWs]",
        "ru": {
            "n-": "кошелек; дамская сумочка; деньги, богатство;",
            "v-": "морщить(ся)"
        }
    },
    {
        "id": 1723,
        "en": "fully",
        "sound": "['fulI]",
        "ru": {
            "adv-": "полностью"
        }
    },
    {
        "id": 1724,
        "en": "squad",
        "sound": "[skwOd]",
        "ru": {
            "n-": "группа, команда"
        }
    },
    {
        "id": 1725,
        "en": "peace",
        "sound": "[pJs]",
        "ru": {
            "n-": "мир; покой"
        }
    },
    {
        "id": 1726,
        "en": "mail",
        "sound": "[meIl]",
        "ru": {
            "n-": "почта;",
            "v-": "посылать по почте"
        }
    },
    {
        "id": 1727,
        "en": "briefly",
        "sound": "['brJflI]",
        "ru": {
            "adv-": "кратко"
        }
    },
    {
        "id": 1728,
        "en": "spirit",
        "sound": "['spIrIt]",
        "ru": {
            "n-": "дух, душа; натура"
        }
    },
    {
        "id": 1729,
        "en": "nowhere",
        "sound": "['nouweq]",
        "ru": {
            "adv-": "нигде; никуда"
        }
    },
    {
        "id": 1730,
        "en": "holy",
        "sound": "['houlI]",
        "ru": {
            "a-": "святой; священный"
        }
    },
    {
        "id": 1731,
        "en": "thrust",
        "sound": "[TrAst]",
        "ru": {
            "v-": "(thrust; thrust) толкать; тыкать; просовывать;",
            "n-": "толчок"
        }
    },
    {
        "id": 1732,
        "en": "operate",
        "sound": "['OpqreIt]",
        "ru": {
            "v-": "работать, действовать; управлять"
        }
    },
    {
        "id": 1733,
        "en": "otherwise",
        "sound": "['ADqwaIz]",
        "ru": {
            "adv-": "иначе"
        }
    },
    {
        "id": 1734,
        "en": "current",
        "sound": "['kArqnt]",
        "ru": {
            "n-": "струя; течение, ход; ток (электр.);",
            "a-": "текущий"
        }
    },
    {
        "id": 1735,
        "en": "groan",
        "sound": "[groun]",
        "ru": {
            "n-": "стон;",
            "v-": "стонать"
        }
    },
    {
        "id": 1736,
        "en": "stain",
        "sound": "[steIn]",
        "ru": {
            "n-": "пятно; позорящ. факт;",
            "v-": "пятнать; пачкать(ся); позорить"
        }
    },
    {
        "id": 1737,
        "en": "horn",
        "sound": "[hLn]",
        "ru": {
            "n-": "рог; горн; рупор"
        }
    },
    {
        "id": 1738,
        "en": "rocky",
        "sound": "['rOkI]",
        "ru": {
            "a-": "скалистый"
        }
    },
    {
        "id": 1739,
        "en": "admiral",
        "sound": "['xdmqrql]",
        "ru": {
            "n-": "адмирал"
        }
    },
    {
        "id": 1740,
        "en": "diamond",
        "sound": "['daIqmqnd]",
        "ru": {
            "n-": "алмаз"
        }
    },
    {
        "id": 1741,
        "en": "cock",
        "sound": "[kOk]",
        "ru": {
            "n-": "петух; заводила; взведенный курок;",
            "v-": "поднимать"
        }
    },
    {
        "id": 1742,
        "en": "waist",
        "sound": "[weIst]",
        "ru": {
            "n-": "талия"
        }
    },
    {
        "id": 1743,
        "en": "merely",
        "sound": "['mIqlI]",
        "ru": {
            "adv-": "только, просто"
        }
    },
    {
        "id": 1744,
        "en": "chuckle",
        "sound": "['CAkl]",
        "ru": {
            "v-": "хихикать"
        }
    },
    {
        "id": 1745,
        "en": "despite",
        "sound": "[dIs'paIt]",
        "ru": {
            "prep-": "несмотря на, вопреки; 2)",
            "n-": "злоба;",
            "v-": "уст. оскорблять"
        }
    },
    {
        "id": 1746,
        "en": "concrete",
        "sound": "['kLnkrJt]",
        "ru": {
            "a-": "конкретный; 2)",
            "n-": "бетон"
        }
    },
    {
        "id": 1747,
        "en": "chip",
        "sound": "[CIp]",
        "ru": {
            "n-": "щепка; стружка; обломок;",
            "v-": "откалывать; строгать"
        }
    },
    {
        "id": 1748,
        "en": "common",
        "sound": "['kOmqn]",
        "ru": {
            "a-": "общий; общепринятый; простой, обыкновенный"
        }
    },
    {
        "id": 1749,
        "en": "magic",
        "sound": "['mxGIk]",
        "ru": {
            "a-": "волшебный"
        }
    },
    {
        "id": 1750,
        "en": "folk",
        "sound": "[fouk]",
        "ru": {
            "n-": "люди, народ; родня, родные; друзья"
        }
    },
    {
        "id": 1751,
        "en": "dart",
        "sound": "[dRt]",
        "ru": {
            "n-": "дротик; рывок, бросок;",
            "v-": "метать; помчаться стрелой"
        }
    },
    {
        "id": 1752,
        "en": "professional",
        "sound": "[prq'feSnl]",
        "ru": {
            "n-": "профессионал;",
            "a-": "профессиональный"
        }
    },
    {
        "id": 1753,
        "en": "fault",
        "sound": "[fLlt]",
        "ru": {
            "n-": "ошибка; вина"
        }
    },
    {
        "id": 1754,
        "en": "avenue",
        "sound": "['xvqnjH]",
        "ru": {
            "n-": "аллея; проспект, авеню"
        }
    },
    {
        "id": 1755,
        "en": "devil",
        "sound": "['devl]",
        "ru": {
            "n-": "дьявол, черт"
        }
    },
    {
        "id": 1756,
        "en": "tuck",
        "sound": "[tAk]",
        "ru": {
            "v-": "засовывать, прятать"
        }
    },
    {
        "id": 1757,
        "en": "brand",
        "sound": "[brxnd]",
        "ru": {
            "n-": "сорт, качество"
        }
    },
    {
        "id": 1758,
        "en": "tense",
        "sound": "[tens]",
        "ru": {
            "n-": "грам. время; 2)",
            "a-": "натянутый;",
            "v-": "натягивать(ся)"
        }
    },
    {
        "id": 1759,
        "en": "chew",
        "sound": "[CH]",
        "ru": {
            "n-": "жвачка;",
            "v-": "жевать; обдумывать"
        }
    },
    {
        "id": 1760,
        "en": "bye",
        "sound": "[baI]",
        "ru": {
            "int-": "разг. от goodbye пока!, всего!"
        }
    },
    {
        "id": 1761,
        "en": "emotion",
        "sound": "[I'mouSn]",
        "ru": {
            "n-": "волнение; чувство, эмоция"
        }
    },
    {
        "id": 1762,
        "en": "ash",
        "sound": "[xS]",
        "ru": {
            "n-": "зола, пепел; прах"
        }
    },
    {
        "id": 1763,
        "en": "suitcase",
        "sound": "['sjHtkeIs]",
        "ru": {
            "n-": "чемодан"
        }
    },
    {
        "id": 1764,
        "en": "bound",
        "sound": "[baund]",
        "ru": {
            "n-": "прыжок;",
            "v-": "прыгать; 3)",
            "a-": "обязанный, вынужденный"
        }
    },
    {
        "id": 1765,
        "en": "wolf",
        "sound": "[wulf]",
        "ru": {
            "n-": "волк, (мн.ч. wolves)"
        }
    },
    {
        "id": 1766,
        "en": "trailer",
        "sound": "['treIlq]",
        "ru": {
            "n-": "прицеп"
        }
    },
    {
        "id": 1767,
        "en": "cockpit",
        "sound": "['kOk\"pIt]",
        "ru": {
            "n-": "кубрик, кокпит (мор.); кабина (летч.)"
        }
    },
    {
        "id": 1768,
        "en": "tea",
        "sound": "[tJ]",
        "ru": {
            "n-": "чай"
        }
    },
    {
        "id": 1769,
        "en": "unable",
        "sound": "[An'eIbl]",
        "ru": {
            "a-": "неспособный"
        }
    },
    {
        "id": 1770,
        "en": "national",
        "sound": "['nxSnl]",
        "ru": {
            "a-": "национальный"
        }
    },
    {
        "id": 1771,
        "en": "determine",
        "sound": "[dI'tWmIn]",
        "ru": {
            "v-": "решать(ся); определять, устанавливать"
        }
    },
    {
        "id": 1772,
        "en": "hungry",
        "sound": "['hANgrI]",
        "ru": {
            "a-": "голодный"
        }
    },
    {
        "id": 1773,
        "en": "quit",
        "sound": "[kwIt]",
        "ru": {
            "v-": "покидать, оставлять; прекращать (работу);",
            "n-": "увольнение"
        }
    },
    {
        "id": 1774,
        "en": "register",
        "sound": "['reGIstq]",
        "ru": {
            "n-": "журнал (для записей);",
            "v-": "регистрировать(ся)"
        }
    },
    {
        "id": 1775,
        "en": "announce",
        "sound": "[q'nauns]",
        "ru": {
            "v-": "объявлять"
        }
    },
    {
        "id": 1776,
        "en": "worker",
        "sound": "['wWkq]",
        "ru": {
            "n-": "рабочий"
        }
    },
    {
        "id": 1777,
        "en": "sunlight",
        "sound": "['sAnlaIt]",
        "ru": {
            "n-": "солнечный свет"
        }
    },
    {
        "id": 1778,
        "en": "jail",
        "sound": "[GeIl]",
        "ru": {
            "n-": "тюрьма"
        }
    },
    {
        "id": 1779,
        "en": "bride",
        "sound": "[braId]",
        "ru": {
            "n-": "невеста"
        }
    },
    {
        "id": 1780,
        "en": "plenty",
        "sound": "['plentI]",
        "ru": {
            "n-": "(из)обилие"
        }
    },
    {
        "id": 1781,
        "en": "grunt",
        "sound": "[grAnt]",
        "ru": {
            "n-": "хрюканье; ворчание;",
            "v-": "хрюкать; ворчать; бурчать"
        }
    },
    {
        "id": 1782,
        "en": "proud",
        "sound": "[praud]",
        "ru": {
            "a-": "гордый"
        }
    },
    {
        "id": 1783,
        "en": "adjust",
        "sound": "[q'GAst]",
        "ru": {
            "v-": "приводить в порядок; улаживать; приспосабливать"
        }
    },
    {
        "id": 1784,
        "en": "gift",
        "sound": "[gIft]",
        "ru": {
            "n-": "подарок, дар"
        }
    },
    {
        "id": 1785,
        "en": "satisfy",
        "sound": "['sxtIsfaI]",
        "ru": {
            "v-": "удовлетворять; доставлять удовольствие"
        }
    },
    {
        "id": 1786,
        "en": "grasp",
        "sound": "[grRsp]",
        "ru": {
            "n-": "хватка; понимание;",
            "v-": "схватывать; охватить, понять"
        }
    },
    {
        "id": 1787,
        "en": "angel",
        "sound": "['eInGql]",
        "ru": {
            "n-": "ангел"
        }
    },
    {
        "id": 1788,
        "en": "Christmas",
        "sound": "['krIsmqs]",
        "ru": {
            "n-": "Рождество"
        }
    },
    {
        "id": 1789,
        "en": "owe",
        "sound": "[ou]",
        "ru": {
            "v-": "задолжать; быть должным, обязанным"
        }
    },
    {
        "id": 1790,
        "en": "guide",
        "sound": "[gaId]",
        "ru": {
            "n-": "проводник, гид; советчик; путеводитель;",
            "v-": "вести; направлять"
        }
    },
    {
        "id": 1791,
        "en": "disturb",
        "sound": "[dIs'tWb]",
        "ru": {
            "v-": "беспокоить, мешать;"
        }
    },
    {
        "id": 1792,
        "en": "reflect",
        "sound": "[rI'flekt]",
        "ru": {
            "v-": "отражать(ся)"
        }
    },
    {
        "id": 1793,
        "en": "united",
        "sound": "[jH'naItId]",
        "ru": {
            "a-": "соединенный"
        }
    },
    {
        "id": 1794,
        "en": "willing",
        "sound": "['wIlIN]",
        "ru": {
            "a-": "готовый (сделать что-л.); охотно делающий"
        }
    },
    {
        "id": 1795,
        "en": "title",
        "sound": "['taItl]",
        "ru": {
            "n-": "заглавие, название"
        }
    },
    {
        "id": 1796,
        "en": "blame",
        "sound": "[bleIm]",
        "ru": {
            "n-": "вина; упрек;",
            "v-": "винить, порицать"
        }
    },
    {
        "id": 1797,
        "en": "interview",
        "sound": "['IntqvjH]",
        "ru": {
            "n-": "беседа, интервью;",
            "v-": "интервьюировать"
        }
    },
    {
        "id": 1798,
        "en": "gut",
        "sound": "[gAt]",
        "ru": {
            "n-": "кишка;",
            "v-": "потрошить; опустошать, грабить"
        }
    },
    {
        "id": 1799,
        "en": "howl",
        "sound": "[haul]",
        "ru": {
            "n-": "вой;",
            "v-": "выть"
        }
    },
    {
        "id": 1800,
        "en": "mouse",
        "sound": "[maus]",
        "ru": {
            "n-": "мышь, (мн. ч. mice)"
        }
    },
    {
        "id": 1801,
        "en": "beg",
        "sound": "[beg]",
        "ru": {
            "v-": "просить, умолять"
        }
    },
    {
        "id": 1802,
        "en": "vast",
        "sound": "[vRst]",
        "ru": {
            "a-": "общирный, громадный"
        }
    },
    {
        "id": 1803,
        "en": "cheap",
        "sound": "[CJp]",
        "ru": {
            "a-": "дешевый;",
            "adv-": "дешево"
        }
    },
    {
        "id": 1804,
        "en": "bike",
        "sound": "[baIk]",
        "ru": {
            "n-": "велосипед"
        }
    },
    {
        "id": 1805,
        "en": "model",
        "sound": "['mOdl]",
        "ru": {
            "n-": "модель; образец"
        }
    },
    {
        "id": 1806,
        "en": "impress",
        "sound": "[Im'pres]",
        "ru": {
            "v-": "отпечатывать; производить впечатление; внушать"
        }
    },
    {
        "id": 1807,
        "en": "gang",
        "sound": "[gxN]",
        "ru": {
            "n-": "группа, бригада; банда"
        }
    },
    {
        "id": 1808,
        "en": "automatic",
        "sound": "[\"Ltq'mxtIk]",
        "ru": {
            "a-": "автоматический"
        }
    },
    {
        "id": 1809,
        "en": "haul",
        "sound": "[hLl]",
        "ru": {
            "v-": "тянуть, волочить; буксировать; перевозить"
        }
    },
    {
        "id": 1810,
        "en": "patrol",
        "sound": "[pq'troul]",
        "ru": {
            "n-": "патруль;",
            "v-": "патрулировать"
        }
    },
    {
        "id": 1811,
        "en": "lawn",
        "sound": "[lLn]",
        "ru": {
            "n-": "газон, лужайка"
        }
    },
    {
        "id": 1812,
        "en": "criminal",
        "sound": "['krImInl]",
        "ru": {
            "n-": "преступник;",
            "a-": "преступный; уголовный"
        }
    },
    {
        "id": 1813,
        "en": "comfort",
        "sound": "['kAmfqt]",
        "ru": {
            "n-": "комфорт; утешение;",
            "v-": "утешать; успокаивать"
        }
    },
    {
        "id": 1814,
        "en": "legal",
        "sound": "['lJgl]",
        "ru": {
            "a-": "законный; легальный"
        }
    },
    {
        "id": 1815,
        "en": "ladder",
        "sound": "['lxdq]",
        "ru": {
            "n-": "лестница (приставная); трап и др."
        }
    },
    {
        "id": 1816,
        "en": "physical",
        "sound": "['fIzIkl]",
        "ru": {
            "a-": "физический"
        }
    },
    {
        "id": 1817,
        "en": "rate",
        "sound": "[reIt]",
        "ru": {
            "n-": "норма; расценка; скорость; разряд; класс;",
            "v-": "оценивать; считать"
        }
    },
    {
        "id": 1818,
        "en": "rumble",
        "sound": "['rAmbl]",
        "ru": {
            "n-": "грохот;",
            "v-": "греметь"
        }
    },
    {
        "id": 1819,
        "en": "troop",
        "sound": "[trHp]",
        "ru": {
            "n-": "группа людей, отряд"
        }
    },
    {
        "id": 1820,
        "en": "device",
        "sound": "[dI'vaIs]",
        "ru": {
            "n-": "устройство; механизм; прибор; способ, средство"
        }
    },
    {
        "id": 1821,
        "en": "bark",
        "sound": "[bRk]",
        "ru": {
            "n-": "лай;",
            "v-": "лаять; рявкать"
        }
    },
    {
        "id": 1822,
        "en": "comfortable",
        "sound": "['kAmftqbl]",
        "ru": {
            "a-": "удобный"
        }
    },
    {
        "id": 1823,
        "en": "mayor",
        "sound": "[mFq]",
        "ru": {
            "n-": "мэр"
        }
    },
    {
        "id": 1824,
        "en": "hunt",
        "sound": "[hAnt]",
        "ru": {
            "v-": "охотиться, ловить"
        }
    },
    {
        "id": 1825,
        "en": "joint",
        "sound": "[GOInt]",
        "ru": {
            "n-": "место соединения, стык; сустав;",
            "a-": "объединенный, общий"
        }
    },
    {
        "id": 1826,
        "en": "provide",
        "sound": "[prq'vaId]",
        "ru": {
            "v-": "снабжать; обеспечивать"
        }
    },
    {
        "id": 1827,
        "en": "tumble",
        "sound": "['tAmbl]",
        "ru": {
            "n-": "падение;",
            "v-": "упасть, свалиться; обрушиваться; валяться"
        }
    },
    {
        "id": 1828,
        "en": "deeply",
        "sound": "['dJplI]",
        "ru": {
            "adv-": "глубоко; сильно"
        }
    },
    {
        "id": 1829,
        "en": "snatch",
        "sound": "[snxC]",
        "ru": {
            "v-": "хватать(ся); вырывать, выхватывать; набрасываться"
        }
    },
    {
        "id": 1830,
        "en": "background",
        "sound": "['bxkgraund]",
        "ru": {
            "n-": "задний план; фон; происхождение; подготовка"
        }
    },
    {
        "id": 1831,
        "en": "appreciate",
        "sound": "[q'prJSIeIt]",
        "ru": {
            "v-": "ценить; высоко ставить; понимать ценность"
        }
    },
    {
        "id": 1832,
        "en": "possibility",
        "sound": "[\"pOsI'bIlItI]",
        "ru": {
            "n-": "возможность"
        }
    },
    {
        "id": 1833,
        "en": "whale",
        "sound": "[weIl]",
        "ru": {
            "n-": "кит; разг. нечто выдающееся (по велич. или качеству)"
        }
    },
    {
        "id": 1834,
        "en": "hunter",
        "sound": "['hAntq]",
        "ru": {
            "n-": "охотник"
        }
    },
    {
        "id": 1835,
        "en": "unlock",
        "sound": "[(')An'lOk]",
        "ru": {
            "v-": "отпирать"
        }
    },
    {
        "id": 1836,
        "en": "monkey",
        "sound": "['mANkI]",
        "ru": {
            "n-": "обезьяна"
        }
    },
    {
        "id": 1837,
        "en": "fourth",
        "sound": "[fLT]",
        "ru": {
            "num-": "четвертый"
        }
    },
    {
        "id": 1838,
        "en": "receiver",
        "sound": "[rI'sJvq]",
        "ru": {
            "n-": "получатель; (радио)приемник; телеф. трубка"
        }
    },
    {
        "id": 1839,
        "en": "nerve",
        "sound": "[nWv]",
        "ru": {
            "n-": "нерв; нервозность; разг. наглость, нахальство"
        }
    },
    {
        "id": 1840,
        "en": "hip",
        "sound": "[hIp]",
        "ru": {
            "n-": "бедро"
        }
    },
    {
        "id": 1841,
        "en": "pot",
        "sound": "[pOt]",
        "ru": {
            "n-": "горшок; кастрюля; банка;",
            "v-": "консервировать"
        }
    },
    {
        "id": 1842,
        "en": "launch",
        "sound": "[lLnC]",
        "ru": {
            "v-": "начинать; предпринимать; запускать; спускать (судно)"
        }
    },
    {
        "id": 1843,
        "en": "joy",
        "sound": "[GOI]",
        "ru": {
            "n-": "радость, веселье"
        }
    },
    {
        "id": 1844,
        "en": "authority",
        "sound": "[L'TOrItI]",
        "ru": {
            "n-": "власть; ~s власти; авторитет"
        }
    },
    {
        "id": 1845,
        "en": "Sunday",
        "sound": "['sAndI]",
        "ru": {
            "n-": "воскресенье"
        }
    },
    {
        "id": 1846,
        "en": "shade",
        "sound": "[SeId]",
        "ru": {
            "n-": "тень; оттенок; абажур;",
            "v-": "затемнять, заслонять"
        }
    },
    {
        "id": 1847,
        "en": "gain",
        "sound": "[geIn]",
        "ru": {
            "n-": "прибыль, выигрыш; ~s доходы;",
            "v-": "получать; приобретать"
        }
    },
    {
        "id": 1848,
        "en": "motel",
        "sound": "[mo(u)'tel]",
        "ru": {
            "n-": "мотель"
        }
    },
    {
        "id": 1849,
        "en": "string",
        "sound": "[strIN]",
        "ru": {
            "n-": "веревка; струна; ряд"
        }
    },
    {
        "id": 1850,
        "en": "widen",
        "sound": "['waIdn]",
        "ru": {
            "v-": "расширять(ся)"
        }
    },
    {
        "id": 1851,
        "en": "jaw",
        "sound": "[GL]",
        "ru": {
            "n-": "челюсть; ~s рот; пасть"
        }
    },
    {
        "id": 1852,
        "en": "briefcase",
        "sound": "['brJfkeIs]",
        "ru": {
            "n-": "портфель"
        }
    },
    {
        "id": 1853,
        "en": "choke",
        "sound": "[Couk]",
        "ru": {
            "n-": "удушье;",
            "v-": "душить; задыхаться; поперхнуться; заглушать"
        }
    },
    {
        "id": 1854,
        "en": "meter",
        "sound": "= metre (43:1) ['mJtq]",
        "ru": {
            "n-": "метр; счетчик, измеритель"
        }
    },
    {
        "id": 1855,
        "en": "hum",
        "sound": "[hAm]",
        "ru": {
            "n-": "жужжание; гудение;",
            "v-": "жужжать; гудеть"
        }
    },
    {
        "id": 1856,
        "en": "meat",
        "sound": "[mJt]",
        "ru": {
            "n-": "мясо; устн. пища"
        }
    },
    {
        "id": 1857,
        "en": "brick",
        "sound": "[brIk]",
        "ru": {
            "n-": "кирпич;",
            "a-": "кирпичный"
        }
    },
    {
        "id": 1858,
        "en": "identify",
        "sound": "[aI'dentIfaI]",
        "ru": {
            "v-": "отождествлять; опознавать"
        }
    },
    {
        "id": 1859,
        "en": "recover",
        "sound": "[rI'kAvq]",
        "ru": {
            "v-": "получать обратно; обретать снова; выздоравливать"
        }
    },
    {
        "id": 1860,
        "en": "bush",
        "sound": "[buS]",
        "ru": {
            "n-": "куст; кустарник"
        }
    },
    {
        "id": 1861,
        "en": "drain",
        "sound": "[dreIn]",
        "ru": {
            "n-": "дренаж; водосток; перен. истощение;",
            "v-": "осущать; истощать"
        }
    },
    {
        "id": 1862,
        "en": "abandon",
        "sound": "[q'bxndqn]",
        "ru": {
            "v-": "оставлять, покидать"
        }
    },
    {
        "id": 1863,
        "en": "clothing",
        "sound": "['klouDIN]",
        "ru": {
            "n-": "одежда; платье"
        }
    },
    {
        "id": 1864,
        "en": "fry",
        "sound": "[fraI]",
        "ru": {
            "v-": "жарить"
        }
    },
    {
        "id": 1865,
        "en": "protest",
        "sound": "[prq'test]",
        "ru": {
            "v-": "протестовать;",
            "n-": "['proutest] протест"
        }
    },
    {
        "id": 1866,
        "en": "bump",
        "sound": "[bAmp]",
        "ru": {
            "n-": "столкновение, удар; шишка;",
            "v-": "ударяться, налетать"
        }
    },
    {
        "id": 1867,
        "en": "original",
        "sound": "[q'rIGInl]",
        "ru": {
            "n-": "подлинник, оригинал;",
            "a-": "первоначальный; подлинный"
        }
    },
    {
        "id": 1868,
        "en": "professor",
        "sound": "[prq'fesq]",
        "ru": {
            "n-": "профессор"
        }
    },
    {
        "id": 1869,
        "en": "museum",
        "sound": "[mjH'zIqm]",
        "ru": {
            "n-": "музей"
        }
    },
    {
        "id": 1870,
        "en": "connection",
        "sound": "[kq'nekSn]",
        "ru": {
            "n-": "соединение"
        }
    },
    {
        "id": 1871,
        "en": "content",
        "sound": "1) ['kOntent]",
        "ru": {
            "n-": "удовлетворение;",
            "a-": "довольный;",
            "v-": "удовлетворять"
        }
    },
    {
        "id": 1872,
        "en": "lane",
        "sound": "[leIn]",
        "ru": {
            "n-": "дорожка, тропинка; переулок; проход между рядами, домами"
        }
    },
    {
        "id": 1873,
        "en": "licence",
        "sound": "бр. = license ам. (1:22) ['laIsqns]",
        "ru": {
            "n-": "разрешение, лицензия;",
            "v-": "разрешать"
        }
    },
    {
        "id": 1874,
        "en": "particularly",
        "sound": "[pq'tIkjulqlI]",
        "ru": {
            "adv-": "особенно"
        }
    },
    {
        "id": 1875,
        "en": "county",
        "sound": "['kauntI]",
        "ru": {
            "n-": "округ (амер.); графство (брит.)"
        }
    },
    {
        "id": 1876,
        "en": "cigar",
        "sound": "[sI'gR]",
        "ru": {
            "n-": "сигара"
        }
    },
    {
        "id": 1877,
        "en": "candy",
        "sound": "['kxndI]",
        "ru": {
            "n-": "конфет(-а,-ы)"
        }
    },
    {
        "id": 1878,
        "en": "port",
        "sound": "[pLt]",
        "ru": {
            "n-": "порт, гавань"
        }
    },
    {
        "id": 1879,
        "en": "eyebrow",
        "sound": "['aIbrau]",
        "ru": {
            "n-": "бровь"
        }
    },
    {
        "id": 1880,
        "en": "rattle",
        "sound": "['rxtl]",
        "ru": {
            "n-": "треск, грохот;",
            "v-": "трещать, греметь"
        }
    },
    {
        "id": 1881,
        "en": "shiver",
        "sound": "['SIvq]",
        "ru": {
            "v-": "дрожать, трястись"
        }
    },
    {
        "id": 1882,
        "en": "shriek",
        "sound": "[SrJk]",
        "ru": {
            "n-": "пронзительный крик;",
            "v-": "визжать, вопить"
        }
    },
    {
        "id": 1883,
        "en": "beard",
        "sound": "[bIqd]",
        "ru": {
            "n-": "борода; борода и усы"
        }
    },
    {
        "id": 1884,
        "en": "assure",
        "sound": "[q'Suq]",
        "ru": {
            "v-": "уверять, заверять"
        }
    },
    {
        "id": 1885,
        "en": "stock",
        "sound": "[stOk]",
        "ru": {
            "n-": "запас;",
            "v-": "снабжать"
        }
    },
    {
        "id": 1886,
        "en": "coast",
        "sound": "[koust]",
        "ru": {
            "n-": "морской берег; побережье;",
            "v-": "плавать вдоль побережья"
        }
    },
    {
        "id": 1887,
        "en": "hatch",
        "sound": "[hxC]",
        "ru": {
            "n-": "крышка люка; сленг пасть;",
            "v-": "замышлять, готовить (тайно)"
        }
    },
    {
        "id": 1888,
        "en": "disgust",
        "sound": "[dIs'gAst]",
        "ru": {
            "n-": "отвращение;",
            "v-": "вызывать отвращение, возмущение"
        }
    },
    {
        "id": 1889,
        "en": "valley",
        "sound": "['vxlI]",
        "ru": {
            "n-": "долина"
        }
    },
    {
        "id": 1890,
        "en": "lick",
        "sound": "[lIk]",
        "ru": {
            "v-": "лизать, облизывать; слегка касаться; разг. бить, колотить"
        }
    },
    {
        "id": 1891,
        "en": "rack",
        "sound": "[rxk]",
        "ru": {
            "n-": "дыба; перен. пытка;",
            "v-": "пытать, мучить и др."
        }
    },
    {
        "id": 1892,
        "en": "broad",
        "sound": "[brLd]",
        "ru": {
            "a-": "широкий; свободный; явный;",
            "adv-": "широко; свободно; вполне"
        }
    },
    {
        "id": 1893,
        "en": "lack",
        "sound": "[lxk]",
        "ru": {
            "n-": "отсутствие; недостаток;",
            "v-": "недоставать"
        }
    },
    {
        "id": 1894,
        "en": "patch",
        "sound": "[pxC]",
        "ru": {
            "n-": "заплата; клочок; пятно;",
            "v-": "латать; покрываться пятнами"
        }
    },
    {
        "id": 1895,
        "en": "opinion",
        "sound": "[q'pInjqn]",
        "ru": {
            "n-": "мнение, взгляд"
        }
    },
    {
        "id": 1896,
        "en": "growl",
        "sound": "[graul]",
        "ru": {
            "v-": "рычать; ворчать, огрызаться"
        }
    },
    {
        "id": 1897,
        "en": "suite",
        "sound": "[swJt]",
        "ru": {
            "n-": "апартаменты, номер-люкс"
        }
    },
    {
        "id": 1898,
        "en": "pray",
        "sound": "[preI]",
        "ru": {
            "v-": "молить(ся); умолять"
        }
    },
    {
        "id": 1899,
        "en": "ugly",
        "sound": "['AglI]",
        "ru": {
            "a-": "уродливый, безобразный"
        }
    },
    {
        "id": 1900,
        "en": "secure",
        "sound": "[sI'kjuq]",
        "ru": {
            "a-": "спокойный, уверенный; безопасный;",
            "v-": "охранять; закреплять"
        }
    },
    {
        "id": 1901,
        "en": "increase",
        "sound": "[In'krJs]",
        "ru": {
            "v-": "возрастать, увеличивать(ся), усиливать(ся)"
        }
    },
    {
        "id": 1902,
        "en": "jury",
        "sound": "['GuqrI]",
        "ru": {
            "n-": "присяжные; жюри"
        }
    },
    {
        "id": 1903,
        "en": "straighten",
        "sound": "['streItn]",
        "ru": {
            "v-": "выпрямлять(ся); приводить в порядок; исправлять(ся)"
        }
    },
    {
        "id": 1904,
        "en": "jeep",
        "sound": "[GJp]",
        "ru": {
            "n-": "авт. джип"
        }
    },
    {
        "id": 1905,
        "en": "activity",
        "sound": "[xk'tIvItI]",
        "ru": {
            "n-": "деятельность"
        }
    },
    {
        "id": 1906,
        "en": "dusk",
        "sound": "[dAsk]",
        "ru": {
            "n-": "сумерки"
        }
    },
    {
        "id": 1907,
        "en": "skip",
        "sound": "[skIp]",
        "ru": {
            "n-": "прыжок, скачок;",
            "v-": "прыгать, скакать; пропускать"
        }
    },
    {
        "id": 1908,
        "en": "locate",
        "sound": "[lou'keIt]",
        "ru": {
            "v-": "определять местонахождение; располагать; размещать"
        }
    },
    {
        "id": 1909,
        "en": "driveway",
        "sound": "['draIvweI]",
        "ru": {
            "n-": "дорога, проезд"
        }
    },
    {
        "id": 1910,
        "en": "motor",
        "sound": "['moutq]",
        "ru": {
            "n-": "мотор; двигатель"
        }
    },
    {
        "id": 1911,
        "en": "wallet",
        "sound": "['wOlIt]",
        "ru": {
            "n-": "бумажник"
        }
    },
    {
        "id": 1912,
        "en": "gentle",
        "sound": "['Gentl]",
        "ru": {
            "a-": "мягкий; нежный"
        }
    },
    {
        "id": 1913,
        "en": "package",
        "sound": "['pxkIG]",
        "ru": {
            "n-": "сверток; пакет"
        }
    },
    {
        "id": 1914,
        "en": "sleeve",
        "sound": "[slJv]",
        "ru": {
            "n-": "рукав; втулка; муфта"
        }
    },
    {
        "id": 1915,
        "en": "collar",
        "sound": "['kOlq]",
        "ru": {
            "n-": "воротник; ожерелье"
        }
    },
    {
        "id": 1916,
        "en": "rag",
        "sound": "[rxg]",
        "ru": {
            "n-": "скандал;",
            "v-": "дразнить"
        }
    },
    {
        "id": 1917,
        "en": "opportunity",
        "sound": "[\"Opq'tjHnItI]",
        "ru": {
            "n-": "удобный случай; благоприятная возможность"
        }
    },
    {
        "id": 1918,
        "en": "curl",
        "sound": "[kWl]",
        "ru": {
            "n-": "локон, завиток;",
            "v-": "виться; завивать(ся)"
        }
    },
    {
        "id": 1919,
        "en": "drill",
        "sound": "[drIl]",
        "ru": {
            "n-": "тренировка;",
            "v-": "тренировать"
        }
    },
    {
        "id": 1920,
        "en": "tightly",
        "sound": "['taItlI]",
        "ru": {
            "adv-": "прочно; напряженно; строго; крепко"
        }
    },
    {
        "id": 1921,
        "en": "seventy",
        "sound": "['sevntI]",
        "ru": {
            "num-": "семьдесят"
        }
    },
    {
        "id": 1922,
        "en": "hero",
        "sound": "['hIqrou]",
        "ru": {
            "n-": "герой"
        }
    },
    {
        "id": 1923,
        "en": "poke",
        "sound": "[pouk]",
        "ru": {
            "v-": "совать, толкать, тыкать; разг. ударить кулаком"
        }
    },
    {
        "id": 1924,
        "en": "breeze",
        "sound": "[brJz]",
        "ru": {
            "n-": "легкий ветерок, бриз"
        }
    },
    {
        "id": 1925,
        "en": "market",
        "sound": "['mRkIt]",
        "ru": {
            "n-": "рынок; торговля;",
            "v-": "торговать"
        }
    },
    {
        "id": 1926,
        "en": "friendly",
        "sound": "['frendlI]",
        "ru": {
            "a-": "дружеский"
        }
    },
    {
        "id": 1927,
        "en": "teacher",
        "sound": "['tJCq]",
        "ru": {
            "n-": "учитель"
        }
    },
    {
        "id": 1928,
        "en": "slice",
        "sound": "[slaIs]",
        "ru": {
            "n-": "ломтик (хлеба, мяса и т.п.); часть, доля;",
            "v-": "резать ломтями"
        }
    },
    {
        "id": 1929,
        "en": "wildly",
        "sound": "['waIdlI]",
        "ru": {
            "adv-": "дико; буйно"
        }
    },
    {
        "id": 1930,
        "en": "shaft",
        "sound": "[SRft]",
        "ru": {
            "n-": "древко (копья и т.п.); стрела; копье; луч (света) и др."
        }
    },
    {
        "id": 1931,
        "en": "rescue",
        "sound": "['reskjH]",
        "ru": {
            "n-": "спасение;",
            "v-": "спасать"
        }
    },
    {
        "id": 1932,
        "en": "cabinet",
        "sound": "['kxbInIt]",
        "ru": {
            "n-": "сервант; шкафчик; устн. кабинет; будуар"
        }
    },
    {
        "id": 1933,
        "en": "downstairs",
        "sound": "[\"daun'stFqz]",
        "ru": {
            "adv-": "вниз (по лестнице); внизу; в нижнем этаже"
        }
    },
    {
        "id": 1934,
        "en": "innocent",
        "sound": "['Inqsqnt]",
        "ru": {
            "a-": "невиновный"
        }
    },
    {
        "id": 1935,
        "en": "belly",
        "sound": "['belI]",
        "ru": {
            "n-": "живот"
        }
    },
    {
        "id": 1936,
        "en": "ankle",
        "sound": "['xNkl]",
        "ru": {
            "n-": "лодыжка, щиколотка"
        }
    },
    {
        "id": 1937,
        "en": "marshal(l)",
        "sound": "['mRS(q)l]",
        "ru": {
            "n-": "воен. маршал; амер. судебный исполнитель"
        }
    },
    {
        "id": 1938,
        "en": "scientist",
        "sound": "['saIqntIst]",
        "ru": {
            "n-": "ученый"
        }
    },
    {
        "id": 1939,
        "en": "reverse",
        "sound": "[rI'vWs]",
        "ru": {
            "n-": "противоположное;",
            "a-": "противоположный;",
            "v-": "поворачивать обратно"
        }
    },
    {
        "id": 1940,
        "en": "Saturday",
        "sound": "['sxtqdI]",
        "ru": {
            "n-": "суббота"
        }
    },
    {
        "id": 1941,
        "en": "material",
        "sound": "[mx'tIqrIql]",
        "ru": {
            "n-": "материал; ткань, материя;",
            "a-": "материальный"
        }
    },
    {
        "id": 1942,
        "en": "knot",
        "sound": "[nOt]",
        "ru": {
            "n-": "узел;",
            "v-": "завязывать, связывать"
        }
    },
    {
        "id": 1943,
        "en": "shudder",
        "sound": "['SAdq]",
        "ru": {
            "n-": "дрожь; содрагание;",
            "v-": "вздрагивать; содрагаться"
        }
    },
    {
        "id": 1944,
        "en": "reality",
        "sound": "[rI'xlItI]",
        "ru": {
            "n-": "действительность"
        }
    },
    {
        "id": 1945,
        "en": "mood",
        "sound": "[mHd]",
        "ru": {
            "n-": "настроение"
        }
    },
    {
        "id": 1946,
        "en": "rent",
        "sound": "[rent]",
        "ru": {
            "n-": "арендная плата;",
            "v-": "арендовать; сдавать в аренду"
        }
    },
    {
        "id": 1947,
        "en": "whoever",
        "sound": "[hH'evq]",
        "ru": {
            "pron-": "кто бы ни; любой"
        }
    },
    {
        "id": 1948,
        "en": "investigation",
        "sound": "[In\"vestI'geISn]",
        "ru": {
            "n-": "расследование; исследование (научное); изучение"
        }
    },
    {
        "id": 1949,
        "en": "tent",
        "sound": "[tent]",
        "ru": {
            "n-": "палатка"
        }
    },
    {
        "id": 1950,
        "en": "theatre",
        "sound": "бр. = theater ам. (1:1,4) ['TIqtq]",
        "ru": {
            "n-": "театр"
        }
    },
    {
        "id": 1951,
        "en": "farm",
        "sound": "[fRm]",
        "ru": {
            "n-": "ферма"
        }
    },
    {
        "id": 1952,
        "en": "knight",
        "sound": "[naIt]",
        "ru": {
            "n-": "рыцарь"
        }
    },
    {
        "id": 1953,
        "en": "honest",
        "sound": "['OnIst]",
        "ru": {
            "a-": "честный"
        }
    },
    {
        "id": 1954,
        "en": "dumb",
        "sound": "[dAm]",
        "ru": {
            "a-": "немой; бессловесный; сленг: глупый, тупой"
        }
    },
    {
        "id": 1955,
        "en": "research",
        "sound": "[rI'sWC]",
        "ru": {
            "n-": "исследование"
        }
    },
    {
        "id": 1956,
        "en": "limp",
        "sound": "[lImp]",
        "ru": {
            "n-": "хромота;",
            "v-": "хромать; 2)",
            "a-": "мягкий, нежный; вялый"
        }
    },
    {
        "id": 1957,
        "en": "fling",
        "sound": "[flIN]",
        "ru": {
            "v-": "бросать, метать, швырять; ринуться"
        },
        "irregular": "flung; flung [flAN]"
    },
    {
        "id": 1958,
        "en": "winter",
        "sound": "['wIntq]",
        "ru": {
            "n-": "зима"
        }
    },
    {
        "id": 1959,
        "en": "percent",
        "sound": "[pq'sent]",
        "ru": {
            "v-": "амер. шк. разг. выводить отметку на письм. экзамене"
        }
    },
    {
        "id": 1960,
        "en": "appearance",
        "sound": "[q'pIqrqns]",
        "ru": {
            "n-": "появление"
        }
    },
    {
        "id": 1961,
        "en": "depend",
        "sound": "[dI'pend]",
        "ru": {
            "v-": "зависеть"
        }
    },
    {
        "id": 1962,
        "en": "bean",
        "sound": "[bJn]",
        "ru": {
            "n-": "боб"
        }
    },
    {
        "id": 1963,
        "en": "sharply",
        "sound": "['SRplI]",
        "ru": {
            "adv-": "резко"
        }
    },
    {
        "id": 1964,
        "en": "cord",
        "sound": "[kLd]",
        "ru": {
            "n-": "веревка, шнур"
        }
    },
    {
        "id": 1965,
        "en": "nightmare",
        "sound": "['naItmeq]",
        "ru": {
            "n-": "кошмар; страшный сон; перен. ужас"
        }
    },
    {
        "id": 1966,
        "en": "tilt",
        "sound": "[tIlt]",
        "ru": {
            "n-": "наклон;",
            "v-": "наклонять(ся); опрокидывать, выворачивать"
        }
    },
    {
        "id": 1967,
        "en": "amount",
        "sound": "[q'maunt]",
        "ru": {
            "n-": "количество; сумма"
        }
    },
    {
        "id": 1968,
        "en": "dot",
        "sound": "[dOt]",
        "ru": {
            "n-": "точка; пятнышко; крошка;",
            "v-": "ставить точки; усеивать"
        }
    },
    {
        "id": 1969,
        "en": "fuel",
        "sound": "[fjuql]",
        "ru": {
            "n-": "топливо, горючее;",
            "v-": "заправлять топливом"
        }
    },
    {
        "id": 1970,
        "en": "neighbo(u)rhood",
        "sound": "['neIbqhud]",
        "ru": {
            "n-": "соседство, близость; район, округ"
        }
    },
    {
        "id": 1971,
        "en": "speech",
        "sound": "[spJC]",
        "ru": {
            "n-": "речь, выступление"
        }
    },
    {
        "id": 1972,
        "en": "stall",
        "sound": "[stLl]",
        "ru": {
            "n-": "стойло; ларек; прилавок;",
            "v-": "ставить в стойло; отводить место"
        }
    },
    {
        "id": 1973,
        "en": "progress",
        "sound": "['prougres]",
        "ru": {
            "n-": "прогресс, развитие, успехи;",
            "v-": "развиваться"
        }
    },
    {
        "id": 1974,
        "en": "torch",
        "sound": "[tLC]",
        "ru": {
            "n-": "факел; фонарик;",
            "v-": "освещать факелами"
        }
    },
    {
        "id": 1975,
        "en": "tool",
        "sound": "[tHl]",
        "ru": {
            "n-": "(рабочий) инструмент; перен. орудие"
        }
    },
    {
        "id": 1976,
        "en": "sandwich",
        "sound": "['sxnwIG]",
        "ru": {
            "n-": "сандвич"
        }
    },
    {
        "id": 1977,
        "en": "cart",
        "sound": "[kRt]",
        "ru": {
            "n-": "телега; повозка"
        }
    },
    {
        "id": 1978,
        "en": "statement",
        "sound": "['steItmqnt]",
        "ru": {
            "n-": "заявление; утверждение"
        }
    },
    {
        "id": 1979,
        "en": "shave",
        "sound": "[SeIv]",
        "ru": {
            "n-": "бритье;",
            "v-": "(shaved; shaved, shaven) брить(ся)"
        }
    },
    {
        "id": 1980,
        "en": "handsome",
        "sound": "['hxnsqm]",
        "ru": {
            "a-": "красивый"
        }
    },
    {
        "id": 1981,
        "en": "nut",
        "sound": "[nAt]",
        "ru": {
            "n-": "орех; жарг. башка, \"котелок\"; псих, чокнутый (чаще ~s)"
        }
    },
    {
        "id": 1982,
        "en": "channel",
        "sound": "['Cxnl]",
        "ru": {
            "n-": "пролив; канал (тж. перен., напр. TV)"
        }
    },
    {
        "id": 1983,
        "en": "furious",
        "sound": "['fjuqrIqs]",
        "ru": {
            "a-": "взбешенный, яростный; неистовый"
        }
    },
    {
        "id": 1984,
        "en": "lightning",
        "sound": "['laItnIN]",
        "ru": {
            "n-": "молния"
        }
    },
    {
        "id": 1985,
        "en": "route",
        "sound": "[rHt]",
        "ru": {
            "n-": "маршрут, путь, курс"
        }
    },
    {
        "id": 1986,
        "en": "relieve",
        "sound": "[rI'lJv]",
        "ru": {
            "v-": "облегчать; освобождать"
        }
    },
    {
        "id": 1987,
        "en": "pillow",
        "sound": "['pIlou]",
        "ru": {
            "n-": "подушка"
        }
    },
    {
        "id": 1988,
        "en": "aunt",
        "sound": "[Rnt]",
        "ru": {
            "n-": "тетя"
        }
    },
    {
        "id": 1989,
        "en": "halfway",
        "sound": "[\"hRf'weI]",
        "ru": {
            "adv-": "на полпути"
        }
    },
    {
        "id": 1990,
        "en": "invite",
        "sound": "[In'vaIt]",
        "ru": {
            "v-": "приглашать"
        }
    },
    {
        "id": 1991,
        "en": "somewhat",
        "sound": "['sAmwOt]",
        "ru": {
            "adv-": "отчасти, до некоторой степени, несколько"
        }
    },
    {
        "id": 1992,
        "en": "bullshit",
        "sound": "['bulSIt]",
        "ru": {
            "n-": "разг. чушь, ерунда"
        }
    },
    {
        "id": 1993,
        "en": "request",
        "sound": "[rI'kwest]",
        "ru": {
            "n-": "просьба;",
            "v-": "просить"
        }
    },
    {
        "id": 1994,
        "en": "proper",
        "sound": "['prOpq]",
        "ru": {
            "a-": "правильный; подходящий; присущий, свойственный"
        }
    },
    {
        "id": 1995,
        "en": "plunge",
        "sound": "[plAnG]",
        "ru": {
            "v-": "нырять,"
        }
    },
    {
        "id": 1996,
        "en": "contract",
        "sound": "n- ['kOntrxkt]",
        "ru": {
            "n-": "['kOntrxkt] договор;",
            "v-": "[kqn'trxkt] заключать договор"
        },
        "irregular": ""
    },
    {
        "id": 1997,
        "en": "desperate",
        "sound": "['desp(q)rIt]",
        "ru": {
            "a-": "отчаянный; безнадежный; ужасный"
        }
    },
    {
        "id": 1998,
        "en": "footstep",
        "sound": "['futstep]",
        "ru": {
            "n-": "шаг; ~s шаги"
        }
    },
    {
        "id": 1999,
        "en": "truly",
        "sound": "['trHlI]",
        "ru": {
            "adv-": "правдиво, искренне"
        }
    },
    {
        "id": 2000,
        "en": "rubber",
        "sound": "['rAbq]",
        "ru": {
            "n-": "резина; ластик"
        }
    },
    {
        "id": 2001,
        "en": "wagon",
        "sound": "['wxgqn]",
        "ru": {
            "n-": "повозка; фургон"
        }
    },
    {
        "id": 2002,
        "en": "rocket",
        "sound": "['rOkIt]",
        "ru": {
            "n-": "ракета;",
            "v-": "выпускать ракету; взлетать"
        }
    },
    {
        "id": 2003,
        "en": "fighter",
        "sound": "['faItq]",
        "ru": {
            "n-": "боец, борец"
        }
    },
    {
        "id": 2004,
        "en": "tug",
        "sound": "[tAg]",
        "ru": {
            "v-": "тянуть с усилием; дергать изо всех сил"
        }
    },
    {
        "id": 2005,
        "en": "item",
        "sound": "['aItqm]",
        "ru": {
            "n-": "(отдельный) предмет, вещь (из списка); пункт, параграф"
        }
    },
    {
        "id": 2006,
        "en": "embrace",
        "sound": "[Im'breIs]",
        "ru": {
            "n-": "объятие; объятия;",
            "v-": "обнимать(ся)"
        }
    },
    {
        "id": 2007,
        "en": "lover",
        "sound": "['lAvq]",
        "ru": {
            "n-": "любитель; любовник, возлюбленный; ~s влюбленная парочка"
        }
    },
    {
        "id": 2008,
        "en": "brilliant",
        "sound": "['brIljqnt]",
        "ru": {
            "a-": "блестящий"
        }
    },
    {
        "id": 2009,
        "en": "waitress",
        "sound": "['weItrIs]",
        "ru": {
            "n-": "официантка"
        }
    },
    {
        "id": 2010,
        "en": "splash",
        "sound": "[splxS]",
        "ru": {
            "n-": "брызги, плеск;",
            "v-": "брызгать(ся), плескать(ся)"
        }
    },
    {
        "id": 2011,
        "en": "structure",
        "sound": "['strAkCq]",
        "ru": {
            "n-": "сооружение, строение; структура, устройство"
        }
    },
    {
        "id": 2012,
        "en": "desperately",
        "sound": "['desp(q)rItlI]",
        "ru": {
            "adv-": "отчаянно; безнадежно; крайне, очень"
        }
    },
    {
        "id": 2013,
        "en": "poison",
        "sound": "['pOIzn]",
        "ru": {
            "n-": "яд;",
            "v-": ""
        }
    },
    {
        "id": 2014,
        "en": "flood",
        "sound": "[flAd]",
        "ru": {
            "n-": "наводнение; поток;",
            "v-": "затоплять; наводнять"
        }
    },
    {
        "id": 2015,
        "en": "asshole",
        "sound": "['xshoul]",
        "ru": {
            "n-": "руг. задница"
        }
    },
    {
        "id": 2016,
        "en": "peel",
        "sound": "[pJl]",
        "ru": {
            "n-": "кожура, корка;",
            "v-": "снимать кожуру; облезать (о краске, коже)"
        }
    },
    {
        "id": 2017,
        "en": "according",
        "sound": "[q'kLdIN]",
        "ru": {
            "prep-": "~ to согласно, в соответствии с"
        }
    },
    {
        "id": 2018,
        "en": "blaze",
        "sound": "[bleIz]",
        "ru": {
            "n-": "пламя; перен. вспышка;",
            "v-": "пылать, гореть (тж. перен.)"
        }
    },
    {
        "id": 2019,
        "en": "goodbye",
        "sound": "[\"gud'baI]",
        "ru": {
            "int-": "до свидания!; прощай(те)!"
        }
    },
    {
        "id": 2020,
        "en": "height",
        "sound": "[haIt]",
        "ru": {
            "n-": "высота; вершина; рост (чел. и т.д.); высшая степень"
        }
    },
    {
        "id": 2021,
        "en": "swirl",
        "sound": "[swWl]",
        "ru": {
            "n-": "кружение, водоворот;",
            "v-": "кружить(ся) в водовороте; обвивать"
        }
    },
    {
        "id": 2022,
        "en": "retreat",
        "sound": "[rI'trJt]",
        "ru": {
            "n-": "отступление, убежище, приют;",
            "v-": "отступать, уходить"
        }
    },
    {
        "id": 2023,
        "en": "insert",
        "sound": "[In'sWt]",
        "ru": {
            "v-": "вставлять"
        }
    },
    {
        "id": 2024,
        "en": "streak",
        "sound": "[strJk]",
        "ru": {
            "n-": "полоска; жилка;",
            "v-": "проводить полосы; разг. мелькать"
        }
    },
    {
        "id": 2025,
        "en": "pure",
        "sound": "[pjue]",
        "ru": {
            "a-": "чистый; без примеси"
        }
    },
    {
        "id": 2026,
        "en": "technician",
        "sound": "[tek'nISn]",
        "ru": {
            "n-": "техник"
        }
    },
    {
        "id": 2027,
        "en": "shore",
        "sound": "[SL]",
        "ru": {
            "n-": "берег (моря, озера)"
        }
    },
    {
        "id": 2028,
        "en": "prefer",
        "sound": "[prI'fW]",
        "ru": {
            "v-": "предпочитать"
        }
    },
    {
        "id": 2029,
        "en": "wade",
        "sound": "[weId]",
        "ru": {
            "n-": "брод;",
            "v-": "переходить вброд; пробиваться, преодолевать"
        }
    },
    {
        "id": 2030,
        "en": "underneath",
        "sound": "[\"Andq'nJT]",
        "ru": {
            "prep-": "под;",
            "adv-": "вниз; внизу; снизу"
        }
    },
    {
        "id": 2031,
        "en": "darling",
        "sound": "['dRlIN]",
        "ru": {
            "n-": "дорогой, любимый"
        }
    },
    {
        "id": 2032,
        "en": "amber",
        "sound": "['xmbq]",
        "ru": {
            "n-": "янтарь"
        }
    },
    {
        "id": 2033,
        "en": "introduce",
        "sound": "[\"Intrq'djHs]",
        "ru": {
            "v-": "вводить; представлять, знакомить"
        }
    },
    {
        "id": 2034,
        "en": "closely",
        "sound": "['klouslI]",
        "ru": {
            "adv-": "близко, тесно"
        }
    },
    {
        "id": 2035,
        "en": "milk",
        "sound": "[mIlk]",
        "ru": {
            "n-": "молоко;",
            "v-": "доить"
        }
    },
    {
        "id": 2036,
        "en": "theory",
        "sound": "['TIqrI]",
        "ru": {
            "n-": "теория"
        }
    },
    {
        "id": 2037,
        "en": "lid",
        "sound": "[lId]",
        "ru": {
            "n-": "крышка, колпак; веко"
        }
    },
    {
        "id": 2038,
        "en": "walker",
        "sound": "['wLkq]",
        "ru": {
            "n-": "ходок, тот кто идет, гуляет и т.п."
        }
    },
    {
        "id": 2039,
        "en": "sword",
        "sound": "[sLd]",
        "ru": {
            "n-": "меч; шпага"
        }
    },
    {
        "id": 2040,
        "en": "circumstance",
        "sound": "['sWkqmstqns]",
        "ru": {
            "n-": "обстоятельство; обычно употр. во мн. ч. ~s"
        }
    },
    {
        "id": 2041,
        "en": "measure",
        "sound": "['meZq]",
        "ru": {
            "n-": "мера, мерка;",
            "v-": "измерять, мерить"
        }
    },
    {
        "id": 2042,
        "en": "penny",
        "sound": "['penI]",
        "ru": {
            "noPart": "1) брит. пенни, пенс; мн. ч.: pence (о сумме), pennies (об отд. монетах); 2) амер. монета в один цент"
        }
    },
    {
        "id": 2043,
        "en": "pierce",
        "sound": "[pIqs]",
        "ru": {
            "v-": "пронзать, протыкать, прокалывать; проникать"
        }
    },
    {
        "id": 2044,
        "en": "dragon",
        "sound": "['drxgqn]",
        "ru": {
            "n-": "дракон"
        }
    },
    {
        "id": 2045,
        "en": "fog",
        "sound": "[fOg]",
        "ru": {
            "n-": "густой туман; мгла;",
            "v-": "затуманивать(ся)"
        }
    },
    {
        "id": 2046,
        "en": "console",
        "sound": "[kqn'soul]",
        "ru": {
            "v-": "утешать"
        }
    },
    {
        "id": 2047,
        "en": "definitely",
        "sound": "['defInItlI]",
        "ru": {
            "adv-": "определенно"
        }
    },
    {
        "id": 2048,
        "en": "cling",
        "sound": "[klIN]",
        "ru": {
            "v-": "цепляться; прилипать; облегать (о платье)"
        },
        "irregular": "clung; clung [klAN]"
    },
    {
        "id": 2049,
        "en": "inner",
        "sound": "['Inq]",
        "ru": {
            "a-": "внутренний"
        }
    },
    {
        "id": 2050,
        "en": "forgive",
        "sound": "[fq'gIv]",
        "ru": {
            "v-": "прощать"
        },
        "irregular": "forgave [fq'geIv]; forgiven [fq'gIvn]"
    },
    {
        "id": 2051,
        "en": "remark",
        "sound": "[rI'mRk]",
        "ru": {
            "n-": "замечание;",
            "v-": "замечать, отмечать"
        }
    },
    {
        "id": 2052,
        "en": "stab",
        "sound": "[stxb]",
        "ru": {
            "v-": "закалывать; наносить удар (ножом и т.п.)"
        }
    },
    {
        "id": 2053,
        "en": "harbour",
        "sound": "бр. = harbor ам. (1:6) ['hRbq]",
        "ru": {
            "n-": "порт, гавань; убежище, приют"
        }
    },
    {
        "id": 2054,
        "en": "calmly",
        "sound": "['kRmlI]",
        "ru": {
            "adv-": "тихо, спокойно"
        }
    },
    {
        "id": 2055,
        "en": "dash",
        "sound": "[dxS]",
        "ru": {
            "n-": "рывок; тире, черточка;",
            "v-": "бросаться, мчаться"
        }
    },
    {
        "id": 2056,
        "en": "commit",
        "sound": "[kq'mIt]",
        "ru": {
            "v-": "совершать (чаще дурное); поручать, вверять; подвергать"
        }
    },
    {
        "id": 2057,
        "en": "hawk",
        "sound": "[hLk]",
        "ru": {
            "n-": "ястреб"
        }
    },
    {
        "id": 2058,
        "en": "develop",
        "sound": "[dI'velqp]",
        "ru": {
            "v-": "развивать(ся"
        }
    },
    {
        "id": 2059,
        "en": "wedding",
        "sound": "['wedIN]",
        "ru": {
            "n-": "свадьба; венчание"
        }
    },
    {
        "id": 2060,
        "en": "gleam",
        "sound": "[glJm]",
        "ru": {
            "n-": "слабый свет, проблеск;",
            "v-": "светиться, мерцать"
        }
    },
    {
        "id": 2061,
        "en": "spell",
        "sound": "[spel]",
        "ru": {
            "v-": "(бр. spelt, ам. spelled) писать или произносить слово по буквам; spelling также",
            "n-": "правописание, орфография"
        }
    },
    {
        "id": 2062,
        "en": "instrument",
        "sound": "['Instrumqnt]",
        "ru": {
            "n-": "инструмент; прибор"
        }
    },
    {
        "id": 2063,
        "en": "horizon",
        "sound": "[hq'raIzn]",
        "ru": {
            "n-": "горизонт"
        }
    },
    {
        "id": 2064,
        "en": "mud",
        "sound": "[mAd]",
        "ru": {
            "n-": "грязь"
        }
    },
    {
        "id": 2065,
        "en": "threat",
        "sound": "[Tret]",
        "ru": {
            "n-": "угроза"
        }
    },
    {
        "id": 2066,
        "en": "aboard",
        "sound": "[q'bLd]",
        "ru": {
            "prep-": "на борту; в вагоне; на борт; в вагон"
        }
    },
    {
        "id": 2067,
        "en": "instruction",
        "sound": "[In'strAkSn]",
        "ru": {
            "n-": "обучение; чаще: ~s инструкции, указания"
        }
    },
    {
        "id": 2068,
        "en": "spare",
        "sound": "[spFq]",
        "ru": {
            "v-": "экономить; беречь; уделять;",
            "a-": "запасной, лишний"
        }
    },
    {
        "id": 2069,
        "en": "silly",
        "sound": "['sIlI]",
        "ru": {
            "a-": "глупый"
        }
    },
    {
        "id": 2070,
        "en": "pig",
        "sound": "[pIg]",
        "ru": {
            "n-": "свинья"
        }
    },
    {
        "id": 2071,
        "en": "toilet",
        "sound": "['tOIlIt]",
        "ru": {
            "n-": "туалет, уборная"
        }
    },
    {
        "id": 2072,
        "en": "operator",
        "sound": "['OpqreItq]",
        "ru": {
            "n-": "оператор"
        }
    },
    {
        "id": 2073,
        "en": "seriously",
        "sound": "['sIqrIqslI]",
        "ru": {
            "adv-": "серьезно"
        }
    },
    {
        "id": 2074,
        "en": "communication",
        "sound": "[kq\"mjHnI'keISn]",
        "ru": {
            "n-": "сообщение; связь; ~s средства связи"
        }
    },
    {
        "id": 2075,
        "en": "vampire",
        "sound": "['vxmpaIq]",
        "ru": {
            "n-": "вампир"
        }
    },
    {
        "id": 2076,
        "en": "gene",
        "sound": "[GJn]",
        "ru": {
            "n-": "биол. ген"
        }
    },
    {
        "id": 2077,
        "en": "candle",
        "sound": "['kxndl]",
        "ru": {
            "n-": "свеча"
        }
    },
    {
        "id": 2078,
        "en": "toy",
        "sound": "[tOI]",
        "ru": {
            "n-": "игрушка"
        }
    },
    {
        "id": 2079,
        "en": "estate",
        "sound": "[Is'teIt]",
        "ru": {
            "n-": "имущество, состояние; поместье; сословие"
        }
    },
    {
        "id": 2080,
        "en": "marriage",
        "sound": "['mxrIG]",
        "ru": {
            "n-": "женитьба, замужество, брак; свадьба"
        }
    },
    {
        "id": 2081,
        "en": "complex",
        "sound": "['kOmpleks]",
        "ru": {
            "n-": "комплекс;",
            "a-": "сложный"
        }
    },
    {
        "id": 2082,
        "en": "passage",
        "sound": "['pxsIG]",
        "ru": {
            "n-": "проход, проезд; коридор; отрывок (из книги и т.п.)"
        }
    },
    {
        "id": 2083,
        "en": "crane",
        "sound": "[kreIn]",
        "ru": {
            "n-": "журавль; подъемный кран;",
            "v-": "вытягивать (шею); подним. краном"
        }
    },
    {
        "id": 2084,
        "en": "drum",
        "sound": "[drAm]",
        "ru": {
            "n-": "барабан;",
            "v-": "бить в барабан; стучать, барабанить (пальцами)"
        }
    },
    {
        "id": 2085,
        "en": "overlook",
        "sound": "[\"ouvq'luk]",
        "ru": {
            "v-": "возвышаться над; смотреть сверху на"
        }
    },
    {
        "id": 2086,
        "en": "favourite",
        "sound": "бр. = favorite ам. (1:7) ['feIvrIt]",
        "ru": {
            "n-": "любимец;",
            "a-": "любимый"
        }
    },
    {
        "id": 2087,
        "en": "chill",
        "sound": "[CIl]",
        "ru": {
            "n-": "холод; простуда;",
            "a-": "холодный;",
            "v-": "охлаждать"
        }
    },
    {
        "id": 2088,
        "en": "desire",
        "sound": "[dI'zaIq]",
        "ru": {
            "n-": "(сильное) желание;",
            "v-": "желать, хотеть"
        }
    },
    {
        "id": 2089,
        "en": "score",
        "sound": "[skL]",
        "ru": {
            "n-": "зарубка, метка; счет;",
            "v-": "делать метки; вести счет (в игре)"
        }
    },
    {
        "id": 2090,
        "en": "executive",
        "sound": "[Ig'zekjutIv]",
        "ru": {
            "n-": "исполнительная власть; администратор; амер. служащий;",
            "a-": "правительственный"
        }
    },
    {
        "id": 2091,
        "en": "mental",
        "sound": "['mentl]",
        "ru": {
            "a-": "умственный"
        }
    },
    {
        "id": 2092,
        "en": "loudly",
        "sound": "['laudlI]",
        "ru": {
            "adv-": "громко"
        }
    },
    {
        "id": 2093,
        "en": "loss",
        "sound": "[lOs]",
        "ru": {
            "n-": "потеря; утрата; ущерб"
        }
    },
    {
        "id": 2094,
        "en": "link",
        "sound": "[lINk]",
        "ru": {
            "n-": "звено (цепи); перен. связующ. звено; связь;",
            "v-": "соединять, связывать"
        }
    },
    {
        "id": 2095,
        "en": "sway",
        "sound": "[sweI]",
        "ru": {
            "v-": "качать(ся)"
        }
    },
    {
        "id": 2096,
        "en": "deny",
        "sound": "[dI'naI]",
        "ru": {
            "v-": "отрицать, отвергать; отказывать(ся)"
        }
    },
    {
        "id": 2097,
        "en": "steer",
        "sound": "[stIq]",
        "ru": {
            "v-": "управлять (судном, авт. и т.п.); направлять"
        }
    },
    {
        "id": 2098,
        "en": "purple",
        "sound": "['pWpl]",
        "ru": {
            "a-": "пурпурный; фиолетовый, лиловый"
        }
    },
    {
        "id": 2099,
        "en": "jeans",
        "sound": "[GJnz]",
        "ru": {
            "n-": "джинсы"
        }
    },
    {
        "id": 2100,
        "en": "armour",
        "sound": "бр. = armor ам. (1:10) ['Rmq]",
        "ru": {
            "n-": "доспехи; броня;",
            "v-": "покрывать броней"
        }
    },
    {
        "id": 2101,
        "en": "squint",
        "sound": "[skwInt]",
        "ru": {
            "v-": "косить (глазами); смотреть украдкой, коситься; щуриться"
        }
    },
    {
        "id": 2102,
        "en": "firmly",
        "sound": "['fWmlI]",
        "ru": {
            "adv-": "твердо; крепко"
        }
    },
    {
        "id": 2103,
        "en": "expensive",
        "sound": "[Iks'pensIv]",
        "ru": {
            "a-": "дорогой, дорогостоящий"
        }
    },
    {
        "id": 2104,
        "en": "skirt",
        "sound": "[skWt]",
        "ru": {
            "n-": "юбка; ~s пола; подол;",
            "v-": "идти по границе, окружать, окаймлять"
        }
    },
    {
        "id": 2105,
        "en": "hop",
        "sound": "[hOp]",
        "ru": {
            "n-": "прыжок;",
            "v-": "прыгать"
        }
    },
    {
        "id": 2106,
        "en": "liquid",
        "sound": "['lIkwId]",
        "ru": {
            "n-": "жидкость;",
            "a-": "жидкий"
        }
    },
    {
        "id": 2107,
        "en": "stiff",
        "sound": "[stIf]",
        "ru": {
            "a-": "тугой; перен. напряженный;",
            "n-": "разг. вексель; босяк; зануда и др."
        }
    },
    {
        "id": 2108,
        "en": "cowboy",
        "sound": "['kaubOI]",
        "ru": {
            "n-": "ковбой"
        }
    },
    {
        "id": 2109,
        "en": "sale",
        "sound": "[seIl]",
        "ru": {
            "n-": "продажа, распродажа"
        }
    },
    {
        "id": 2110,
        "en": "arrow",
        "sound": "['xrou]",
        "ru": {
            "n-": "стрела"
        }
    },
    {
        "id": 2111,
        "en": "nasty",
        "sound": "['nRstI]",
        "ru": {
            "a-": "отвратительный, противный"
        }
    },
    {
        "id": 2112,
        "en": "aisle",
        "sound": "[aIl]",
        "ru": {
            "n-": "проход (между рядами в театре и т.п.)"
        }
    },
    {
        "id": 2113,
        "en": "windshield",
        "sound": "['wIndSJld]",
        "ru": {
            "n-": "щит от ветра"
        }
    },
    {
        "id": 2114,
        "en": "darken",
        "sound": "['dRkqn]",
        "ru": {
            "v-": "затемнять; омрачать; темнеть"
        }
    },
    {
        "id": 2115,
        "en": "siren",
        "sound": "['saIqrqn]",
        "ru": {
            "n-": "сирена (мифол.); сирена (сигнал)"
        }
    },
    {
        "id": 2116,
        "en": "transfer",
        "sound": "n- ['trxnsfq(:)]",
        "ru": {
            "n-": "['trxnsfq(:)] перемещение; перевод;",
            "v-": "[trxns'fW] перемещать"
        },
        "irregular": ""
    },
    {
        "id": 2117,
        "en": "sniff",
        "sound": "[snIf]",
        "ru": {
            "v-": "сопеть, фыркать; нюхать, обнюхивать"
        }
    },
    {
        "id": 2118,
        "en": "sofa",
        "sound": "['soufq]",
        "ru": {
            "n-": "софа, диван"
        }
    },
    {
        "id": 2119,
        "en": "career",
        "sound": "[kq'rIq]",
        "ru": {
            "n-": "карьера, успех"
        }
    },
    {
        "id": 2120,
        "en": "navy",
        "sound": "['neIvI]",
        "ru": {
            "n-": "военно-морской флот"
        }
    },
    {
        "id": 2121,
        "en": "palace",
        "sound": "['pxlIs]",
        "ru": {
            "n-": "дворец"
        }
    },
    {
        "id": 2122,
        "en": "treasure",
        "sound": "['treGq]",
        "ru": {
            "n-": "сокровище"
        }
    },
    {
        "id": 2123,
        "en": "warrior",
        "sound": "['wOrIq]",
        "ru": {
            "n-": "воин"
        }
    },
    {
        "id": 2124,
        "en": "cream",
        "sound": "[krJm]",
        "ru": {
            "n-": "сливки, крем;",
            "v-": "снимать сливки"
        }
    },
    {
        "id": 2125,
        "en": "amuse",
        "sound": "[q'mjHz]",
        "ru": {
            "v-": "забавлять, развлекать"
        }
    },
    {
        "id": 2126,
        "en": "dangle",
        "sound": "['dxNgl]",
        "ru": {
            "v-": "свободно висеть; болтаться; волочиться"
        }
    },
    {
        "id": 2127,
        "en": "escort",
        "sound": "n- ['eskLt]",
        "ru": {
            "n-": "['eskLt] охрана; сопровождение;",
            "v-": "[Is'kLt] сопровождать"
        },
        "irregular": ""
    },
    {
        "id": 2128,
        "en": "coin",
        "sound": "[kOIn]",
        "ru": {
            "n-": "монета"
        }
    },
    {
        "id": 2129,
        "en": "dean",
        "sound": "[dJn]",
        "ru": {
            "n-": "декан; настоятель"
        }
    },
    {
        "id": 2130,
        "en": "meal",
        "sound": "[mJl]",
        "ru": {
            "n-": "еда; принятие пищи"
        }
    },
    {
        "id": 2131,
        "en": "furniture",
        "sound": "['fWnICq]",
        "ru": {
            "n-": "мебель"
        }
    },
    {
        "id": 2132,
        "en": "flush",
        "sound": "[flAS]",
        "ru": {
            "n-": "краска, румянец (на лице);",
            "v-": "вспыхнуть, (по)краснеть"
        }
    },
    {
        "id": 2133,
        "en": "bubble",
        "sound": "['bAbl]",
        "ru": {
            "n-": "пузырь(ок); дутое предприятие;",
            "v-": "пузыриться; кипеть"
        }
    },
    {
        "id": 2134,
        "en": "famous",
        "sound": "['feImqs]",
        "ru": {
            "a-": "знаменитый"
        }
    },
    {
        "id": 2135,
        "en": "twin",
        "sound": "[twIn]",
        "ru": {
            "n-": "близнец; двойник"
        }
    },
    {
        "id": 2136,
        "en": "insurance",
        "sound": "[In'Suqrqns]",
        "ru": {
            "n-": "страхование"
        }
    },
    {
        "id": 2137,
        "en": "soak",
        "sound": "[souk]",
        "ru": {
            "v-": "промачивать; пропитывать; впитывать"
        }
    },
    {
        "id": 2138,
        "en": "Wednesday",
        "sound": "['wenzdI]",
        "ru": {
            "n-": "среда"
        }
    },
    {
        "id": 2139,
        "en": "exterior",
        "sound": "[eks'tIqrIq]",
        "ru": {
            "n-": "внешность, наружность;",
            "a-": "внешний, наружный"
        }
    },
    {
        "id": 2140,
        "en": "shepherd",
        "sound": "['Sepqd]",
        "ru": {
            "n-": "пастух; религ. пастырь"
        }
    },
    {
        "id": 2141,
        "en": "afford",
        "sound": "[q'fLd]",
        "ru": {
            "v-": "иметь возможность; предоставлять, давать"
        }
    },
    {
        "id": 2142,
        "en": "charm",
        "sound": "[CRm]",
        "ru": {
            "n-": "обаяние, очарование;",
            "v-": "очаровывать"
        }
    },
    {
        "id": 2143,
        "en": "ourselves",
        "sound": "[auq'selvz]",
        "ru": {
            "pron-": "себя; сами"
        }
    },
    {
        "id": 2144,
        "en": "alert",
        "sound": "[q'lWt]",
        "ru": {
            "n-": "тревога;",
            "a-": "бдительный;",
            "v-": "объявлять тревогу"
        }
    },
    {
        "id": 2145,
        "en": "pride",
        "sound": "[praId]",
        "ru": {
            "n-": "гордость; предмет гордости; спесь, гордыня"
        }
    },
    {
        "id": 2146,
        "en": "screenplay",
        "sound": "['skrJnpleI]",
        "ru": {
            "n-": "сценарий"
        }
    },
    {
        "id": 2147,
        "en": "filter",
        "sound": "['fIltq]",
        "ru": {
            "n-": "фильтр;",
            "v-": "фильтровать"
        }
    },
    {
        "id": 2148,
        "en": "freedom",
        "sound": "['frJdqm]",
        "ru": {
            "n-": "свобода"
        }
    },
    {
        "id": 2149,
        "en": "hover",
        "sound": "['hOvq]",
        "ru": {
            "v-": "парить, зависать (птица, самолет, облако); вертеться"
        }
    },
    {
        "id": 2150,
        "en": "brake",
        "sound": "[breIk]",
        "ru": {
            "n-": "тормоз;",
            "v-": "тормозить"
        }
    },
    {
        "id": 2151,
        "en": "establish",
        "sound": "[Is'txblIS]",
        "ru": {
            "v-": "основывать, учреждать; создавать; укреплять"
        }
    },
    {
        "id": 2152,
        "en": "outer",
        "sound": "['autq]",
        "ru": {
            "a-": "внешний, наружный"
        }
    },
    {
        "id": 2153,
        "en": "flee",
        "sound": "[flJ]",
        "ru": {
            "v-": "(fled; fled) бежать, убегать, спасаться бегством"
        }
    },
    {
        "id": 2154,
        "en": "university",
        "sound": "[\"jHnI'vWsItI]",
        "ru": {
            "n-": "университет"
        }
    },
    {
        "id": 2155,
        "en": "angrily",
        "sound": "['xNgrIlI]",
        "ru": {
            "adv-": "сердито, гневно"
        }
    },
    {
        "id": 2156,
        "en": "pill",
        "sound": "[pIl]",
        "ru": {
            "n-": "пилюля"
        }
    },
    {
        "id": 2157,
        "en": "rank",
        "sound": "[rxNk]",
        "ru": {
            "n-": "ряд, шеренга; звание, чин; категория;",
            "v-": "классифицировать"
        }
    },
    {
        "id": 2158,
        "en": "silk",
        "sound": "[sIlk]",
        "ru": {
            "n-": "шелк;",
            "a-": "шелковый"
        }
    },
    {
        "id": 2159,
        "en": "regular",
        "sound": "['regjulq]",
        "ru": {
            "a-": "регулярный; правильный; обычный"
        }
    },
    {
        "id": 2160,
        "en": "screech",
        "sound": "[skrJC]",
        "ru": {
            "v-": "визжать; скрежетать"
        }
    },
    {
        "id": 2161,
        "en": "document",
        "sound": "['dOkjumqnt]",
        "ru": {
            "n-": "документ"
        }
    },
    {
        "id": 2162,
        "en": "harm",
        "sound": "[hRm]",
        "ru": {
            "n-": "вред, ущерб;",
            "v-": "вредить"
        }
    },
    {
        "id": 2163,
        "en": "statue",
        "sound": "['stxtjH]",
        "ru": {
            "n-": "статуя"
        }
    },
    {
        "id": 2164,
        "en": "spark",
        "sound": "[spRk]",
        "ru": {
            "n-": "искра;",
            "v-": "искриться"
        }
    },
    {
        "id": 2165,
        "en": "thigh",
        "sound": "[TaI]",
        "ru": {
            "n-": "бедро"
        }
    },
    {
        "id": 2166,
        "en": "eighty",
        "sound": "['eItI]",
        "ru": {
            "num-": "восемьдесят"
        }
    },
    {
        "id": 2167,
        "en": "due",
        "sound": "[djH]",
        "ru": {
            "a-": "должный; обязанный"
        }
    },
    {
        "id": 2168,
        "en": "carve",
        "sound": "[kRv]",
        "ru": {
            "v-": "вырезать, высекать"
        }
    },
    {
        "id": 2169,
        "en": "blur",
        "sound": "[blW]",
        "ru": {
            "n-": "пятно; помутнение;",
            "v-": "пачкать; затуманивать"
        }
    },
    {
        "id": 2170,
        "en": "conceal",
        "sound": "[kqn'sJl]",
        "ru": {
            "v-": "скрывать"
        }
    },
    {
        "id": 2171,
        "en": "idiot",
        "sound": "['IdIqt]",
        "ru": {
            "n-": "идиот"
        }
    },
    {
        "id": 2172,
        "en": "mystery",
        "sound": "['mIstqrI]",
        "ru": {
            "n-": "тайна"
        }
    },
    {
        "id": 2173,
        "en": "slave",
        "sound": "[sleIv]",
        "ru": {
            "n-": "раб"
        }
    },
    {
        "id": 2174,
        "en": "midnight",
        "sound": "['mIdnaIt]",
        "ru": {
            "n-": "полночь"
        }
    },
    {
        "id": 2175,
        "en": "guilty",
        "sound": "['gIltI]",
        "ru": {
            "a-": "виноватый, виновный"
        }
    },
    {
        "id": 2176,
        "en": "hut",
        "sound": "[hAt]",
        "ru": {
            "n-": "хижина, лачуга"
        }
    },
    {
        "id": 2177,
        "en": "ninety",
        "sound": "['naIntI]",
        "ru": {
            "num-": "девяносто"
        }
    },
    {
        "id": 2178,
        "en": "sue",
        "sound": "[sH]",
        "ru": {
            "v-": "возбуждать дело; судиться"
        }
    },
    {
        "id": 2179,
        "en": "represent",
        "sound": "[\"reprI'zent]",
        "ru": {
            "v-": "представлять"
        }
    },
    {
        "id": 2180,
        "en": "remote",
        "sound": "[rI'mout]",
        "ru": {
            "a-": "дальний, отдаленный; уединенный; маловероятный"
        }
    },
    {
        "id": 2181,
        "en": "plus",
        "sound": "[plAs]",
        "ru": {
            "n-": "плюс"
        }
    },
    {
        "id": 2182,
        "en": "bruise",
        "sound": "[brHz]",
        "ru": {
            "n-": "ушиб;",
            "v-": "ушибать"
        }
    },
    {
        "id": 2183,
        "en": "clay",
        "sound": "[kleI]",
        "ru": {
            "n-": "глина"
        }
    },
    {
        "id": 2184,
        "en": "relationship",
        "sound": "[rI'leISnSIp]",
        "ru": {
            "n-": "отношение, взаимоотношение; связь; родство"
        }
    },
    {
        "id": 2185,
        "en": "neighbour",
        "sound": "бр. = neighbor ам. (1:10) ['neIbq]",
        "ru": {
            "n-": "сосед, соседка"
        }
    },
    {
        "id": 2186,
        "en": "tension",
        "sound": "['tenSn]",
        "ru": {
            "n-": "напряженность"
        }
    },
    {
        "id": 2187,
        "en": "standard",
        "sound": "['stxndqd]",
        "ru": {
            "n-": "стандарт, норма; образец;",
            "a-": "стандартный, типовой"
        }
    },
    {
        "id": 2188,
        "en": "individual",
        "sound": "[\"IndI'vIGuql]",
        "ru": {
            "n-": "личность, человек;",
            "v-": "личный, индивидуальный"
        }
    },
    {
        "id": 2189,
        "en": "extremely",
        "sound": "[Iks'trJmlI]",
        "ru": {
            "adv-": "крайне, очень"
        }
    },
    {
        "id": 2190,
        "en": "accent",
        "sound": "['xksqnt]",
        "ru": {
            "n-": "ударение; акцент; [xk'sent]",
            "v-": "акцентировать"
        }
    },
    {
        "id": 2191,
        "en": "toe",
        "sound": "[tou]",
        "ru": {
            "n-": "палец (на ноге); носок (башмака)"
        }
    },
    {
        "id": 2192,
        "en": "affair",
        "sound": "[q'feq]",
        "ru": {
            "n-": "дело"
        }
    },
    {
        "id": 2193,
        "en": "illuminate",
        "sound": "[I'lHmIneIt]",
        "ru": {
            "v-": "освещать"
        }
    },
    {
        "id": 2194,
        "en": "bust",
        "sound": "[bAst]",
        "ru": {
            "n-": "амер. халтура;",
            "v-": "взломать"
        }
    },
    {
        "id": 2195,
        "en": "swarm",
        "sound": "[swLm]",
        "ru": {
            "n-": "толпа;",
            "v-": "толпиться"
        }
    },
    {
        "id": 2196,
        "en": "hurl",
        "sound": "[hWl]",
        "ru": {
            "v-": "швырять; валить"
        }
    },
    {
        "id": 2197,
        "en": "casually",
        "sound": "['kxZjuqlI]",
        "ru": {
            "adv-": "случайно"
        }
    },
    {
        "id": 2198,
        "en": "medium",
        "sound": "['mJdjqm]",
        "ru": {
            "n-": "средство, способ; media средства (информ. и т.п.); 2)",
            "a-": "средний"
        }
    },
    {
        "id": 2199,
        "en": "melt",
        "sound": "[melt]",
        "ru": {
            "v-": "таять; плавить(ся)"
        }
    },
    {
        "id": 2200,
        "en": "access",
        "sound": "['xkses]",
        "ru": {
            "n-": "доступ; подход"
        }
    },
    {
        "id": 2201,
        "en": "impression",
        "sound": "[Im'preSn]",
        "ru": {
            "n-": "впечатление"
        }
    },
    {
        "id": 2202,
        "en": "uncomfortable",
        "sound": "[An'kAmftqbl]",
        "ru": {
            "a-": "неудобный"
        }
    },
    {
        "id": 2203,
        "en": "perform",
        "sound": "[pq'fLm]",
        "ru": {
            "v-": "выполнять, совершать; играть, исполнять (роль и т.п.)"
        }
    },
    {
        "id": 2204,
        "en": "unconscious",
        "sound": "[An'kOnSqs]",
        "ru": {
            "a-": "не сознающий, бессознательный"
        }
    },
    {
        "id": 2205,
        "en": "locker",
        "sound": "['lOkq]",
        "ru": {
            "n-": "(запирающийся) шкафчик, ящик (в раздевалке и т.п.)"
        }
    },
    {
        "id": 2206,
        "en": "speaker",
        "sound": "['spJkq]",
        "ru": {
            "n-": "оратор; спикер"
        }
    },
    {
        "id": 2207,
        "en": "visitor",
        "sound": "['vIzItq]",
        "ru": {
            "n-": "посетитель, гость"
        }
    },
    {
        "id": 2208,
        "en": "laser",
        "sound": "['leIzq]",
        "ru": {
            "n-": "лазер"
        }
    },
    {
        "id": 2209,
        "en": "personally",
        "sound": "['pWsnqlI]",
        "ru": {
            "adv-": "лично, сам"
        }
    },
    {
        "id": 2210,
        "en": "anxious",
        "sound": "['xNkSqs]",
        "ru": {
            "a-": "озабоченный; стремящийся (к), сильно желающий"
        }
    },
    {
        "id": 2211,
        "en": "deserve",
        "sound": "[dI'zWv]",
        "ru": {
            "v-": "заслуживать"
        }
    },
    {
        "id": 2212,
        "en": "unusual",
        "sound": "[An'jHZuql]",
        "ru": {
            "a-": "необыкновенный"
        }
    },
    {
        "id": 2213,
        "en": "delight",
        "sound": "[dI'laIt]",
        "ru": {
            "n-": "удовольствие;",
            "v-": "доставлять наслаждение; восхищать"
        }
    },
    {
        "id": 2214,
        "en": "root",
        "sound": "[rHt]",
        "ru": {
            "n-": "корень; перен. причина;",
            "v-": "укореняться; перен. внедрять(ся)"
        }
    },
    {
        "id": 2215,
        "en": "proceed",
        "sound": "[prq'sJd]",
        "ru": {
            "v-": "продолжать(ся); возобновлять; происходить"
        }
    },
    {
        "id": 2216,
        "en": "servant",
        "sound": "['sWvqnt]",
        "ru": {
            "n-": "слуга; прислуга"
        }
    },
    {
        "id": 2217,
        "en": "dish",
        "sound": "[dIS]",
        "ru": {
            "n-": "блюдо (посуда); блюдо (кушанье); ~es посуда"
        }
    },
    {
        "id": 2218,
        "en": "federal",
        "sound": "['fedqr(q)l]",
        "ru": {
            "a-": "федеральный"
        }
    },
    {
        "id": 2219,
        "en": "frantically",
        "sound": "['frxntIklI]",
        "ru": {
            "adv-": "неистово"
        }
    },
    {
        "id": 2220,
        "en": "robe",
        "sound": "[roub]",
        "ru": {
            "n-": "халат, мантия"
        }
    },
    {
        "id": 2221,
        "en": "whirl",
        "sound": "[wWl]",
        "ru": {
            "v-": "вертеть(ся)"
        }
    },
    {
        "id": 2222,
        "en": "horrible",
        "sound": "['hOrqbl]",
        "ru": {
            "a-": "ужасный"
        }
    },
    {
        "id": 2223,
        "en": "fumble",
        "sound": "['fAmbl]",
        "ru": {
            "v-": "нащупывать, шарить; неловко обращаться (с)"
        }
    },
    {
        "id": 2224,
        "en": "headlight",
        "sound": "['hedlaIt]",
        "ru": {
            "n-": "фара (автомобиля)"
        }
    },
    {
        "id": 2225,
        "en": "probe",
        "sound": "[proub]",
        "ru": {
            "v-": "исследовать"
        }
    },
    {
        "id": 2226,
        "en": "invisible",
        "sound": "[In'vIzIbl]",
        "ru": {
            "a-": "невидимый"
        }
    },
    {
        "id": 2227,
        "en": "etc",
        "sound": "[It'setrq]",
        "ru": {
            "noPart": "и т. д.; и т. п."
        }
    },
    {
        "id": 2228,
        "en": "tile",
        "sound": "[taIl]",
        "ru": {
            "n-": "черепица; кафель; плитка;",
            "v-": "крыть черепицей, кафелем"
        }
    },
    {
        "id": 2229,
        "en": "pleasant",
        "sound": "['pleznt]",
        "ru": {
            "a-": "приятный, милый"
        }
    },
    {
        "id": 2230,
        "en": "mist",
        "sound": "[mIst]",
        "ru": {
            "n-": "(легкий) туман; дымка"
        }
    },
    {
        "id": 2231,
        "en": "snarl",
        "sound": "[snRl]",
        "ru": {
            "n-": "рычание;",
            "v-": "рычать"
        }
    },
    {
        "id": 2232,
        "en": "staircase",
        "sound": "['stFqkeIs]",
        "ru": {
            "n-": "лестница; лестничный марш"
        }
    },
    {
        "id": 2233,
        "en": "balcony",
        "sound": "['bxlkqnI]",
        "ru": {
            "n-": "балкон"
        }
    },
    {
        "id": 2234,
        "en": "divorce",
        "sound": "[dI'vLs]",
        "ru": {
            "n-": "развод;",
            "v-": "разводиться"
        }
    },
    {
        "id": 2235,
        "en": "tourist",
        "sound": "['tuqrIst]",
        "ru": {
            "n-": "турист"
        }
    },
    {
        "id": 2236,
        "en": "joker",
        "sound": "['Goukq]",
        "ru": {
            "n-": "шутник; джокер (карт.)"
        }
    },
    {
        "id": 2237,
        "en": "pole",
        "sound": "[poul]",
        "ru": {
            "n-": "1) столб; 2) полюс"
        }
    },
    {
        "id": 2238,
        "en": "column",
        "sound": "['kOlqm]",
        "ru": {
            "n-": "колонна; столб(ик)"
        }
    },
    {
        "id": 2239,
        "en": "confidence",
        "sound": "['kOnfIdqns]",
        "ru": {
            "n-": "доверие"
        }
    },
    {
        "id": 2240,
        "en": "lad",
        "sound": "[lxd]",
        "ru": {
            "n-": "парень, юноша"
        }
    },
    {
        "id": 2241,
        "en": "tighten",
        "sound": "['taItn]",
        "ru": {
            "v-": "сжимать(ся)"
        }
    },
    {
        "id": 2242,
        "en": "period",
        "sound": "['pIqrIqd]",
        "ru": {
            "n-": "период, время"
        }
    },
    {
        "id": 2243,
        "en": "rob",
        "sound": "[rOb]",
        "ru": {
            "v-": "грабить, обкрадывать"
        }
    },
    {
        "id": 2244,
        "en": "fake",
        "sound": "[feIk]",
        "ru": {
            "n-": "подделка, фальшивка;",
            "v-": "подделывать"
        }
    },
    {
        "id": 2245,
        "en": "district",
        "sound": "['dIstrIkt]",
        "ru": {
            "n-": "район, округ"
        }
    },
    {
        "id": 2246,
        "en": "curb",
        "sound": "[kWb]",
        "ru": {
            "n-": "узда; сдерживание; обочина, край тротуароа"
        }
    },
    {
        "id": 2247,
        "en": "pulse",
        "sound": "[pAls]",
        "ru": {
            "n-": "пульс; биение; ритм;",
            "v-": "пульсировать"
        }
    },
    {
        "id": 2248,
        "en": "expert",
        "sound": "['ekspWt]",
        "ru": {
            "n-": "знаток, эксперт;",
            "a-": "опытный, знающий"
        }
    },
    {
        "id": 2249,
        "en": "routine",
        "sound": "[rH'tJn]",
        "ru": {
            "n-": "заведенный порядок; рутина, шаблон"
        }
    },
    {
        "id": 2250,
        "en": "terminal",
        "sound": "['tWmInl]",
        "ru": {
            "n-": "конец; конечная станция;",
            "a-": "конечный"
        }
    },
    {
        "id": 2251,
        "en": "neat",
        "sound": "[nJt]",
        "ru": {
            "a-": "аккуратный; чистый"
        }
    },
    {
        "id": 2252,
        "en": "hers",
        "sound": "[hWz]",
        "ru": {
            "pron-": "еѐ"
        }
    },
    {
        "id": 2253,
        "en": "flag",
        "sound": "[flxg]",
        "ru": {
            "n-": "флаг"
        }
    },
    {
        "id": 2254,
        "en": "border",
        "sound": "['bLdq]",
        "ru": {
            "n-": "граница;",
            "v-": "граничить"
        }
    },
    {
        "id": 2255,
        "en": "society",
        "sound": "[sq'saIqtI]",
        "ru": {
            "n-": "общество; объединение, ассоциация"
        }
    },
    {
        "id": 2256,
        "en": "tour",
        "sound": "[tuq]",
        "ru": {
            "n-": "поездка; турне;",
            "v-": "совершать путешествие"
        }
    },
    {
        "id": 2257,
        "en": "rid",
        "sound": "[rId]",
        "ru": {
            "v-": "(rid; rid) избавлять(ся"
        }
    },
    {
        "id": 2258,
        "en": "winder",
        "sound": "['wIndq]",
        "ru": {
            "n-": "разг. сильный удар; нечто, захватывающее дух"
        }
    },
    {
        "id": 2259,
        "en": "inform",
        "sound": "[In'fLm]",
        "ru": {
            "v-": "информировать"
        }
    },
    {
        "id": 2260,
        "en": "violet",
        "sound": "['vaIqlqt]",
        "ru": {
            "n-": "фиалка;",
            "a-": "фиолетовый"
        }
    },
    {
        "id": 2261,
        "en": "batter",
        "sound": "['bxtq]",
        "ru": {
            "v-": "сильно бить, колотить; разбиваться; биться"
        }
    },
    {
        "id": 2262,
        "en": "silhouette",
        "sound": "[\"sIlH'et ]",
        "ru": {
            "n-": "силуэт;",
            "v-": "вырисовываться (на фоне чего-л.)"
        }
    },
    {
        "id": 2263,
        "en": "science",
        "sound": "['saIqns]",
        "ru": {
            "n-": "наука"
        }
    },
    {
        "id": 2264,
        "en": "agency",
        "sound": "['eIGqnsI]",
        "ru": {
            "n-": "агентство"
        }
    },
    {
        "id": 2265,
        "en": "grind",
        "sound": "[graInd]",
        "ru": {
            "v-": "молоть, толочь; шлифовать; разг. зубрить"
        },
        "irregular": "ground; ground [graund]"
    },
    {
        "id": 2266,
        "en": "doll",
        "sound": "[dOl]",
        "ru": {
            "n-": "кукла; амер. разг. девушка"
        }
    },
    {
        "id": 2267,
        "en": "associate",
        "sound": "[q'souSIeIt]",
        "ru": {
            "v-": "соединять(ся"
        }
    },
    {
        "id": 2268,
        "en": "minister",
        "sound": "['mInIstq]",
        "ru": {
            "n-": "министр"
        }
    },
    {
        "id": 2269,
        "en": "former",
        "sound": "['fLmq]",
        "ru": {
            "a-": "прежний, бывший"
        }
    },
    {
        "id": 2270,
        "en": "incredible",
        "sound": "[In'kredIbl]",
        "ru": {
            "a-": "невероятный"
        }
    },
    {
        "id": 2271,
        "en": "lunge",
        "sound": "[lAnG]",
        "ru": {
            "n-": "выпад, прыжок вперед;",
            "v-": "делать выпад, бросок вперед"
        }
    },
    {
        "id": 2272,
        "en": "slump",
        "sound": "[slAmp]",
        "ru": {
            "n-": "резкое или внезапное падение;",
            "v-": "внезапно падать"
        }
    },
    {
        "id": 2273,
        "en": "cautiously",
        "sound": "['kLSqslI]",
        "ru": {
            "adv-": "осторожно"
        }
    },
    {
        "id": 2274,
        "en": "scrape",
        "sound": "[skreIp]",
        "ru": {
            "v-": "скоблить, скрести"
        }
    },
    {
        "id": 2275,
        "en": "ill",
        "sound": "[Il]",
        "ru": {
            "a-": "больной, нездоровый"
        }
    },
    {
        "id": 2276,
        "en": "headquarters",
        "sound": "['hed'kwLtez]",
        "ru": {
            "n-": "штаб; ставка, штаб-квартира"
        }
    },
    {
        "id": 2277,
        "en": "pal",
        "sound": "[pxl]",
        "ru": {
            "n-": "товарищ, приятель"
        }
    },
    {
        "id": 2278,
        "en": "arch",
        "sound": "[RC]",
        "ru": {
            "n-": "арка, свод; дуга;",
            "v-": "перекрывать сводом; выгибать"
        }
    },
    {
        "id": 2279,
        "en": "dull",
        "sound": "[dAl]",
        "ru": {
            "a-": "тусклый; тупой; скучный;",
            "v-": "утомлять; затуплять"
        }
    },
    {
        "id": 2280,
        "en": "gale",
        "sound": "[geIl]",
        "ru": {
            "n-": "сильный ветер, шторм"
        }
    },
    {
        "id": 2281,
        "en": "maintain",
        "sound": "[meIn'teIn]",
        "ru": {
            "v-": "поддерживать"
        }
    },
    {
        "id": 2282,
        "en": "annoy",
        "sound": "[q'nOI]",
        "ru": {
            "v-": "надоедать; раздражать"
        }
    },
    {
        "id": 2283,
        "en": "tune",
        "sound": "[tjHn]",
        "ru": {
            "n-": "мелодия;",
            "v-": "настраивать"
        }
    },
    {
        "id": 2284,
        "en": "hick",
        "sound": "[hIk]",
        "ru": {
            "n-": "презр. провинциал, деревенщина"
        }
    },
    {
        "id": 2285,
        "en": "schedule",
        "sound": "['SedjHl]",
        "ru": {
            "n-": "расписание, график;",
            "v-": "составлять расписание; планировать"
        }
    },
    {
        "id": 2286,
        "en": "witch",
        "sound": "[wIC]",
        "ru": {
            "n-": "колдунья, ведьма"
        }
    },
    {
        "id": 2287,
        "en": "depth",
        "sound": "[depT]",
        "ru": {
            "n-": "глубина (тж. перен.)"
        }
    },
    {
        "id": 2288,
        "en": "skill",
        "sound": "[skIl]",
        "ru": {
            "n-": "мастерство, искусство; талант, способности"
        }
    },
    {
        "id": 2289,
        "en": "hush",
        "sound": "[hAS]",
        "ru": {
            "n-": "тишина;",
            "v-": "водворять тишину; заст. замолчать; Hush! Тише!"
        }
    },
    {
        "id": 2290,
        "en": "lounge",
        "sound": "[launG]",
        "ru": {
            "n-": "гостиная; холл"
        }
    },
    {
        "id": 2291,
        "en": "coffin",
        "sound": "['kOfIn]",
        "ru": {
            "n-": "гроб"
        }
    },
    {
        "id": 2292,
        "en": "downward(s)",
        "sound": "['daunwqd(z)]",
        "ru": {
            "adv-": "вниз"
        }
    },
    {
        "id": 2293,
        "en": "sneak",
        "sound": "[snJk]",
        "ru": {
            "n-": "трус;",
            "v-": "красться; ускользать; школ. ябедничать"
        }
    },
    {
        "id": 2294,
        "en": "crap",
        "sound": "[krxp]",
        "ru": {
            "n-": "руг. глупость, вздор"
        }
    },
    {
        "id": 2295,
        "en": "reflection",
        "sound": "[rI'flekSn]",
        "ru": {
            "n-": "отражение; отблеск; размышление, раздумье"
        }
    },
    {
        "id": 2296,
        "en": "robot",
        "sound": "['roubqt]",
        "ru": {
            "n-": "робот"
        }
    },
    {
        "id": 2297,
        "en": "cargo",
        "sound": "['kRgou]",
        "ru": {
            "n-": "груз (судна, самолета)"
        }
    },
    {
        "id": 2298,
        "en": "alongside",
        "sound": "[q'lONsaId]",
        "ru": {
            "adv-": "рядом"
        }
    },
    {
        "id": 2299,
        "en": "log",
        "sound": "[lOg]",
        "ru": {
            "n-": "бревно; полено; мор. лаг;",
            "v-": "работать на лесозаготовках"
        }
    },
    {
        "id": 2300,
        "en": "ambulance",
        "sound": "['xmbjulqns]",
        "ru": {
            "n-": "машина скор. помощи; врачебный пункт"
        }
    },
    {
        "id": 2301,
        "en": "exercise",
        "sound": "['eksqsaIz]",
        "ru": {
            "n-": "упражнение; тренировка;",
            "v-": "упражнять(ся)"
        }
    },
    {
        "id": 2302,
        "en": "bartender",
        "sound": "['bR\"tendq]",
        "ru": {
            "n-": "бармен, буфетчик"
        }
    },
    {
        "id": 2303,
        "en": "hollow",
        "sound": "['hOlou]",
        "ru": {
            "n-": "пустота; яма; низина;",
            "a-": "полый;вогнутый;",
            "adv-": "разг. полностью;",
            "v-": "делать полость; делать вогнутым"
        }
    },
    {
        "id": 2304,
        "en": "advice",
        "sound": "[qd'vaIs]",
        "ru": {
            "n-": "совет, советы"
        }
    },
    {
        "id": 2305,
        "en": "argument",
        "sound": "['Rgjumqnt]",
        "ru": {
            "n-": "аргумент"
        }
    },
    {
        "id": 2306,
        "en": "resume",
        "sound": "[rI'zjHm]",
        "ru": {
            "v-": "возобновлять; брать обратно;",
            "n-": "['rezjumeI] резюме"
        }
    },
    {
        "id": 2307,
        "en": "casino",
        "sound": "[kq'sJnou]",
        "ru": {
            "n-": "казино"
        }
    },
    {
        "id": 2308,
        "en": "rib",
        "sound": "[rIb]",
        "ru": {
            "n-": "ребро"
        }
    },
    {
        "id": 2309,
        "en": "native",
        "sound": "['neItIv]",
        "ru": {
            "n-": "уроженец; коренной житель;",
            "a-": "родной; местный"
        }
    },
    {
        "id": 2310,
        "en": "attendant",
        "sound": "[q'tendqnt]",
        "ru": {
            "n-": "служитель (в музее, театре и т.п.)"
        }
    },
    {
        "id": 2311,
        "en": "habit",
        "sound": "['hxbIt]",
        "ru": {
            "n-": "привычка; обычай"
        }
    },
    {
        "id": 2312,
        "en": "confirm",
        "sound": "[kqn'fWm]",
        "ru": {
            "v-": "подтверждать"
        }
    },
    {
        "id": 2313,
        "en": "mumble",
        "sound": "['mAmbl]",
        "ru": {
            "v-": "бормотать"
        }
    },
    {
        "id": 2314,
        "en": "senior",
        "sound": "['sJnjq]",
        "ru": {
            "n-": "старший; пожилой человек;",
            "a-": "старший"
        }
    },
    {
        "id": 2315,
        "en": "sprawl",
        "sound": "[sprLl]",
        "ru": {
            "v-": "растянуться; сидеть развалясь; раскидываться"
        }
    },
    {
        "id": 2316,
        "en": "excitement",
        "sound": "[Ik'saItmqnt]",
        "ru": {
            "n-": "возбуждение"
        }
    },
    {
        "id": 2317,
        "en": "bureau",
        "sound": "['bjuqrou]",
        "ru": {
            "n-": "бюро, комитет"
        }
    },
    {
        "id": 2318,
        "en": "refer",
        "sound": "[rI'fW]",
        "ru": {
            "v-": "отсылать; обращаться; ссылаться; иметь отношение"
        }
    },
    {
        "id": 2319,
        "en": "spider",
        "sound": "['spaIdq]",
        "ru": {
            "n-": "паук"
        }
    },
    {
        "id": 2320,
        "en": "lightly",
        "sound": "['laItlI]",
        "ru": {
            "adv-": "слегка; без усилий"
        }
    },
    {
        "id": 2321,
        "en": "flap",
        "sound": "[flxp]",
        "ru": {
            "v-": "махать, колыхать(ся)"
        }
    },
    {
        "id": 2322,
        "en": "trash",
        "sound": "[trxS]",
        "ru": {
            "n-": "отбросы, хлам; разг. вздор, чушь, дрянь;",
            "v-": "очищать от мусора"
        }
    },
    {
        "id": 2323,
        "en": "attitude",
        "sound": "['xtItjHd]",
        "ru": {
            "n-": "позиция; отношение к"
        }
    },
    {
        "id": 2324,
        "en": "violently",
        "sound": "['vaIqlqntlI]",
        "ru": {
            "adv-": "неистово, яростно"
        }
    },
    {
        "id": 2325,
        "en": "explanation",
        "sound": "[\"eksplq'neISn]",
        "ru": {
            "n-": "объяснение"
        }
    },
    {
        "id": 2326,
        "en": "shelter",
        "sound": "['Seltq]",
        "ru": {
            "n-": "приют, кров; укрытие;",
            "v-": "давать приют; укрывать(ся)"
        }
    },
    {
        "id": 2327,
        "en": "engage",
        "sound": "[In'geIG]",
        "ru": {
            "v-": "нанимать; занимать(ся)"
        }
    },
    {
        "id": 2328,
        "en": "throughout",
        "sound": "[TrH'aut]",
        "ru": {
            "prep-": "через; повсюду, везде; в течение всего времени"
        }
    },
    {
        "id": 2329,
        "en": "chunk",
        "sound": "[CANk]",
        "ru": {
            "n-": "ломоть, большой кусок; крупная глыба; толстяк, толстуха"
        }
    },
    {
        "id": 2330,
        "en": "wreck",
        "sound": "[rek]",
        "ru": {
            "n-": "кораблекрушение; перен. крах;",
            "v-": "разрушать"
        }
    },
    {
        "id": 2331,
        "en": "courtyard",
        "sound": "['kLt'jRd]",
        "ru": {
            "n-": "внутренний двор (замка и т.п.)"
        }
    },
    {
        "id": 2332,
        "en": "assault",
        "sound": "[q'sLlt]",
        "ru": {
            "n-": "нападение; штурм;",
            "v-": "нападать; штурмовать"
        }
    },
    {
        "id": 2333,
        "en": "weep",
        "sound": "[wJp]",
        "ru": {
            "v-": "(wept; wept) плакать, рыдать; запотевать (стекло и т.п.)"
        }
    },
    {
        "id": 2334,
        "en": "wink",
        "sound": "[wINk]",
        "ru": {
            "v-": "моргать, мигать"
        }
    },
    {
        "id": 2335,
        "en": "Friday",
        "sound": "['fraIdI]",
        "ru": {
            "n-": "пятница"
        }
    },
    {
        "id": 2336,
        "en": "hint",
        "sound": "[hInt]",
        "ru": {
            "n-": "намек;",
            "v-": "намекать"
        }
    },
    {
        "id": 2337,
        "en": "freak",
        "sound": "[frJk]",
        "ru": {
            "n-": "причуда, каприз; урод, посмешище;",
            "v-": "капризничать"
        }
    },
    {
        "id": 2338,
        "en": "advantage",
        "sound": "[qd'vRntIG]",
        "ru": {
            "n-": "преимущество; выгода, польза"
        }
    },
    {
        "id": 2339,
        "en": "wise",
        "sound": "[waIz]",
        "ru": {
            "a-": "мудрый; разумный; амер. разг. осведомленный; заносчивый"
        }
    },
    {
        "id": 2340,
        "en": "prop",
        "sound": "[prOp]",
        "ru": {
            "v-": "подпирать"
        }
    },
    {
        "id": 2341,
        "en": "fleet",
        "sound": "[flJt]",
        "ru": {
            "n-": "флот; флотилия; бухта, залив, ручей;",
            "v-": "быстро протекать"
        }
    },
    {
        "id": 2342,
        "en": "whenever",
        "sound": "[wen'evq]",
        "ru": {
            "cj-": "всякий раз когда; когда бы ни"
        }
    },
    {
        "id": 2343,
        "en": "huddle",
        "sound": "['hAdl]",
        "ru": {
            "v-": "прижиматься друг к другу"
        }
    },
    {
        "id": 2344,
        "en": "crate",
        "sound": "[kreIt]",
        "ru": {
            "n-": "ящик, контейнер"
        }
    },
    {
        "id": 2345,
        "en": "deadly",
        "sound": "['dedlI]",
        "ru": {
            "a-": "смертельный"
        }
    },
    {
        "id": 2346,
        "en": "impact",
        "sound": "['Impxkt]",
        "ru": {
            "n-": "удар, столкновение; воздействие;",
            "v-": "плотно сжимать"
        }
    },
    {
        "id": 2347,
        "en": "studio",
        "sound": "['stjHdIou]",
        "ru": {
            "n-": "студия"
        }
    },
    {
        "id": 2348,
        "en": "unknown",
        "sound": "[\"An'noun]",
        "ru": {
            "a-": "неизвестный"
        }
    },
    {
        "id": 2349,
        "en": "pearl",
        "sound": "[pWl]",
        "ru": {
            "n-": "жемчуг, жемчужина"
        }
    },
    {
        "id": 2350,
        "en": "hull",
        "sound": "[hAl]",
        "ru": {
            "n-": "пустой стручок; кожура, шелуха; кузов, каркас, корпус, фюзеляж"
        }
    },
    {
        "id": 2351,
        "en": "recently",
        "sound": "['rJsntlI]",
        "ru": {
            "adv-": "недавно"
        }
    },
    {
        "id": 2352,
        "en": "weekend",
        "sound": "[\"wJk'end]",
        "ru": {
            "n-": "суббота и воскресенье; конец недели, уикенд"
        }
    },
    {
        "id": 2353,
        "en": "scale",
        "sound": "[skeIl]",
        "ru": {
            "n-": "шкала; масштаб; ~s весы;",
            "v-": "взбираться"
        }
    },
    {
        "id": 2354,
        "en": "sequence",
        "sound": "['sJkwqns]",
        "ru": {
            "n-": "последовательность, ряд; последствие"
        }
    },
    {
        "id": 2355,
        "en": "outta",
        "sound": "['autq]",
        "ru": {
            "noPart": "= out of вне, за пределами чего-л."
        }
    },
    {
        "id": 2356,
        "en": "bandage",
        "sound": "['bxndIG]",
        "ru": {
            "n-": "бинт, повязка;",
            "v-": "бинтовать, перевязывать"
        }
    },
    {
        "id": 2357,
        "en": "shame",
        "sound": "[SeIm]",
        "ru": {
            "n-": "стыд, позор; a ~ разг. обида, жалость;",
            "v-": "стыдить"
        }
    },
    {
        "id": 2358,
        "en": "urge",
        "sound": "[WG]",
        "ru": {
            "n-": "побуждение, сильное желание;",
            "v-": "побуждать, убеждать"
        }
    },
    {
        "id": 2359,
        "en": "baseball",
        "sound": "['beIsbLl]",
        "ru": {
            "n-": "бейсбол"
        }
    },
    {
        "id": 2360,
        "en": "chopper",
        "sound": "['COpq]",
        "ru": {
            "n-": "нож (мясника); колун; сечка; билетный контролер"
        }
    },
    {
        "id": 2361,
        "en": "spy",
        "sound": "[spaI]",
        "ru": {
            "n-": "(мн. ч. spies) шпион;",
            "v-": "шпионить, следить"
        }
    },
    {
        "id": 2362,
        "en": "Monday",
        "sound": "['mAndI]",
        "ru": {
            "n-": "понедельник"
        }
    },
    {
        "id": 2363,
        "en": "intense",
        "sound": "[In'tens]",
        "ru": {
            "a-": "сильный; интенсивный, напряженный"
        }
    },
    {
        "id": 2364,
        "en": "accompany",
        "sound": "[q'kAmpqnI]",
        "ru": {
            "v-": "сопровождать, провожать; аккомпанировать"
        }
    },
    {
        "id": 2365,
        "en": "torture",
        "sound": "['tLCq]",
        "ru": {
            "n-": "пытка;",
            "v-": "пытать"
        }
    },
    {
        "id": 2366,
        "en": "birthday",
        "sound": "['bWTdeI]",
        "ru": {
            "n-": "день рождения"
        }
    },
    {
        "id": 2367,
        "en": "champagne",
        "sound": "[Sxm'peIn]",
        "ru": {
            "n-": "шампанское"
        }
    },
    {
        "id": 2368,
        "en": "suspicious",
        "sound": "[sq'spISqs]",
        "ru": {
            "a-": "подозрительный"
        }
    },
    {
        "id": 2369,
        "en": "assassin",
        "sound": "[q'sxsIn]",
        "ru": {
            "n-": "убийца (наемный)"
        }
    },
    {
        "id": 2370,
        "en": "sentence",
        "sound": "['sentqns]",
        "ru": {
            "n-": "предложение; приговор;",
            "v-": "осуждать, приговаривать"
        }
    },
    {
        "id": 2371,
        "en": "fifth",
        "sound": "[fIfT]",
        "ru": {
            "num-": "пятый"
        }
    },
    {
        "id": 2372,
        "en": "lonely",
        "sound": "['lounlI]",
        "ru": {
            "a-": "одинокий"
        }
    },
    {
        "id": 2373,
        "en": "zip",
        "sound": "[zIp]",
        "ru": {
            "n-": "застежка-молния;",
            "v-": "застегивать(ся) на молнию"
        }
    },
    {
        "id": 2374,
        "en": "proof",
        "sound": "[prHf]",
        "ru": {
            "n-": "доказательство; испытание, проба;",
            "a-": "непроницаемый"
        }
    },
    {
        "id": 2375,
        "en": "microphone",
        "sound": "['maIkrqfoun]",
        "ru": {
            "n-": "микрофон"
        }
    },
    {
        "id": 2376,
        "en": "attractive",
        "sound": "[q'trxktIv]",
        "ru": {
            "a-": "привлекательный, притягательный"
        }
    },
    {
        "id": 2377,
        "en": "political",
        "sound": "[pq'lItIkl]",
        "ru": {
            "a-": "политический"
        }
    },
    {
        "id": 2378,
        "en": "aid",
        "sound": "[eId]",
        "ru": {
            "n-": "помощь;",
            "v-": "помогать"
        }
    },
    {
        "id": 2379,
        "en": "stamp",
        "sound": "[stxmp]",
        "ru": {
            "n-": "штамп; марка;",
            "v-": "ставить штамп, печать"
        }
    },
    {
        "id": 2380,
        "en": "piano",
        "sound": "['pjxnou]",
        "ru": {
            "n-": "фортепьяно, рояль"
        }
    },
    {
        "id": 2381,
        "en": "admire",
        "sound": "[qd'maIq]",
        "ru": {
            "v-": "восхищаться; любоваться"
        }
    },
    {
        "id": 2382,
        "en": "fairly",
        "sound": "['fFqlI]",
        "ru": {
            "adv-": "честно, справедливо; довольно; весьма; ясно"
        }
    },
    {
        "id": 2383,
        "en": "cute",
        "sound": "[kjHt]",
        "ru": {
            "a-": "прелестный, умный"
        }
    },
    {
        "id": 2384,
        "en": "property",
        "sound": "['prOpqtI]",
        "ru": {
            "n-": "собственность, имущество; свойство, качество"
        }
    },
    {
        "id": 2385,
        "en": "wail",
        "sound": "[weIl]",
        "ru": {
            "n-": "вопль; вой; громкий плач;",
            "v-": "вопить, выть"
        }
    },
    {
        "id": 2386,
        "en": "naturally",
        "sound": "['nxCrqlI]",
        "ru": {
            "adv-": "естественно; конечно, разумеется"
        }
    },
    {
        "id": 2387,
        "en": "pencil",
        "sound": "['pensl]",
        "ru": {
            "n-": "карандаш"
        }
    },
    {
        "id": 2388,
        "en": "regret",
        "sound": "[rI'gret]",
        "ru": {
            "n-": "сожаление; раскаяние;",
            "v-": "сожалеть; раскаиваться"
        }
    },
    {
        "id": 2389,
        "en": "shed",
        "sound": "[Sed]",
        "ru": {
            "n-": "сарай, навес"
        }
    },
    {
        "id": 2390,
        "en": "holly",
        "sound": "['houlI]",
        "ru": {
            "noPart": "adv уст. = wholly полностью, целиком, вполне"
        }
    },
    {
        "id": 2391,
        "en": "citizen",
        "sound": "['sItIzn]",
        "ru": {
            "n-": "гражданин, гражданка; горожанин, горожанка"
        }
    },
    {
        "id": 2392,
        "en": "clever",
        "sound": "['klevq]",
        "ru": {
            "a-": "умный, способный"
        }
    },
    {
        "id": 2393,
        "en": "downtown",
        "sound": "['dauntaun]",
        "ru": {
            "adv-": "амер. в деловой части города, в центре"
        }
    },
    {
        "id": 2394,
        "en": "handkerchief",
        "sound": "['hxNkqCIf]",
        "ru": {
            "n-": "носовой платок"
        }
    },
    {
        "id": 2395,
        "en": "ramp",
        "sound": "[rxmp]",
        "ru": {
            "n-": "скат, уклон; пандус; рампа; место стоянки, причал"
        }
    },
    {
        "id": 2396,
        "en": "fortune",
        "sound": "['fLCn]",
        "ru": {
            "n-": "удача; счастье"
        }
    },
    {
        "id": 2397,
        "en": "lung",
        "sound": "[lAN]",
        "ru": {
            "n-": "анат. лѐгкое; ~s голос"
        }
    },
    {
        "id": 2398,
        "en": "article",
        "sound": "['RtIkl]",
        "ru": {
            "n-": "статья; артикль"
        }
    },
    {
        "id": 2399,
        "en": "eighteen",
        "sound": "[\"eI'tJn]",
        "ru": {
            "num-": "восемнадцать"
        }
    },
    {
        "id": 2400,
        "en": "apply",
        "sound": "[q'plaI]",
        "ru": {
            "v-": "прикладывать; обращаться (к, за); использовать, применять"
        }
    },
    {
        "id": 2401,
        "en": "bless",
        "sound": "[bles]",
        "ru": {
            "v-": "благословлять"
        }
    },
    {
        "id": 2402,
        "en": "tend",
        "sound": "[tend]",
        "ru": {
            "v-": "заботиться, ухаживать; иметь тенденцию, склонность"
        }
    },
    {
        "id": 2403,
        "en": "tan",
        "sound": "[txn]",
        "ru": {
            "n-": "загар;",
            "v-": "загорать"
        }
    },
    {
        "id": 2404,
        "en": "complain",
        "sound": "[kqm'pleIn]",
        "ru": {
            "v-": "жаловаться; выражать недовольство"
        }
    },
    {
        "id": 2405,
        "en": "example",
        "sound": "[Ig'zRmpl]",
        "ru": {
            "n-": "пример, образец, экземпляр"
        }
    },
    {
        "id": 2406,
        "en": "basket",
        "sound": "['bRskIt]",
        "ru": {
            "n-": "корзина"
        }
    },
    {
        "id": 2407,
        "en": "super",
        "sound": "['sjHpq]",
        "ru": {
            "a-": "разг. превосходный; pref- сверх-; над-"
        }
    },
    {
        "id": 2408,
        "en": "vault",
        "sound": "[vLlt]",
        "ru": {
            "n-": "прыжок;",
            "v-": "перепрыгивать"
        }
    },
    {
        "id": 2409,
        "en": "girlfriend",
        "sound": "['gWlfrend]",
        "ru": {
            "n-": "подруга; (любимая) девушка"
        }
    },
    {
        "id": 2410,
        "en": "ability",
        "sound": "[q'bIlItI]",
        "ru": {
            "n-": "способность"
        }
    },
    {
        "id": 2411,
        "en": "limb",
        "sound": "[lIm]",
        "ru": {
            "n-": "конечность (руки, ноги)"
        }
    },
    {
        "id": 2412,
        "en": "occasionally",
        "sound": "[q'keIZnqlI]",
        "ru": {
            "adv-": "изредка; время от времени"
        }
    },
    {
        "id": 2413,
        "en": "tag",
        "sound": "[txg]",
        "ru": {
            "n-": "ярлык; этикетка; бирка;",
            "v-": "навешивать ярлык и др."
        }
    },
    {
        "id": 2414,
        "en": "earn",
        "sound": "[Wn]",
        "ru": {
            "v-": "зарабатывать; earnings ['WnINz] заработок"
        },
        "irregular": ""
    },
    {
        "id": 2415,
        "en": "seize",
        "sound": "[sJz]",
        "ru": {
            "v-": "хватать, схватить"
        }
    },
    {
        "id": 2416,
        "en": "therefore",
        "sound": "[DFq'fL]",
        "ru": {
            "adv-": "поэтому, следовательно"
        }
    },
    {
        "id": 2417,
        "en": "dealer",
        "sound": "['dJlq]",
        "ru": {
            "n-": "торговец, торговый агент"
        }
    },
    {
        "id": 2418,
        "en": "companion",
        "sound": "[kqm'pxnjqn]",
        "ru": {
            "n-": "спутник"
        }
    },
    {
        "id": 2419,
        "en": "confusion",
        "sound": "[kqn'fjHZn]",
        "ru": {
            "n-": "смущение, замешательство; беспорядок, путаница"
        }
    },
    {
        "id": 2420,
        "en": "warehouse",
        "sound": "['wFqhaus]",
        "ru": {
            "n-": "склад, хранилище; оптовый магазин"
        }
    },
    {
        "id": 2421,
        "en": "bath",
        "sound": "[bRT]",
        "ru": {
            "n-": "ванна"
        }
    },
    {
        "id": 2422,
        "en": "collection",
        "sound": "[kq'lekSn]",
        "ru": {
            "n-": "собирание, сбор; коллекция"
        }
    },
    {
        "id": 2423,
        "en": "craft",
        "sound": "[krRft]",
        "ru": {
            "n-": "ремесло; умение, ловкость; хитрость, обман"
        }
    },
    {
        "id": 2424,
        "en": "actor",
        "sound": "['xktq]",
        "ru": {
            "n-": "актер, артист"
        }
    },
    {
        "id": 2425,
        "en": "chaos",
        "sound": "['ke(I)Os]",
        "ru": {
            "n-": "хаос, полный беспорядок"
        }
    },
    {
        "id": 2426,
        "en": "rod",
        "sound": "[rOd]",
        "ru": {
            "n-": "прут; стержень"
        }
    },
    {
        "id": 2427,
        "en": "occupy",
        "sound": "['OkjupaI]",
        "ru": {
            "v-": "занимать (место, должность, и т.п.); оккупировать"
        }
    },
    {
        "id": 2428,
        "en": "sack",
        "sound": "[sxk]",
        "ru": {
            "n-": "мешок;",
            "v-": "(редко) класть в мешок; выгонять с работы"
        }
    },
    {
        "id": 2429,
        "en": "suicide",
        "sound": "['sjuIsaId]",
        "ru": {
            "n-": "самоубийство"
        }
    },
    {
        "id": 2430,
        "en": "funeral",
        "sound": "['fjHnqrql]",
        "ru": {
            "n-": "похороны;",
            "a-": "похоронный"
        }
    },
    {
        "id": 2431,
        "en": "lesson",
        "sound": "['lesn]",
        "ru": {
            "n-": "урок"
        }
    },
    {
        "id": 2432,
        "en": "ginger",
        "sound": "['Gin(d)Zq]",
        "ru": {
            "n-": "разг. приподнятое настроение; рыжеволосый (человек)"
        }
    },
    {
        "id": 2433,
        "en": "gin",
        "sound": "[GIn]",
        "ru": {
            "n-": "джин"
        }
    },
    {
        "id": 2434,
        "en": "prevent",
        "sound": "[prI'vent]",
        "ru": {
            "v-": "предотвращать; предупреждать; препятствовать"
        }
    },
    {
        "id": 2435,
        "en": "occasion",
        "sound": "[q'keIZn]",
        "ru": {
            "n-": "случай; событие; повод"
        }
    },
    {
        "id": 2436,
        "en": "meanwhile",
        "sound": "['mJnwaIl]",
        "ru": {
            "adv-": "тем временем"
        }
    },
    {
        "id": 2437,
        "en": "chili",
        "sound": "['CIlI]",
        "ru": {
            "n-": "острый перец"
        }
    },
    {
        "id": 2438,
        "en": "fur",
        "sound": "[fW]",
        "ru": {
            "n-": "мех"
        }
    },
    {
        "id": 2439,
        "en": "garbage",
        "sound": "['gRbIG]",
        "ru": {
            "n-": "отбросы; мусор"
        }
    },
    {
        "id": 2440,
        "en": "tangle",
        "sound": "['txngl]",
        "ru": {
            "n-": "путаница;",
            "v-": "спутывать(ся), запутывать(ся)"
        }
    },
    {
        "id": 2441,
        "en": "peek",
        "sound": "[pJk]",
        "ru": {
            "n-": "писк;",
            "v-": "пищать"
        }
    },
    {
        "id": 2442,
        "en": "rape",
        "sound": "[reIp]",
        "ru": {
            "n-": "изнасилование;",
            "v-": "изнасиловать"
        }
    },
    {
        "id": 2443,
        "en": "ram",
        "sound": "[rxm]",
        "ru": {
            "n-": "баран; воен. таран;",
            "v-": "таранить; вдалбливать"
        }
    },
    {
        "id": 2444,
        "en": "social",
        "sound": "['souSl]",
        "ru": {
            "a-": "общественный, социальный"
        }
    },
    {
        "id": 2445,
        "en": "ordinary",
        "sound": "['LdnqrI]",
        "ru": {
            "a-": "обычный"
        }
    },
    {
        "id": 2446,
        "en": "modern",
        "sound": "['mOdn]",
        "ru": {
            "a-": "современный"
        }
    },
    {
        "id": 2447,
        "en": "lion",
        "sound": "['laIqn]",
        "ru": {
            "n-": "лев"
        }
    },
    {
        "id": 2448,
        "en": "agreement",
        "sound": "[q'grJmqnt]",
        "ru": {
            "n-": "согласие; соглашение, договор"
        }
    },
    {
        "id": 2449,
        "en": "homicide",
        "sound": "['hOmIsaId]",
        "ru": {
            "n-": "юр. убийство"
        }
    },
    {
        "id": 2450,
        "en": "thump",
        "sound": "[TAmp]",
        "ru": {
            "n-": "тяжелый удар (кулаком);",
            "v-": "наносить тяжелый удар"
        }
    },
    {
        "id": 2451,
        "en": "division",
        "sound": "[dI'vIZn]",
        "ru": {
            "n-": "деление; распределение; отдел, раздел; отделение"
        }
    },
    {
        "id": 2452,
        "en": "laboratory",
        "sound": "[lq'bOrqtrI]",
        "ru": {
            "n-": "лаборатория"
        }
    },
    {
        "id": 2453,
        "en": "horrify",
        "sound": "['hOrIfaI]",
        "ru": {
            "v-": "ужасать, страшить"
        }
    },
    {
        "id": 2454,
        "en": "spike",
        "sound": "[spaIk]",
        "ru": {
            "n-": "острие, шип;",
            "v-": "пронзать; прибивать гвоздями и др."
        }
    },
    {
        "id": 2455,
        "en": "sixteen",
        "sound": "[\"sIks'tJn]",
        "ru": {
            "num-": "шестнадцать"
        }
    },
    {
        "id": 2456,
        "en": "previous",
        "sound": "['prJvIqs]",
        "ru": {
            "a-": "предыдущий"
        }
    },
    {
        "id": 2457,
        "en": "rumour",
        "sound": "бр. = rumor ам. (1:8) ['rHmq]",
        "ru": {
            "n-": "слух, молва;",
            "v-": "распространять слухи"
        }
    },
    {
        "id": 2458,
        "en": "resist",
        "sound": "[rI'zIst]",
        "ru": {
            "v-": "сопротивляться"
        }
    },
    {
        "id": 2459,
        "en": "notebook",
        "sound": "['noutbuk]",
        "ru": {
            "n-": "тетрадь, блокнот"
        }
    },
    {
        "id": 2460,
        "en": "benefit",
        "sound": "['benIfIt]",
        "ru": {
            "n-": "выгода, польза"
        }
    },
    {
        "id": 2461,
        "en": "slug",
        "sound": "[slAg]",
        "ru": {
            "n-": "удар; разочарование;",
            "v-": "сильно бить"
        }
    },
    {
        "id": 2462,
        "en": "debris",
        "sound": "['debrJ]",
        "ru": {
            "n-": "осколки, обломки; остатки; развалины"
        }
    },
    {
        "id": 2463,
        "en": "solve",
        "sound": "[sOlv]",
        "ru": {
            "v-": "решать, разрешать (проблему, задачу); объяснить; выполнять"
        }
    },
    {
        "id": 2464,
        "en": "journey",
        "sound": "['GWnI]",
        "ru": {
            "n-": "поездка; путешествие"
        }
    },
    {
        "id": 2465,
        "en": "retire",
        "sound": "[rI'taIq]",
        "ru": {
            "v-": "удаляться, уходить; оставлять должность"
        }
    },
    {
        "id": 2466,
        "en": "chop",
        "sound": "[COp]",
        "ru": {
            "n-": "удар (рубящий);",
            "v-": "рубить"
        }
    },
    {
        "id": 2467,
        "en": "trooper",
        "sound": "['trHpq]",
        "ru": {
            "n-": "воен. десантник; танкист; кавалерист"
        }
    },
    {
        "id": 2468,
        "en": "possess",
        "sound": "[pq'zes]",
        "ru": {
            "v-": "владеть, обладать"
        }
    },
    {
        "id": 2469,
        "en": "permit",
        "sound": "[pq'mIt]",
        "ru": {
            "n-": "разрешение, лицензия, пропуск;",
            "v-": "разрешать, позволять"
        }
    },
    {
        "id": 2470,
        "en": "sugar",
        "sound": "['Sugq]",
        "ru": {
            "n-": "сахар"
        }
    },
    {
        "id": 2471,
        "en": "conscious",
        "sound": "['kOnSqs]",
        "ru": {
            "a-": "сознающий, понимающий; находящ. в сознании"
        }
    },
    {
        "id": 2472,
        "en": "rig",
        "sound": "[rIg]",
        "ru": {
            "n-": "распутница;",
            "v-": "распутничать"
        }
    },
    {
        "id": 2473,
        "en": "football",
        "sound": "['futbLl]",
        "ru": {
            "n-": "футбол"
        }
    },
    {
        "id": 2474,
        "en": "mob",
        "sound": "[mOb]",
        "ru": {
            "n-": "толпа, сборище"
        }
    },
    {
        "id": 2475,
        "en": "hunch",
        "sound": "[hAnC]",
        "ru": {
            "n-": "горб;",
            "v-": "горбить(ся), сутулить(ся)"
        }
    },
    {
        "id": 2476,
        "en": "lone",
        "sound": "[loun]",
        "ru": {
            "a-": "одинокий; уединенный"
        }
    },
    {
        "id": 2477,
        "en": "excellent",
        "sound": "['eksqlqnt]",
        "ru": {
            "a-": "превосходный, отличный"
        }
    },
    {
        "id": 2478,
        "en": "pose",
        "sound": "[pouz]",
        "ru": {
            "n-": "поза;",
            "v-": "позировать; ставить (вопрос); создавать (проблему)"
        }
    },
    {
        "id": 2479,
        "en": "atmosphere",
        "sound": "['xtmqsfIq]",
        "ru": {
            "n-": "атмосфера"
        }
    },
    {
        "id": 2480,
        "en": "available",
        "sound": "[q'veIlqbl]",
        "ru": {
            "a-": "имеющийся; наличный, доступный; (при)годный"
        }
    },
    {
        "id": 2481,
        "en": "apologize",
        "sound": "[q'pOlqGaIz]",
        "ru": {
            "v-": "извиняться"
        }
    },
    {
        "id": 2482,
        "en": "snort",
        "sound": "[snLt]",
        "ru": {
            "v-": "фыркать; пыхтеть"
        }
    },
    {
        "id": 2483,
        "en": "international",
        "sound": "[\"Intq'nxSnql]",
        "ru": {
            "a-": "международный"
        }
    },
    {
        "id": 2484,
        "en": "sexual",
        "sound": "['seksjuql]",
        "ru": {
            "a-": "половой, сексуальный"
        }
    },
    {
        "id": 2485,
        "en": "highly",
        "sound": "['haIlI]",
        "ru": {
            "adv-": "очень, весьма, чрезвычайно; высоко"
        }
    },
    {
        "id": 2486,
        "en": "drape",
        "sound": "[dreIp]",
        "ru": {
            "v-": "украшать тканями; драпировать"
        }
    },
    {
        "id": 2487,
        "en": "pavement",
        "sound": "['peIvmqnt]",
        "ru": {
            "n-": "тротуар; амер. мостовая"
        }
    },
    {
        "id": 2488,
        "en": "lighter",
        "sound": "['laItq]",
        "ru": {
            "n-": "зажигалка; запал"
        }
    },
    {
        "id": 2489,
        "en": "cuff",
        "sound": "[kAf]",
        "ru": {
            "n-": "манжета, обшлаг; сокр. наручники;",
            "v-": "надеть наручники"
        }
    },
    {
        "id": 2490,
        "en": "boyfriend",
        "sound": "['bOIfrend]",
        "ru": {
            "n-": "друг, приятель (девушки)"
        }
    },
    {
        "id": 2491,
        "en": "bind",
        "sound": "[baInd]",
        "ru": {
            "v-": "связывать; привязывать; повязывать; переплетать"
        },
        "irregular": "bound; bound [baund]"
    },
    {
        "id": 2492,
        "en": "plead",
        "sound": "[plJd]",
        "ru": {
            "v-": "просить, умолять"
        }
    },
    {
        "id": 2493,
        "en": "sting",
        "sound": "[stIN]",
        "ru": {
            "v-": "жалить; мучить, терзать;",
            "n-": "жало; укус"
        },
        "irregular": "stung; stung [stAN]"
    },
    {
        "id": 2494,
        "en": "loom",
        "sound": "[lHm]",
        "ru": {
            "n-": "неясные очертания, мираж;",
            "v-": "неясно вырисовываться"
        }
    },
    {
        "id": 2495,
        "en": "responsible",
        "sound": "[rI'spOnsIbl]",
        "ru": {
            "a-": "ответственный (перед кем-л.; за что-л.)"
        }
    },
    {
        "id": 2496,
        "en": "assignment",
        "sound": "[q'saInmqnt]",
        "ru": {
            "n-": "назначение; задание"
        }
    },
    {
        "id": 2497,
        "en": "express",
        "sound": "[Iks'pres]",
        "ru": {
            "v-": "выражать; 2)",
            "a-": "определенный; срочный"
        }
    },
    {
        "id": 2498,
        "en": "defeat",
        "sound": "[dI'fJt]",
        "ru": {
            "n-": "поражение; крушение;",
            "v-": "побеждать; разрушать"
        }
    },
    {
        "id": 2499,
        "en": "underground",
        "sound": "['Andqgraund]",
        "ru": {
            "n-": "метро;",
            "a-": "подземный;",
            "adv-": "под землей"
        }
    },
    {
        "id": 2500,
        "en": "custom",
        "sound": "['kAstqm]",
        "ru": {
            "n-": "обычай; привычка; ~s таможня"
        }
    }
]
},{}],4:[function(require,module,exports){
module.exports = function () {
	var element = document.getElementById('intro'),
	    show = function () {
		element.classList.remove('hidden');
	},
	    hide = function () {
		element.classList.add('hidden');
	};
	return {
		show: show,
		hide: hide
	};
}();

},{}],5:[function(require,module,exports){
module.exports = function () {

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
}();

},{}],6:[function(require,module,exports){
module.exports = function () {
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
			isEnRu: enru.checked === true ? true : false,
			begin: parseInt(begin.value) || 1,
			end: parseInt(end.value) || dict.length,
			current: parseInt(begin.value) || 1,
			standard: standard.checked === true ? true : false
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
			var rand = min - 0.5 + Math.random() * (max - min + 1);
			rand = Math.round(rand);
			return rand;
		}
		if (!params.standard) {
			// если порядок случайный
			params.num = randomInteger(params.begin, params.end) - 1;
		} else {
			params.num = params.current - 1;
		}
		var data = {},
		    en = dict[params.num].en,
		    // ссылка на объект en
		ru = dict[params.num].ru,
		    // ссылка на объект ru
		sound = dict[params.num].sound,
		    irr = dict[params.num].irregular || '',
		    parts = Object.keys(ru).join(' ');

		data.sound = sound;
		data.parts = parts;
		data.irr = irr;
		data.info = `${params.begin} - ${params.end} <br> ${params.num + 1}`;
		if (params.isEnRu) {
			data.question = `${en} <br> ${sound} <span id="qparts"> ${parts} </span>`;
			data.answer = '<table>';
			for (name in ru) {
				// если слово - неправильный глагол
				if (name === 'v-' && 'irregular' in dict[params.num]) {
					irr = dict[params.num].irregular + '<br>';
				} else {
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

				if ('irregular' in dict[params.current - 1]) {
					irr = 'irregular:<br>' + dict[params.current - 1].irregular;
					data.answer = `${en} <br> ${sound} <br> ${irr}`;
				} else {
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
}();

},{"./dictionary.json":3}]},{},[1])