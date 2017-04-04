module.exports = (function () {
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
		}
}());