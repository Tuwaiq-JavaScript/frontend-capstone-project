import { IPost, initialPosts } from './data/post/postdata';
import { cloneDeep } from 'lodash';
import { useSelector } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { IComment } from './components/Home/Post';

import storage from 'redux-persist/lib/storage';
interface AppState {
	userId: string | null;
	posts: IPost[];
	comments: IComment[];
}
interface IAction<X> {
	type: 'ADD_POST' | 'DELETE_POST' | 'UPDATE_POST' | 'USER_MOVED' | 'ADD_COMMENT';
	payload: X;
}
const initialState: AppState = {
	userId: '123',
	posts: initialPosts,
	comments: [],
};

function stateReducer(oldState: AppState = initialState, action: IAction<any>): AppState {
	const newState = cloneDeep(oldState);

	switch (action.type) {
		case 'ADD_POST':
			newState.posts.push(action.payload);
			return newState;
		case 'DELETE_POST':
			newState.posts = newState.posts.filter((p) => p.id !== action.payload.id);
			return newState;
		case 'UPDATE_POST':
			const index = oldState.posts.findIndex((p) => p.id === action.payload.id);
			if (index === -1) return oldState;
			newState.posts[index] = action.payload;
			return newState;
		case 'ADD_COMMENT':
			newState.comments.push(action.payload);
			return newState;
		default:
			return oldState;
	}
}

export function addPost(post: IPost): IAction<IPost> {
	return {
		type: 'ADD_POST',
		payload: post,
	};
}
export function deletePost(post: IPost): IAction<IPost> {
	return {
		type: 'DELETE_POST',
		payload: post,
	};
}
export function updatePost(post: IPost): IAction<IPost> {
	return {
		type: 'UPDATE_POST',
		payload: post,
	};
}
export function addComment(comment: IComment): IAction<IComment> {
	return {
		type: 'ADD_COMMENT',
		payload: comment,
	};
}

/// Selector
export function usePosts(): IPost[] {
	const posts = useSelector<AppState, IPost[]>((state) => state.posts);
	return posts;
}

export function useUserId(): string | null {
	const userId = useSelector<AppState, string | null>((state) => state.userId);
	return userId;
}
export function usePostComments(postId: string): IComment[] {
	return useSelector<AppState, IComment[]>((state) => state.comments.filter((c) => c.postId === postId));
}

/// Store

const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, stateReducer);

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
