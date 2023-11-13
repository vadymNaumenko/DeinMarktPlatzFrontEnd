import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
// eslint-disable-next-line
import usersReducer from '../features/users/userSlice';
import postsReducer from '../features/posts/PostSlice';
// eslint-disable-next-line import/no-extraneous-dependencies
// import {reducer as formReducer} from 'redux-form';

export const store = configureStore({
	reducer: {
		products: productsReducer,
		users: usersReducer,
		posts: postsReducer,
		// form: formReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
