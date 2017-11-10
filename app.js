// Wait for DOM to load in before executing any code
$(document).ready(function() {
	addGridDivs(256);
	setGridColors(16);

	$('#grid-container').on('mouseenter', 'div', function() {
		#(this).addClass('divMouseover');
	});

	$('#grid-container').on('mouseleave', 'div', function() {
		#(this).removeClass('divMouseover');
	});

	#('#edit-grid').on('click', editGridDimensions);
});

const addGridDivs = numberOfDivs => {
	let grid = $('#grid-container');

	grid.empty();
	for (let i = 0; i < numberOfDivs; i++) {
		grid.append($('<div></div>'));
	}
}

const setGridColors = dimensions => {
	let gridChildren = $('#grid-container').children();

	for (let i = 0; i < dimensions; i++) {
		let divRow = getRowNumber(i, dimensions / 16);

		for (let j = 0; j < dimensions; j++) {
			let index = dimensions * i + j;

			$(gridChildren[index]).addClass(divRow);
		}
	}
}

const getRowNumber = (i, num) => {
	let divRow = 'row-';

	if (i < num) { divrow += '1'; }
	else if (i < num * 2) { divRow += '2'; }
	else if (i < num * 3) { divRow += '3'; }
	else if (i < num * 4) { divRow += '4'; }
	else if (i < num * 5) { divRow += '5'; }
	else if (i < num * 6) { divRow += '6'; }
	else if (i < num * 7) { divRow += '7'; }
	else if (i < num * 8) { divRow += '8'; }
	else if (i < num * 9) { divRow += '9'; }
	else if (i < num * 10) { divRow += '10'; }
	else if (i < num * 11) { divRow += '11'; }
	else if (i < num * 12) { divRow += '12'; }
	else if (i < num * 13) { divRow += '13'; }
	else if (i < num * 14) { divRow += '14'; }
	else if (i < num * 15) { divRow += '15'; }
	else if (i < num * 16) { divRow += '16'; }

	return divRow;
}

const editGridDimensions = () => {
	let grid = $('#grid-container');
	let dimensions = prompt('Enter an integer between 1 and 256 to edit the grid dimensions.\n(e.g. 55 results in a 55x55 grid)');
	let repeatString = 'repeat(' + dimensions + ', 1fr)';

	grid.css({
		'grid-template-columns': repeatString,
		'grid-template-rows': repeatString
	});
	addGridDivs(dimensions * dimensions);
	setGridColors(dimensions);
}
