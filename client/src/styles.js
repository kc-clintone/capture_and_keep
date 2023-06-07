import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	appBar: {
		borderRadius: 8,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '30px',
		padding: '0 3rem',
	},
	heading: {
		color: 'rgba(0,183,255, 1)',
	},
	logo: {
		margin: '8px 0',
	},
	modal: {
		marginTop: '5rem',
		justifySelf: 'center',
	},
	postBtn: {
		backgroundColor: '#2196f3',
		color: 'white',
	},
	close: {
		backgroundColor: '#e57373',
		color: 'white',
		marginRight: '0',
	},
	main: {
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
}));
