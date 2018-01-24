import { LIKE_SHOP, DISLIKE_SHOP } from "./actionTypes";

const initialState = {
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
      case LIKE_SHOP: {
        return {
            ...state,
            data: state.data.map(shop => {
                if (shop.id == action.id)
                    shop.like = true
                return shop;
            })
        }
        break;
      }
      case DISLIKE_SHOP: {
        return {
            ...state,
            data: state.data.map(shop => {
                if (shop.id == action.id)
                    shop.like = false
                return shop;
            })
        }
        break;
      }
      


      default:
        return state;
        break;
    }
}