/**
 * reducer for updating companies in store
 */
import axios from 'axios';
// Action Types
const COMPANIES = 'COMPANIES';

//Initial State
const init = [];

// Action Creators
export const companies = (companies) => ({type: COMPANIES, companies});

// Thunk middleware
export const getCompanies = (param) =>
  dispatch => {
    axios.get('/api/companies')
    .then(res => dispatch(companies(res.data)))
    .catch(err => console.log(err))
  }

// Reducer
export default function(state = init, action){
  switch (action.type) {
    case COMPANIES:
      return action.companies;
    default: return state;
  }
}
