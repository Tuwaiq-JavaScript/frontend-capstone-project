import { cloneDeep } from "lodash";
import { useImperativeHandle } from "react";
import { composeWithDevTools } from 'redux-devtools-extension';
import { ReactReduxContext, useSelector } from "react-redux";
import { createStore, combineReducers } from "redux";
import { IPost, posts } from "./data";



//types
interface AppState{
    userid: string|null;
    posts:IPost[];
}


interface IAction<x>{
  type:'ADD_POST'|'DELETE_POST'|'UPDATE_POST';
  payload:x;
}

  const initialState :AppState={
    userid:null,
    posts:posts,
  }

function stateReducer(oldstate:AppState= initialState,action:IAction<IPost>):AppState{
    const newState=cloneDeep(oldstate);

switch(action.type){

    case 'ADD_POST':
    newState.posts.push(action.payload)
    return newState;

    case 'DELETE_POST':
        newState.posts=newState.posts.filter((p) =>p.id !== action.payload.id);
        return newState;
    

    case 'UPDATE_POST':
        const index=oldstate.posts.findIndex((p) =>p.id !== action.payload.id);
        if (index === -1) return oldstate;
        newState.posts[index]=action.payload;
        return  newState;
        default:
            return oldstate;
        }   
}


// selector
export function usePost():IPost[] {
    const posts =useSelector<AppState,IPost[]>((state)=>state.posts);
    return posts;
    
}

export function useUserId ():string|null {
    const userid =useSelector<AppState,string|null>((state)=>state.userid);
    return userid;    
}


//STORE
export const store =createStore(stateReducer, composeWithDevTools());

