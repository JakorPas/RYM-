import { ADD_FAV, REMOVE_FAV } from "./actions";


const initialState = { favoritos: {} }
const rootreducer = (state = initialState, action) => {
    switch (action.type) {


        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: payload };
        default:
            return {
                ...state
            }
    }

}