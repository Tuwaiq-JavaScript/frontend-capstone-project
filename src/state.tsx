
function dd() {
    return (<></>);
}

export default dd;

// import { useSelector } from "react-redux";
// import { initialUsers } from "./data/user";


// interface AppState {
//     userId: string | null,
//     userName: string,
//     email: string,
//     password: string,
//     major: string,
//     jobField: string,
//     avatar: string,
//     city: string,
//     following: [];
//     followers: [];
//     posts: [],
//     skills: [],
//     experiences: [],
//     educations: [],
//     certificates: []
// }
// interface IAction<X> {
//     type: 'ADD_USER' | 'UPDATE_USER' | 'DELETE_USER';
//     payload: X;
// }


// const initialState: AppState = {
//     users: initialUsers,
// }

// // Reducer
// function stateReducer(oldState: AppState = initialState, action: IAction<any>): AppState {
//     const newState = cloneDeep(oldState);

//     switch (action.type) {
//         case 'ADD_USER':
//             newState.users.push(action.payload);
//             return newState;
//     }
// }

// function cloneDeep(oldState: AppState) {
//     throw new Error("Function not implemented.");
// }

// // Actions
// export function addUser(user: User): IAction<User> {
//     return {
//         type: 'ADD_USER',
//         payload: user,
//     };
// }



// /// Selector


// export function useUserId(): string | null {
//     const userId = useSelector<AppState, string | null>((state) => state.userId);
//     return userId;
// }
// export function userName(): string {
//     return useSelector<AppState, string>((state) => state.userName);
// }
// export function useFollowing(): following[] {
//     const following = useSelector<AppState, following[]>((state: any) => state.following);
//     return following;
// }


