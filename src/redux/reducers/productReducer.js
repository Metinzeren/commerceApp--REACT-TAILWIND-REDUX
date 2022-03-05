import { ActionTypes } from "../actions/actionTypes";

const INITIAL_STATE = {
  products: [],
  productLoading: false,
  basketList: [],
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case ActionTypes.LOADING_PRODUCTS: {
      return {
        ...state,
        productLoading: action.payload,
      };
    }
    case ActionTypes.ADD_BASKET: {
      return {
        ...state,
        basketList:
          state.basketList.find((x) => x.ID === action.payload.ID) !== undefined
            ? state.basketList.map((y) =>
                y.ID === action.payload.ID ? { ...y, adet: y.adet + 1 } : y
              )
            : [...state.basketList, action.payload],
      };
    }
    case ActionTypes.DELETE_BASKET: {
      return {
        ...state,
        basketList: state.basketList.filter((a) => a.ID !== action.payload),
      };
    }
    case ActionTypes.UPDATE_BASKETPRODUCT: {
        let adet = state.basketList.find((x) => x.ID === action.payload.urunID); 
      return {
        ...state,
        basketList:
          action.payload.islem === "Arttir"
            ? adet !==
                undefined &&
              state.basketList.map((y) =>
                y.ID === action.payload.urunID ? { ...y, adet: y.adet + 1 } : y
              )
            : adet !==
                undefined &&
             adet.adet -1 === 0 ? state.basketList.filter((c)=>c.ID !== action.payload.urunID)
             :  state.basketList.map((y) =>
             y.ID === action.payload.urunID ? { ...y, adet: y.adet - 1 } : y
           )
      };
    }

    default:
      return state;
  }
};
