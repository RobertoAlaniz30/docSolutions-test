const ACTIONS = {
  USER_LOGIN: "USER_LOGIN",
};

export function USER_REDUCER(state, actions) {
  const { type, payload } = actions;
  switch (type) {
    case ACTIONS.USER_LOGIN:
      return {
        ...state,
        token: payload,
      };
  }
}
