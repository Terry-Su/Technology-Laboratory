const inquirer = require( 'inquirer' )

let choices = [
	'folder1',
	'folder2',
	'folder1',
	'folder2',
	'folder1',
	'folder2',
	'folder1',
	'folder2',
	'folder1',
	'folder2',
	'folder1',
	'folder2',
	'folder1',
	'folder2',
	'folder1',
	'folder2',
	'folder1',
	'folder2',
]

const promptOption = {
	type: 'checkbox',
	name: 'name',
	message: 'Select folder',
	paginated: true,
	choices
}



inquirer.prompt(promptOption).ui.process.subscribe(
	() => {
		console.log( 'onEachAnswer' )
	},
	() => {
		console.log( 'onError' )
	},
	() => {
		console.log( 'onComplete' )
	}
  );

