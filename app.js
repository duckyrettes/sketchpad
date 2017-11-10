// Wait for DOM to load in before executing any code
$(document).ready(function() {
	for (let i = 0; i < 16; i++) {
		$('#grid-container').append($('<div></div>'));
	}
});