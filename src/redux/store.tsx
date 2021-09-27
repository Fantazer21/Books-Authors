import {combineReducers, createStore} from "redux";
import {getLocalStorage, setLocalStorage} from "../api/locStorage";
import {authorsReducer} from "./authorsReducer";
import {booksReducer} from "./booksReducer";


const rootReducer = combineReducers({
    books: booksReducer,
    authors: authorsReducer,
})

// @ts-ignore
export const store = createStore(rootReducer, getLocalStorage('Data'))

export type AppStoreType = ReturnType<typeof rootReducer>


store.subscribe(() => {
    const state = store.getState()
    setLocalStorage<AppStoreType>('Data', state)
})