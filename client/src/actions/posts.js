import * as actionTypes from '../constants/actionTypes';
import * as api from '../api/index.js';
import { toast } from 'react-toastify';

// Custom error handler function
const handleErrors = (error) => {
	console.log(error.message);
	// TODO: Remember to add more error handling options
	toast.error('An error occurred');
};

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		dispatch({ type: actionTypes.FETCH_ALL, payload: data });
	} catch (error) {
		handleErrors(error);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		dispatch({ type: actionTypes.CREATE, payload: data });
	} catch (error) {
		handleErrors(error);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);
		dispatch({ type: actionTypes.UPDATE, payload: data });
	} catch (error) {
		handleErrors(error);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);
		dispatch({ type: actionTypes.LIKE, payload: data });
	} catch (error) {
		handleErrors(error);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);
		dispatch({ type: actionTypes.DELETE, payload: id });
	} catch (error) {
		handleErrors(error);
	}
};
