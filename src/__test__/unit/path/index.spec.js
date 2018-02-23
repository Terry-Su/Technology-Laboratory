const PATH = require( 'path' )


const  customFilePath = PATH.resolve( __dirname, './data/customFile.js' )
const  customFileDirectoryPath = PATH.resolve( __dirname, './data' )
const  customFolderPath = PATH.resolve( __dirname, './data/customFolder' )

const baseNameOfCustomFilePath = PATH.basename( customFilePath )
const baseNameOfCustomFolderPath = PATH.basename( customFolderPath )

const directoryNameOfCustomFilePath = PATH.dirname( customFilePath )


describe(`Path: `, function () {
	it(`Custom file's \`basename\` is 'customFile.js'`, function () {
		expect( baseNameOfCustomFilePath ).toBe( 'customFile.js' )
	})
	it(`Custom folder's \`basename\` is 'customFolder'`, function () {
		expect( baseNameOfCustomFolderPath ).toBe( 'customFolder' )
	})
	it(`Custom file's \`dirname\` is \`customFileDirectoryPath\``, function () {
		expect( directoryNameOfCustomFilePath ).toBe( customFileDirectoryPath )
	})
})

