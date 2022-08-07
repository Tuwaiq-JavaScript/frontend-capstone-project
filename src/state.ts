import { Comment, Post } from '@prisma/client';
import { cloneDeep } from 'lodash';
import { useSelector } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialPosts } from '../src/data/DataPosts';

interface AppState {
	userId: string | null;
	posts: Post[];
	comments: Comment[];
	lastMovedDate: Date;
}
interface IAction<X> {
	type: 'ADD_POST' |  'UPDATE_POST' | 'USER_MOVED' | 'ADD_COMMENT';
	payload: X;
}

const initialState: AppState = {
	userId: null,
	posts: initialPosts,
	comments: [],
	lastMovedDate: new Date(),
};

function stateReducer(oldState: AppState = initialState, action: IAction<any>): AppState {
	const newState = cloneDeep(oldState);

	switch (action.type) {
		case 'USER_MOVED':
			newState.lastMovedDate = new Date();
			return newState;
		case 'ADD_POST':
			newState.posts.push(action.payload);
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

export function userMoved(): IAction<null> {
	return {
		type: 'USER_MOVED',
		payload: null,
	};
}

export function addPost(post: Post): IAction<Post> {
	return {
		type: 'ADD_POST',
		payload: post,
	};
}

export function updatePost(post: Post): IAction<Post> {
	return {
		type: 'UPDATE_POST',
		payload: post,
	};
}

export function addComment(comment: Comment): IAction<Comment> {
	return {
		type: 'ADD_COMMENT',
		payload: comment,
	};
}

export function usePosts(): Post[] {
	return useSelector<AppState, Post[]>((state) => state.posts);
}

export function useUserId(): string | null {
	return useSelector<AppState, string | null>((state) => state.userId);
}

export function usePostComments(postId: string): Comment[] {
	return useSelector<AppState, Comment[]>((state) => {
		return state.comments.filter((comment) => comment.post_id === postId);
	});
}

/// Store

const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, stateReducer);

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);