import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
		},
	},
	paper: {
		padding: theme.spacing(2),
	},
	form: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	fileInput: {
		width: '90%',
		margin: '10px 0',
	},
	btnCancel: {
		marginTop: 10,
		marginBottom: 10,
		background: 'transparent',
		backgroundColor: '#ff8a83',
	},
	btnPost: {
		marginTop: 10,
		marginBottom: 10,
		color: 'white',
		background: 'transparent',
		backgroundColor: '#2e7d34',
	},
	buttons: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '1rem',
	},
}));
