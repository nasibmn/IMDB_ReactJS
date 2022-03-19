const initialState = {};

const displayCard = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "IN_VALUE":
      state = { ...state, payload };
    case "GET_CARD":
      state = { ...state, payload };
  }
  return state;
};

export default displayCard;
