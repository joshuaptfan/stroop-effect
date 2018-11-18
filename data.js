var words = {
	// Color names must correspond to color codes below
	colors:[
		'red',
		'orange',
		'yellow',
		'green',
		'cyan',
		'blue',
		'purple',
		'black'
	],
	nouns:[
		'anchor',
		'book',
		'cat',
		'dog',
		'flower',
		'goose',
		'house',
		'koala',
		'monkey',
		'pencil',
		'rock',
		'ship',
		'turtle'
	]
};

var colors = [
	'#F00',
	'#F80',
	'#ED0',
	'#0D0',
	'#0DF',
	'#05F',
	'#80F',
	'#000'
];

var test = [
	[
		{ w: 'red',     c: '#F00' },
		{ w: 'green',   c: '#0D0'},
		{ w: 'purple',  c: '#80F' },
		{ w: 'blue',    c: '#05F' },
		{ w: 'yellow',  c: '#ED0' },
		{ w: 'blue',    c: '#05F' },
		{ w: 'purple',  c: '#80F' },
		{ w: 'red',     c: '#F00' },
		{ w: 'yellow',  c: '#ED0' },
		{ w: 'green',   c: '#0D0' },
		{ w: 'blue',    c: '#05F' },
		{ w: 'purple',  c: '#80F' },
		{ w: 'green',   c: '#0D0' },
		{ w: 'yellow',  c: '#ED0' },
		{ w: 'red',     c: '#F00' }
	],
	[
		{ w: 'purple',  c: '#F00' },
		{ w: 'red',     c: '#ED0' },
		{ w: 'blue',    c: '#F00' },
		{ w: 'purple',  c: '#0D0' },
		{ w: 'blue',    c: '#ED0' },
		{ w: 'blue',    c: '#80F' },
		{ w: 'red',     c: '#05F' },
		{ w: 'green',   c: '#80F' },
		{ w: 'red',     c: '#0D0' },
		{ w: 'green',   c: '#05F' },
		{ w: 'yellow',  c: '#80F' },
		{ w: 'purple',  c: '#ED0' },
		{ w: 'yellow',  c: '#05F' },
		{ w: 'green',   c: '#F00' },
		{ w: 'yellow',  c: '#0D0' }
	],
	[
		{ w: 'parrot',  c: '#F00' },
		{ w: 'bed',     c: '#ED0' },
		{ w: 'shoe',    c: '#F00' },
		{ w: 'flower',  c: '#0D0' },
		{ w: 'coat',    c: '#80F' },
		{ w: 'book',    c: '#ED0' },
		{ w: 'ship',    c: '#05F' },
		{ w: 'purse',   c: '#80F' },
		{ w: 'cat',     c: '#0D0' },
		{ w: 'sheet',   c: '#05F' },
		{ w: 'pencil',  c: '#80F' },
		{ w: 'turtle',  c: '#ED0' },
		{ w: 'ceiling', c: '#05F' },
		{ w: 'beach',   c: '#F00' },
		{ w: 'monkey',  c: '#80F' }
	]
];
