const initialState = {
  users: [],
  user: {
    name: '',
    email: '',
    company: {
      name: ''
    },
    editing: false
  }
};

const SET_USERS   = 'SET_USERS';

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USERS:
      return { 
        ...state, 
        users: action.payload
      };
    default:
      return state;
  }
}

export default usersReducer; 

export const fetchUsers = () => {
  return dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(results => { 
        dispatch(setUsers(results));
      });
  };
}

export const setUsers = users => {
  return {type: SET_USERS, payload: users};
}
