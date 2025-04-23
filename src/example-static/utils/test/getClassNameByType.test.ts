import getClassNameByType from '../getClassNameByType';

describe( 'getClassNameByType', () => {
	it.each( [
		[ 'warning', 'message--warning' ],
		[ 'info', 'message--info' ],
		[ 'success', 'message--success' ],
		[ 'error', 'message--error' ],
		[ undefined, 'message--neutral' ],
	] )( 'should return the correct class name for %s', ( type, expected ) => {
		expect(
			getClassNameByType( {
				type: type as
					| 'warning'
					| 'info'
					| 'success'
					| 'error'
					| undefined,
			} )
		).toBe( expected );
	} );
} );
