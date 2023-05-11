import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, GET_All_FAV } from "./actions";

const initialState =  {
    myFavorites:[],
    allCharacters:[]
}

export const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case ADD_FAV: return {
            ...state,
            allCharacters: [...state.allCharacters,action.payload]
        }
        case REMOVE_FAV: return {
            ...state,
            allCharacters: state.allCharacters.filter(
                (character)=>character.id !== Number(action.payload)
                )
        }
        case FILTER: return {
            ...state,
            allCharacters: [...state.allCharacters],
            myFavorites: state.allCharacters.filter(
                (character)=>character.gender === action.payload
                )
        }
        case ORDER: return {
            ...state,
            allCharacters: [...state.allCharacters],
            myFavorites: action.payload === "A" ? 
                state.allCharacters.sort(
                    (character,next)=>character.id - next.id
                ):
                state.allCharacters.sort(
                    (character,next)=> next.id - character.id
                )
            }
        case GET_All_FAV: return {
            ...state,
            myFavorites: [...state.allCharacters]

        }
        default: return {
            ...state
        }
    }
}
