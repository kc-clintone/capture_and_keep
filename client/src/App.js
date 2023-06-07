import React, { useState, useEffect } from 'react';
import {
	Container,
	AppBar,
	Grow,
	Grid,
	Modal,
	Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import memories from './images/memories.png';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';

const App = () => {
	const [currentId, setCurrentId] = useState(0);
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	const [isOpen, setIsOpen] = useState(false);

	const openModal = async () => {
		await setIsOpen(true);
		console.log('clicked');
	};

	const closeModal = async () => {
		await setIsOpen(false);
		console.log('clicked close');
	};

	return (
		<Container maxWidth='lg'>
			<AppBar className={classes.appBar} position='sticky' color='inherit'>
				<img
					className={classes.logo}
					height={40}
					src={memories}
					align='center'
					alt='logo'
				/>
				<Button
					className={classes.postBtn}
					color='primary'
					onClick={() => openModal()}
				>
					Post
				</Button>
			</AppBar>
			<div className={classes.main}>
				<Grid item xs={10} sm={6}>
					<Posts setCurrentId={setCurrentId} />
				</Grid>
			</div>
			<Modal
				align='center'
				className={classes.modal}
				open={isOpen}
				children={
					<Grid item xs={12} sm={4}>
						<Button
							color='secondary'
							className={classes.close}
							onClick={() => closeModal()}
						>
							Close
						</Button>
						<Form currentId={currentId} setCurrentId={setCurrentId} />
					</Grid>
				}
			/>
		</Container>
	);
};

export default App;
