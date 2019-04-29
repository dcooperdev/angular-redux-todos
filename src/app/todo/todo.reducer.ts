import * as actions from './todo.actions';
import { Todo } from './model/todo.model';

const a = new Todo('Matar a Bruno');
const b = new Todo('Conquistar el mundo');
const c = new Todo('Ser la única forma de vida inteligente');

a.completed = true;

const initialState: Todo[] = [ a, b, c ];

export function todoReducer( state = initialState, action: actions.Actions ): Todo[] {
    switch ( action.type ) {
        case actions.ADD_TODO:
          const todo = new Todo( action.text );
          return [ ...state, todo ];

        case actions.TOGGLE_TODO:
          return state.map( todoEdit => {
            if ( todoEdit.id === action.id ) {
              return {
                ...todoEdit,
                completed: !todoEdit.completed
              };
            } else {
              return todoEdit;
            }
          });

        case actions.TOGGLEALL_TODOS:
          return state.map( todoEdit => {

            return {
              ...todoEdit,
              completed: action.completed
            };

          });

        case actions.EDIT_TODO:
          return state.map( todoEdit => {
            if ( todoEdit.id === action.id ) {
              return {
                ...todoEdit,
                text: action.text
              };
            } else {
              return todoEdit;
            }
          });

        default:
            return state;
    }
}
