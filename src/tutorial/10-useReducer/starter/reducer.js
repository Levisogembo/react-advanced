import { CLEAR_LIST, REMOVE_LIST, RESET_LIST } from './actions';
import { data } from '../../../data';

const reducer = (state, action) => {
    if (action.type === CLEAR_LIST) {
        return { ...state, people: [] }
    }
    if (action.type === RESET_LIST) {
        return { ...state, people: data }
    }
    if (action.type === REMOVE_LIST) {
        let id = action.payload.id
        let newPeople = state.people.filter((person) => person.id !== id)
        //console.log(state);
        return { ...state, people: newPeople }

    }
    //return state
    throw new Error(`No matching "${action.type}" - action type`)
}

export default reducer