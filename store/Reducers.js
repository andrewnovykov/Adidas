import ACTIONS from "./Actions"

const reducers = (state, action) => {
    switch (action.type) {
      case ACTIONS.NOTIFY:
        return {
          ...state,
          notify: action.payload,
        };
        break;

      case ACTIONS.AUTH:
        return {
          ...state,
          auth: action.payload,
        };
        break;

      default:
        return state
        break;
    }
}

export default reducers