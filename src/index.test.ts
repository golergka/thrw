import { thrw } from '.'

describe('thrw', () => {
	it('throws error based on provided string', () => {
		expect(() => thrw('error')).toThrowError('error')
	})

	it('throws provided error', () => {
		expect(() => thrw(new Error('error'))).toThrowError('error')
	})
})
