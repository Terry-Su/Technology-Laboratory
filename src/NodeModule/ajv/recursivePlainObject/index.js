var Ajv = require('ajv')
var ajv = new Ajv()


const schema = {
	type: 'object',
	properties: {
		num: {
			type: 'number'
		},
		children: {
			'$ref': '#'
		}
	}
}

const data1 = {
	num: 123,
	children: {
		num: 123
	}
}

const data2 = {
	num: 123,
	children: {
		num: '123'
	}
}

const isValid1 = ajv.validate( schema, data1 )
const isValid2 = ajv.validate( schema, data2 )

console.log( isValid1, isValid2 )
