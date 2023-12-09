import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice is a piece of state in our app
// note: Slice automatically creates reducers & action types
const songsSlice = createSlice({
  name: "song",
  initialState: [],
  // reducer fn is to update & manage current piece of state in our store object
  // 'song' is the reducer name & addSong is an individual reducer/action creator fn
  reducers: {
    // Action Creators are automatically created for related reduces with same names
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

// Root store with multiple pieces of state (slices) for the whole app
const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

// Root store object
console.log("Store", store);

// using Store object's function to access store state
const startingState = store.getState();
console.log("starting state:", startingState);

// Dispatch function is to modify/update related piece of state in the Reducer
// The Action creator is a function dispatches Dispatch fn that returns an Action object of type & payload
// console.log("action creators", songsSlice.actions);
// console.log("action creators", songsSlice.actions.addSong("some payload!")); // {type: 'song/addSong', payload: }

// note: using Store object's function to dispatch action object
// note: dispatch 'addSong' action creator for the 'song' reducer
// Action payload will be added in the addSong Reducer to update the current state
store.dispatch(
  // {
  // note: manual way by passing type and payload by ourself
  // note: type value must be same as in the reducer
  // type: "song/addSong",
  // payload: "New Song!",
  // }

  // rtk way of dispatching action
  songsSlice.actions.addSong("RTK payload")
);

// final state
const finalState = store.getState();
// console.log("current store:", JSON.stringify(finalState));
console.log("current store:", finalState);

export { store, songsSlice };

// note: we have exported the whole 'songsSlice' above to get access into Action Creators
// This is the common way in RTK to do the same thing
export const { addSong, removeSong } = songsSlice.actions;
