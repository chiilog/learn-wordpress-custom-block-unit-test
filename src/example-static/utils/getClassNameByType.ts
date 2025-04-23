interface GetClassNameByTypeProps {
	type?: 'warning' | 'info' | 'success' | 'error';
}

export default function getClassNameByType( {
	type,
}: GetClassNameByTypeProps ) {
	switch ( type ) {
		case 'warning':
			return 'message--warning';
		case 'info':
			return 'message--info';
		case 'success':
			return 'message--success';
		case 'error':
			return 'message--error';
		default:
			return 'message--neutral';
	}
}
