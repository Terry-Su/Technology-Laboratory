var Ajv = require('ajv')
var ajv = new Ajv()


const schema = {
	type: 'object',
	patternProperties: {
		'.*': {
			type: 'number'
		}
	}
}

const data1 = {
	random: 123
}

const data2 = {
	random: 'string'
}

const isValid1 = ajv.validate( schema, data1 )
const isValid2 = ajv.validate( schema, data2 )

console.log( isValid1, isValid2 )
