import axios from 'axios';

const GOT_CANDIES = 'GOT_CANDIES';

const gotCandies = candies => ({
  type: GOT_CANDIES,
  candies,
});

export const getCandies = () => {
  return async dispatch => {
    const { data } = await axios.get('/candies');
    dispatch(gotCandies(data));
  };
};

const initialState = { candies: [] };

const candiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
};

export default candiesReducer;
