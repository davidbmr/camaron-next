export const dispatchEdit = (dispatch, functionToDispatch, data, id, token) => {
	dispatch(functionToDispatch(data, id, token));
};
