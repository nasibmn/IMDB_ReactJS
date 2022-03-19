export const initialValue = (card) => {
  return {
    type: "IN_VALUE",
    payload: card,
  };
};

export const getCard = (card) => {
  return {
    type: "GET_CARD",
    payload: card,
  };
};
